function duplicateMenu() {
    console.log(document.querySelector('#primaryNavigation'));
    console.log(document.querySelector('#smallNavArea'));

    let menuList = document.querySelectorAll('ul#primaryNavigation li a');

    let newMenuList = document.createElement('ul');

    menuList.forEach(element => {
        let newItem = document.createElement('li');
        let newLink = document.createElement('a');
        newLink.setAttribute('href', element.getAttribute('href'));
        newLink.setAttribute('value', element.innerHTML);
        //copy the textcontent from upper menu to new menu
        //append children to show at the bottom
        newItem.appendChild(newLink);
        document.querySelector('#smallNavArea').appendChild(newItem);

    });
    document.querySelector('#smallNavArea').display = 'block';
}

duplicateMenu();