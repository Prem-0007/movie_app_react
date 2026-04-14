function Button() {
    // const handleClick = () => {
    //     console.log("Button Clicked");
// }


   // const handleClick2 = (name) => {
      //  console.log(`${name} stop clicking me`);
   // }
 //  let count =0;
  // const handleClick = (name) => {
   // if(count<3) {
    //    count++;
//  console.log(`${name}  Clicked me  ${count} times`);
  //  }
   // else{
  //      console.log("Stop clicking me");
 //   }
  // }
  const handleClick = (e) => { e.target.textContent = "haha🥰";}
  return (
   // <button onClick={handleClick2("prem")}>Click Me 🙂</button>

   <button className="btn" onDoubleClick={(e) => handleClick(e)}>Click Me 🙂</button>
  )
}
export default Button;