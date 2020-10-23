const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();

recognition.interimResults= true;
// real time recognition when we are talking

let p = document.createElement('p');

recognition.addEventListener('result', (e)=> {
    
    //map the result and add them together
    const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')

    //to show result to index
    p.innerText = text;

    texts.appendChild(p);

    if(e.results[0].isFinal){
        // for the reply
        if(text.includes('hello')){
            p=document.createElement('p')
            //adding class to our reply
            p.classList.add('replay');
            p.innerText = 'Hi';

            texts.appendChild(p);
        }
        if (text.includes('what is your name') || text.includes("what's your name")) {
            p = document.createElement('p')
            //adding class to our reply
            p.classList.add('replay');
            p.innerText = 'my name is Bot, Yours?';

            texts.appendChild(p);
        }
        //to create a new paragraph when new seesion
        p = document.createElement('p')
    }
    
    //console.log(e.results)
    console.log(text)
})

recognition.addEventListener('end', ()=> {
    //when one session ends we are starting antoher recoginition event
    recognition.start()
})

recognition.start();