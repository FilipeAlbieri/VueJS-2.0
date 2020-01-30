new Vue({
	el: '#desafio',
	data: {
		animacao: '',
		classe1: 'cinza',
		classe2: 'redondo',
		classe3: ''
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				return this.animacao == 'destaque' ?
				this.animacao = 'encolher' : this.animacao = 'destaque';
			}, 500)
			
		},
		iniciarProgresso() {

		}
	}
})
