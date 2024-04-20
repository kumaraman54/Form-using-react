import React, { useState } from 'react'

const Form = () => {
  const [leftVal, setLeftVal] = useState("0px");
  const [bgcolor, setBgcolor] = useState("#faf6e9");
 

    const[formData,setFormData] = useState({
        firstname:"",
        middlename:"",
        lastname:"",
        age:"",
        phonenumber:"",
        email:"",
        pass:"",
        conpass:"",
        skills:[],
        gender:"",
        address:"",
        locality:"",
        landmark:"",
        country:"",
        city:"",
        code:""
    });
     
        const handlechange =(event)=>{
      

            if(event.target.name === "skills"){
                if(event.target.checked){
                    // console.log("add to skills : ", event.target.value)
                    formData.skills = [...formData.skills, event.target.value]
                 
                }
                else{
                    // console.log("remove from skills : ", event.target.value)
                    formData.skills = formData.skills.filter((currSkill)=> currSkill !== event.target.value)
                 
                }
            }
            else{
                setFormData(()=>{
                    return{...formData,
                        [event.target.name] : event.target.value}
                })
            
            }
           


}
const onSubmitHandler = (e) => {
  e.preventDefault()
  console.log("submitted")
  console.log(formData);
}

const toggleFire = (event) => {
  if(event.target.checked){
  
    setLeftVal("50px");
    setBgcolor("#494949");
  }
  else{
   
    setLeftVal("0px");
    setBgcolor("#faf6e9");
  }
}
  return (
    <>
    <div className='body' style={{background: bgcolor}}>
     <header>
    <div class="head" >
    <div class="dum"></div>
    <span>GET IN TOUCH</span>
    <label class="togglebox">
                <input type="checkbox" id="checkbox" onChange={toggleFire}/>
                <div class="circle" style={{left: leftVal}}></div>
        </label>
    </div>
  </header>
  <div class="box" >
  <div class="title">
  <h1>Enter your details</h1>
  </div>
  <div class="details">
  <form  onSubmit={(e) => onSubmitHandler(e)}>
  <div class="name">
  <p>Firstname:</p>
  <input type="text" name="firstname" placeholder="Firstname"  onChange={handlechange}
              value={formData.firstname} />
  <p>middlename:</p> 
            <input type="text" name="middlename" placeholder="middlename" onChange={handlechange}
              value={formData.middlename}/>
            <p>lastname:</p>
                <input type="text" name="lastname" placeholder="lastname" onChange={handlechange}
              value={formData.lastname}></input>
  </div>
  <div class="age">
            <p>Age:
            <input type="date" name="age" placeholder="Enter age" onChange={handlechange}
              value={formData.age}/></p>
        <p>phonenumber:
        <input type="number" name="phonenumber" placeholder="enter number" onChange={handlechange}
              value={formData.phonenumber}/></p>
            <p>Email:
            <input type="email" name="email" placeholder="Email" onChange={handlechange}
              value={formData.email}/></p>
            
        </div>
        <div class="select">
           <div class="gender">
            <p>Gender:</p>
            <input type="radio" name="gender" value="male" id="male" onChange={handlechange} />
            <label for="male">Male</label>
            <input type="radio" name="gender" value="female" id="female" onChange={handlechange}/>
            <label for="female">Female</label>    
        </div> 
            <div class="check">
            <p>Enter your interest: </p>
            <input type="checkbox" id="html" name="skills" value="HTML" onChange={handlechange}/>
            <label for="html">HTML</label>
            <input type="checkbox" id="css" name="skills" value="CSS" onChange={handlechange}/>
            <label for="css">CSS</label>
            <input type="checkbox" id="javascript" name="skills" value="JAVASCRIPT" onChange={handlechange}/>
            <label for="javascript">JAVASCRIPT</label>
           
        </div>
    </div>
    <div class="address">
        <p>Address:
        <input type="text" name="address" id="address" placeholder="Enter street address" onChange={handlechange}
              value={formData.address}/></p>
        <p>Locality:
        <input type="text" name="locality" id="locality" placeholder="Enter Locality" onChange={handlechange}
              value={formData.locality}/></p>
        <p>Landmark:
            <input type="text" name="landmark" id="landmark" placeholder="Landmark" onChange={handlechange}
              value={formData.landmark}/></p>
    </div>
    <div class="region">
        <p>Country:
        <select name="country" id="country" onChange={handlechange}
              value={formData.country} >
            <option value="">country</option>
            <option value="America">America</option>
            <option value="Japan">Japan</option>
            <option value="India">India</option>
            <option value="Russia">Russia</option>
        </select></p>
        <p>City:
        <input type="text" name="city" id="city" placeholder="Enter your city" onChange={handlechange}
              value={formData.city}/></p>
        <p>postalcode:
            <input type="number" name="code" id="code" placeholder="Enter your postalcode" onChange={handlechange}
              value={formData.code}/></p>
    </div>
    <div class="pass">
            <p>Enter password:
            <input type="password" name="pass" placeholder="Enter password" onChange={handlechange}
              value={formData.pass}/></p>
           
                <p id="confirm">confirm password:
                    <input  type="password" name="conpass" placeholder="confirm password" id="" onChange={handlechange}
              value={formData.conpass}/></p>
            </div>
            <div class="btn">
            <button id="submit" type="submit">Submit</button>
            <button type="reset">Reset</button>
        </div>
  </form>
</div>
  </div>
  </div>
    </>
  )
}

export default Form