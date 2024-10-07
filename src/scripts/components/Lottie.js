import lottie from 'lottie-web';

export default class Lottie {
    constructor(element) {
      this.element = element;
      this.items = [];
      this.init();
      
    }
  
    init() {
      
      const items = this.element.querySelectorAll('[data-lottie]');
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
  
        
        const animationPath = item.getAttribute('data-lottie');
  
        
        const animation = lottie.loadAnimation({
          container: item, 
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: animationPath, 
        });
  
       
        this.items.push({
          element: item,
          animation: animation,
        });
  
        
        item.addEventListener('mouseenter', () => this.playAnimation(animation));
        item.addEventListener('mouseleave', () => this.stopAnimation(animation));
      }
    }
  
    playAnimation(animation) {
      animation.loop = true;
      animation.play();
    }
  
    stopAnimation(animation) {
      animation.loop = false;
      animation.stop();
    }
  }
  