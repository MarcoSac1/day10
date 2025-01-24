const sendBtn = document.querySelector(' button');
const containerEL = document.querySelector('div');
// console.log(containerEL);

sendBtn.addEventListener('click', function(event){
    // console.log('clik', sendBtn);
    
    let computerNum = Math.floor(Math.random() * 50 + 1);
    // console.log(computerNum);
    let inpT = document.querySelector('input'); // seleziono l'input 
    let userNum = inpT.value;
    // console.log(userNum);

    if (inpT.value ==='') {
        alert('first insert a number');
    
    }else if(computerNum < userNum ){
        // console.log('umani vincono!');
        let newP = document.createElement('p'); // Crea un nuovo elemento p
        newP.textContent = inpT.value + 'Gli umani vincono !'; // Imposta il contenuto del p con il valore dell'input
        containerEL.appendChild(newP); // Aggiungi il nuovo p al container
        newP.classList.add('green')// Aggiungo una classe
        
    }else if (computerNum > userNum){
        // console.log('computer vincono!')
        let newP = document.createElement('p'); // Crea un nuovo elemento p
        newP.textContent = inpT.value + ' Il computer vince ! '; // Imposta il contenuto del p con il valore dell'input
        containerEL.appendChild(newP); // Aggiungi il nuovo p al container
        newP.classList.add('red') // Aggiungo una classe
        
    }else{
        // console.log('parità')
        let newP = document.createElement('p'); // Crea un nuovo elemento p
        newP.textContent = inpT.value + ' Parità ! '; // Imposta il contenuto del p con il valore dell'input
        containerEL.appendChild(newP); // Aggiungi il nuovo p al container
        newP.classList.add('even') // Aggiungo una classe
    }
    inpT.value = ''; // Resetta il valore dell'input
});


