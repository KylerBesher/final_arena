"use client"; // Ensure this runs on the client side

import { useEffect } from "react";
import dynamic from "next/dynamic";
import CMS from 'decap-cms-app';
import { ScrollSyncProvider } from 'react-scroll-sync';
import React from 'react';

// Import the JavaScript-based DecapCMS config
import decapConfig from "./decap.config";

// Create a context for scroll sync
const ScrollContext = React.createContext();

// Create a modern wrapper component
const ModernScrollSync = ({ children }) => {
    return (
        <ScrollContext.Provider value={{}}>
            {children}
        </ScrollContext.Provider>
    );
};

// Override the default ScrollSync
window.ScrollSyncPane = ModernScrollSync;

export default function Admin() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            // Pass the config directly to init
            // CMS.init(
            //  { config: decapConfig }
            // );
        }
    }, []);

    return (
        <ModernScrollSync>
            <div />
        </ModernScrollSync>
    );
}