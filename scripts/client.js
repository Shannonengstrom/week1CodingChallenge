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
   let newDiv = ( $( "#newDiv" ).append('<div class=".newDiv" <p id="#counterNumber">blank</p><button class=".button" id="swapButton">Swap</button><button class=".button" id="deleteButton">Delete</button>') );
counter++; 
}

function changeCounter() {
    console.log( 'in counter' );
    let counter=$(".counter"); 
    counter.empty(); 
    counter.append(counter); 
}






// * <button class="button" id="swapButton">Swap</button><button class="button" id="deleteButton">Delete</button>'



// //    let newDiv = new addDiv( $( '#swapButton').fadeIn(), $('#deleteButton').fadeIn(), $('#counterText') );
// //     newDivsArray.push( newDiv );  */}
// //     console.log( newDivsArray );
//     displayDiv(); 
// }


  



// function 


    // $( '#swapButton' ).on( 'click', deleteEmployee);
    // $( '#deleteButton' ).on( 'click', deleteEmployee);





    // addModeGo();
 // end readyNow


// functions 
// addDiv
// divCounter



// function displayDiv(){
//     $( '#output' ).hide();
// end addModeGo
