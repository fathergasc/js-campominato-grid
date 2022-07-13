const containerDom = document.getElementById('container');
const playButton = document.getElementById('play');

playButton.addEventListener('click', 
    createProgressiveNumberedBox(100)
);


function createProgressiveNumberedBox(number) {
    
    for (let i = 1; i<=number; i++) {
    const addBox = document.createElement('div');  
    addBox.className = "box";
    containerDom.append(addBox);
    addBox.append(i);
    }
}
    