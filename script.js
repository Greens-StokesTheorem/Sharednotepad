document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("notepad");

    // Load saved text from localStorage
    textarea.value = localStorage.getItem("sharedText") || "";

    // Save text to localStorage on input
    textarea.addEventListener("input", () => {
        localStorage.setItem("sharedText", textarea.value);
    });
});


// git add --all
// git commit -a -m "Updated files"