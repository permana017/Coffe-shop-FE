import axios from "axios";



export const serviceSignIn = async (value) => {


    const postData = async () => {
        const response = await axios.post(
            `https://permana-coffee.cyclic.app/api/v1/auth/login`,{
                email:value.email,
                password: value.password,
            },{
                headers: {
                'Access-Control-Allow-Headers':'*',
                'content-type': 'application/x-www-form-urlencoded'
                } 
            })
                .then(function (response) {
                   // console.log(response);
                   return response
                })
                .catch(function (error) {
                    console.log(error.response.data.message);
                })

        return response;
    }
           return await postData()
}   


export const serviceSignUp = async (value) => {
    const postData = async () => {
        const response = await axios.post(
            `https://permana-coffee.cyclic.app/api/v1/auth/regiter`,{
                email:value.email,
                password: value.password,
                username: value.username
            },{
                headers: {
                'Access-Control-Allow-Headers':'*',
                'content-type': 'application/x-www-form-urlencoded'
                } 
            })
                .then(function (response) {
                   // console.log(response);
                   return response
                })
                .catch(function (error) {
                    console.log(error);
                })

        return response;
    }
           return await postData()
}   