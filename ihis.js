
var result = "";

function validateQ1(){
    
    
    var answer1 = document.getElementById('1B');
    
    if(answer1.checked == true){
        result = "Awesome! The questions will get harder!";
    }
    else{
        result = "Sorry! This answer is wrong! The right answer was B-Atal Bihari Vajpayee";
    }
    //p tag (as in paragraph) in the end of the html has id result.
    //innerHTML is used to change what the paragraph displays
    //What it displays depends on the answer selected above
    document.getElementById('result').innerHTML = result;
    
    
}
