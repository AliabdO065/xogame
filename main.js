var header = document.querySelector('.header'), 
    sqO = document.querySelectorAll('.sq'), 
    sq= Array.from(sqO),
    turn = 'x';
    document.getElementById('but').onclick = function(){
        location.reload();
    } 
function play(id){
    var element = document.getElementById(id);
    if(turn == 'x' && element.textContent == ''){
        element.textContent = 'x';
        turn = 'o';
        header.textContent="Turn of ==>  O";
    }else if(turn == 'o' && element.textContent == ''){
        element.textContent = 'o';
        turn = 'x';
        header.textContent="Turn of ==>  X";
    }
    prop();
}

function prop(){
    if(sq[0].textContent == sq[1].textContent && sq[1].textContent == sq[2].textContent && sq[0].textContent!=''){
        winner(0,1,2);
    }
    else if(sq[3].textContent == sq[4].textContent && sq[4].textContent == sq[5].textContent && sq[3].textContent!=''){
        winner(3,4,5);
    }
    else if(sq[6].textContent == sq[7].textContent && sq[7].textContent == sq[8].textContent && sq[6].textContent!=''){
        winner(6,7,8);
    }
    else if(sq[0].textContent == sq[3].textContent && sq[3].textContent == sq[6].textContent && sq[0].textContent!=''){
        winner(0,3,6);
    }
    else if(sq[1].textContent == sq[4].textContent && sq[4].textContent == sq[7].textContent && sq[1].textContent!=''){
        winner(1,4,7);
    }
    else if(sq[2].textContent == sq[5].textContent && sq[5].textContent == sq[8].textContent && sq[2].textContent!=''){
        winner(2,5,8);
    }
    else if(sq[0].textContent == sq[4].textContent && sq[4].textContent == sq[8].textContent && sq[0].textContent!=''){
        winner(0,4,8);
    }
    else if(sq[2].textContent == sq[4].textContent && sq[4].textContent == sq[6].textContent && sq[2].textContent!=''){
        winner(2,4,6);
    }
}

function winner(num1,num2,num3){
    header.textContent = sq[num1].textContent + "  " + "is winner"; 
    sq.forEach(ex => {
        ex.style.backgroundColor = 'black'
    });
    document.getElementById('item'+num1).style.backgroundColor = 'white';
    document.getElementById('item'+num2).style.backgroundColor = 'white';
    document.getElementById('item'+num3).style.backgroundColor = 'white';
    setInterval(function(){  
        header.textContent += '.'; 
        document.getElementById('but').style.visibility = 'hidden';
    },1000)
    setTimeout(function(){
        location.reload();
    },4000)
}