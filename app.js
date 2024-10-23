const textElement = document.getElementById('text');
const texts = ["“Legnagyobb cél pedig, itt, e földi létben, Ember lenni mindég, minden körülményben.”", "“Az ember legnagyobb kincse az idő, mert az életnek ez az egyetlen kincse, és minden más csak az idővel együtt járó kincs.”", "“Útjaink százfelé válnak, De szívünk egy célért dobog, Nekivágunk a küzdelmes mának, És épít karunk egy szebb holnapot.”"];
let index = 0;

function changeText() {

  textElement.style.transform = 'translateX(-150%)';
  

  setTimeout(() => {
    index = (index + 1) % texts.length; 
    textElement.innerText = texts[index];
    textElement.style.transform = 'translateX(100%)'; 
    

    setTimeout(() => {
      textElement.style.transform = 'translateX(0)';
    }, 50);
  }, 1000);
}


setInterval(changeText, 5000);
