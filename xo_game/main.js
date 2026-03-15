let title = document.getElementById('title');
let h1 = document.querySelector('h1');
let turn = 'x'
let btn = document.getElementById('btn')


function winer() {
    let item1 = document.getElementById('item1');
    let item2 = document.getElementById('item2');
    let item3 = document.getElementById('item3');
    let item4 = document.getElementById('item4');
    let item5 = document.getElementById('item5');
    let item6 = document.getElementById('item6');
    let item7 = document.getElementById('item7');
    let item8 = document.getElementById('item8');
    let item9 = document.getElementById('item9');
    
    
    if(item1.innerHTML == item2.innerHTML && item2.innerHTML == item3.innerHTML  && item1.innerHTML != '' )
    {
        item1.style.background = '#000'
        item2.style.background = '#000'
        item3.style.background = '#000'
        h1.innerHTML = item1.innerHTML +' winer'
        end()
    }
    else if (item4.innerHTML == item5.innerHTML && item5.innerHTML == item6.innerHTML  && item4.innerHTML != '' )
    {
        item4.style.background = '#000'
        item5.style.background = '#000'
        item6.style.background = '#000'
        h1.innerHTML = item4.innerHTML +' winer'
        end()

    }
    else if (item7.innerHTML == item8.innerHTML && item8.innerHTML == item9.innerHTML  && item7.innerHTML != '' )
    {
        item7.style.background = '#000'
        item8.style.background = '#000'
        item9.style.background = '#000'
        h1.innerHTML = item7.innerHTML +' winer'
        end()
    }
    else if (item1.innerHTML == item4.innerHTML && item4.innerHTML == item7.innerHTML  && item1.innerHTML != '' )
    {
        item1.style.background = '#000'
        item4.style.background = '#000'
        item7.style.background = '#000'
        h1.innerHTML = item4.innerHTML +' winer'
        end()
    }
    else if (item2.innerHTML == item5.innerHTML && item5.innerHTML == item8.innerHTML  && item2.innerHTML != '' )
    {
        item2.style.background = '#000'
        item5.style.background = '#000'
        item8.style.background = '#000'
        h1.innerHTML = item2.innerHTML +' winer'
        end()
    }
    else if (item3.innerHTML == item6.innerHTML && item6.innerHTML == item9.innerHTML  && item3.innerHTML != '' )
    {
        item3.style.background = '#000'
        item6.style.background = '#000'
        item9.style.background = '#000'
        h1.innerHTML = item3.innerHTML +' winer'
        end()
    }
    else if (item3.innerHTML == item5.innerHTML && item5.innerHTML == item7.innerHTML  && item3.innerHTML != '' )
    {
        item3.style.background = '#000'
        item5.style.background = '#000'
        item7.style.background = '#000'
        h1.innerHTML = item4.innerHTML +' winer'
        end()
    }
    else if (item1.innerHTML == item5.innerHTML && item5.innerHTML == item9.innerHTML  && item1.innerHTML != '' )
    {
        item1.style.background = '#000'
        item5.style.background = '#000'
        item9.style.background = '#000'
        h1.innerHTML = item1.innerHTML +' winer'
        end()
    }

}

function play(id){ 
    let element = document.getElementById(id);

    if (turn =='x' && element.innerHTML =='') {
        element.innerHTML = 'x';
        turn = 'o';
        h1.innerHTML ='o';
    }
    else if( turn =='o' && element.innerHTML=='' ){
        element.innerHTML = 'o';
        turn='x';
        h1.innerHTML =  'x'
    }
    winer()
}

function end() {
    setInterval(function dot(){h1.innerHTML+='.' }, 1000);
    setTimeout(function time(){location.reload()} , 4000 ); 
}
function reload(){
    location.reload()
}


