const Human = function (name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height; 
}

Human.prototype = {
    name: this.name,
    age: this.age,
    height: this.height,
    getInfo: function () {
        return `${this.name}, ${this.age}, ${this.height}`
    }
}

let Bodya = new Human("Bodya", 13, 165);

// console.log(Bodya.getInfo());

const humans = [
    {
        Коля: new Human("Коля", 23, 180)
    },
    {
        Даша: new Human("Даша", 19, 170)
    },
    {
        Ваня: new Human("Ваня", 18, 192)
    },
    {
        Петя: new Human("Петя", 45, 178)
    },
    {
        Вася: new Human ("Вася", 34, 197)
    },
    {
        Джони: new Human ("Джони", 40, 168) 
    },
    {
        Катя: new Human ("Катя", 37, 160) 
    },
    {
        Петя: new Human ("Петя", 29, 200)
    },
    {
        Соня: new Human ("Соня", 21, 172)
    },
    {
        Женя: new Human ("Женя", 25, 175)
    },
];

// console.log(humans);

const Card = function( from, to) {
    this.from = from;
    this.to = to;
}

Card.prototype = {
    from: this.from,
    to: this.to,
    show: function () {
        return `${this.from},${this.to}`
    }
}

const firstCard = new Card(1, 4);

// console.log(firstCard.show());

