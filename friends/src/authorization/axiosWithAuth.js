import axios from 'axios';



export const axiosWithAuth = (props) => {
    const token = localStorage.getITem('token');

    if(token === 'undefined') {
        console.log('Not logged on');

    }else{
        console.log('Logged In', {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        });
    }

        return axios.create({
            baseURL: 'http://localhost:5000',
            headers:{
             'Content-Type': 'application/json',
            'Authorization': `${token}`,
        }
        });

}   ;