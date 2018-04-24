function printSquare(n) {
    var x = '';
    for (let i = 0; i < n; i++) {
        x += '*';
    }
    for (let i = 0; i < n; i++) {
        console.log(x + '\n')
        // return (x)
    }
}

function printBox(x, y) {
    var xn = '';
    var xy = '';
    for (let i = 0; i < x; i++) {
        xn += '*';
        if (i == 0 || i == x - 1) {
            xy += '*'
        } else {
            xy += ' '
        }
    }
    for (let i = 0; i < y; i++) {
        if (i == 0 || i == y - 1) {
            console.log(xn)
        } else {
            console.log(xy)
        }
    }
}

function printBanner(msg) {
    var n = msg.length;
    var x = '';
    for (let i = 0; i < n + 2; i++) {
        x += '*';

    }
    for (let i = 0; i < 3; i++) {
        if (i == 0 || i == 2) {
            console.log(x)
        } else {
            console.log('*' + msg + '*')
        }
    }
}

function leet(msg) {
        nmsg = msg.replace(/a|e|g|i|o|s|t/gi, function (x) {
            switch (x.toLowerCase()) {
                case 'a':
                    return '4'
                    break;
                case 'e':
                    return '3'
                    break;
                case 'g':
                    return '6'
                    break;
                case 'i':
                    return '1'
                    break;
                case 'o':
                    return '0'
                    break;
                case 's':
                    return '5'
                    break;
                case 't':
                    return '7'
                    break;
            }
        })

    return nmsg;
}


function loong(msg) {
    
        nmsg = msg.replace(/aa|ee|oo/gi, function (x) {
            switch (x.toLowerCase()) {
                case 'aa':
                    return 'aaaa'
                    break;
                case 'ee':
                    return 'eeee'
                    break;
                case 'oo':
                    return 'oooo'
                    break;
            }
        })
    // }
    return nmsg;
}

function positives(nums){
    new_nums = nums.filter(n => n >= 0)
    return new_nums;

}

function encode(msg, m){
    var output ='';
    for (let i=0; i<msg.length; i++){
        //Upper 
        if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <=90){
            code = String.fromCharCode(((msg.charCodeAt(i) -65 + m) % 26) +65);

        //Lower
        }else if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <=122){
            code = String.fromCharCode(((msg.charCodeAt(i) -97 + m) % 26) +97);
        l
        }else{
            code = msg[i]
        }
        output += code;
    }
    return output;
}


// =========================== Function Exercises =======================================================

var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// ====
arr.filter(x => x % 2==0)
// ====
arr2 = arr.map(x => x*x)
// ====
var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    {name:'Atlanta', temperature:52.0},
    {name:'Detroit', temperature:48.0},
    {name:'New York', temperature:80.0},
]

var coolCity = cities.filter(function(city){
    return city.temperature < 70.0
})
// =====
var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
  ];

  people.map(function(x){
     return('Good job, ' + x + '!' )
  })
// =====

people.sort()
// =====
people.sort(function(a,b){
  return a.length - b.length;
})
// =====
var fun = function(){
    // console.log("Fun!!")
    return 'Fun!!';
}

function callnTimes(fn, n){
    for (let i=0;i<n;i++){
        console.log(fn());
    }
    return;
}
// =====
function sum(n){
    reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(n.reduce(reducer));
}
// =====
var vip = ['ver', 'imp', 'per']
function accron(n){
    reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(n.reduce(reducer));
}