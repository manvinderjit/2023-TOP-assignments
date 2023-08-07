let outputCountdown = document.querySelector('#countdown');
outputCountdown.innerHTML = '';

//Launch Countdown 10 to 0
let i = 10;
for(i; i>=0; i--){
    const para = document.createElement('p');
    if(i === 10){
        para.textContent = `Countdown ${i}`;
    }else if(i === 0 ){
        para.textContent = `Blast Off`;
    }else {
        para.textContent = `${i}`;
    }
    
    outputCountdown.appendChild(para);
}


// Filling in a guest list

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

let admitted = document.querySelector('.admitted');
let refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here
for(let person of people){
    if(person === "Phil" || person === "Lola"){
        refused.textContent += `${person}, `;
    }else {
        admitted.textContent += `${person}, `;
    }
}

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';