const arrow = document.querySelector('#arrow');
const tab = document.querySelector('.tab');
let sideTab = false;

function sidetab(){
  console.log('move it');
  sideTab = !sideTab;
  if(!sideTab){
    console.log('one');
    tab.classList.add('hide');
  }
  else{
    console.log('two');
    tab.classList.remove('hide');
  }
}

arrow.addEventListener('click',sidetab);
