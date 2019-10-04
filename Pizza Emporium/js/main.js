document.querySelector('#assignmentName').innerText = 'Pizza Emporium';
let message;

const pizza = {
    crust: 'thin',
    topping: 'pepperoni',
    size: 'small',
    buildPizza: () => {
        console.log(pizza);
        message = `Your order:
        <br>${pizza.crust} crust
        <br>cheese with ${pizza.topping}
        <br>${pizza.size} pizza
        `;
        document.querySelector('#messageArea').innerHTML = message;
    },
    shoppingList: () => {
        let flour = 1;
        let pepperoni = 0;
        let bacon = 0;
        if (pizza.crust === 'regular')
            flour++;
        if (pizza.size === 'medium')
            flour++;
        if (pizza.size === 'large')
            flour += 2;
        if (pizza.topping === 'pepperoni')
            pepperoni++;
        if (pizza.topping === 'bacon')
            bacon++;

        message = `You will need to purchase: 
        <br>${flour} cups of flour 
        <br>${pepperoni} lbs of pepperoni
        <br>${bacon} lbs of bacon
        `;
        console.log(message);
        document.querySelector('#shoppingListArea').innerHTML = message;
    }
}

let thinButton = document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin');

let regularButton = document.querySelector('#regular').addEventListener('click', () => pizza.crust = 'regular');

let pepperoniButton = document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni');

let baconButton = document.querySelector('#bacon').addEventListener('click', () => pizza.topping = 'bacon');

let smallButton = document.querySelector('#small').addEventListener('click', () => pizza.size = 'small');

let mediumButton = document.querySelector('#medium').addEventListener('click', () => pizza.size = 'medium');

let largeButton = document.querySelector('#large').addEventListener('click', () => pizza.size = 'large');

let buildButtonMessage = document.querySelector('#buildButton').addEventListener('click', pizza.buildPizza);

let buildButtonList = document.querySelector('#buildButton').addEventListener('click', pizza.shoppingList);