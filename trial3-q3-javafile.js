
var result = "";

function validateQ1(){
    
    
    var answer2 = document.getElementById('1B');

    
    //Checked is a special variable for radio buttons which is set to true when selected 
    //and false when not selected
    //If 4th choice is selected then set result to correct answer string
    if(answer2.checked == true){
        result = "Correct Answer! Great Job! Visit us again for more fun!!";
    }
    else{
        result = "Sorry! This answer is wrong! The right answer was B-1. Try our other categories";
    }
    //p tag (as in paragraph) in the end of the html has id result.
    //innerHTML is used to change what the paragraph displays
    //What it displays depends on the answer selected above
    document.getElementById('result').innerHTML = result;

    
    
}
