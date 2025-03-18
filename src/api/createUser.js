import axios from "axios";

export const createUser = async(name, email, password) => {

    const url = 'https://api.escuelajs.co/api/v1/users/';
    try{
        const { data } = await axios.post(url, {
            name: name,
            email: email,
            password: password,
            avatar: "https://picsum.photos/800"
        })
        console.log('newuser',data);
        return data;
    }catch(err){
        return err
    }

}