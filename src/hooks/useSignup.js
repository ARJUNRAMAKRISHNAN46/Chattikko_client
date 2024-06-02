import { useState } from "react";
import { toast } from "react-hot-toast";

const useSignup = () => {
    const [loading, setLoading] = useState(false);

    const signup = async({userName, email, password, confirmPassword, gender}) => {
        const success = handleInputErrors({userName, email, password, confirmPassword, gender});
    
        if(!success) {
            return;
        }
    
        try {
            const res = await fetch("http://localhost:4040/api/auth/signup", {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({userName, email, password, confirmPassword, gender})
            });

            const data = await res.json();
            console.log(data);
        } catch (error) {
            toast.error(error?.message);
        } finally {
            setLoading(false);
        }
    }
    return { loading, signup }
}

export default useSignup;

const handleInputErrors = ({userName, email, password, confirmPassword, gender}) => {
    if(!userName|| !email|| !password|| !confirmPassword|| !gender) {
        toast.error("Please fill all the fields");
        return false;
    }

    if(password !== confirmPassword ) {
        toast.error("Passwords do not match");
        return false;
    }

    if(password.length < 8) {
        toast.error("Password must be atleast 8 charecters");
        return false;
    }

    return true;
}