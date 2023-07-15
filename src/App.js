import logo from './logo.svg';
import './App.css';
import FormInput from './components/FormInput';
import { useState } from 'react';
import {mail} from './mail.php'

function App() {

  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: ""
  })

  const inputs = [
    {
      id:1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",

      required: true,
    },
    
    {
      id:2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id:3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      required: true,
    },
    {
      id:4,
      name: "password",
      type: "password",
      placeholder: "password",
      errorMessage:  "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },

    {
      id:5,
      name: "confirmPassword",
      type: "password",
      placeholder: "confirmPassword",
      errorMessage: "Passwords don't match!",
      label: "confirmPassword",
      pattern: values.password,
      required: true,
    },
    
  
  ]

  
  console.log("re render")

  const onChange = (e) => {
    setValues ({...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    // e.preventDefault();
    
  }

  console.log(values);
  return (
    <div className="App">

     <form onSubmit={handleSubmit}  
     action="mail.php" method="post"
     >
      <h1>Register</h1>

      {inputs.map((inputs)=> (
      <FormInput key={inputs.id} {...inputs} value={values[inputs.name]}
      onChange={onChange}
      />
      ))}  
    
      <button >Submit</button>
     </form>


    </div>
  );
}


export default App;
