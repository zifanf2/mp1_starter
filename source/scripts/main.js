var image_path = "mp1_starter/source/assets/image/"
var intro_tags = ["University of Illinois at Urbana-Champaign 2016--2020","Data Science Lover","Software Engineer"]
var exp_jsons = [
  {
    company: "Jump Trading",
    title: "Software Engineer Intern",
    location: "Champaign",
    duration: "Jan 2019 - Present",
    image: image_path + "jumptrading.png",
    description:
      "The main task is to add new features to a trades visualization software with mainly C++. We built a data checker to check if the processed data is consistent with the raw data. The experience improved my ability to understand and utilize other's code in my project, as well as the C++ programming skills."
  },
  {
    company: "AARP",
    title: "Data Science Intern",
    location: "Champaign",
    duration: "May 2018 - Dec 2018",
    image: image_path + "aarp.gif",
    description:
      `The first task is Competitor Reputation Analysis. My team scraped public discussion about the companies from twitters and over 20 forums and use NLP to analysize their reputations. The NLP techniques we used includes Sentiment Analysis, Topic Modeling, and Keyword Extraction. The program will be ran regularly to provide insights into ratings of the public.<br/>
        The second task is adding new features to a chatbot, which was built with RASA and can answer customers' questions. The features I added include processing single sentence with multiple purposes, handle questions that are not included in database, infer unclear addresses, and conduct spell corrections. 
      `
  },
  {
    company: "Dow AgroScience",
    title: "Data Science Intern",
    location: "Champaign",
    duration: "Jan 2018 - May 2018",
    image: image_path + "dow.png",
    description:
      "The project focused on preprocessing the data with python for later usage with machine learning. We classified the types of proteins with machine learning method, and show how a new method of extracting protein has improved the performance."
  },
  {
    company: "Cline Center for Advanced Social Research",
    title: "Data Science Intern",
    location: "Champaign",
    duration: "Oct 2017 - May 2018",
    image: image_path + "clinecenter.png",
    description:
      "This is the first project to introduce me to NLP. We analysized how opinions and attitudes about the Haiti Disease have changed along the time. The techinques and apis we used include Word of Bag, CoreNLP, etc."
  },
  {
    company: "International Student and Scholar Services",
    title: "Multicultural Intern",
    location: "Champaign",
    duration: "Aug 2017 - May 2018",
    image: image_path + "isss.jpg",
    description:
      "We aimed to help international students better adapt to the new environment in US by holding various events, such as presentations, cultural showcase etc. We also created new programs to better educate university staff about how to communicate with and assist international students better."
  },
  {
    company: "UIUC NetMath",
    title: "Student Mentor",
    location: "Champaign",
    duration: "May 2017 - Oct 2017",
    image: image_path + "netmath.png",
    description:
      "As a mentor of 14 students, I need to make sure to they are in pace with the class with weekly communication, grade their assignments, and answer both academic and logistic questions about the class. The experience teach me how to encourage and guide beginners to code."
  },
];

var work_jsons = [
  {
    title: "Ultimate Frisbee Score Helper",
    area: "Mobile App (React Native)",
    detail: "An app that keep track of points of games and present visualization of data in the view of coach and players."
  },
  {
    title: "Trip Planner",
    area: "React, Google Firebase Firestore, Amazon AWS",
    detail: "Web app that assists users to plan their trips"
  },
  {
    title: "Auto-driving Emulator",
    area: "IoT",
    detail: "Utilize camera, RaspberryPi, Ultrasonic distance sensor, Arduinos to emulate the object detection functionality in auto-driving."
  },
   {
    title: "Number of People V.S. Air Quality",
    area: "IoT",
    detail: "Utilize ESP8266, RaspberryPi, xbees, Arduinos, MQ135 to see if the number of people (detected with ESP8266, a wifi module) and the concentration of CO2 (measured with MQ135)."
  },
  {
    title: "Take-A-Break Reminder",
    area: "IoT, React Native, Amazon AWS",
    detail: "Build an app and a watch that remind people to do exercise if they haven't walk for enough steps within 60 minutes. The watch consists of an arduino, a vibration motor, and an accelerometor ADXL335. The server is hosted on Amazon AWS EC2"
  },
  {
    title: "Amazon Clothes Review Analyze",
    area: "NLP, Python",
    detail: "Scrape amazon clothes reviews and perform keyword extractions to summarize the features of product into different categories"
  },
  {
    title: "Auto-Translate App",
    area: "Android development",
    detail: " Support users chatting with different languages with real time translation"
  },
  {
    title: "Data Processing App",
    area: "R Shiny App",
    detail: "An app written in R that visualizes and analyzes user's uploaded data automatically."
  },
  {
    title: "Wikipedia Movie-Actor Visualization",
    area: "Ruby, D3.js",
    detail: "Utilize Ruby to scrape information of actors and the relevant movies, and the corresponding actors, and visulaize the relations with D3.js"
  },
];

