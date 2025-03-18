import { useReducer } from "react";
import { createUser } from "../../api/createUser";
import { useNavigate } from "react-router-dom";
import { registerReducer } from "../../reducers/registerReducer";

export const Register = () => {


    const initialState={
        name:'',
        username:'',
        password:''
    }
    const [{name, email, password}, registerDispatcher] = useReducer(registerReducer,initialState);
    const navigate = useNavigate();

    const onFormSubmit = async(e) => {
        e.preventDefault();
        const data = await createUser(name, email, password);
        console.log(name, email, password);
        console.log('hey here',data)
        navigate('/auth/login');
    }

    const onNameChange = (e) => {
        registerDispatcher({
            type:'NAME',
            payload:{
                value:e.target.value
            }
        })
    }

    const onEmailChange = (e) => {
        registerDispatcher({
            type:'EMAIL',
            payload:{
                value:e.target.value
            }
        })
    }

    const onPasswordChange = (e) => {
        registerDispatcher({
            type:'PASSWORD',
            payload:{
                value:e.target.value
            }
        })
    }

    return (
        <div className="outer-container">
          <form onSubmit={onFormSubmit}>
            <h2>Register</h2>
            <div className="name">
                <span>Name *</span>
                <input onChange={onNameChange} required />
            </div>
            <div className="email">
              <span>Email *</span>
              <input onChange={onEmailChange} required />
            </div>
            <div className="password">
              <span>Password *</span>
              <input onChange={onPasswordChange} type="password" required />
            </div>
            <div>
              <button className="login-final-button">Sign Up</button>
            </div>
          </form>
        </div>
      );
}