// Functions for re-use 
//  function for innerText
function getInnertext(t)
{
    const T = document.getElementById(t).innerText;
    return T;
}
// function for int value 
function getIntValue(iv)
{
    const IntValue= parseInt(document.getElementById(iv).innerText);
    return IntValue;
}

// main functionality 
        // Navbar heart icon functionality
const heart_icons=document.getElementsByClassName("add-fav");
for(const heart_icon of heart_icons)
{
    heart_icon.addEventListener("click",function()
{
    heart_icon.classList.toggle("fa-solid");
    heart_icon.classList.toggle("text-red-500");
    let currentFavNum= getIntValue("fav-count");
    //console.log(currentFavNum);
     if (heart_icon.classList.contains("fa-solid")) 
    {
      currentFavNum += 1;
    }
     else
    {
      currentFavNum -= 1;
    }
    document.getElementById("fav-count").innerText = currentFavNum;
    console.log(currentFavNum);
}
)}
      // Call button functionality

const callHistory=[]; //call history arry is here to store the callLog;
const calls= document.getElementsByClassName("Call");
for(const call of calls)
{
  call.addEventListener("click",function()
{
  console.log("button clicked!")
  const name= this.getAttribute("data-name");
  const num= this.getAttribute("data-num");
  const callPayment= 20;
  //console.log(callPayment);
  const defaultCoin=getIntValue("default-coin");
  //console.log(defaultCoin);
  if(defaultCoin===20||defaultCoin<20)
  {
    alert("You don't have sufficient balance.Please recharge!");
    return;
  }
  alert(`Calling to ${name} at ${num}`);
  const afterCallCoin= defaultCoin-callPayment;
  //console.log(afterCallCoin);
  document.getElementById("default-coin").innerText = afterCallCoin;

  const history={
    title:name,
    subtitle:num,
    time:new Date().toLocaleTimeString()
  }        
          //from here the call history functionaliy code starts;
  callHistory.push(history);
  //console.log(callHistory);
  const callLog=document.getElementById("call_history");
  //console.log(callLog);
  const div= document.createElement("div");
  div.innerHTML=`<div class="bg-gray-100 flex items-center justify-between p-2 my-5 rounded-lg">
                    <div class="">
                        <h5 class="font-bold text-lg">${history.title}</h5>
                        <p class="font-semibold text-xl">${history.subtitle}</p>
                    </div>
                    <p class="text-xl">${history.time}</p>
                </div>`
      callLog.appendChild(div);
}
)}
        // call history clear button functionality
const remove=document.getElementById("clear");
remove.addEventListener("click",function()
{
  console.log("event cleared!");
  document.getElementById("call_history").innerHTML="";
})
        // copy button functionality 
