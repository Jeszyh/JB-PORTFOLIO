import Header from './components/Header';
import Icons from './utils/Icons';
import Scrolly from './components/Scrolly';
// import Lottie from './components/Lottie';
import InfoProjet from './components/InfoProjet';
import Carousel from './components/Carousel';
// import Modal from './components/Modal';


export default class ComponentFactory {
  constructor() {
    this.componentInstances = [];
    this.componentList = {
      Header,
      Icons,
      Scrolly,
      // Lottie,
      InfoProjet,
      Carousel,
      // Modal,

    };
    this.init();
  }
  init() {
    const components = document.querySelectorAll('[data-component]');

    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      const componentName = element.dataset.component;

      if (this.componentList[componentName]) {
        const instance = new this.componentList[componentName](element);
        this.componentInstances.push(instance);
      } else {
        console.log(`La composante ${componentName} n'existe pas`);
      }
    }
  }
}
