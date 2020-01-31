new Vue({
	el: '#desafio',
	data: {
		animacao: '',
		classe1: 'roxo',
		classe2: 'redondo',
		classe3: '',
		classe4: '',
		aplicarClasse: false,
		estilo1: '',
		porcentagem: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				return this.animacao == 'destaque' ?
				this.animacao = 'encolher' : this.animacao = 'destaque';
			}, 500)
			
		},
		iniciarProgresso() {
			setInterval(() => {
				console.log(this.porcentagem);
				return this.porcentagem += 10;
			}, 500)
		},
		logar() {
			console.log(this.estilo1);
		}
	}
})
