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
    <form>
    <div class="form">
    <h4>${fileName}</h4>
    <input type="email" placeholder="Enter email upload file">
    <button class="btn" onclick="makeGetRequest()" >Upload</button>
    </div>
    </form>`
    ;
    dropArea.innerHTML = filedata;
})

async function makeGetRequest() {

  let payload = { name: 'John Doe', email: 'nikhilbobade27@gmail.com' };

  let res = await axios.post('http://localhost:3000/', payload);

  let data = res.data;
  console.log(data);
}

makeGetRequest();
