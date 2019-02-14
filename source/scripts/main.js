var intro_div = document.querySelector(".intro-div");
var experience_div = document.querySelector(".experience-div");
var works_div = document.querySelector(".works-div");
var random_div = document.querySelector(".random-div");
var carousel = document.querySelector(".random-carousel-inner");
var contact_div = document.querySelector(".end-div");
var main_div = document.querySelector(".main-div");
var site_wrap = document.querySelector(".site-wrap");
var nav = document.querySelector(".nav-div");

carousel.addEventListener("click", console.log("random-carousel-inner"));
function add_experience_block(exp_jsons, experience_div) {
  exp_jsons.map(exp_json => {
    let new_exp = document.createElement("DIV");
    new_exp.innerHTML = `
      <div class="experience-block">
      <img src="https://picsum.photos/200/300random">
      <div class="experience-info">
        <div class="experience-company">
            ${exp_json.company}
        </div>
        <div class="experience-title">
          ${exp_json.title}
        </div>
        <div class="experience-location">
          ${exp_json.location}
        </div>
        <div class="experience-description">
          ${exp_json.description}
        </div>
      </div>
    </div>
    `;

    experience_div.append(new_exp);
  });
}

function add_work_block(works_jsons, works_div) {
  works_jsons.map((work_json, idx) => {
    let new_work = document.createElement("DIV");
    new_work.innerHTML = `
      <div class="works-item works-item${idx + 1}">
        <h4 class="works-title">${work_json.title}</h4>
        <p class="works-area">${work_json.area}</p>
      </div>
    `;
    works_div.append(new_work);
  });
}

function add_random_carousal(random_div) {
  for (var i = 0; i < 5; i++) {
    let new_carousal = document.createElement("DIV");
    new_carousal.classList.add("random-carousel-item");
    if (i==0)
       new_carousal.classList.add("random-carousel-active");
    new_carousal.innerHTML = `
      <div class="random-carousel-imgs">
       <img src="https://picsum.photos/${getRandomInt(3) + 2}00/${getRandomInt(
      3
    ) + 2}00random" alt="Los Angeles"/>
<img src="https://picsum.photos/${getRandomInt(3) + 2}00/${getRandomInt(
      3
    ) + 2}00random" alt="Los Angeles"/>
      <img src="https://picsum.photos/${getRandomInt(3) + 2}00/${getRandomInt(
      3
    ) + 2}00random" alt="Los Angeles"/>
      </div>
       
        <p>Caption ${i}</p>
    `;
    carousel.append(new_carousal);
  }
}

var exp_jsons = [
  {
    company: "Moon",
    title: "Mooncake Maker",
    location: "FAAAAAAAAaaaaaAAAAAR",
    description:
      "The Moon is humanity’s nearest companion in our travels in space and the only celestial body that we have had the chance to actually visit. Still, despite its relative closeness and familiarity, our satellite continues to hold many interesting secrets. From its scientific strangeness to the many ways it affects our lives, the Moon is a mystery that is definitely worth a closer look."
  },
  {
    company: "Sleepy Beauty",
    title: "Waker",
    location: "Dorms",
    description:
      "Filled with jealousy, the evil witch Maleficent (Eleanor Audley) curses Princess Aurora (Mary Costa) to die on her 16th birthday. Thanks to Aurora's guardian fairies (Verna Felton, Barbara Jo Allen, Barbara Luddy), she only falls into a deep sleep that can be ended with a kiss from her betrothed, P"
  }
];

var work_jsons = [
  {
    title: "Amazon Review Analyze",
    area: "NLP",
    detail: "but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, b"
  },
  {
    title: "Auto-Translate App",
    area: "Android development",
    detail: " editors like MS Word or Lotus Notes generate random lorem text when needed, either as pre-installed module or plug-in to be added. Word selection or sequence don't necessarily match the original, which is intended to add variety. Presentation software like Keynote or Pages use it as a samples for screenplay layout. Content management software as Joomla, Drupal, Mambo"
  },
  {
    title: "Data Processing App",
    area: "R Shiny App",
    detail: " and potentially serious design flaws. A seemingly elegant design can quickly begin to bloat with unexpected content or break under the weight of actual activity. Fake data can ensure a nice looking layout but it doesn’t reflect what a living, breathing a"
  },
  {
    title: "UIUC Gender Visualization",
    area: "D3.js",
    detail: " professional use templating systems. Commercial publishing platforms and content management systems ensure that you can show different text, different data using the same template. When it's about controlling hundreds of articles, product pages for web shops, or user profiles in social networks, al"
  },
  {
    title: "Space Invader",
    area: "C++",
    detail: "lient to pay no attention Lorem Ipsum isn't hard as it doesn’t make sense in the first place, that will limit any initial interest soon enough. Try telling a client to ignore draft copy however, and you're up to something you can't win. Whenever draft copy comes up in a meeting confused questions about it ensue. editors like MS Word or Lotus Notes generate random lorem text when needed, either as pre-installed module or plug-in to be added. Word selection or sequence don't necessarily match the original, which is intended to add variety. Presentation software like Keynote or Pages use it as a samples for screenplay layout. Content management software as Joomla, Drupal, Mambo"
  }
];
add_experience_block(exp_jsons, experience_div);
add_work_block(work_jsons, works_div);

