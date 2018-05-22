console.log ( 'in client.js');

$( document ).ready( readyNow );

let newDivsArray = [];
let counter = 0; 

function readyNow(){
    console.log( 'in readyNow' );
    $( '#generateButton' ).on( 'click', addDiv);
}

function addDiv() {
    console.log( 'in addDiv' ); 
   // make a new Div 
   let newDiv = ( $( "#newDiv" ).append('<div class="newDiv"><p id="#counterNumber">blank</p><button class="button" id="swapButton">Swap</button><button class="button" id="deleteButton">Delete</button></div>') );
    counter++; 
    changeCounter();
}

function changeCounter() {
    console.log( 'in counter' );
    let score=$("#counterNumber"); 
    score.empty(); 
    score.append(counter); 
}

