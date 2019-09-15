function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


function getMonthName(month) {
    let name
    switch (month) {
        case 1:
            name = 'January';
            break;
        case 2:
            name = 'February';

            break;

        case 3:
            name = 'March';
            break;

        case 4:
            name = 'April';
            break;

        case 5:
            name = 'May';
            break;

        case 6:
            name = 'June';
            break;

        case 7:
            name = 'July';
            break;

        case 8:
            name = 'August';
            break;

        case 9:
            name = 'September';
            break;

        case 10:
            name = 'October';
            break;

        case 11:
            name = 'November';
            break;

        case 12:
            name = 'December';
            break;

        default:
            name = 'Not a month';
            break;
    }
    return name;
}

function getFortune(fateNumber) {
    let message;
    switch (fateNumber) {
        case 1:
            message = 'find love in a baked goods shop.';
            break;

        case 2:
            message = 'learn something disturbing about a close friend.';
            break;
        case 3:
            message = 'die a horrible and painful death, from something you ate.';
            break;
        case 4:
            message = 'turn into a turkey pie';
            break;
        case 5:
            message = 'find a new friend in the form of a friendly canine.';
            break;
        default:
            break;
    }
    return message;
}

let day = getRandomIntInclusive(1, 30);
let fate = getFortune(getRandomIntInclusive(1, 5));
let month = (getRandomIntInclusive(1, 12));
const monthName = getMonthName(month);
console.log(monthName);

const fortune = `On ${monthName} ${day}, you will ${fate}`;

document.querySelector('#fortune').innerText = fortune;