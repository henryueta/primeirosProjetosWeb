$('.piso>div').click(function (e) { 
    atual = $(this).find('.nome').html();
    if(atual == ''){
        opcao = confirm("Deseja reservar esta mesa?");
        if(opcao == true){
            nome = prompt("Digite seu nome:");
            $(this).find('.nome').html(nome);
            $(this).attr('class', 'selecionado');
        }
    } else{
        opcao = confirm("Deseja cancelar a reserva?");
        if(opcao == true){
            $(this).find('.nome').html('');
            $(this).attr('class', '');
        }
    }
});
