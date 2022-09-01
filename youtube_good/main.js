
video_title = document.getElementById("video_title");
video_iframe = document.getElementById("video_iframe");

btn_submit = document.getElementById("btn_submit");
btnContainer = document.querySelector(".btn-container");
body = document.getElementById("body")
btnContainer2 = document.querySelector(".btn-container2");




btn_array = []
if (localStorage.getItem("btn")) {
  btn_array = JSON.parse(localStorage.getItem("btn"));
}
get_Data_of_localStorage();

btn_submit.onclick = function () {
  

  // video_contanier = document.createElement("div");
  // video_contanier.innerHTML = video_iframe.value;

  // video_title_btn = document.createElement("button");
  // video_title_btn.innerText = video_title.value;
  // btnContainer.appendChild(video_title_btn);

    

  if (video_title.value != "" && video_iframe.value !="") {

    
    
      add_btn_to_array(video_title.value, video_iframe.value); 
    add_btn_array_to_localStorage(btn_array);
    video_title.value = "";
    video_iframe.value = "";
  }

  
};




function add_btn_to_array(video_title,video_iframe) {
    
    btn = {
      id: Date.now(),
      title: video_title,
      iframe: video_iframe,
    };

  btn_array.push(btn);
  


    // btn_array = JSON.parse(localStorage.getItem("btn"));

  //  video_contanier = document.createElement("div");
  //  video_contanier.innerHTML = btn.iframe;

  //  video_title_btn = document.createElement("button");
  // video_title_btn.innerText = btn.title;
  
  //  btnContainer.appendChild(video_title_btn);

  // console.log(btn_array)
  // console.log(video_title_btn);
  // console.log(video_title_btn.innerHTML);
  
  // body.innerHTML = video_title_btn.innerHTML;

  add_elements_to_page(btn_array);




}

function add_elements_to_page(btn_array) {
  
  btnContainer2.innerHTML = "";
  for (let i = 0; i < btn_array.length; i++) {
    
    video_contanier = document.createElement("div");
    video_contanier.innerHTML = btn_array[i].iframe;

    video_title_btn = document.createElement("button");
    video_title_btn.classList.add("btn")
    video_title_btn.innerText = btn_array[i].title;

    btnContainer2.appendChild(video_title_btn);

  
    
  }
  console.log("====")

  add_btn_array_to_localStorage(btn_array);
}





function add_btn_array_to_localStorage(btn_array) {
   
  localStorage.setItem("btn", JSON.stringify(btn_array));
}


function get_Data_of_localStorage() {
  let btnTest = localStorage.getItem("btn");

  if (btnTest) {
    let tasks = JSON.parse(btnTest);
    add_elements_to_page(tasks);
  }
}


btnContainer2.addEventListener("click", function (e) {
  
  if (e.target.classList.contains("btn")) {

    // video_contanier.innerHTML = body.innerHTML
     body.innerHTML = video_contanier.innerHTML;
    console.log(video_contanier.innerHTML);
  }
})