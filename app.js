const sldBtn = document.querySelectorAll("[data-carousel-button]");
 

sldBtn.forEach(button => {
    button.addEventListener('click',()=>{
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if(newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

const el = document.querySelector('.home__body__card4');

const hiddenDiv = document.querySelector('#home__body__card4__icon');

el.addEventListener('mouseover', function handleMouseOver() {
    hiddenDiv.style.display = 'block';
});


el.addEventListener('mouseout', function handleMouseOut() {
    hiddenDiv.style.display = 'none';

  });
  

  const icn = document.querySelector('.home__body__card1');

const hiddDiv = document.querySelector('#home__body__card1__icon');

icn.addEventListener('mouseover', function hanMouseOver() {
    hiddDiv.style.display = 'block';
});


icn.addEventListener('mouseout', function hanMouseOut() {
    hiddDiv.style.display = 'none';

  });





  const ic = document.querySelector('.home__body__card2');

const hidDiv = document.querySelector('#home__body__card2__icon');

ic.addEventListener('mouseover', function hanMouseOver() {
    hidDiv.style.display = 'block';
});


ic.addEventListener('mouseout', function hanMouseOut() {
    hidDiv.style.display = 'none';

  });
  

  const ele = document.querySelector('.home__body__card3');

const hiddenDivv = document.querySelector('#home__body__card3__icon');

ele.addEventListener('mouseover', function handleMouseOver() {
    hiddenDivv.style.display = 'block';
});


ele.addEventListener('mouseout', function handleMouseOut() {
    hiddenDivv.style.display = 'none';

  });
  