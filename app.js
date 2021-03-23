const form = document.querySelector("form");
const minNumber = document.querySelector(".min-number");
const maxNumber = document.querySelector(".max-number");
const hasil = document.querySelector(".hasil");


function random(min,max) {
    if(min == max){
        max = min;
        max +=1 ;
    };
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let  minNumberValue = Number(minNumber.value),
            maxNumberValue = Number(maxNumber.value);
    
            if(minNumberValue == maxNumberValue){
                maxNumberValue += 1 ;
            }
           

    document.getElementById("max").value = maxNumberValue;
    hasil.textContent = random(minNumberValue,maxNumberValue);

    console.log(minNumberValue,maxNumberValue);
});
