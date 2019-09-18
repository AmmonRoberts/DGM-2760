const trees = ['Pine', 'Oak', 'Aspen', 'Cypress'];
const errorElement = document.querySelector('#error');
const displayResults = document.querySelector('#results');
document.querySelector('#assignmentName').innerText = 'The Arborist';


const listTrees = () => {

    let treeList = '';
    trees.forEach(tree => {
        treeList += `${tree} <br>`;
        //console.log(tree);
    });
    displayResults.innerHTML = `${treeList} <span>${trees.length} elements long</span>`;
}
listTrees();



document.querySelector('#addRedwood').onclick = () => {
    trees.push('Redwood');
    listTrees();
}

document.querySelector('#addBirch').onclick = () => {
    trees.unshift('Birch');
    listTrees();
}

document.querySelector('#removeFirst').onclick = () => {
    if (trees.length > 0)
        trees.shift();
    else
        errorElement.textContent = 'Error, there are no trees to remove from list. Please try again after adding more trees.';
    listTrees();
}

document.querySelector('#removeLast').onclick = () => {
    if (trees.length > 0)
        trees.pop();
    else
        errorElement.textContent = 'Error, there are no trees to remove from list. Please try again after adding more trees.';
    listTrees();
}

document.querySelector('#removeSecond').onclick = () => {
    if (trees.length > 1)
        trees.splice(1, 1);
    else
        errorElement.textContent = 'Error, there are one or fewer trees. Please try again after adding more trees.';
    listTrees();
}

document.querySelector('#sort').onclick = () => {
    trees.sort();
    listTrees();
}

document.querySelector('#lowercase').onclick = () => {
    let i = 0;
    trees.forEach(tree => {
        trees[i] = tree.toLowerCase();
        i++;
    });
    listTrees();
}

document.querySelector('#third').onclick = () => {
    if (trees.length < 3)
        errorElement.textContent = "Error, there are fewer than three trees on the list."
    else
        alert(trees[2]);
}

document.querySelector('#fourth').onclick = () => {
    if (trees.length < 4)
        errorElement.textContent = "Error, there are fewer than four trees on the list."
    else
        alert(trees[3]);

}