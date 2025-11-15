const seesawContainer = document.getElementById('seesaw-container');
const plank = document.getElementById('plank');
const leftWeight = document.getElementById('left-weight');
const rightWeight = document.getElementById('right-weight');
const tiltAngle = document.getElementById('tilt-angle');
const resetButton = document.getElementById('reset-button');

let objects = [];
const halfWidth = 200;

plank.addEventListener('click', (e) => {
    if(e.target !== plank) return;
    const position = e.offsetX;
    const weight = Math.floor(Math.random() * 10) + 1;
    const color = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    const object = {position, weight, color};
    objects.push(object);
    createObject(object);
    updateSeesaw();
    localStorage.setItem('seesaw', JSON.stringify(objects));
});

function createObject(obj){
    const div = document.createElement('div');
    div.className = 'object';
    const size = 20 + obj.weight * 2;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.top = `-${size}px`
    div.style.transform = `translateX(${obj.position - size / 2}px)`;
    div.style.backgroundColor = obj.color;
    div.innerText = obj.weight;
    plank.appendChild(div);
}

function updateSeesaw(){
    let leftTorque = 0;
    let rightTorque = 0;
    let leftTotal = 0;
    let rightTotal = 0;

    objects.forEach(obj => {
        const distance = obj.position - halfWidth;
        if(distance < 0){
            leftTorque += obj.weight * Math.abs(distance);
            leftTotal += obj.weight
        }
        else if(distance > 0){
            rightTorque += obj.weight * Math.abs(distance);
            rightTotal += obj.weight;
        }
    });

    const torqueDiff = rightTorque - leftTorque;
    const angle = parseFloat(Math.max(-30, Math.min(30, torqueDiff / 10)).toFixed(2));
    plank.style.transform = `rotate(${angle}deg)`;
    plank.style.transition = 'transform 1.0s ease-in-out';

    updateDisplays(leftTotal, rightTotal, angle);
}

resetButton.addEventListener('click', () => {
    localStorage.removeItem('seesaw');
    objects = [];
    plank.innerHTML = '';
    plank.style.transform = 'rotate(0deg)';
    updateDisplays(0, 0, 0);
});

function updateDisplays(left, right, angle){
    leftWeight.innerText = `Left: ${left} kg`;
    rightWeight.innerText = `Right: ${right} kg`;
    tiltAngle.innerText = `Tilt: ${angle} °`;
}

if (localStorage.getItem('seesaw')) {
    objects = JSON.parse(localStorage.getItem('seesaw'));
    objects.forEach(obj => createObject(obj));
    updateSeesaw();
}