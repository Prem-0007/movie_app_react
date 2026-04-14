function ProfilePicture() {
   const imageUrl ="./src/assets/premhaha.jpeg";
   const handleClick = (e) => {
    e.target.style.display= "none";
      // console.log("HAHA PREM");
   };

   return (
    <img src={imageUrl} alt="Profile Picture" width="200" height="200" onClick={(e) => handleClick(e)}></img>
   )
}

export default ProfilePicture;