new Vue({
    el: '#desafio',
    data: {
        meuNome: 'Filipe',
        idade: 28,
        linkHomemAranha: 'https://abrilveja.files.wordpress.com/2019/01/aranhaverso-e1547059835160.jpg'
    },
    methods: {
        multiplicaIdadePorTres: function (idade){
            return idade * 3;
        },
        aleatorio: function () {
            return Math.random();
        }
    }
})