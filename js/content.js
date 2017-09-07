var btnTask = document.getElementById("add-task");
var btnClosePanel = document.getElementById("close-panel");
var firstPanel = document.getElementsByClassName("firstPanel");
var secondPanel = document.getElementsByClassName("secondPanel");
var taskTitle = document.getElementsByClassName("task-title");
var taskDescription = document.getElementsByClassName("task-description");
var firstTask =  document.getElementsByClassName("first-task");

btnTask.addEventListener("click", showPanel);
btnClosePanel.addEventListener("click", closePanel);
taskTitle[0].addEventListener("keypress", sendTaskTitle);
firstTask[0].addEventListener("click", showPanel);

function showPanel(){
    

    firstPanel[0].style.width = '50%'
    firstPanel[0].style.float = 'left'
    firstPanel[0].style.marginLeft = '30px'
    
    secondPanel[0].style.display ='inline';
    secondPanel[0].style.float = 'right'
    
}

function closePanel(){
    
    secondPanel[0].style.display ='none';
    
    firstPanel[0].style.width = '70%'
    firstPanel[0].style.margin = 'auto'
    firstPanel[0].style.float = 'none'
    firstPanel[0].style.marginTop = '15px'
    
}


function sendTaskTitle(e){
       if(e.which == 13){
           taskDescription[0].focus();
           firstTask[0].innerHTML = taskTitle[0].value;
       };
    
    
}


function test(){
    
    for(var i = 10; i < 20; i++){
        alert(i);
    }
    
}




