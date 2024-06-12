const noteTextarea = document.getElementById('note');

window.addEventListener('DOMContentLoaded', () => {
    const savedNote = localStorage.getItem('note');
    if (savedNote) {
        noteTextarea.value = savedNote;
    }
});

noteTextarea.addEventListener('input', () => {
    const note = noteTextarea.value;
    localStorage.setItem('note', note);
});
