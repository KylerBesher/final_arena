// Suppress React warnings
const originalConsoleError = console.error;
console.error = (...args) => {
  if (args[0]?.includes('Warning: ')) return;
  originalConsoleError(...args);
};

import CMS from 'decap-cms-app';
import config from './config';
import PagePreview from './preview-templates/PagePreview';

// Suppress React 18 warnings in development
window.__webpack_public_path__ = window.location.origin + '/';
window.global = window;

// Initialize CMS
window.CMS_MANUAL_INIT = true;

// Register preview templates
CMS.registerPreviewTemplate('pages', PagePreview);

// Initialize with config
CMS.init({ config });

