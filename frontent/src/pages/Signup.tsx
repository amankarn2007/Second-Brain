import { useRef } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../Config";


function Signup() {
    let navigate = useNavigate();
    const userNameRef = useRef<any>(""); //to store usrname & password from Input
    const passwordRef = useRef<any>("");

    async function signup() {
        const username = userNameRef.current.value;
        console.log(username);
        const password = passwordRef.current.value;

        await axios.post(`${BACKEND_URL}/api/v1/signup`, { //send req to backend
            username,
            password
        })
        
        alert("you have signed up");
        //show success signed up

        navigate("/login")
    }

    return (
        <div className="h-screen w-full flex justify-center items-center bg-gray-50">
            <div className="flex flex-col h-140 w-full max-w-md bg-white p-10 rounded-2xl border border-gray-200 shadow-xl">
                
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
                    <p className="text-gray-500 mt-2 text-sm">Join Second Brain to organize your life.</p>
                </div>

                <div className="space-y-4 mb-8">
                    <div>
                        <label className="text-sm font-medium text-gray-700 ml-1 mb-1 block">Full Name</label>
                        <Input placeholder="John Doe" width={92} />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700 ml-1 mb-1 block">Username</label>
                        <Input ref={userNameRef} placeholder="johndoe123" width={92} />
                    </div>
                
                    <div>
                        <label className="text-sm font-medium text-gray-700 ml-1 mb-1 block">Password</label>
                        <Input ref={passwordRef} placeholder="••••••••" type="password" width={92} />
                    </div>
                </div>

                <div className="flex flex-col gap-4 items-center">
                    <Button 
                        variant="secondary" 
                        size="md" 
                        text="Sign Up" 
                        width={90}
                        onClick={signup} 
                    />
                    
                    <p className="text-md text-gray-600">
                        Already have an account? 
                        <span className="text-purple-600 cursor-pointer hover:underline" 
                        onClick={() => navigate("/login")}>Login</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup;