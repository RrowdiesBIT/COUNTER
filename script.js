const countValue=document.querySelector('#Counter');

const increment= ()=>
{
  //get the value from UI
  let value=parseInt(countValue.innerText);
  //update the value
  value=value+1;
  //set the value into UI
  countValue.innerText=value;
};

const decrement= ()=>
{
 //get the value from UI
 let value=parseInt(countValue.innerText);
 //update the value
 value=value-1;
 //set the value into UI
 countValue.innerText=value;

}