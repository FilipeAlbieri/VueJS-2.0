
new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert("Isso \u00E9 um alerta! Fica esperto, parceiro.");
        },
        pegarValor(e){
            this.valor = e.target.value;
        }
    }
})

