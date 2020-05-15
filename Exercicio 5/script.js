function addfaculdade(){
    const nome = $('input[name=nome]').val();
    const campus = $('input[name=campus]').val();
    const fundacao = $('input[name=fundacao]').val();
    const alunos = $('input[name=alunos]').val();
    const professores = $('input[name=professores]').val();

    const objfacul = JSON.stringify({nome, campus, fundacao, alunos, professores});

    localStorage.setItem('item', objfacul);
}
