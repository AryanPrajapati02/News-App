const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });


const news11 = document.querySelector("#title11");
const des11 = document.querySelector("#description11");
const news21 = document.querySelector("#title21");
const des21 = document.querySelector("#description21");
const news31 = document.querySelector("#title31");
const des31 = document.querySelector("#description31");
const news41 = document.querySelector("#title41");
const des41 = document.querySelector("#description41");
const news12 = document.querySelector("#title12");
const des12 = document.querySelector("#description12");
const news22 = document.querySelector("#title22");
const des22 = document.querySelector("#description22");
const news32 = document.querySelector("#title32");
const des32 = document.querySelector("#description32");
const news42 = document.querySelector("#title42");
const des42 = document.querySelector("#description42");
const news = document.querySelector("#news1")



async function livenews() {
    const api_key = "3e3ff107df3247348a347164ccd53bd1";
    const url1 = `https://newsapi.org/v2/top-headlines?category=science&apiKey=3e3ff107df3247348a347164ccd53bd1&country=in `;

    const news_data = await fetch(`${url1}`).then(response => response.json());
    news11.innerText = news_data.articles[0].
    title;
    des11.innerText = news_data.articles[0].description;
    news21.innerText = news_data.articles[1].
    title;
    des21.innerText = news_data.articles[1].description;
    news31.innerText = news_data.articles[2].
    title;
    des31.innerText = news_data.articles[2].description;
    console.log(news_data.articles);
}
// pub_496717bedb641029d4be124fcb24ce74be212
// https://newsdata.io/api/1/news?apikey=pub_496717bedb641029d4be124fcb24ce74be212&q=defence&country=in&language=en&category=domestic 
livenews()
gsap.from("#page1 h1",{
    opacity:0,
    duration:2,
    delay:0.2,
    y:"50"
})

gsap.to("#marque",{
    transform: 'translateX(-100%)',
    duration:0.7,
    repeat:-1,
    ease:"none"
})

