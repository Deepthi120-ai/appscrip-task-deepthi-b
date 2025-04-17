import axios from "axios";

const BaseUrl = 'https://fakestoreapi.com/products'


export const getAllProducts = async () => {
    const url= `${BaseUrl}`;
    try{
        const { data } =await axios.get(url);
        return data;
    }catch(err){
        return err
    }
}