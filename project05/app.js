let arr = [
  {
    dp: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8",
  },
  {
    dp: "https://images.unsplash.com/photo-1652254188375-f4eaf5dc2488?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
    story:
      "https://images.unsplash.com/photo-1678811116814-26372fcfef1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
  },

  {
    dp: "https://images.unsplash.com/photo-1664566484452-03b6f3817fdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    story:
      "https://images.unsplash.com/photo-1664566484429-2af68248149e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
  },

  {
    dp: "https://plus.unsplash.com/premium_photo-1664204234784-229626c35c8d?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1664204234457-93a43af01e83?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
  },
  {
    dp: "https://images.unsplash.com/photo-1690544252334-ff1765e6d212?q=80&w=426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1696669509974-4849280f2cf4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwNXx8fGVufDB8fHx8fA%3D%3D",
  },
];
let storys = document.querySelector("#storys");
let clutter = "";

arr.forEach(function (event, idx) {
  //   console.log(event, idx);
  clutter += `<div class="story">
         <img id="${idx}"src=" ${event.dp}" alt="">
        </div>`;
});
storys.innerHTML = clutter;
// console.log(clutter);

storys.addEventListener("click", function (dets) {
  document.querySelector("#fullScreen").style.display = "block";
  document.querySelector("#fullScreen").style.backgroundImage = `url(${
    arr[dets.target.id].story
  })`;


  setTimeout(function(){
    document.querySelector("#fullScreen").style.display = "none";

  },2000)
});
