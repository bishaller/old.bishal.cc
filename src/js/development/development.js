    let intro = {};
    intro.opacityIn = [0,1];
    intro.translateIn = ['25%','50%'];
    intro.translateOut = ['50%','60%'];
    intro.translateY = ['-50%','-50%'];
    intro.durationIn = 500;
    intro.durationOut = 300;
    intro.delay = 100;
    intro.easing = "easeInOutQuad";
    
    anime.timeline()
      .add({
        targets: '.siteLoader__intro .siteLoader__word-1',
        opacity: intro.opacityIn,
        duration: intro.durationIn,
        opacity: 1,
        translateX: intro.translateIn,
        translateY: intro.translateY,
        delay: 0,
        easing: intro.easing,
      }).add({
        targets: '.siteLoader__intro .siteLoader__word-1',
        opacity: 0,
        easing: intro.easing,
        duration: intro.durationOut,
        delay: intro.delay,
        color: '#FFF',
        '-webkit-text-fill-color': '#FFF',
      }).add({
        targets: '.siteLoader__intro .siteLoader__word-2',
        opacity: intro.opacityIn,
        opacity: 1,
        translateX: intro.translateIn,
        translateY: intro.translateY,
        easing: intro.easing,
        duration: intro.durationIn,
      }).add({
        targets: '.siteLoader__intro .siteLoader__word-2',
        opacity: 0,
        easing: intro.easing,
        duration: intro.durationOut,
        delay: intro.delay,
        color: '#FFF',
        '-webkit-text-fill-color': '#FFF',
      }).add({
        targets: '.siteLoader__intro .siteLoader__word-3',
        opacity: intro.opacityIn,
        opacity: 1,
        translateX: intro.translateIn,
        translateY: intro.translateY,
        easing: intro.easing,
        duration: intro.durationIn,
      }).add({
        targets: '.siteLoader__intro .siteLoader__word-3',
        opacity: 0,
        easing: intro.easing,
        duration: intro.durationOut,
        delay: intro.delay,
        color: '#FFF',
        '-webkit-text-fill-color': '#FFF',
      }).add({
        targets: '.siteLoader__intro',
        opacity: 0,
        duration: 20,
      }).add({
            targets: 'main',
            width: '100%',
            duration: 500,
            easing: 'easeInOutQuad',
      }, '-=1250').add({ 
            targets: '.grid__card',
            height: '100%',
            opacity: 1,
            translateY: ['50%', '0%'],
            duration: 600,
            easing: 'easeInOutQuad',
        }, '+=200').add({
            targets: '.grid__title, .grid__image',
            duration: 600,
            translateX: ['-60%', '0'],
            opacity: 1,
            easing: 'easeInOutQuad',
        }, '+=100');
    
        class Details {
            constructor() {
                this.DOM = {};
    
                const detailsTmpl = `
                    <div class="letter__bg"></div>
                    <img class="letter__img" src="" alt="img 01"/>
                    <div class="letter__content"></div>
                `;
    
                this.DOM.details = document.createElement('section');
                this.DOM.details.className = 'letter';
                this.DOM.details.innerHTML = detailsTmpl;
                DOM.content.appendChild(this.DOM.details);
                this.init();
            }
            init() {
                this.DOM.bg = this.DOM.details.querySelector('.letter__bg');
                this.DOM.img = this.DOM.details.querySelector('.letter__img');
                this.DOM.description = this.DOM.details.querySelector('.letter__content');
    
                this.initEvents();
            }
            initEvents() {
            }
            fill(info) {
                this.DOM.img.src = info.img;
                this.DOM.description.innerHTML = info.description;
            }
            getProductDetailsRect() {
                return {
                    productBgRect: this.DOM.productBg.getBoundingClientRect(),
                    detailsBgRect: this.DOM.bg.getBoundingClientRect(),
                    productImgRect: this.DOM.productImg.getBoundingClientRect(),
                    detailsImgRect: this.DOM.img.getBoundingClientRect()
                };
            }
            open(data) {
                if ( this.isAnimating ) return false;
                this.isAnimating = true;
    
                this.DOM.details.classList.add('letter--open');
                
                this.DOM.productBg = data.productBg;
                this.DOM.productImg = data.productImg;
    
                const rect = this.getProductDetailsRect();
    
                this.DOM.bg.style.transform = `translateX(${rect.productBgRect.left-rect.detailsBgRect.left}px) translateY(${rect.productBgRect.top-rect.detailsBgRect.top}px) scaleX(${rect.productBgRect.width/rect.detailsBgRect.width}) scaleY(${rect.productBgRect.height/rect.detailsBgRect.height})`;
                this.DOM.bg.style.opacity = 1;
                
                this.DOM.img.style.transform = `translateX(${rect.productImgRect.left-rect.detailsImgRect.left}px) translateY(${rect.productImgRect.top-rect.detailsImgRect.top}px) scaleX(${rect.productImgRect.width/rect.detailsImgRect.width}) scaleY(${rect.productImgRect.height/rect.detailsImgRect.height})`;
                this.DOM.img.style.opacity = 1;
    
                document.querySelector('h1').addEventListener('mouseover', () => {
                    squash.play();
                })
    
                anime({
                    targets: [this.DOM.bg,this.DOM.img],
                    duration: (target, index) => index ? 800 : 400,
                    easing: (target, index) => index ? 'easeOutExpo' : 'easeOutSine',
                    elasticity: 800,
                    translateX: 0,
                    translateY: 0,
                    scaleX: 1,
                    scaleY: 1,
                    complete: () => this.isAnimating = false
                });
    
                anime({
                    targets: [this.DOM.description],
                    duration: 750,
                    easing: 'easeOutExpo',
                    delay: 300,
                    translateY:  (target, index, total) => {
                        return index === total - 1 ? [50,0] : 1;
                    },
                    opacity: 1
                });
            }
        };
    
        class Item {
            constructor(el) {
                this.DOM = {};
                this.DOM.el = el;
                this.DOM.productwrap = this.DOM.el.querySelector('.grid__card');
                this.DOM.product = this.DOM.el.querySelector('.grid__cardInner');
                this.DOM.productBg = this.DOM.product.querySelector('.grid__cardBg');
                this.DOM.productImg = this.DOM.product.querySelector('.grid__image');
    
                this.info = {
                    img: this.DOM.productImg.src,
                    description: this.DOM.product.querySelector('.grid__content').innerHTML,
                };
    
                this.initEvents();
            }
            initEvents() {
                this.DOM.product.addEventListener('click', () => this.open());
            }
            open() {
                document.getElementById('mainID').style.overflow = 'hidden auto';
                this.DOM.product.classList.add('grid__cardInner--hide');
                DOM.details.fill(this.info);
                DOM.details.open({
                    productBg: this.DOM.productBg,
                    productImg: this.DOM.productImg
                });
                
            }
        };
    
        const DOM = {};
        DOM.grid = document.querySelector('.grid');
        DOM.content = DOM.grid.parentNode;
        DOM.gridItems = Array.from(DOM.grid.querySelectorAll('.grid__card'));
        let items = [];
        DOM.gridItems.forEach(item => items.push(new Item(item)));
    
        DOM.details = new Details();        

        function myFunction(x) {
            if (x.matches) { // If media query matches
                var buttonEl = document.querySelector('.grid__card');

                function animateButton(scale, skewX, skewY, duration, elasticity) {
                anime.remove(buttonEl);
                anime({
                    targets: buttonEl,
                    scale: scale,
                    skewX: skewX,
                    skewY: skewY,
                    duration: duration,
                    elasticity: elasticity
                });
                }
        
                function enterButton() { animateButton(1.1, '-3deg', '3deg', 600, 200) };
                function leaveButton() { animateButton(1, '0', '0', 500, 100) };
        
                buttonEl.addEventListener('mouseenter', enterButton, false);
                buttonEl.addEventListener('mouseleave', leaveButton, false);
            }
          }
          
          var x = window.matchMedia("(min-width: 720px)")
          myFunction(x) // Call listener function at run time
          x.mediaQueryList.addListener(myFunction) // Attach listener function on state changes