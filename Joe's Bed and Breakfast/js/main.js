    document.querySelector('#companyName').innerText = "Joe's Bed and Breakfast";
    document.querySelector('#companySlogan').innerText = "Best food and sleep in town!";

    let name = prompt("Please enter your name", "");

    if (name != null) {
        document.querySelector('#greeting').innerText = `Hello ${name}!`;
    }