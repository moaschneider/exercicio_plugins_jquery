$(document).ready(function() {
    $('#cpf').mask('000.000.000-00');
    $('#telefone').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');

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
            }
        },
        messages: {
            nome: 'Preencha o seu nome completo',
            email: 'Preencha o seu e-mail',
            telefone: 'Preencha o seu telefone',
            cpf: 'Preencha o seu CPF',
            endereco: 'Preencha o seu endereco',
            cep: 'Preencha o seu CEP'
            },
        submitHandler: function(form) {
            alert('Seus dados foram enviados com sucesso!');
        },
        invalidHandler: function(evento, validador) {
            let incorretos = validador.numberOfInvalids();
            if (incorretos) {
                alert('Alguns dados estão incorretos.')
            }
        },
    })

})