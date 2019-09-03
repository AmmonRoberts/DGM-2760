document.querySelector('#assignmentName').innerText = "Inspector Clousseau";
document.querySelector('#slogan').innerText = "Oh well, if you've seen one Stradivarius, you've seen them all";
let last = document.lastModified;

function refreshDisplay() {
    let docTitle = document.title;
    let URL = `The web page URL is ${document.URL}`;
    let windowSize = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight}`;
    let windowOffset = `Window offset is ${window.screenX} pixels from the left edge and ${window.screenY} pixels from the top of the page`;

    let windowProperties = document.querySelector('#windowProperties').innerText = windowSize + '\n' + windowOffset + '\n' + URL;
    let documentProperties = document.querySelector('#documentProperties').innerText = `The document title is ${docTitle}\nLast modification: ${last}`;
}
refreshDisplay();