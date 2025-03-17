import { useLogin } from "../../context/login-context";
import { userLogin } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const { loginDispatch, email, password } = useLogin();
  const navigate = useNavigate()

  const onFormSubmit = async(e) => {
    e.preventDefault(); //on clicking form by default, it reloads and all the data is lost, so use preventDefault
    const data = await userLogin(email, password);
    console.log(data);
    loginDispatch({
        type: "TOKEN",
        payload:{
            token: data
        }
    })
    console.log('access_token',data.access_token);
    if(data.access_token){
        navigate('/');
    }
  };

  const onEmailChange = (e) => {
    loginDispatch({
      type: "EMAIL",
      payload: {
        value: e.target.value,
      },
    });
  };

  const onPasswordChange = (e) => {
    loginDispatch({
      type: "PASSWORD",
      payload: {
        value: e.target.value,
      },
    });
  };

  return (
    <div className="login-container">
      <form onSubmit={onFormSubmit}>
        <h2>Login</h2>
        <div className="email">
          <span>Email *</span>
          <input onChange={onEmailChange} required />
        </div>
        <div className="password">
          <span>Password *</span>
          <input onChange={onPasswordChange} type="password" required />
        </div>
        <div>
          <button className="login-final-button">Login</button>
        </div>
      </form>
    </div>
  );
};
