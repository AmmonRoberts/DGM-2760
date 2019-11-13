function duplicateMenu() {
    let menuList = document.querySelectorAll('ul#primaryNavigation li a');
    let newMenuList = document.createElement('ul');

    menuList.forEach(element => {
        let newItem = document.createElement('li');
        let newLink = document.createElement('a');
        newLink.setAttribute('href', element.getAttribute('href'));
        newLink.innerHTML = element.textContent;
        newItem.appendChild(newLink);
        newMenuList.appendChild(newItem);
    });
    document.querySelector('#smallNavArea').appendChild(newMenuList);
}

duplicateMenu();