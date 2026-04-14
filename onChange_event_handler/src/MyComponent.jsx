// onChange = event handler used primarily with form elements like input, textarea, select to capture user input and update the component's state accordingly. It allows you to create interactive forms and respond to user input in real-time
import React, {useState} from "react";
function MyComponent() {
    const [name, setName] = useState("Guest");
    const[quantity, setQuantity] = useState(1);
    const[comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping]=useState("Delivery");
 function handleNameChange(event) {
    setName(event.target.value);
 }
 function handleQuantityChange(event) {
    setQuantity(event.target.value);
 }
 function handleCommentChange(event) {
    setComment(event.target.value);
 }
 function handlePaymentChange(event) {
    setPayment(event.target.value);
 }
 function handleShippingChange(event) {
    setShipping(event.target.value);
 }

    return (
        <div>
  <input value = {name }onChange = {handleNameChange}/>
  <p> Name:{name}</p>
  <input value = {quantity} onChange = {handleQuantityChange}  type="number"/>
  <p> Quantity: {quantity}</p>
  <textarea value = {comment} onChange = {handleCommentChange} placeholder="Enter delivery instructions..." />
 <p> Comment: {comment}</p>
 <select value = {payment} onChange = {handlePaymentChange}>
    <option value="">Select an  option</option>
    <option value="credit">Credit Card</option>
    <option value="debit">Debit Card</option>
    <option value="paypal">PayPal</option>
 </select>
 <p> Payment Method: {payment}</p>
 <label>
    <input type="radio" value="pickup" checked={shipping === "pickup"} onChange={handleShippingChange}
 />    Pick Up
 </label>
 <br></br>
 <label> 
  <input type="radio" value="delivery" checked={shipping === "delivery"} onChange={handleShippingChange} />
    Delivery
 </label>
 <p> Shipping :{shipping}</p>
        </div>
    );

}
export default MyComponent;