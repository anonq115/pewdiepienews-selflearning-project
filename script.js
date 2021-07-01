console.log("console log working");
let testClick = false; 

const mainNav = document.getElementById("js-links");
const mainNavToggle = document.getElementById("js-nav-toggle");



mainNavToggle.addEventListener("click", click1, false  );



const linksA= document.querySelectorAll(".har");
let ulclass = document.querySelector('.main-links'); ulclass.addEventListener("click", click2, false );

console.time('end')
  function click1 (event){
    
    mainNav.classList.toggle("active");//toggle and add act differently
    testClick = !testClick;  
    console.log("clicked")
    event.preventDefault();
    console.log(event);event.stopPropagation();
 
    /// turns true when the click event is clicked
                              /// and turns back to false when click event 
                              /// is clicked while on 

// if click is true and click 1 does not equal to click1 then 
  if (testClick === false){
    console.log('ticked off');
  
  }
 else if (testClick === true ){
  click2(); }
 
}  

 
function click2 (){

  mainNav.classList.remove("active");
  console.log('ul element clicked');
  
}
 console.timeEnd('end')
 



    
  

 
  
//need function to turn true; 



// if the click equals to parent node or outside element then hide 

