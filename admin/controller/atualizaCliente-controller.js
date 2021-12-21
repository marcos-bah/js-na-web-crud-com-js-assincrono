import { clienteService } from "../service/cliente-service.js";

(async () => {
    const pegaURL = new URL(window.location);

    const id = pegaURL.searchParams.get('id');

    const inputNome = document.querySelector('[data-nome]');
    const inputEmail = document.querySelector('[data-email]');

    try {
        const cliente = await clienteService.detalhaCliente(id);
        inputNome.value = cliente.nome;
        inputEmail.value = cliente.email;
    } catch (error) {
        console.log(error);
        window.location.href = '../telas/erro.html';
    }

    try {
        const formulario = document.querySelector('[data-form]');

        formulario.addEventListener('submit', async (event) => {
            event.preventDefault();
            const nome = inputNome.value;
            const email = inputEmail.value;
            await clienteService.atualizaCliente(id, nome, email);
            window.location.href = '../telas/lista_cliente.html';
        });
    } catch (error) {
        console.log(error);
        window.location.href = '../telas/erro.html';
    }
})();



