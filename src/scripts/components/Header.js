 export default class Header {
    constructor(element) {
        this.element = element;
        this.scrollLimit = this.element.dataset.scrollLimit;
        this.scrollPosition = 0;
        this.html = document.documentElement;
        this.autoHide = this.element.dataset.autoHide;
        this.init();
        this.initNavMobile();
        
      }

    
      init() {
        window.addEventListener('scroll', this.onScroll.bind(this));
        window.addEventListener('resize', this.resize.bind(this));

      }
      resize(){
        let resizeTimer;
        window.addEventListener('resize', () => {
          this.html.classList.add('disable-transitions');
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(() => {
              this.html.classList.remove('disable-transitions');
          }, 200);
      });
      }
    
      onScroll(event) {
        this.lastScrollPosition = this.scrollPosition;
        this.scrollPosition = document.scrollingElement.scrollTop;
        if (this.autoHide == 'true') {
          this.setHeaderState();
          this.setDirectionState();
        }
      }
    
      setHeaderState() {
        const scrollHeight = document.scrollingElement.scrollHeight;
        if (this.scrollPosition > scrollHeight * this.scrollLimit) {
          this.html.classList.add('header-is-hidden');
        } else {
          this.html.classList.remove('header-is-hidden');
        }
      }
      setDirectionState() {
        if (this.scrollPosition >= this.lastScrollPosition) {
          this.html.classList.add('is-scrolling-down');
          this.html.classList.remove('is-scrolling-up');
        } else {
          this.html.classList.add('is-scrolling-up');
          this.html.classList.remove('is-scrolling-down');
        }
      }
      initNavMobile() {
        const toggle = this.element.querySelector('.js-toggle');
        toggle.addEventListener('click', this.onToggleNav.bind(this));
      }
      onToggleNav() {
        this.html.classList.toggle('nav-is-active');
      }
}