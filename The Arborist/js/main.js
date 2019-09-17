const trees = ['Pine', 'Oak', 'Aspen', 'Cypress'];
const errorElement = document.querySelector('#error');
const displayResults = document.querySelector('#results');


const listTrees = () => {

    let treeList = '';
    trees.forEach(tree => {
        treeList += `${tree} <br>`;
        console.log(tree);
    });
    displayResults.innerHTML = `${treeList} <span>${trees.length} elements long</span>`;
}
listTrees();