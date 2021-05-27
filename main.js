const dropArea = document.querySelector(".drop_box"),
button = dropArea.querySelector("button"),
dragText = dropArea.querySelector("header"),
input = dropArea.querySelector("input");
let file;
var filename;
 
button.onclick = ()=>{
  input.click(); 
}
 

input.addEventListener("change",function(e){
    var fileName = e.target.files[0].name;
    let filedata = `
    <form action="http://localhost:3000/user" method="POST">
    <div class="form">
    <input type="text" id="fname" name="fname" value="${fileName}">
    <input type="email" id="email" name="email" placeholder="Enter email upload file">
    <button class="btn" onclick="makeGetRequest()" >Upload</button>
    </div>
    </form>`
    ;
    dropArea.innerHTML = filedata;
})
