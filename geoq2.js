
var result = "";

function validateQ1(){
    
    
    var answer3 = document.getElementById('1C');

    
    //Checked is a special variable for radio buttons which is set to true when selected 
    //and false when not selected
    //If 1st choice is selected then set result to correct answer string
    if(answer3.checked == true){
        result = "YOU ARE A GENIUS!";
    }
    else{
        result = "Sorry! This answer is wrong! The right answer was C- Australia";
    }
    //p tag (as in paragraph) in the end of the html has id result.
    //innerHTML is used to change what the paragraph displays
    //What it displays depends on the answer selected above
    document.getElementById('result').innerHTML = result;

    
    
}
