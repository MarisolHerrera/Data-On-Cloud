
//PERSONALIZADO-----------------------------------------------
// Importa las funciones que necesitas del SDK de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCPKc6WChSvwQNkQE-H9F4Igu1BTY0rFOw",
    authDomain: "datacloud-7d602.firebaseapp.com",
    projectId: "datacloud-7d602",
    storageBucket: "datacloud-7d602.appspot.com",
    messagingSenderId: "267677960415",
    appId: "1:267677960415:web:7232be55fb46b5d082416a",
    measurementId: "G-G49GQQVNS2"
};
//fin de codigo personalizado-------------------------------------

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Conexióna a firebase establecida correctamente");

document.getElementById('student-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const boleta = document.getElementById('boleta').value;
    const edad = document.getElementById('edad').value;
    const semestre = document.getElementById('semestre').value;
    const carrera = document.getElementById('carrera').value;

    try {
        await addDoc(collection(db, "students"), {
            name: name,
            boleta: boleta,
            edad: edad,
            semestre: semestre,
            carrera: carrera
        });
        document.getElementById('status').innerText = "Datos guardados correctamente";
    } catch (error) {
        console.error("Error al guardar los datos: ", error);
    }
});
