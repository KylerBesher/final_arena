'use client';

import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { Fragment, useState, useRef, useEffect } from 'react';

import siteConfig from '../content/settings/site.json';
import { useDarkMode } from '../lib/theme/DarkModeContext';
import navData from '../public/nav.json';

import { DarkModeToggle } from './DarkModeToggle';
import { HamburgerMenu } from './HamburgerMenu';

function MobileMenuItem({ item, colors, level = 0, onNavigate }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const router = useRouter();

    const handleItemClick = (e) => {
        e.stopPropagation();
        if (item.href) {
            router.push(item.href);
            onNavigate();
        }
    };

    const handleExpandClick = (e) => {
        e.stopPropagation();
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="border-b border-gray-700 last:border-0">
            <div
                className="flex items-center justify-between py-2"
                style={{ paddingLeft: `${level * 16}px` }}
            >
                <span
                    onClick={handleItemClick}
                    className="cursor-pointer flex-grow"
                    style={{ color: colors.nav.text }}
                >
                    {item.title}
                </span>
                {item.children && (
                    <button onClick={handleExpandClick} className="p-2">
                        <svg
                            className={`w-4 h-4 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            style={{ color: colors.nav.text }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                )}
            </div>
            {item.children && (
                <Transition
                    show={isExpanded}
                    as="div"
                    enter="transition-all duration-300 ease-out"
                    enterFrom="opacity-0 max-h-0"
                    enterTo="opacity-100 max-h-screen"
                    leave="transition-all duration-200 ease-in"
                    leaveFrom="opacity-100 max-h-screen"
                    leaveTo="opacity-0 max-h-0"
                    className="overflow-hidden"
                >
                    {item.children.map((child) => (
                        <MobileMenuItem
                            key={child.href}
                            item={child}
                            colors={colors}
                            level={level + 1}
                            onNavigate={onNavigate}
                        />
                    ))}
                </Transition>
            )}
        </div>
    );
}

function MobileMenu({ isOpen, colors, onClose, settings }) {
    return (
        <Transition
            show={isOpen}
            as="div"
            enter="transition-all duration-300"
            enterFrom="opacity-0 -translate-y-4"
            enterTo="opacity-100 translate-y-0"
            leave="transition-all duration-300"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-4"
            className="md:hidden fixed inset-0 z-[99999]"
        >
            <div
                className="absolute inset-0 bg-black bg-opacity-50"
                onClick={onClose}
            />
            <div
                style={{ backgroundColor: colors.dropdown.background }}
                className="relative z-[99999] top-[90px] left-0 right-0 border-t shadow-lg max-h-[calc(100vh-90px)] overflow-y-auto"
            >
                <div className="px-4 py-2">
                    {navData.map((item) => (
                        <MobileMenuItem
                            key={item.href}
                            item={item}
                            colors={colors}
                            onNavigate={onClose}
                        />
                    ))}
                </div>
            </div>
        </Transition>
    );
}

function NavMenu({ item, level = 0 }) {
    const [isHovered, setIsHovered] = useState(false);
    const [shouldReverseMenu, setShouldReverseMenu] = useState(false);
    const timeoutRef = useRef(null);
    const menuRef = useRef(null);
    const { isDarkMode } = useDarkMode();
    const { navigation } = siteConfig;
    const colors = isDarkMode
        ? navigation.colors.darkMode
        : navigation.colors.lightMode;

    useEffect(() => {
        if (level !== 0 && menuRef.current) {
            const checkCollision = () => {
                const rect = menuRef.current.getBoundingClientRect();
                const windowWidth = window.innerWidth;
                setShouldReverseMenu(rect.right + 50 > windowWidth);
            };

            checkCollision();
            window.addEventListener('resize', checkCollision);
            return () => window.removeEventListener('resize', checkCollision);
        }
    }, [level, isHovered]);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsHovered(false);
        }, 100);
    };

    useEffect(
        () => () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        },
        []
    );

    if (!item.children) {
        return (
            <Link
                href={item.href}
                className="block px-4 py-2 text-sm hover:opacity-80 transition-opacity"
                style={{ color: colors.nav.text }}
            >
                {item.title}
            </Link>
        );
    }

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {level === 0 ? (
                <Link
                    href={item.href || '#'}
                    className="inline-flex items-center hover:opacity-80 transition-opacity cursor-pointer"
                    style={{ color: colors.nav.text }}
                >
                    <span>{item.title}</span>
                    <svg
                        className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${isHovered ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </Link>
            ) : (
                <Link
                    href={item.href || '#'}
                    className="flex items-center justify-between w-full px-4 py-2 text-sm hover:opacity-80 transition-opacity cursor-pointer"
                    style={{ color: colors.nav.text }}
                >
                    <span>{item.title}</span>
                    <svg
                        className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${shouldReverseMenu ? 'rotate-90' : '-rotate-90'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </Link>
            )}

            {isHovered && (
                <div
                    ref={menuRef}
                    className={`
                        absolute rounded-md shadow-lg bg-white dark:bg-gray-800 z-50
                        ${
                            level === 0
                                ? 'left-0 top-full mt-0'
                                : shouldReverseMenu
                                  ? 'right-full top-0 mr-0'
                                  : 'left-full top-0 ml-0'
                        }
                    `}
                    style={{
                        backgroundColor: colors.dropdown.background,
                        width: '12rem',
                        padding: '0.5rem 0',
                        marginTop: level === 0 ? '0.5rem' : '0',
                    }}
                >
                    {level === 0 && (
                        <div className="absolute h-2 -top-2 left-0 right-0" />
                    )}
                    {level !== 0 && (
                        <div
                            className={`absolute w-2 ${shouldReverseMenu ? '-right-2' : '-left-2'} top-0 bottom-0`}
                        />
                    )}
                    <div className="py-1">
                        {item.children.map((child) => (
                            <NavMenu
                                key={child.href}
                                item={child}
                                level={level + 1}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

function NavItem({ item }) {
    const { isDarkMode } = useDarkMode();
    const { navigation } = siteConfig;
    const colors = isDarkMode
        ? navigation.colors.darkMode
        : navigation.colors.lightMode;

    return (
        <Link
            href={item.href}
            className="hover:opacity-80 transition-opacity"
            style={{ color: colors.nav.text }}
        >
            {item.title}
        </Link>
    );
}

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isDarkMode } = useDarkMode();
    const { navigation } = siteConfig;
    const colors = isDarkMode
        ? navigation.colors.darkMode
        : navigation.colors.lightMode;

    // Use navData directly instead of navigation.items
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header
                style={{
                    height: `${navigation.layout.height}px`,
                    backgroundColor: colors.nav.background,
                }}
                className="fixed top-0 left-0 right-0 w-full transition-colors duration-200 z-50"
            >
                <div
                    className="mx-auto h-full px-6 md:px-8"
                    style={{
                        maxWidth: `${navigation.layout.maxWidth}px`,
                    }}
                >
                    <div className="flex items-center justify-between h-full">
                        <Link
                            href="/"
                            className="font-bold text-xl"
                            style={{ color: colors.nav.text }}
                        >
                            {siteConfig.branding.name}
                        </Link>
                        <div className="flex items-center space-x-4">
                            <nav className="hidden md:flex items-center space-x-4">
                                {navData.map((item) => (
                                    <NavMenu key={item.href} item={item} />
                                ))}
                            </nav>
                            <div className="flex items-center space-x-4">
                                <DarkModeToggle />
                                <button
                                    onClick={() =>
                                        setIsMobileMenuOpen(!isMobileMenuOpen)
                                    }
                                    className="relative w-6 h-6 flex flex-col justify-between md:hidden"
                                    style={{ color: colors.nav.text }}
                                    aria-label={
                                        isMobileMenuOpen
                                            ? 'Close menu'
                                            : 'Open menu'
                                    }
                                >
                                    <div className="mr-2">
                                        <HamburgerMenu
                                            isOpen={isMobileMenuOpen}
                                            style={
                                                navigation.mobile?.hamburger ||
                                                'spin'
                                            }
                                        />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div style={{ height: `${navigation.layout.height}px` }} />
            <MobileMenu
                isOpen={isMobileMenuOpen}
                colors={colors}
                onClose={closeMobileMenu}
                settings={navigation.mobile}
            />
        </>
    );
}
