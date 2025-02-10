'use client';

import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { Fragment, useState, useRef, useEffect } from 'react';

import siteConfig from '../content/settings/site.json';
import { useDarkMode } from '../lib/theme/DarkModeContext';
import navData from '../public/nav.json';

import { DarkModeToggle } from './DarkModeToggle';

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
                as={Fragment}
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
    const { isDarkMode } = useDarkMode();
    const { navigation } = siteConfig;
    const colors = isDarkMode
        ? navigation.colors.darkMode
        : navigation.colors.lightMode;

    return (
        <header
            style={{
                height: `${navigation.layout.height}px`,
                backgroundColor: colors.nav.background,
                position: navigation.layout.position,
            }}
            className="w-full transition-colors duration-200"
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
                        <DarkModeToggle />
                    </div>
                </div>
            </div>
        </header>
    );
}
