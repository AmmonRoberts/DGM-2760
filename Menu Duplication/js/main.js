function duplicateMenu() {
    // console.log(document.querySelector('#primaryNavigation'));
    // console.log(document.querySelector('#smallNavArea'));

    let menuList = document.querySelectorAll('ul#primaryNavigation li a');
    let newMenuList = document.createElement('ul');

    document.querySelector('#smallNavArea').appendChild(newMenuList);

    menuList.forEach(element => {
        let newItem = document.createElement('li');
        let newLink = document.createElement('a');
        newLink.setAttribute('href', element.getAttribute('href'));
        newLink.innerHTML = element.textContent;
        newItem.appendChild(newLink);
        document.querySelector('#smallNavArea ul').appendChild(newItem);
    });
}

duplicateMenu();