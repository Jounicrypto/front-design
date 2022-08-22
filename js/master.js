//Toggle Spin Class on Icon
document.querySelector(".toggle-settings .fa-gear").onclick = function(){
    
    this.classList.toggle("fa-spin");

    //Toggle Class Open
document.querySelector(".settings-box").classList.onclick("open");

};



//Select Landing Page Element
let landingPage = document.querySelector(".landing-page")

//Get Array Of Images
let imgsArray = ["01.jpg", "02.jpg", "03.jpg"]


setInterval(()=>{

    //Get Random Number
let randomNumber = Math.floor(Math.random() * imgsArray.length);

//Change Background Images Url
landingPage.style.backgroundImage = 'url("images/'+ imgsArray[randomNumber] + '")'

},15000);


//Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function (){

    //Skills Offset Top
    let skillsOffsetTop = ourSkills.skillsOffsetTop;

    //Skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;

    //window height
    let windowHeight = this.innerHeight;

    //Window ScrollTop
    let windowScrollTop = this.pageYOffset;
    
    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)){

        let allSkills = document.querySelectorAll(".skill-box .progress1");

        allSkills.forEach(skill => {

            skill.style.width = skill.dataset.progress1;
        });

    }
}