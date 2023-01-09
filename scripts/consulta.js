function Endereco() {
    let cep = document.querySelector(`#cep`).value;
    
    if (cep.length !== 8) {
        alert('Inválido, digite um CEP válido.');
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function(response){
        response.json().then(mostrar);
    });
}


    function mostrar(dados){
        let resultado = document.querySelector('#resultado');

        if(dados.erro){
            resultado.innerHTML = "Endereço não encontrado &#x26A0";
        } else{

        resultado.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
        <p>Complemento: ${dados.complemento}</p>
        <p>Bairro: ${dados.bairro}</p>
        <p>Cidade: ${dados.localidade} - ${dados.uf}</p>`
    
    }
}