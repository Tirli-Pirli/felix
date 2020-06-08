import React, { useState, useCallback } from "react";
import Button from "../components/Button/Button";
import { useHistory} from 'react-router-dom';

import "../scss/signin.scss"



const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const loginAPI = useCallback((e) => {
        e.preventDefault()
          fetch ("https://academy-video-api.herokuapp.com/auth/login", {
            method: "POST",
            body: JSON.stringify({username: email, password: password}),
            headers: {"Content-Type": "application/json"},
        })
        .then((res) => res.json())
        .then((response) => {
            console.log(response);
            localStorage.setItem("token", response.token);
            history.replace('/content')
    })
},[email,password, history])

 const loginEmail = (e) => {
        
        setEmail(e.target.value);
     };
   const loginPassword = (e) => {
         setPassword(e.target.value);
     };

    return (
        <div className="SignIn">
            <form onSubmit={loginAPI} className="SignIn_container">
                <input className="input" type="text" placeholder="Email" onChange={loginEmail} />
                <input className="input" type="password" placeholder="Password" onChange={loginPassword} />
                <Button type="submit">Sign In</Button>
            </form>
        </div>
    )
}

export default Login

// class Login extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             emailInput: '',
//             passwordInput: '',
//         }
//     }

//     signIn = (e) => {
//         e.preventDefault()
//             fetch("https://academy-video-api.herokuapp.com/auth/login", {
//                 method: "POST",
//                 body: JSON.stringify({ username:this.state.emailInput,
//                     password: this.state.passwordInput }),
//                 headers: { "Content-Type": "application/json" },
//                 })
//   .then((res) => res.json())
//   .then((response) => {
//     console.log(response);
//     localStorage.setItem("token", response.token);
//     // this.props.history.replace('/content')
//   });

//     }

    // setEmail = (e) => {
        
    //     this.setState({emailInput: e.target.value});
    // };
    // setPassword = (e) => {
    //     this.setState({passwordInput: e.target.value});
    // };


//         return (
//             <div className="SignIn">
//                 <form onSubmit={this.signIn} className="SignIn_container">
//                     <input className="input" type="text" placeholder="Email" onChange={this.setEmail} />
//                     <input className="input" type="password" placeholder="Password" onChange={this.setPassword} />
//                     <Button type="submit">Login</Button>
//                 </form>
//             </div>
//         )
//     }
// }


// export default withRouter(Login)