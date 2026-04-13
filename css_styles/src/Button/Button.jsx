// import styles from "./Button.module.css";


function Button () {

    const styles = {
        
  backgroundColor:" rgb(42, 122, 165)",
  color:"white",
  padding:"10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",

    }
    return(
       /*
        <button className={styles.btn}
        >Click Me</button>
        */
        <button style={styles} >Click Me</button>
    )
}
export default Button;