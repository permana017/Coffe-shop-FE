import axios from "axios";



export const serviceSignIn = async (value) => {

    const postData = async () => {
        const response = await axios.post(
            `http://localhost:5000/api/v1/auth/login`,{
                username:value.username,
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
                    console.log(error);
                })

        return response;
    }
           return await postData()
}   


export const serviceSignUp = async (value) => {

    const postData = async () => {
        const response = await axios.post(
            `http://localhost:5000/api/v1/auth/regiter`,{
                username:value.username,
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
                    console.log(error);
                })

        return response;
    }
           return await postData()
}   