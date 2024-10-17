
const inputTextarea = document.getElementById('inputTextarea') as HTMLTextAreaElement;
const outputTextarea = document.getElementById('outputTextarea') as HTMLTextAreaElement;
const clearButton = document.getElementById('clearButton') as HTMLButtonElement;
const analyzeButton = document.getElementById('analyzeButton') as HTMLButtonElement;

clearButton.addEventListener('click', () => {
    inputTextarea.value = ''; 
});

// Acción cuando se presiona el botón
analyzeButton.addEventListener('click', () => {
    const textToAnalyze = inputTextarea.value;

    // Enviamos el texto al backend usando Fetch API
    fetch('http://localhost:8080/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code: textToAnalyze }) 
    })
    .then(response => response.json())
    .then(data => {
        outputTextarea.value = data.tokens.join('\n'); 
    })
    .catch(error => {
        console.error('Error:', error);
        outputTextarea.value = 'Error al analizar el texto';
    });
});