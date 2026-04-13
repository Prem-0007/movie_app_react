import pfp from "./assets/premhaha.jpeg";
function Card(){
 return (
    <div className ="card">
        <img className = "pfp" src={pfp} alt="pfp" width="150" height="150"></img>
        <h2 className="card-title">Prem Haha</h2>
        <p className="card-text">I'm a developer</p>
        </div>
 )
}
export default Card;