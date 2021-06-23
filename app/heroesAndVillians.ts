interface IPerson {
    name: string;
    bio: IBio;
}

type IBio = {
    age: number,
    height: number,
    backstory: string,
    address: IAddress[]
}

type IAddress = {
    street1: string,
    street2: string | null,
    state: string,
    city: string,
    zipCode: number
}

interface IVillain extends IPerson{
    plot: string;
    scheme(): string;
}

interface IHero extends IPerson{
    talent: string;
}

interface ISuperPerson extends IPerson{
    power: string;
    alias: string;
}

class Hero implements IHero {
    name: string;
    bio: IBio;
    talent: string;

    constructor(name: string, talent: string){
        this.name = name;
        this.talent = talent;
    }
}

let captainUnderpants = new Hero('Captain Underpants', 'Wedgie power');

class Villain implements IVillain{
    name: string;
    plot: string;
    bio: IBio;

    constructor(name: string, plot: string){
        this.name = name;
        this.plot = plot;
    }

    scheme(): string{
        return `I'm ${this.name} and I'm going to ${this.plot}`
    }
}

let gollum = new Villain('Gollum', "get my preeeeeecious");
console.log(gollum);

class Vigilante implements IHero, IVillain{
    name: string;
    talent: string;
    plot: string;
    bio: IBio;
    
    constructor(name: string, talent: string, plot: string){
        this.name = name;
        this.talent = talent;
        this.plot = plot;
    }

    scheme(): string {
        return `I'm ${this.name} and I'll use my ${this.talent} in my plot to ${this.plot}`
    }
}

let robinHood = new Vigilante('Robin Hood', 'Giving to the poor', 'Rob the rich');
console.log(robinHood);

class SuperHero extends Hero implements ISuperPerson{
    alias: string;
    power: string;

    constructor(name: string, talent: string, alias: string, power: string){
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


class SuperVillain extends Villain implements ISuperPerson{
    power: string;
    alias: string;
    plot: string;

    constructor(name: string, plot: string, alias: string, power: string){
        super(name, plot);
        this.alias = alias;
        this.power = power;
    }

    scheme(): string {
        return `Muahaha, I shall ${this.plot}`
    }
}

let heWhoMustNotBeNamed = new SuperVillain('Voldemort', 'kill mudbloods', 'Tommy boy', 'Green sparks')
console.log(heWhoMustNotBeNamed);

//! Example of how to use a <generic> that extends another class
class Henchman<TBoss extends IVillain> implements IVillain{
    name: string;
    plot: string;
    boss: TBoss;
    bio: IBio

    constructor(name: string, boss: TBoss){
        this.name = name;
        this.plot = boss.plot;
        this.boss = boss;
    }

    scheme(): string {
        return `As my boss says, ${this.boss.scheme()}`
    }
}

let someRatBoy = new Henchman('Silver handed lad', heWhoMustNotBeNamed);
console.log(someRatBoy);


let people: Array<IPerson> = [captainUnderpants, superman, heWhoMustNotBeNamed, someRatBoy];
let peoples: IPerson[] = [captainUnderpants, superman, heWhoMustNotBeNamed, someRatBoy];
console.log(people);


let villains: IVillain[] = [heWhoMustNotBeNamed, someRatBoy, gollum];
console.log(villains);

let heroes: IHero[] = [superman, captainUnderpants, robinHood]
console.log(heroes);

let henchman: Henchman<SuperVillain>[] = [someRatBoy];
console.log(henchman);

