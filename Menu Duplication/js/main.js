function duplicateMenu() {
    let menuList = document.querySelectorAll('ul#primaryNavigation li a');

    let newMenuList = document.createElement('ul');
    array.forEach(element => {
        let newItem = document.createElement('li');
        let newLink = document.createElement('a');
        newLink.setAttribute('href', element.getAttribute('href'));

        //copy the textcontent from upper menu to new menu
        //append children to show at the bottom
    });

}

duplicateMenu();