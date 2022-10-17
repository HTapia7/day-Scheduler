// Var for todays time 
var today = moment();

$('#currentDay').text(today.format('MMMM Do YYYY, h:mm:ss a'));

 var timeOfDay = $('.hour');
 var userInput = $('.description');
 var saveBtn = $('.fa-save')



 saveBtn.on('click', function() {  
    
    var user = userInput.val();

    console.log(user)
    
    localStorage.setItem('9AM' , user)
    // localStorage.setItem('9AM' , JSON.stringify(user))
 })



 console.log(this)