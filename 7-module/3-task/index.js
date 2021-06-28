export default class StepSlider {
  constructor({ steps, value = 0 }) {{
    let slider = document.body.appendChild(document.createElement('div'));
        slider.className = 'slider';
        this.elem = slider;
    let sliderThumb = slider.appendChild(document.createElement('div'));
        sliderThumb.className = 'slider__thumb';
        sliderThumb.style = 'left: 0%';
        let sliderValue = sliderThumb.appendChild(document.createElement('span'));
            sliderValue.className = 'slider__value';
            this.value = value;
            sliderValue.textContent = value
    let sliderProgress = slider.appendChild(document.createElement('div'));
        sliderProgress.className = 'slider__progress';
        sliderProgress.style = 'width: 0%';
    let sliderSteps = slider.appendChild(document.createElement('div'));
        sliderSteps.className = 'slider__steps';
        for (let i = 0; i < steps; i++) {
           let span = sliderSteps.appendChild(document.createElement('span'));
           
          };
         
        sliderSteps.firstChild.classList.add('slider__step-active');
    
       slider.addEventListener('click', changingClick);
       function changingClick (event){
         let leftRel = (event.clientX - slider.getBoundingClientRect().left) / slider.offsetWidth;
         slider.value = Math.round(leftRel * (steps - 1));
         sliderValue.textContent = slider.value;
         let valuePers = slider.value / (steps - 1) * 100;
         this.value = slider.value;

         let sliderEvent =  new CustomEvent('slider-change', {
          detail: this.value,
          bubbles: true
        });
        slider.dispatchEvent(sliderEvent);

        for (let i = 0; i < steps; i++) {
        if (document.querySelector('.slider__steps').childNodes[i].value == slider.value) {
        document.querySelector('.slider__steps').childNodes[i].classList.add('slider__step-active');
        }
        if (document.querySelector('.slider__steps').childNodes[i].value > slider.value) {
        document.querySelector('.slider__steps').childNodes[i].classList.remove('slider__step-active');
        }
        }
        document.querySelector('.slider__thumb').style.left = valuePers + '%';
        document.querySelector('.slider__progress').style.width = valuePers + '%';
      } 
    }
  }
}