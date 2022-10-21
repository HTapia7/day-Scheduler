// Var for todays time 
var today = moment();

// Show the clock in header 
$('#currentDay').text(today.format('MMMM Do YYYY, h:mm:ss a'));


 // Grabs the values from textbox when clicked 
$(document).on('click', '.saveBtn' , saveNote )

 function saveNote(){
   console.log(this)

   // save items to local storage
   var time = this.value
   var note = $('#textArea-' + time).val()
   localStorage.setItem(time , note )
   var persistData = localStorage.getItem(time , note)
 }

function stylingTime(){ 

  var currentTime = moment().hour();

// split the ID so I can get the hour of time 
 $('.time-block').each(function(){
  var workTime = parseInt($(this).attr('id').split('hour')[1])

  // Loop to add class depending on the hour 
  if (workTime < currentTime) {
    $(this).addClass('past');
    }
  else if (workTime == currentTime) {  
    $(this).addClass('present');
    }
  else {
    $(this).addClass('future');
    }
 })
}

stylingTime()