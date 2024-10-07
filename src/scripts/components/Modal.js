import Utils from '../utilities/Utils';


export default class Modal {
  constructor(element) {
    this.element = element;
    this.modalId = this.element.dataset.modalId;

    this.init();
  }
  init() {
    this.element.addEventListener('click', this.open.bind(this));

    this.close = this.close.bind(this);
  }
  

  updateContent() {
    if (this.modalId == 'tpl-modal-tool') {
      this.modalElement.innerHTML = Utils.parseTemplate(
        this.modalElement.innerHTML,
        { title: this.element.dataset.modalTitle }
      );

      this.modalElement.innerHTML = Utils.parseTemplate(
        this.modalElement.innerHTML,
        { image: this.element.dataset.modalImg }
      );

      //const classElement = '.' + this.element.dataset.modalBg;
      //const bgColor = window.getComputedStyle(document.querySelector(classElement));

      //const classElModal = document.documentElement.querySelector('.modal__box');
      //const bgColorModal = window.getPropertyStyle(document.querySelector(classElModal));

      //console.log(classElModal);
      //console.log(bgColor.getPropertyValue("background-color"));
      //classElModal.getComputedStyle = Utils.parseTemplate(
      //  cla.getComputedStyle,
      //  bgColor.getPropertyValue("background-color")
      //);
    }
  }

  open(event) {
    event.preventDefault();
    this.appendModal();
  }

  close(event) {
    document.documentElement.classList.remove('modal-is-active');
    this.closeButton.removeEventListener('click', this.close);

    setTimeout(this.destroy.bind(this), 1000);
  }

  destroy() {
    this.modalElement.parentElement.removeChild(this.modalElement);
  }

  appendModal() {
    const template = document.querySelector(`#${this.modalId}`);

    if (template) {
      this.modalElement = template.content.firstElementChild.cloneNode(true);

      this.updateContent();

      document.body.appendChild(this.modalElement);
      

      this.element.getBoundingClientRect();
      document.documentElement.classList.add('modal-is-active');

      this.closeButton = this.modalElement.querySelector('.js-close');
      this.closeButton.addEventListener('click', this.close);
      document.addEventListener(
        'keydown',
        function(event){
          if (event.key == 'Escape'){
            this.close();
          }
        }.bind(this)
      );
    } else {
      console.log(`La <template> avec le id ${this.modalId} n'existe pas`);
    }
  }
}
