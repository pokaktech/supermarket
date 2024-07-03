// util.js
export function getCsrfToken() {
    const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    if (!token) {
        console.error("CSRF token not found in the document");
    }
    return token;
}

  