var addBtn = document.getElementById("addBtn")
var addBox = document.getElementById("addBox")
var overlay = document.getElementById("overlay")

addBtn.addEventListener('click',function(event){
    event.preventDefault()
    addBox.style.display="block";
    overlay.style.display ="block";
})

var cancel = document.getElementById("cancel")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    addBox.style.display ="none"
    overlay.style.display ="none"

})

var container = document.getElementById("container")
var containerItem = document.getElementById("container-item")
var save = document.getElementById("save")
var title = document.getElementById("input-title")
var date = document.getElementById("input-date")
var time = document.getElementById("input-time")
var inputLocation = document.getElementById("input-location")
var description = document.getElementById("input-description")

save.addEventListener("click",function(event){
    event.preventDefault()
    if(title.value===''  || date.value===''  || time.value===''  || inputLocation.value==='' ){
        alert("You must write something")
    }
    else{
        addBox.style.display ="none"
    overlay.style.display ="none"

    var div= document.createElement("div")
    div.setAttribute("class","container-item")

    div.innerHTML = `<h3>${title.value}</h3>
    <p>${date.value}</p>
    <p>${time.value}</p>
    <p>${inputLocation.value}
    <p>${description.value}</p>
    <button onclick="del(event)" id="del">Delete</button>`

   container.append(div)
    }
    title.value='' ; 
    date.value='' ; 
    time.value='' ;
    inputLocation.value='' ;
    description.value='';
    saveData();
    
});

function del(event){
    alert("Delete This?")
    event.target.parentElement.remove();
    saveData();
}

function saveData(){
    localStorage.setItem("data",container.innerHTML);
}
function showData(){
    container.innerHTML = localStorage.getItem("data");
    }
showData();