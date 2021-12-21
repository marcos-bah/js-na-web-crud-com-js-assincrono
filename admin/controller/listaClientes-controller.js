import { clienteService } from "../service/cliente-service.js";

const criarNovaLinha = (nome, email, id) => {
    const linha = document.createElement('tr');
    const conteudo = `
        <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td> 
    `;

    linha.innerHTML = conteudo;
    linha.dataset.id = id;
    return linha;
}

const tabela = document.querySelector('[data-tabela]');

tabela.addEventListener('click', async (event) => {
    const ehBotaoExcluir = event.target.className === 'botao-simples botao-simples--excluir';
    if (ehBotaoExcluir) {
        try {
            const linha = event.target.closest('[data-id]');
            let id = linha.dataset.id;
            await clienteService.removeCliente(id);
            linha.remove();
        } catch (error) {
            console.log(error);
            window.location.href = '../telas/erro.html';            
        }
        
    }
});


const render = async () => {
    try {
        const clientes = await clienteService.listaClientes();
            clientes.forEach(cliente => {
                const linha = criarNovaLinha(cliente.nome, cliente.email, cliente.id);
                tabela.appendChild(linha);
            });
    } catch (error) {
        console.log(error);
        window.location.href = '../telas/erro.html';
    }
}

render();



