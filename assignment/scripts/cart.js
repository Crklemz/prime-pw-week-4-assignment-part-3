console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const basket = [];
const maxItems = 5;

function addItem ( item ){
  if (item) {
    if (isFull() === false) {
      basket.push(item);
      console.log('Item added was', item);
      return true;
    }
    else {
      console.log('item', item , 'was not added because basket is full.');
      return;
    }
  }// End if statement
else {
  console.log('no item was added to the list');
  return false;
}//end else statement
}//End addItem

function listItems () {
  for ( i=0; i < basket.length; i++ ) {
    console.log(`item number`, i+1 , `is ${basket[i]}`);
  }
}// End listItems

function empty () {
  basket.length = 0
  if (basket.leangth > 0) {
    console.log(`basket is ${basket}`);
  }
  else {
    console.log('The basket has been emptied');
  }
  return;
}//End empty

function isFull () {
  if ( basket.length >= maxItems ) {
    //console.log('basket is full');
    return true;
  }
  else {
    //console.log('basket is not full');
    return false;
  }
}//End isFull

if (basket.leangth > 0) {
  console.log(`basket is ${basket}`);
}
else {
  console.log('Basket is empty');
}
addItem ();
addItem( 'Bacon' );
empty ();
addItem ('squid');
console.log(`Basket contains ${basket}`);

addItem('Pizza');
addItem('Cheese');

listItems();

addItem('hummus');
addItem('kale');
addItem('olive oil');
