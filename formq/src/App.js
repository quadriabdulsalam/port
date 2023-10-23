import logo from './logo.svg';
import  FORMINPUT  from "./components/FORMINPUT";
import './App.css';
import './components/forminput.css'
import { useRef, useState } from 'react';

function App() {

  const [details, setDetails] = useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
    errorMessage:''
  })

  const inputs = [
    {id:1, 
     name:'username',
     type:'text',
     label:'username',
     placeholder:'username',
     errorMessage:'username should be 3-16 character and should not include any special characteer !',
     required:true,
     pattern: '^[A-Za-z0-9]{3,16}$'},
     {id:2, 
      name:'email',
      type:'email',
      label:'email',
      placeholder:'email',
      errorMessage:'it should be a valid email address',
      required:true},
       {id:3, 
        name:'password',
        type:'password',
        label:'password',
        placeholder:'password',
        errorMessage:'password should be 8-20 characters and should include at least 1 letter 1 number and 1 speciqal charrecter ',
        required:true,
        pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`},
      
         {id:4, 
          name:'confirmPassword',
          type:'password',
          label:'confirmPassword',
          placeholder:'confirmPassword',
          errorMessage:'password do not match',
          required:true,
          pattern:details.password}

  ]

  
  const formhandler = (e)=>{
    e.preventDefault();
    console.log(details)
  };

  const onchange = (e)=>{
    setDetails({ ...details, [e.target.name]: e.target.value});
    
  };
  
  return (
    <div className='app'>
    <form onSubmit={formhandler}>
      <h1>Register</h1>
      {inputs.map((input)=>(
        <FORMINPUT key={input.id} {...input} value={details[input.name]} onChange={onchange}  />
      ))}
    

    <button>SUBMIT</button>
      
    </form>
    </div>

  );
}

export default App;
