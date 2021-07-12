import React, {useState} from 'react'
import Signin from './Signin'
import Signup from './Signup'

export default function Auth() {
    const [signin, setSignin] = useState(false)
    const [signup, setSignup] = useState(false)
    return (
        <div>
            <Signin setSignin={setSignin} signin={signin} setSignup={setSignup}/>
            <Signup setSignup={setSignup} signup={signup} setSignin={setSignin}/>
        </div>
    )
}
