const textElement = document.getElementById('textElement');
const words = ["Web devloper", "Frontend devloper", "Backend devloper"];
let currentIndex = 0;

function changeText() {
    textElement.textContent = words[currentIndex];
    currentIndex = (currentIndex + 1) % words.length;

}

// Change the text every 2 seconds (2000 milliseconds)
setInterval(changeText, 1500);

function opentab(tabname){
    // tabcontent.classlist.remove("active-tab"); 

    var tablinks=document.getElementsByClassName("tab-links")
    var tabcontents =document.getElementsByClassName("tab-contents");
    for(tablink of tablinks){
        tablink.classList.remove("active-link"); 
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab"); 
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
       
}
