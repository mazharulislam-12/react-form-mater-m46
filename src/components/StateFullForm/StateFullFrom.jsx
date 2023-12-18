import { useState } from "react";

const StateFullFrom = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('')


   
    const handleSubmti = e =>{
        e.preventDefault();
        if (password.length < 6) {
            setError('password has ben 6 characters or longer')
        }
        else{
            setError('') 
            console.log(name);
            console.log(email);
            console.log(password);
        }


    }

    
    const handleNameChange = e =>{
        setName(e.target.value)
    }

    const haneleEmailChange = e => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    return (
        <div>

            <form onSubmit={handleSubmti}>
                <input
                    onChange={handleNameChange}
                type="text" name="name" />
                <br />

                <input
                    onChange={haneleEmailChange}
                 type="text" name="email" />

                <br />
                <input
                    onChange={handlePasswordChange}
                 type="password" name="password" required />
                <br />
                <input type="submit" value="Submit" />

                {
                    error && <p>{error}</p>
                }

            </form>

        </div>
    );
};

export default StateFullFrom;