$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000-000-000-00');
    $('#ceo').mask('00.000.000');

    $('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        cpf: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        },
    },
    messages: {
    nome: 'Por favor insira o seu nome!',
    email: 'Por favor insira o seu e-mail!',
    telefone: 'Por favor insira o seu telefone!',
    endereco: 'Por favor insira seu endereço!',
    cpf: 'Por favor insira o seu cpf!',
    cep: 'Por favor insira o seu cep!',
    },
    submitHandler: function(form) {
    console.log(form)
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        console.log(camposIncorretos)
        
    }

})
})
