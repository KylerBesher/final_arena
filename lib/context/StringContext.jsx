'use client';

import React, { createContext, useContext } from 'react';

import siteConfig from '../../public/admin/settings/site.json';
import { replaceTemplateStrings } from '../constants';

const StringContext = createContext();

export function StringProvider({ children }) {
    const strings = {
        ...siteConfig.strings,
        // Add any dynamic strings or computed values here
        copyright: replaceTemplateStrings(siteConfig.strings.footer.copyright, {
            year: new Date().getFullYear(),
        }),
    };

    return (
        <StringContext.Provider value={strings}>
            {children}
        </StringContext.Provider>
    );
}

export function useStrings() {
    const context = useContext(StringContext);
    if (context === undefined) {
        throw new Error('useStrings must be used within a StringProvider');
    }
    return context;
}
