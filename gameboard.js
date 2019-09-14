var treasureLocation=Math.floor(Math.random() * 15)
var bombLocation=Math.floor(Math.random() * 15)
var count = 0

document.getElementById("resetCounter").onclick=function(){
    count=0
    document.getElementById("counter").innerHTML=count;
}
if (treasureLocation === bombLocation)
{
    bombLocation=Math.floor(Math.random() * 15)
}
function treasure(id){
        count=count+1;
        document.getElementById("counter").innerHTML = count
    if (id === treasureLocation){
        document.getElementById(id).innerHTML = "🏆"

        setTimeout(function(){ alert("YOU WIN!!! Play again 💪💰🥇");window.location.reload() }, 200);

    }
    else if (count >= 7){
        document.getElementById(id).innerHTML = "❌"
        setTimeout(function(){ alert("YOU LOSE!!! Try again 😂😱😭");window.location.reload() }, 1000); setTimeout(200)()
    }
    else if (id === bombLocation){
        document.getElementById(id).innerHTML = "💣"
        setTimeout(function(){ alert("YOU LOSE!!! Try again 😂😱😭");window.location.reload() }, 500);
    }else if (id !== treasureLocation && id !== bombLocation){
        document.getElementById(id).innerHTML = "❌"
}
}
