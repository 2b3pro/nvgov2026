import { inject } from '@vercel/analytics';
import { initShareButtons } from './share.js';

// Initialize Vercel Web Analytics
inject();

// Initialize share buttons
initShareButtons();
