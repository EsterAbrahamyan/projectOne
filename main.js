//addToCart = (product) => {
    //const { cartItems } = this.state;
  
    // check if product is already in cart
    //const isInCart = cartItems.some(item => item.id === product.id);
  
    //if (isInCart) {
      // if already in cart, return shallow copy array
      // and shallow copy the matching item, then update
      // the count by 1
      //return cartItems.map(item => item.id === product.id 
       //? { ...item, count: item.count + 1 }
        //: item); // just return non-match
    //} else {
       // Not in cart, just create item object with initial count 1
       // concat appends to and returns a new array
       //return cartItems.concat({
        // ...product,
        // count: 1,
       //});
    //}
 // }
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
