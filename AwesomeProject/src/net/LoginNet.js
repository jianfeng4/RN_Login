import Urls from "./Urls";
import {post} from './HiNet'

export function LoginNet(userName,passWord){
    return new Promise((resolve, reject) => {
        const {login: { api },} = Urls;
        // 得到api='user/login'
       
        const formData = new FormData();
        formData.append('userName', userName);
        formData.append('password', passWord);
       
        post(api,formData).then(res=>{
            const {data} =res
            console.log(data,'---------')
            resolve(data)
        }).catch(err=>{
            console.log(8888)
            reject(err)
        })
    });
}