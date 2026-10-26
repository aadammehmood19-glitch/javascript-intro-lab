(function(){
//start here

document.getElementById('myHeading').innerHTML = "Aadam website"
document.querySelector("li").setAttribute("class", "currentPage");
document.querySelector("nav ul li a").setAttribute("href", "https://www.google.co.uk");
const myBtn = document.getElementById("myTestBtn");
myBtn.addEventListener("click")
   ()  
        console.info("I was clicked");
            
})
// let redBtn = document.querySelector(".red");
// redBtn.addEventListener("click", function() {
//     document.body.setAttribute("class", "redBack")

// })

// let greenBtn = document.querySelector(".green");
// greenBtn.addEventListener("click", function() {
//     document.body.setAttribute("class", "greenBack")


// })
// let blueBtn = document.querySelector(".blue");
// blueBtn.addEventListener("click", function() {
//     document.body.setAttribute("class", "blueBack")
// })

// let resetBtn = document.querySelector(".reset");
// resetBtn.addEventListener("click", function() {
//     document.body.setAttribute("class", "defaultBack")
// })





let collBtns = document.querySelectorAll('.colorpicker');

collBtns.forEach(colBtn => {
    colBtn.addEventListener("click", function(ev) {
        console.info('Button clicked : ${ev.target.textContent}');
        let backcol = ev.target.textContent.toLowerCase();
        backcol = '${backcol}Back'
        document.body.setAttribute("class", backcol);
 
    });
});



//end here
// })(); 

   