
var result = "";

function validateQ1(){
    
    
    var answer1 = document.getElementById('1A');
    

    
    //Checked is a special variable for radio buttons which is set to true when selected 
    //and false when not selected
    //If 1st choice is selected then set result to correct answer string
    if(answer1.checked == true){
        result = "AMAZING! Only one question left!";
    }
    else{
        result = "Sorry! This answer is wrong! The right answer was A-white collar union";
    }
    //p tag (as in paragraph) in the end of the html has id result.
    //innerHTML is used to change what the paragraph displays
    //What it displays depends on the answer selected above
    document.getElementById('result').innerHTML = result;
    
    if(answer1.checked == false && answer2.checked == false && answer3.checked == false && answer4.checked == false){
    result = "Please select an answer";
}

    
    
}
