import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    let mod = document.createElement("div");
    mod.className ="modal";
    let overlay = mod.appendChild(document.createElement('div'));
   overlay.className ="modal__overlay";
   let inner = mod.appendChild(document.createElement('div'));
   inner.className = "modal__inner";
   this.innr = inner;
   let header = inner.appendChild(document.createElement('div'));
   header.className = "modal__header";
   let closeButton = header.appendChild(document.createElement('button'));
   closeButton.type ="button";
   closeButton.className = "modal__close";
   let imgCloseButton = closeButton.appendChild(document.createElement('img'));
   imgCloseButton.alt = "close-icon";
   imgCloseButton.src = "/assets/images/icons/cross-icon.svg";
   let title = header.appendChild(document.createElement('h3'));
   title.className = "modal__title";
   this.titl = title;
   let mdlBody = inner.appendChild(document.createElement('div'));
   mdlBody.className = "modal__body";
   this.mdlBody = mdlBody;
   this.node = mod;

   document.body.addEventListener('keydown', function(event){
    if (event.code == 'Escape') {
      document.body.classList.remove('is-modal-open');
    mod.remove();
    }
  })


  closeButton.addEventListener('click', function(){
    document.body.classList.remove('is-modal-open');
    mod.remove();
  })
 }

 setTitle (text) {
     this.titl.innerHTML = text;
   }
 setBody (modalBody) {
  this.mdlBody.innerHTML = '';
this.mdlBody.append(modalBody);
   }

 open () {
    document.body.appendChild(this.node);
     document.querySelector('body').classList.add('is-modal-open');
     
    }
    
  close() {
    let modal = document.querySelector('.modal');
    if (modal){
    modal.remove();  
    }
    document.body.classList.remove('is-modal-open');
    
  }
}

