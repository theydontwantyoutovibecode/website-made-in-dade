/**
 * Main JavaScript
 * Add your custom JavaScript here
 */

// Example: Log when HTMX completes a request
document.body.addEventListener('htmx:afterSwap', function(event) {
    console.log('Content loaded:', event.detail.target.id);
});

// Example: Add loading indicator
document.body.addEventListener('htmx:beforeRequest', function(event) {
    event.detail.target.classList.add('loading');
});

document.body.addEventListener('htmx:afterRequest', function(event) {
    event.detail.target.classList.remove('loading');
});
