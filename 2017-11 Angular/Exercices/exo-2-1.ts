class Formation {
	cours: string;

	constructor(cours: string) {
		this.cours = cours;
		console.log(this.cours);
	}
}

new Formation('Angular 2');
new Formation('Ionic');
new Formation('Toto');
