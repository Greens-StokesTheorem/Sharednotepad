import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-firestore.js";



document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("notepad");

    // Load saved text from localStorage
    textarea.value = localStorage.getItem("sharedText") || "";

    // Save text to localStorage on input
    textarea.addEventListener("input", () => {
        localStorage.setItem("sharedText", textarea.value);
    });
});





// 🔹 Replace with your Firebase project config
const firebaseConfig = {
    apiKey: "AIzaSyCsCj8bIKQnCEhQJ-59cHz4ItBb5j4usPs",
    authDomain: "sharednotepad.firebaseapp.com",
    projectId: "sharednotepad",
    storageBucket: "sharednotepad.firebasestorage.app",
    messagingSenderId: "84571842790",
    appId: "1:84571842790:web:8fe8c534fb7487ae56f327"
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔹 Reference to a shared notepad document
const docRef = doc(db, "notes", "shared-note");

const textarea = document.getElementById("notepad");

// 🔹 Load existing note from Firestore
async function loadNote() {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        textarea.value = docSnap.data().content; // Load saved text
    }
}

// 🔹 Save note to Firestore when user types
async function saveNote() {
    await setDoc(docRef, { content: textarea.value });
}

// 🔹 Sync in real-time: Update textarea when Firestore changes
onSnapshot(docRef, (docSnap) => {
    if (docSnap.exists()) {
        textarea.value = docSnap.data().content;
    }
});

// 🔹 Save on user input
textarea.addEventListener("input", saveNote);

// 🔹 Load the note when the page opens
loadNote();







{/* <script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCsCj8bIKQnCEhQJ-59cHz4ItBb5j4usPs",
    authDomain: "sharednotepad.firebaseapp.com",
    projectId: "sharednotepad",
    storageBucket: "sharednotepad.firebasestorage.app",
    messagingSenderId: "84571842790",
    appId: "1:84571842790:web:8fe8c534fb7487ae56f327"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script> */}


// git add --all
// git commit -a -m "Updated files"
// git push