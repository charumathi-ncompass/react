import { useState } from "react";
// import {Link} from "react-router-dom"
import "./App.css"
import { useHistory } from "react-router-dom";
import {validation} from './Validation'

function SignUp() {
  const [userInput, setUserInput] = useState({
    ID: "",
    NAME: "",
    CONTACT: "",
    EMAIL: "",
    GENDER: "",
    ADDRESS: "",
    PASSWORD: "",
  });

  const history = useHistory();
const [errors,setErrors]=useState({});

  function addUser(e) {
    try{
    e.preventDefault();

    setErrors(validation(userInput));
    if (Object.keys(errors).length !== 0) {
      return;
    }

    fetch("http://localhost:9000/customers/signup", {
      method: "POST",
      body: JSON.stringify(userInput),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
    
  }
  catch(err){
    return err;
  }
  }

 
  const eventEnterID = (e) =>
    setUserInput({ ...userInput, ID: e.target.value })

  const eventEnterNAME = (e) =>
  setUserInput({ ...userInput, NAME: e.target.value })

  const eventEnterCONTACT = (e) =>
  setUserInput({ ...userInput, CONTACT: e.target.value })

  const eventEnterEMAIL = (e) =>
  setUserInput({ ...userInput, EMAIL: e.target.value })

  const eventGenderMale = (e) =>
  setUserInput({ ...userInput, GENDER: 'M' })
 
  const eventGenderFemale = (e) =>
  setUserInput({ ...userInput, GENDER: 'F' })

  const eventEnterPASSWORD = (e) =>
    setUserInput({ ...userInput, PASSWORD: e.target.value })

  const eventEnterADDRESS= (e) =>
    setUserInput({ ...userInput, ADDRESS: e.target.value })

   const navigateHome = () =>{
    history.push("/Customer");
   }
 
   
  return (<>
<button onClick={()=>navigateHome()}>Home</button>
    <h3>ADD CUSTOMER</h3><br/>
<div className="form">
   
    <form name="signup">
    
      Enter id :
      <input type="text" onChange={eventEnterID} required/>
      <span>{errors.id}</span>
    
      <br /> 
      <br />
      Enter name :
      <input
        type="text" name="name"
        onChange={eventEnterNAME} 
        required
      />
     <span>{errors.name}</span>
     
     
      <br /> 
      <br />
      Enter contact :
      <input
        type="number" 
        onChange={ eventEnterCONTACT } required
      />
         <span>{errors.contact}</span>
    
      <br /> 
      <br />
      Enter email :
      <input
        type="text"  
        onChange={eventEnterEMAIL} required
      />
         <span>{errors.email}</span>
   
      <br /> <br/>
     
      Enter gender :<br/>
     
      <input
        type="radio"  
        onChange={eventGenderMale } required
      /> <label >Male</label><br/>
     
      <input
        type="radio"  
        onChange={eventGenderFemale } required
      /> <label >Female</label>
     

      <br /><br/>
      Enter password :
      <input
        type="password"   name="password"
        onChange={eventEnterPASSWORD}  required
      />
         <span>{errors.password}</span>
   
      <br /> 
      <br />
      Enter address :
      <input
        type="text" 
        onChange={eventEnterADDRESS} required
      />
         <span>{errors.address}</span>
   
      <br /> 
      <br />
      <button type="Submit" onClick={addUser}>Submit</button><br/><br/>
    </form>
    </div>
       </>
     
  );
 
}

export default SignUp;
