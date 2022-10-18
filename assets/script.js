
var currentDate = moment().format("dddd,MMMM Do YYYY");
$("#currentDay").text(currentDate);

$(document).ready(function () {
    
    $(".saveBtn").on("click", function () {
        var userText = $(this).siblings(".description").val();
        var timeBlock = $(this).parent().attr("id");

        localStorage.setItem(timeBlock, userText);
    })

    
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    function hourTracker(){
        var currentTime=moment().hour();
    
        $(".time-block").each(function(){
            var blockTime=parseInt($(this).attr("id").split("hour")[1]);
                console.log(blockTime,currentTime)
            if(blockTime < currentTime){
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if(blockTime === currentTime){
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
    
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    
    }
    hourTracker();

})

