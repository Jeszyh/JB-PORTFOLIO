import lottie from 'lottie-web';

export default class Lottie {
    constructor(element) {
      this.element = element;
      this.items = [];
      this.init();
      
    }
  
    init() {
      // Sélectionner tous les éléments avec l'attribut data-lottie
      const items = this.element.querySelectorAll('[data-lottie]');
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
  
        // Obtenir le chemin du fichier Lottie depuis l'attribut data-lottie
        const animationPath = item.getAttribute('data-lottie');
  
        // Initialiser l'animation Lottie pour cet élément
        const animation = lottie.loadAnimation({
          container: item, // l'élément qui contiendra l'animation
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: animationPath, // Chemin du fichier Lottie
        });
  
        // Stocker l'animation et l'élément pour référence ultérieure
        this.items.push({
          element: item,
          animation: animation,
        });
  
        // Ajouter les écouteurs d'événements pour l'interactivité
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
  