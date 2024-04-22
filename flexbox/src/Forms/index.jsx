import React, { useState } from "react"
import "./form.css"

function Forms(){
    const  [name, setName] = useState("");
    const  [password, setpassword] = useState("");
    const  [email, setEmail] = useState("");
    const  [about, setAbout] = useState("");
    console.log(name);

    function handleSubmit(e){
        e.preventDefault()
        console.log(name, password, email, about)
    }
return ( 
    <form 
        className="form_container" 
        onSubmit={handleSubmit}
    >
        <div className="form_body">
            <label>Name</label>
                <input type="text" name="name" className="input_color" value={name} onChange={(e) => {
                    setName(e.target.value);
                }}
                />
        </div>
        <div className="form_body">
            <label>Password</label>
                <input type="password" name="password" className="input_color" value={password} onChange={(e) => {
                    setpassword(e.target.value);
                }}
                />
        </div>
        <div className="form_body">
            <label>Email</label>
                <input type="email" name="email" className="input_color" value={email} onChange={(e) => {
                    setEmail(e.target.value); 
                }}
                />
        </div>
        <div className="form_body">
            <label>Tell us about yourself:</label>
                <textarea name="about" className="input_textarea" value={about} onChange={(e) => {
                    setAbout(e.target.value); 
                }}
                />
        </div>
        <input type="submit" value="submit" className="button"/>
    </form>
)
}

export default Forms