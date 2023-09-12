class  Cliente{
    constructor(cliente, mesa, descricao){
        this.id = this.gerarId();
        this.cliente = cliente;
        this.mesa = mesa;
        this.descricao = descricao;
    }

    gerarId(){
        return Math.floor(Math.random() * 1000);
    }

}

class Pedidos{
    constructor(){
        this.pedido = [];
    }

    contador(){
        return this.pedido.length
    }

    adicionarPedido(parametro){
        this.pedido.push(parametro);
    }
    
    listarPedido(){
        return this.pedido;
    }
   
    listarPedidoporId(parametro){
        return this.pedido.find((order) => order.id == parametro);
    }

    atualizarPedido(id, nome, mesa, descricao){
        const order = this.listarPedidoporId(id);

        order.nome = nome;
        order.mesa = mesa;
        order.descricao = descricao;

        return order;
    }

    deletarPedido(parametro){
        return(this.pedido = this.pedido.filter
            ((order) => order.id != parametro
            ));
    };
}

const pedidos = new Pedidos();

function criarPedido(){
    const cliente = document.getElementById("cliente").value;
    const mesa = Number(document.getElementById("mesa").value);
    const descricao = document.getElementById("descricao").value;

    const novoPedidos = new order (cliente, mesa, descricao);

    pedidos.adicionarPedido(novoPedidos);

    listarPedido();
    limparInputs();
}

function listarPedido(){
    const pedido = pedidos.listarPedido;
    const listaPedido = document.getElementById("listarPedido");
    
    listaPedido.innerHTML = "";

    pedido.forEach(order => {
     content += `

    <div>
        <p> Id: ${order.id}</p>
        <p> Cliente: ${order.cliente}</p>
        <p> Mesa: ${order.mesa}</p>
        <p> Descrição: ${order.descricao}</p>
        <button onclick ="atualizarPedido(${order.id})"> Editar </button>
        <button onclick ="deletarPedido(${order.id})"> Deletar </button>
        <div>
        `;
    });

        listaPedido.innerHTML = content;
}

let aux = null;

function atualizarPedido(){
    const order = pedidos.listarPedidoporId(id);

    document.getElementById("cliente").value = order.cliente;
    document.getElementById("mesa").value = order.mesa;
    document.getElementById("descricao").value = order.descricao;

    document.getElementById("botaoCadastrar").classList.add("hidden");
    document.getElementById("botaoEditar").classList.remove("hidden");

    aux = id;

}    

function editarPedido(){
    const cliente = document.getElementById("cliente").value;
    const mesa = Number(document.getElementById("mesa").value);
    const descricao = document.getElementById("descricao").value;

    pedidos.atualizarPedido(aux, cliente, mesa, descricao);

    listarPedido();

    document.getElementById("botaoCadastrar").classList.remove("hidden");
    document.getElementById("botaoEditar").classList.add("hidden");
}

function deletarPedido(){
    pedidos.deletarPedido(id);

    listarPedido();
}


function limparInputs(){
    document.getElementById("cliente").value = "";
    document.getElementById("mesa").value = "";
    document.getElementById("descricao").value = "";
}

function isAnyInputEmpty() {

    let cliente = document.getElementById("cliente").value;
    let mesa = document.getElementById("mesa").value;
    let descricao = document.getElementById("descricao").value;
   
    if (cliente == "" || mesa == "" || descricao == "") {
        return true;
    } else {
        return false;
    }
}

function sendErrorMsg(msg) {
    document.getElementById("error-msg").innerHTML = msg;
    document.getElementById("error-msg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("error-msg").classList.add("hidden");
    }, 4000);
}

function successMsg(msg) {
    document.getElementById("success-msg").innerHTML = msg;
    document.getElementById("success-msg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("success-msg").classList.add("hidden");
    }, 4000);
}
