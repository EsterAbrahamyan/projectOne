let cartValue=0;

  const btns=document.querySelectorAll(".btn");
  const cartIcon=document.querySelector(".cartIcon");

  for (let i=0;i<btns.length; i++){
    btns[i].addEventListener("click",function(){
      cartValue+=1;
      console.log(cartValue)
      cartIcon.innerText=cartValue
    })
  }
