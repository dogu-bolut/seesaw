const seesawContainer = document.getElementById('seesaw-container');
const plank = document.getElementById('plank');
const leftWeight = document.getElementById('left-weight');
const rightWeight = document.getElementById('right-weight');
const tiltAngle = document.getElementById('tilt-angle');

let objects = [];
const halfWidth = 200;

seesawContainer.addEventListener('click', (e) => {
    const position = e.offsetX;
    const weight = Math.floor(Math.random() * 10) + 1;
    const color = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    const object = {position, weight, color};
    objects.push(object);
    createObject(object);
    updateSeesaw();
});

function createObject(obj){
    const div = document.createElement('div');
    div.className = 'object';
    div.style.transform = `translateX(${obj.position - 20 / 2}px)`;
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
    const angle = Math.max(-30, Math.min(30, torqueDiff / 10));
    plank.style.transform = `rotate(${angle}deg)`;

    leftWeight.innerText = `Left: ${leftTotal} kg`;
    rightWeight.innerText = `Right: ${rightTotal} kg`;
    tiltAngle.innerText = `Tilt: ${angle} deg`;
}