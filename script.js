// Functions for re-use 
function getInnertext(t)
{
    const T = document.getElementById(t).innerText;
    return T;
}

function getIntValue(iv)
{
    const IntValue= parseInt(document.getElementById(iv).innerText);
    return IntValue;
}


// main functionality 
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
