// export default class Scrolly {
//     constructor(element){
//         this.element=element;
//         this.options={
//             rootMargin:'0px 0px 0px 0px',
//         };

//         this.init();
//     }
//     init(){
//         this.observer = new IntersectionObserver(this.watch.bind(this), this.options);

//         const items = this.element.querySelectorAll('[data-scrolly]');
//         for (let i = 0; i < items.length; i++) {
//             const item = items[i];
//             this.observer.observe(item); 
//         }
//     }
//     watch(entries){
//         for (let i = 0; i < entries.length; i++) {
//             const entry = entries[i];
//             const target = entry.target;
            
//             if (entry.isIntersecting) {
//                 target.classList.add('is-active');
//                 this.observer.unobserve(target);
//             }else {
//                 target.classList.remove('is-active');
//             }
//         }
//     }
// }

// export default class Scrolly {
//     constructor(element) {
//       this.element = element;
//       this.options = {
//         rootmargin: '0px 0px 0px 0px',
//       };
//       this.init();
//     }
  
//     init() {
//       const observer = new IntersectionObserver(
//         this.watch.bind(this),
//         this.options
//       );
//       const items = this.element.querySelectorAll('[data-scrolly]');
//       for (let i = 0; i < items.length; i++) {
//         const item = items[i];
//         observer.observe(item);
//       }
//     }
  
//     watch(entries) {
//       for (let i = 0; i < entries.length; i++) {
//         const entry = entries[i];
//         const target = entry.target;
  
//         if (entry.isIntersecting) {
//           target.classList.add('is-active');
//         } else if (target.dataset.noRepeat != '') {
//           target.classList.remove('is-active');
//         }
//       }
//     }
//   }



  export default class Scrolly {
    constructor(element) {
      this.element = element;
      this.options = {
        rootMargin: '0px 0px 0px 0px',
      };
      this.init();
    }
  
    init() {
      const observer = new IntersectionObserver(
        this.watch.bind(this),
        this.options
      );
      const items = this.element.querySelectorAll('[data-scrolly]');
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        observer.observe(item);
      }
    }
  
    watch(entries, observer) {
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const target = entry.target;
  
        if (entry.isIntersecting) {
          target.classList.add('is-active');
  
          // Si l'élément a `data-no-repeat="true"`, on arrête de l'observer
          if (target.dataset.noRepeat === 'true') {
            observer.unobserve(target);
          }
        } else {
          // Si data-no-repeat est présent, on ne retire pas la classe
          if (target.dataset.noRepeat !== 'true') {
            target.classList.remove('is-active');
          }
        }
      }
    }
  }