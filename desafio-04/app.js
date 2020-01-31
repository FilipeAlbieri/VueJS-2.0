new Vue({
	el: '#desafio',
	data: {
		animacao: '',
		classe1: 'roxo',
		classe2: 'redondo',
		classe3: '',
		classe4: '',
		classe5: true,
		estilo1: '',
		porcentagem: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.animacao == 'destaque' ?
				this.animacao = 'encolher' : this.animacao = 'destaque';
			}, 500)			
		},
		iniciarProgresso() {
			setInterval(() => {
				this.porcentagem <100 ? this.porcentagem += 1 : clearInterval();
			}, 50)
		},
		aplicarClasse(event) {
			if (event.target.value == "true") {
				this.classe5 = true;
			} else if(event.target.value == "false"){
				this.classe5 = false;
			}
		}
	}
})
