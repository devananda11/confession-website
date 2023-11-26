import React,{useState} from 'react'
import {app} from '../firebase'
import {getFirestore, collection,addDoc} from "firebase/firestore";
import "./AddConfession.css"
const AddConfession = () => {
  const [confessions, setConfessions] = useState("");
  const db = getFirestore(app);
  const addConfession = async (e) => {
    e.preventDefault();
    const confession = e.target.confession.value;
    try {
      const docRef = await addDoc(collection(db, "confessions"), {
        confession,
        date: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      setConfessions("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div>
      <form onSubmit={addConfession}>
        <input class="input-bar" type='text' name='confession' id='confession' placeholder='Write your confession here' value={confessions}
        onChange={(e)=>setConfessions(e.target.value)}
        />
        <input class='submit-btn' type='submit' value='Submit'/>
      </form>
    </div>
  )
}

export default AddConfession