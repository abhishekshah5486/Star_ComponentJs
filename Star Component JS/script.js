let starElement = document.querySelectorAll(".star");
let ratingCont = document.querySelector(".rating");
let prevClicked = false;
let countRating;
// starElement.addEventListener("mouseover", function(e){
//     starElement.style.color = 'gold';
// })

for (let j=0; j<starElement.length; j++ ) {
    starElement[j].addEventListener("mouseover",function(e){
        for (let k=0; k<starElement.length; k++ ) {
            starElement[k].classList.remove('gold');
        }
        for (let k=0; k<=j; k++ ) {
            starElement[k].classList.add('gold');
        }
    })
    starElement[j].addEventListener("mouseleave", function(e){
        for (let k = 0; k<starElement.length; k++ ) {
            starElement[k].classList.remove('gold');
        }
        if (prevClicked) {
            for (let k=0; k<countRating; k++ ) {
                starElement[k].classList.add('gold');
            }
        }
    })
}
for (let j=0; j<starElement.length; j++ ) {
    starElement[j].addEventListener("click", function(e){
        prevClicked = true;
        for (let k=0; k<starElement.length; k++ ) {
            starElement[k].classList.remove('gold');
            ratingCont.innerText = "Rating : ";
        }
        for (let k=0; k<=j; k++ ) {
            starElement[k].classList.add('gold');
        }
        countRating = j+1;
        ratingCont.innerText = "Rating : " + countRating;
    })
}