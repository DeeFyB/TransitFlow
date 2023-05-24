const allstars = document.querySelectorAll(".star1");

allstars.forEach( (star1, i)=>{

    star1.onclick = function(){

        let currentstarlevel = i +1;

        allstars.forEach( (star1, j)=>{

            if(currentstarlevel >= j+1){

                star1.innerHTML = "&#9733";

            }else {
                star1.innerHTML = "&#9734";
            }
        })
    }
})