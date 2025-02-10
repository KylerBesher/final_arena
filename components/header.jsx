'use client';

import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { Fragment, useState, useRef, useEffect } from 'react';

import siteConfig from '../content/settings/site.json';
import { useDarkMode } from '../lib/theme/DarkModeContext';
import navData from '../public/nav.json';

import { DarkModeToggle } from './DarkModeToggle';

function HamburgerIcon({ isOpen }) {
    return (
        <div className="w-6 h-6 flex flex-col justify-around md:hidden">
            <span
                className={`block h-0.5 w-full bg-current transform transition-all duration-300 ease-out
                ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}
            />
            <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 ease-out
                ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
                className={`block h-0.5 w-full bg-current transform transition-all duration-300 ease-out
                ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}
            />
        </div>
    );
}

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

function MobileMenu({ isOpen, colors, onClose }) {
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

function NavMenu({ item, isSubmenu = false, level = 0 }) {
    const [isOpen, setIsOpen] = useState(false);
    const [shouldReverseMenu, setShouldReverseMenu] = useState(false);
    const menuRef = useRef(null);
    const router = useRouter();
    const { isDarkMode } = useDarkMode();
    const { navigation } = siteConfig;
    const colors = isDarkMode
        ? navigation.colors.darkMode
        : navigation.colors.lightMode;

    useEffect(() => {
        if (isSubmenu && menuRef.current) {
            const rect = menuRef.current.getBoundingClientRect();
            const windowWidth = window.innerWidth;
            if (rect.right + navigation.dropdowns.width > windowWidth) {
                setShouldReverseMenu(true);
            }
        }
    }, [isSubmenu, navigation.dropdowns.width]);

    const handleClick = (e) => {
        if (item.href) {
            e.preventDefault();
            router.push(item.href);
        }
    };

    const buttonContent = (
        <>
            {shouldReverseMenu &&
                isSubmenu &&
                navigation.dropdowns.appearance.indicators !== 'none' && (
                    <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                )}
            {item.title}
            {!shouldReverseMenu &&
                item.children &&
                navigation.dropdowns.appearance.indicators !== 'none' && (
                    <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isSubmenu ? 'M9 5l7 7-7 7' : 'M19 9l-7 7-7-7'}
                        />
                    </svg>
                )}
        </>
    );

    if (!item.children) {
        return (
            <Link
                href={item.href}
                style={{
                    color: colors.nav.text,
                    padding: `${navigation.dropdowns.spacing.itemPadding}px`,
                }}
                className="inline-flex w-full items-center justify-between transition-colors"
            >
                {buttonContent}
            </Link>
        );
    }

    return (
        <Menu
            as="div"
            className={`relative ${isSubmenu ? 'w-full' : 'inline-block'}`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            ref={menuRef}
        >
            <Menu.Button
                onClick={handleClick}
                style={{
                    color: colors.nav.text,
                    padding: `${navigation.dropdowns.spacing.itemPadding}px`,
                }}
                className={`
                    inline-flex w-full items-center justify-between transition-colors
                    ${item.href ? 'cursor-pointer' : ''}
                `}
            >
                {buttonContent}
            </Menu.Button>

            <Transition
                show={isOpen}
                as="div"
                enter={`transition duration-${navigation.animation.transitions.duration}`}
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave={`transition duration-${navigation.animation.transitions.duration}`}
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    static
                    style={{
                        width: `${navigation.dropdowns.width}px`,
                        backgroundColor: colors.dropdown.background,
                        borderRadius: `${navigation.dropdowns.appearance.borderRadius}px`,
                        borderColor: colors.dropdown.border,
                        boxShadow:
                            navigation.dropdowns.appearance.shadow !== 'none'
                                ? `var(--shadow-${navigation.dropdowns.appearance.shadow})`
                                : 'none',
                    }}
                    className={`
                        absolute z-50 border focus:outline-none
                        ${
                            isSubmenu
                                ? shouldReverseMenu
                                    ? 'right-full top-0'
                                    : 'left-full top-0'
                                : 'left-0 top-full'
                        }
                        ${shouldReverseMenu ? 'origin-right' : 'origin-left'}
                    `}
                >
                    <div
                        style={{
                            padding: `${navigation.dropdowns.spacing.itemPadding}px`,
                        }}
                    >
                        {item.children.map((child, index) => (
                            <Menu.Item key={child.href}>
                                {({ active }) => (
                                    <div
                                        className={
                                            navigation.dropdowns.appearance
                                                .dividers &&
                                            index !== item.children.length - 1
                                                ? `border-b border-${colors.dropdown.divider}`
                                                : ''
                                        }
                                    >
                                        <NavMenu
                                            item={child}
                                            isSubmenu
                                            level={level + 1}
                                        />
                                    </div>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}

function NavItem({ item }) {
    return <NavMenu item={item} />;
}

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isDarkMode } = useDarkMode();
    const { navigation } = siteConfig;
    const colors = isDarkMode
        ? navigation.colors.darkMode
        : navigation.colors.lightMode;

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
                    style={{
                        maxWidth: `${navigation.layout.maxWidth}px`,
                        padding: `0 ${navigation.layout.containerPadding}px`,
                    }}
                    className="mx-auto h-full"
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
                                    <NavItem key={item.href} item={item} />
                                ))}
                            </nav>
                            <div className="flex items-center space-x-4">
                                <DarkModeToggle />
                                <button
                                    onClick={() =>
                                        setIsMobileMenuOpen(!isMobileMenuOpen)
                                    }
                                    className="md:hidden"
                                    style={{ color: colors.nav.text }}
                                >
                                    <HamburgerIcon isOpen={isMobileMenuOpen} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu
                isOpen={isMobileMenuOpen}
                colors={colors}
                onClose={closeMobileMenu}
            />
            <div style={{ height: `${navigation.layout.height}px` }} />
        </>
    );
}
