function Person(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
}

Person.prototype.greet = function (other) {
    console.log('Hello ' + other.name + ', I am ' + this.name + '!');
};

sonny = new Person('Sonny', 'sonny@hotmail.com', '654-654-6548')

jordan = new Person('Jordan', 'jordan@aol.com', '654-897-3215')


function info(pers) {
    console.log(`${pers.name}'s phone is ${pers.phone} and their email is ${pers.email}`)

}





function Card(point, suit) {
    this.point = point;
    this.suit = suit;

    Card.prototype.getImg = function () {
        return `images/${point}_of_${suit}.png`
    }
}

function Deck() {
    this.deck =[];
    this.suits = ['spades', 'diamonds', 'clubs', 'hearts'];
    this.point = [1,2,3,4,5,6,7,8,9,10,11,12,13];

    Deck.prototype.make = function(){
        for(let i=0; i<this.suits.length; i++){
            for(let n=1;n<this.point.length+1; n++){
                this.deck.push(new Card(n, this.suits[i]))
            }
            
        }
    }
    Deck.prototype.draw = function () {
        return this.deck.pop()
    }

    Deck.prototype.shuffle = function () {
        for(let i =0; i<1000; i++){
            let loc1 =Math.floor((Math.random()*this.deck.length));
            let loc2 =Math.floor((Math.random()*this.deck.length));
            let tmp = this.deck[loc1];

            this.deck[loc1]=this.deck[loc2];
            this.deck[loc2]=tmp;
        }
    }

    Deck.prototype.remainder = function () {
        return this.deck.length
    }
}

deck1 = new Deck;
deck1.make()
deck1.shuffle()
deck1.draw()
deck1.remainder()

function Hand() {
    this.cards = [];

    Hand.prototype.addCard = function (deck) {
        this.cards.push(deck.draw())
    }

    Hand.prototype.getPoints = function () {
        let points = 0;
        for (let i = 0; i < this.cards.length; i++) {
            switch (this.cards[i].point){
                case 11:
                return 
            }
            
        }
        points += this.cards[i].point
        return points
    }
}


myhand = new Hand
myhand.addCard(2, 'diamonds')
myhand.addCard(4, 'hearts')
myhand.getPoints()

