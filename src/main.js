import { inject } from '@vercel/analytics';
import { initShareButtons } from './share.js';

// Initialize Vercel Web Analytics
inject();

// Initialize share buttons
initShareButtons();

function randomizeIssueCandidateGrids() {
  document.querySelectorAll('.issue-candidate-grid').forEach((grid) => {
    const children = Array.from(grid.children);
    const visibleCards = children.filter((child) => getComputedStyle(child).display !== 'none');

    if (visibleCards.length < 2) return;

    const orderedCards = [...visibleCards];
    for (let i = orderedCards.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [orderedCards[i], orderedCards[j]] = [orderedCards[j], orderedCards[i]];
    }

    orderedCards.forEach((card) => grid.appendChild(card));
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', randomizeIssueCandidateGrids);
} else {
  randomizeIssueCandidateGrids();
}
