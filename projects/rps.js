function resetcount(){
    count.wins=0;
    count.loss=0;
    count.ties=0;
    localStorage.removeItem('count');
    document.querySelector('.score').innerHTML = ` wins : ${count.wins} losses : ${count.loss} ties : ${count.ties}`;
}

let count = JSON.parse(localStorage.getItem('count')) ||
{
    wins:0,
    loss:0,
    ties:0
};

function computerrmove(){
    randomnumber = Math.random();
    let computermove = '';
    if(randomnumber>=0 && randomnumber <= 1/3){
        computermove='rock'
    }
    if(randomnumber>1/3 && randomnumber<=2/3){
        computermove='paper'
    }
    else{
        computermove='Scissors'
    }
    return computermove;
}

function playGame(playermove){
    const compMove = computerrmove();
    let result = '';
    if(playermove=='rock'){
        if(compMove=='Scissors'){
            result+='you win';
            
        }
        else if(compMove=='paper'){
            result += 'you lose';
            
        }
        else{
            result+='Its a tie';
        
        }
    }
    if(playermove=='paper'){
        if(compMove=='Scissors'){
            result+='you lose';
            
        }
        else if(compMove=='paper'){
            result += 'Its a tie';
            
        }
        else{
            result+= 'you win';
            
        }
    }
    if(playermove=='Scissors'){
        if(compMove=='Scissors'){
            result+='Its a tie';
            
        }
        else if(compMove=='paper'){
            result += 'you win';
            
        }
        else{
            result+= 'you lose';
            
        }
    }
    if(result=='you win'){
        count.wins+=1;
    }
    if(result=='you lose'){
        count.loss+=1;
    }
    else{
        count.ties+=1;
    }
    let converted = JSON.stringify(count);
    localStorage.setItem('count',converted);

document.querySelector('.resultt').innerHTML = result;
document.querySelector('.moves').innerHTML = `you <img src="${playermove}.png" class="${playermove}"><img src="${compMove}.png" class="${compMove}" >computer`
document.querySelector('.score').innerHTML = ` wins : ${count.wins} losses : ${count.loss} ties : ${count.ties}`;
}