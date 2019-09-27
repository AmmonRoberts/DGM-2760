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

    console.log(nounArray);
    console.log(adjectiveArray);
    console.log(verbArray);

    // if (nounArray.length == 7 && adjectiveArray.length == 3 && verbArray.length == 2) {
    const story =
        `<p>Once upon a time there was a <span>${adjectiveArray[2]} ${nounArray[3]}</span> named Billy, who loved to <span>${verbArray[0]}</span>.</p>
    <p>He decided to have a picnic with his <span>${adjectiveArray[0]}</span> friend, Dan.</p>
    <p>They met at their favorite <span>${nounArray[1]}</span>, near the <span>${nounArray[4]}</span>.</p>
    <p>They each had a <span>${adjectiveArray[1]} ${nounArray[6]}</span> for lunch.</p>
    <p>Afterwards, they decided to take a walk to their favorite <span>${nounArray[2]}</span>.</p>
    <p>On the way, they passed a nice <span>${nounArray[5]}</span> and reminisced on how much they loved <span>${verbArray[1]}ing</span> as kids.</p>
    <p>After a nice and full day, they said goodbye and each went home to their own <span>${nounArray[0]}</span>.</p>`;
    document.querySelector('#storyArea').innerHTML = story;
    // }
    console.log(story);

    //document.querySelector('#storyElement').textContent = story
}