document.getElementById('elementLeft').innerHTML = 'Zostało 250 znaków';

function submitForm($event) {
    $event.preventDefault();
    let name = document.form?.name?.value;
    let email = document.form?.email?.value;
    let subject = document.form?.subject?.value;
    let content = document.form?.content?.value;
    alert('Wiadomość zostaje wysłana. Od: ' + name + ', email: ' + email + ' temat: ' + subject + ' treść: ' + content);
}

function textareaLengthCheck(el) {
    let textArea = el.value.length;
    let charactersLeft = 250 - textArea;
    let count = document.getElementById('elementLeft');
    count.innerHTML = 'Zostało ' + charactersLeft + ' znaków.';
}