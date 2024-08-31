"use client"
import { useState } from "react";
export default function Register() {
    const [input, setInput] = useState("");
    if(input === "test"){
      return (
        <div>
          <h1>Register</h1>
          <p>Success</p>
        </div>
      );
    }else if(input === "error"){
        throw new Error("input error");
    }
    return (
        <div>
        <h1 className="text-center">Register</h1>
        <p>input "error" will trigger error page</p>
        <p>input "test" will trigger success page</p>
      
        <label htmlFor="testError"> input </label>
        <input id= "testError" type="text"  value={input} onChange={(e)=>{setInput(e.target.value)}} />
       
      </div>
    );
  }