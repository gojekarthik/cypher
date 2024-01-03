time = 0;
var timetext = document.getElementById('time');

function buttonplus(){
    time += 1;
    timetext.textContent = time;
}
function buttonminus(){
    time -= 1;
    timetext.textContent = time;
}