window.plusSlides = function(num) {
  console.log(num);
  var slideContainer = document.querySelector(".random-carousel-inner");
  let curIdx = parseInt(slideContainer.dataset.slideidx);
  let nextIdx = curIdx + num;
  var slides = document.querySelectorAll(".random-carousel-item");
  if (nextIdx >= slides.length) {
    nextIdx = 0;
  }
  if (nextIdx < 0) {
    nextIdx = slides.length - 1;
  }
  slides[curIdx].classList.remove("random-carousel-active");
  slides[nextIdx].classList.add("random-carousel-active");
  slideContainer.dataset.slideidx = nextIdx;
}

function getRandomInt(max) {
  let num = Math.floor(Math.random() * Math.floor(max));
  return num;
}
add_random_carousal(random_div);

const logo = document.querySelector("#nav-logo");

const nav_intro = nav.querySelector("#nav-intro");
const nav_exp = nav.querySelector("#nav-exp");
const nav_works = nav.querySelector("#nav-works");
const nav_random = nav.querySelector("#nav-random");
const nav_contact = nav.querySelector("#nav-contact");

var site_wrapY = site_wrap.offsetTop;
var navY = nav.offsetTop;
var introY = intro_div.offsetTop + site_wrapY;
var experienceY = experience_div.offsetTop + site_wrapY;
var workY = works_div.offsetTop + site_wrapY;
var randomY = random_div.offsetTop + site_wrapY;
var contactY = document.querySelector(".end-div").offsetTop + site_wrapY;


function toggleFix() {
  
  let scrollY = this.scrollY;
  let nav_curHeight = nav.getBoundingClientRect().height;
  if (scrollY >= (introY)) {
    console.log(nav_curHeight, scrollY, navY);
    nav.style.position="fixed";
    document.body.classList.add("nav-fix");
    // site_wrap.style.paddingTop = nav_intro.clientHeight + "px";
  } 
  else {
    document.body.classList.remove("nav-fix");
    nav.style.position="relative";
    // site_wrap.style.paddingTop = 0;
  }

  if (scrollY >= introY && scrollY < experienceY ) {
    nav_intro.classList.add("nav-highlight");
    
  } else {
    nav_intro.classList.remove("nav-highlight");
    
  }

  if (scrollY >= experienceY&& scrollY < workY) {
    nav_exp.classList.add("nav-highlight");
  } else {
    nav_exp.classList.remove("nav-highlight");
  }

  if (scrollY >= workY&& scrollY < randomY ) {
        console.log(scrollY, randomY, workY);
    nav_works.classList.add("nav-highlight");
  } else {
    nav_works.classList.remove("nav-highlight");
  }

  if (scrollY >= randomY&& scrollY < contactY ) {
    console.log("in random", scrollY, randomY, workY);
    nav_random.classList.add("nav-highlight");
  } else {
    nav_random.classList.remove("nav-highlight");
  }

  if (scrollY >= contactY || (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    nav_random.classList.remove("nav-highlight");
    nav_contact.classList.add("nav-highlight");
  } else {
    nav_contact.classList.remove("nav-highlight");
  }
}
window.addEventListener("scroll", toggleFix);
nav_contact.addEventListener("click", function(e) {
  window.scrollTo({ top: contactY, behavior: "smooth" });
});
nav_exp.addEventListener("click", function(e) {
  window.scrollTo({ top: experienceY, behavior: "smooth" });
});
nav_works.addEventListener("click", function(e) {
  window.scrollTo({ top: workY, behavior: "smooth" });
});
nav_random.addEventListener("click", function(e) {
  window.scrollTo({ top: randomY, behavior: "smooth" });
});
nav_intro.addEventListener("click", function(e) {
  window.scrollTo({ top: introY, behavior: "smooth" });
});

logo.addEventListener("click", function(e) {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

var prev_slide = document.querySelector(".prev");
var next_slide = document.querySelector(".next");
// prev_slide.addEventListener("click", plusSlides(-1), false);
// next_slide.addEventListener("click", plusSlides(1), false);

var works_items = document.querySelectorAll(".works-item");
var works_modal = document.querySelector(".works-modal");
var works_modal_content = document.querySelector(".works-modal-content");
works_div.addEventListener("click", function(e) {
  e.stopPropagation();
  works_modal.classList.remove("show-modal");
}, false);

works_items.forEach(function(item, idx) {
  item.addEventListener("click", function(e) {
    e.stopPropagation();
     works_modal.classList.add("show-modal");
     works_modal_content.innerHTML = `
      <h4 class="modal-text-title">${work_jsons[idx].title}</h4>
      <p class="modal-text-area"><i>${work_jsons[idx].area}</i></p>
         <p class="modal-text-detail">${work_jsons[idx].detail}</p>
    `;
  }, false);
})