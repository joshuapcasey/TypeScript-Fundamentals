class Hero {
    constructor(name, talent) {
        this.name = name;
        this.talent = talent;
    }
}
let captainUnderpants = new Hero('Captain Underpants', 'Wedgie power');
class Villain {
    constructor(name, plot) {
        this.name = name;
        this.plot = plot;
    }
    scheme() {
        return `I'm ${this.name} and I'm going to ${this.plot}`;
    }
}
let gollum = new Villain('Gollum', "get my preeeeeecious");
console.log(gollum);
class Vigilante {
    constructor(name, talent, plot) {
        this.name = name;
        this.talent = talent;
        this.plot = plot;
    }
    scheme() {
        return `I'm ${this.name} and I'll use my ${this.talent} in my plot to ${this.plot}`;
    }
}
let robinHood = new Vigilante('Robin Hood', 'Giving to the poor', 'Rob the rich');
console.log(robinHood);
class SuperHero extends Hero {
    constructor(name, talent, alias, power) {
        super(name, talent); //!same as below two lines (super = keyword that passes paramaters from parent class)
        // this.name = name;
        // this.talent = talent;
        this.alias = alias;
        this.power = power;
    }
}
//! Make sure to follow the order of the constructor variables listed on line 90
let superman = new SuperHero('Superman', 'Hide by putting glasses on', 'Random guy with glasses', 'All of them');
console.log(superman);
class SuperVillain extends Villain {
    constructor(name, plot, alias, power) {
        super(name, plot);
        this.alias = alias;
        this.power = power;
    }
    scheme() {
        return `Muahaha, I shall ${this.plot}`;
    }
}
let heWhoMustNotBeNamed = new SuperVillain('Voldemort', 'kill mudbloods', 'Tommy boy', 'Green sparks');
console.log(heWhoMustNotBeNamed);
//! Example of how to use a <generic> that extends another class
class Henchman {
    constructor(name, boss) {
        this.name = name;
        this.plot = boss.plot;
        this.boss = boss;
    }
    scheme() {
        return `As my boss says, ${this.boss.scheme()}`;
    }
}
let someRatBoy = new Henchman('Silver handed lad', heWhoMustNotBeNamed);
console.log(someRatBoy);
let people = [captainUnderpants, superman, heWhoMustNotBeNamed, someRatBoy];
let peoples = [captainUnderpants, superman, heWhoMustNotBeNamed, someRatBoy];
console.log(people);
let villains = [heWhoMustNotBeNamed, someRatBoy, gollum];
console.log(villains);
let heroes = [superman, captainUnderpants, robinHood];
console.log(heroes);
let henchman = [someRatBoy];
console.log(henchman);
//# sourceMappingURL=heroesAndVillians.js.map