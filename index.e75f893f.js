var e=document.getElementById("button-vision"),s=document.getElementById("header-button");e.addEventListener("click",function(){document.getElementById("message").scrollIntoView({behavior:"smooth"})}),s.addEventListener("click",function(){document.getElementById("work").scrollIntoView({behavior:"smooth"})});var i=document.getElementById("arrow-left"),t=document.getElementById("arrow-right"),d=document.getElementById("slides");function l(e){var s=d.className;switch(!0){case s.includes(1)&&"right"===e:d.classList.remove("slider__slides--1-slide"),d.classList.add("slider__slides--2-slide");break;case s.includes(2)&&"right"===e:d.classList.remove("slider__slides--2-slide"),d.classList.add("slider__slides--3-slide");break;case s.includes(2)&&"left"===e:d.classList.remove("slider__slides--2-slide"),d.classList.add("slider__slides--1-slide");break;case s.includes(3)&&"left"===e:d.classList.remove("slider__slides--3-slide"),d.classList.add("slider__slides--2-slide")}}i.addEventListener("click",function(){return l("left")}),t.addEventListener("click",function(){return l("right")});
//# sourceMappingURL=index.e75f893f.js.map