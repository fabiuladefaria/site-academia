// ===== FORMULÁRIO DE CONTATO =====
const form = document.getElementById("formContato");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Animação do botão
    const botao = form.querySelector(".btn-solid");
    botao.style.transform = "scale(0.95)";
    setTimeout(() => botao.style.transform = "scale(1)", 200);

    // Envia o formulário para o StaticForms
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData
    })
    .then(() => {
        window.location.href = "obg.html";
    })
    .catch(() => {
        window.location.href = "obg.html";
    });
});
// ===== FIM DO FORMULÁRIO DE CONTATO =====