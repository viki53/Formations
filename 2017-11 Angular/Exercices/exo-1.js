/* Avant */ 

class Animal { 
	constructor(friends) {
		this.friends = friends; 
	}

	hello(friend) { 
		console.log("Hello " + friend);
	}

	helloAll() { 
		this.friends.forEach((friend) => { this.hello(friend) });
	} 
}

  var wolf = new Animal(["rox", "rookie"]); 

wolf.helloAll(); 


const obj = {
	a: 'varA',
	b: 'varB'
};

let { a, b } = obj;

a = 'toto';

console.log(a);
console.log(b);
console.dir(obj);
