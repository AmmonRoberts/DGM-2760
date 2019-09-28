document.querySelector('#assignmentName').innerText = 'Nonsense Story';
let input;
let lowercase;
let splitString
let errorString = '';
let nounArray = [];
let verbArray = [];
let adjectiveArray = [];


let a = document.querySelector('#nouns').innerHTML;

function tellStory() {
    //set up nounArray
    input = document.querySelector('#nouns').value;
    lowercase = input.toLowerCase();
    splitString = lowercase.trim().split(/\s+/);
    nounArray = splitString;

    //set up adjectiveArray
    input = document.querySelector('#adjectives').value;
    lowercase = input.toLowerCase();
    splitString = lowercase.trim().split(/\s+/);
    adjectiveArray = splitString;

    //set up verbArray
    input = document.querySelector('#verbs').value;
    lowercase = input.toLowerCase();
    splitString = lowercase.trim().split(/\s+/);
    verbArray = splitString;

    shuffleArray(nounArray);
    shuffleArray(adjectiveArray);
    shuffleArray(verbArray);

    console.log(nounArray);
    console.log(adjectiveArray);
    console.log(verbArray);

    if (nounArray.length == 7 && adjectiveArray.length == 3 && verbArray.length == 3) {
        const story =
            `<p>Once upon a time there was a <span>${adjectiveArray[0]} ${nounArray[0]}</span> named Billy, who loved to <span>${verbArray[0]}</span>.</p>
    <p>He decided to have a picnic with his <span>${adjectiveArray[1]}</span> friend, Dan.</p>
    <p>They met at their favorite <span>${nounArray[1]}</span>, near the <span>${nounArray[2]}</span>.</p>
    <p>They each had a <span>${adjectiveArray[2]} ${nounArray[3]}</span> for lunch.</p>
    <p>Afterwards, they decided to take a walk to their favorite <span>${nounArray[4]}</span>.</p>
    <p>On the way, they passed a nice <span>${nounArray[5]}</span> and reminisced on how much they loved <span>${verbArray[1]}ing</span> as kids.</p>
    <p>After a nice and full day of <span>${verbArray[2]}ing</span>, they said goodbye and each went home to their own <span>${nounArray[6]}</span>.</p>`;
        document.querySelector('#storyArea').innerHTML = story;
    } else {
        alert("Please verify input. You must input 7 nouns, 3 adjectives, and 2 verbs");
    }
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}