import React, { useState } from "react"; 
import { auth, db, imagedb } from "./firebase/firebase"; 
import { doc, getDoc } from "firebase/firestore"; 
import { ref, uploadBytes ,listAll, getDownloadURL} from "firebase/storage"; 
 
 
 
const Profile=()=>{ 
  const [userDetails, setUserDetails] = useState(null); 
  const fetchUserData = async () => { 
    auth.onAuthStateChanged(async (user) => { 
      console.log(user) 
      const docRef = doc(db, "Users", user.uid); 
      const docSnap = await getDoc(docRef); 
      if (docSnap.exists()) { 
        setUserDetails(docSnap.data()) 
        console.log(docSnap.data()) 
      } else { 
        console.log("user is not logged in ") 
      } 
    }); 
  }; 
  
 
  const handlelogout= async()=>{ 
    try { 
      await auth.signOut(); 
      window.location.href= "/" 
    } catch (error) { 
      console.log(error.message ) 
    } 
  } 
 
 
  const [imgurl,setImgurl]= useState([]) 
  const [img, setImg]= useState("") 
 
  const handleClick =(user)=>{ 
      const imgRef = ref(imagedb,`files/${user.uid}`) 
      uploadBytes(imgRef,img) 
     
    
  } 
  useState(() => { 
    fetchUserData() 
    listAll(ref(imagedb,"files")).then(imgs=>{ 
      console.log(imgs) 
      imgs.items.forEach(val=>{ 
        getDownloadURL(val).then(url=>{ 
          setImgurl(data=>[...data,url]) 
        }) 
      }) 
    }) 
  }, []) 
console.log(imgurl,"imgurl") 
  return ( 
    <>   
      <div> 
        {userDetails ? ( 
 
          <h1> 
            <p type="file" className='profileimg' onChange={(e)=> setImg(e.target.files[0])} >{ 
              imgurl.map(dataval=><div><img src={dataval} height={100}  width={100}/> </div>) 
            }</p> 
            <button onClick={handleClick} >upload</button> 
            <h1>welcome {userDetails.Name}</h1> 
            <p>Name:{userDetails.Name}</p> 
            <p>Email:{userDetails.email}</p> 
            <button onClick={handlelogout}>Loggout</button> 
          </h1> 
        ) : ( 
          <p> 
            {/* Loading ....... */} 
          </p> 
        ) 
        } 
      </div> 
    </> 
  ) 
 
} 
export default Profile