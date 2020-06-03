var result = "";

function validateQ1(){
    //It gets elements with id 1D, in our html it is the fourth radio button
    
    var answer4 = document.getElementById('1D');

    
    //Checked is a special variable for radio buttons which is set to true when selected 
    //and false when not selected
    //If 4th choice is selected then set result to correct answer string
    if(answer4.checked == true){
        result = "Good job! The questions will get harder!";
    }
    else{
        result = "Sorry! This answer is wrong! The right answer was D-Duryodhana";
    }
    //p tag (as in paragraph) in the end of the html has id result.
    //innerHTML is used to change what the paragraph displays
    //What it displays depends on the answer selected above
    document.getElementById('result').innerHTML = result;

    
    
}