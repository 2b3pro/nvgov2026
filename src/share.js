export function initShareButtons() {
    const shareContainer = document.getElementById('share-section');
    if (!shareContainer) return;

    const currentUrl = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);

    const shareHtml = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
      <div class="text-center">
        <h3 class="text-2xl font-bold text-nevada-navy mb-6">Share this Guide</h3>
        <div class="flex flex-wrap justify-center gap-4">
          <!-- X / Twitter -->
          <a href="https://twitter.com/intent/tweet?url=${currentUrl}&text=${title}" 
             target="_blank" rel="noopener noreferrer"
             class="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:opacity-80 transition-opacity">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
            <span>Post</span>
          </a>

          <!-- Facebook -->
          <a href="https://www.facebook.com/sharer/sharer.php?u=${currentUrl}" 
             target="_blank" rel="noopener noreferrer"
             class="flex items-center gap-2 px-6 py-3 bg-[#1877F2] text-white rounded-full hover:opacity-90 transition-opacity">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
            </svg>
            <span>Share</span>
          </a>

          <!-- Email -->
          <a href="mailto:?subject=${title}&body=Check out this voter guide: ${currentUrl}" 
             class="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span>Email</span>
          </a>

          <!-- Copy Link -->
          <button id="copy-link-btn" class="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-full hover:border-nevada-navy hover:text-nevada-navy transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
            <span>Copy Link</span>
          </button>
        </div>
        <p id="copy-feedback" class="text-green-600 text-sm mt-2 opacity-0 transition-opacity">Link copied to clipboard!</p>
      </div>
    </div>
  `;

    shareContainer.innerHTML = shareHtml;

    // Add event listener for copy button
    const copyBtn = document.getElementById('copy-link-btn');
    const feedback = document.getElementById('copy-feedback');

    if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(decodeURIComponent(currentUrl));
                feedback.classList.remove('opacity-0');
                setTimeout(() => {
                    feedback.classList.add('opacity-0');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        });
    }
}
