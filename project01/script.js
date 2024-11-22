let h5 = document.querySelector("h5");
      let btn = document.querySelector("button");

      let flag = 0;
      btn.addEventListener("click", function () {
        if (flag == 0) {
          h5.innerText = "Friends";
          h5.style.color = "green";
          btn.innerText = "Remove Friend";
          console.log("friend");
          flag = 1;
        }else{
          h5.innerText = "Stranger";
          h5.style.color = "red";
          btn.innerText = "Add Friend";

          console.log("Stranger");
          flag = 0;
        }
      });