var random_json = [
{
  title: "Ultimate Frisbee",
  images: [image_path + "ultimate1.png", image_path + "ultimate2.jpg", image_path + "ultimate3.jpg"],
},
{
  title: "Cooking",
  images: [image_path + "cooking1.png", image_path + "cooking2.png", image_path + "cooking3.png", image_path + "cooking4.png", image_path + "cooking5.png"],
},
{
  title: "Travel",
  images: [image_path + "travel1.png", image_path + "travel2.png", image_path + "travel3.png", image_path + "travel4.png"]
}
]

var intro_div = document.querySelector(".main-info");
var experience_div = document.querySelector(".experience-div");
var works_div = document.querySelector(".works-div");
var random_div = document.querySelector(".random-div");
var carousel = document.querySelector(".random-carousel-inner");
var contact_div = document.querySelector(".end-div");
var main_div = document.querySelector(".main-div");
var site_wrap = document.querySelector(".site-wrap");
var nav = document.querySelector(".nav-div");

carousel.addEventListener("click", console.log("random-carousel-inner"));

function modify_intro_block(intro_tags, intro_div) {
  let intro_tags_html = "";
  for(let i = 0; i < intro_tags.length; i++){
    intro_tags_html += `<h6>${intro_tags[i]}</h6>`
  }
  
  intro_div.innerHTML = `<div class="intro-div">
                      <h1 class="intro-name" >Zifan Feng</h1>
                      <div class="intro-tags">${intro_tags_html}</div>
                      </div>`
} 

function add_experience_block(exp_jsons, experience_div) {
  exp_jsons.map(exp_json => {
    let new_exp = document.createElement("DIV");
    new_exp.innerHTML = `
      <div class="experience-block">
      <img src=${exp_json.image}>
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

function add_random_carousal(random_div,random_json) {
  for (var i = 0; i < random_json.length; i++) {
    let new_carousal = document.createElement("DIV");
    let cur_data = random_json[i];
    new_carousal.classList.add("random-carousel-item");
    if (i==0)
       new_carousal.classList.add("random-carousel-active");
    let images = '';
    for (var j = 0; j < cur_data.images.length; j++) {
      images = `${images}<img src=${cur_data.images[j]}/>`
    }
    new_carousal.innerHTML = `
      <div class="random-carousel-imgs">
       ${images}
      </div>
        <p>${cur_data.title}</p>
    `;
    carousel.append(new_carousal);
  }
}

modify_intro_block(intro_tags, intro_div);
add_experience_block(exp_jsons, experience_div);
add_work_block(work_jsons, works_div);
add_random_carousal(random_div, random_json);

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


const logo = document.querySelector("#nav-logo");

const nav_exp = nav.querySelector("#nav-exp");
const nav_works = nav.querySelector("#nav-works");
const nav_random = nav.querySelector("#nav-random");
const nav_contact = nav.querySelector("#nav-contact");

var site_wrapY = site_wrap.offsetTop;
var navY = nav.offsetTop;
var introY = main_div.offsetTop + site_wrapY;
var experienceY = experience_div.offsetTop + site_wrapY;
var workY = works_div.offsetTop + site_wrapY;
var randomY = random_div.offsetTop + site_wrapY;
var contactY = document.querySelector(".end-div").offsetTop + site_wrapY;


function toggleFix() {
  
  let scrollY = this.scrollY + 1;
  let nav_curHeight = nav.getBoundingClientRect().height;
  if (scrollY >= (introY)) {
    nav.style.position="fixed";
    document.body.classList.add("nav-fix");
    // site_wrap.style.paddingTop = nav_intro.clientHeight + "px";
  } 
  else {
    document.body.classList.remove("nav-fix");
    nav.style.position="relative";
    // site_wrap.style.paddingTop = 0;
  }


  if (scrollY >= experienceY&& scrollY < workY) {
    nav_exp.classList.add("nav-highlight");
  } else {
    nav_exp.classList.remove("nav-highlight");
  }

  if (scrollY >= workY&& scrollY < randomY ) {
    nav_works.classList.add("nav-highlight");
  } else {
    nav_works.classList.remove("nav-highlight");
  }

  if (scrollY >= randomY&& scrollY < contactY ) {
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
logo.addEventListener("click", function(e) {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

var prev_slide = document.querySelector(".prev");
var next_slide = document.querySelector(".next");


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

