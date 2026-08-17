const observer = new MutationObserver(() => {
    const shorts = document.querySelectorAll('ytd-rich-section-renderer, ytd-reel-shelf-renderer, ytd-guide-entry-renderer a[title="Shorts"]');
    shorts.forEach(el => {
        if (el.style.display !== 'none') {
            el.style.display = 'none';
        }
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});