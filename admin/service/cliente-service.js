const listaClientes = () => {
    return fetch('http://localhost:3000/profile').then(res => {
        if(res.ok) {
            return res.json();
        }
        throw new Error('Não foi possível obter a lista de clientes');
    });
}

const criaCliente = (nome, email) => {
    const cliente = {
        nome: nome,
        email: email
    }
    return fetch('http://localhost:3000/profile', {
        method: 'POST',
        body: JSON.stringify(cliente),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if(res.ok) {
            return res.json();
        }
        throw new Error('Não foi possível criar o cliente');
    });
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    }).then(res => {
        if(res.ok) {
            return res.json();
        }
        throw new Error('Não foi possível remover o cliente');
    });
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`).then(res => {
        if(res.ok) {
            return res.json();
        }
        throw new Error('Não foi possível obter o cliente');
    });
}

const atualizaCliente = (id, nome, email) => {
    const cliente = {
        nome: nome,
        email: email
    }
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        body: JSON.stringify(cliente),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if(res.ok) {
            return res.json();
        }
        throw new Error('Não foi possível atualizar o cliente');
    });
}

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}


