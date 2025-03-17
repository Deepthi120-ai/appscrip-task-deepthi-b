export const loginReducer = (state , {type, payload}) => { //returns state, action-->action is type and payload
    switch(type){
        case "EMAIL"://setting the state of the email
            return {
                ...state,
                email: payload.value
            }
        case "PASSWORD": //setting the state of the password
            return {
                ...state,
                password: payload.value
            }
        case "TOKEN": //setting the state of Token
            return {
                ...state,
                token: payload.token
            }
        case "LOGOUT":
            return{
                ...state,
                email: '',
                password: '',
                token:''
            }
        default:
            return state
    }
}