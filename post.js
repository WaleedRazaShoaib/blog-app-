var toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],

    ["clean"],
];
var quill = new Quill("#editor", {
    theme: "snow",
    placeholder: "Write Blog...",
    modules: {
        toolbar: toolbarOptions,
    },
});
var editor = document.getElementById("editor")
var main = document.getElementById("main");

function Blogwork() {
    var postcontent = quill.root;
    
    main.innerHTML =
        `
        <div class="col " style = "margin-top:20px;">
    <div class="card h-100" style = "background-color:  #008CBA;">
             <h5 class="card-title" style = "padding-top: 10px; padding-left: 10px">YOUR POST</h5>
            <p class="card-text"  style= "padding-left: 10px;" >${postcontent.innerHTML}</p>
        </div>
    </div>` + main.innerHTML;
    console.log(postcontent.innerText)

if (postcontent.innerText.trim() !== "" ) {
         Swal.fire({
            icon: "success",
            title: "Your post has been saved",
        }); 
        main.style.display = "block";

    }
    else {
        Swal.fire({
            icon: "error",
            title: "Create the post",
        });
        main.style.display = "none";
        
    }

    quill.root.innerHTML = "";
}
//   var getData = localStorage.getItem("data") || "";
//     var dataString = `
//   <div class="col" >
//   <div class="card h-100">
//   <div class="card-body">

//   <p class="card-text">${postcontent}</p>
//   </div>
//   </div>
//   </div>
//   </div>`;

//     var addData = dataString + getData;

//     main.innerHTML = addData;
// localStorage.setItem("data", addData)