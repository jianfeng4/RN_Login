import Urls from "./Urls";

export function post(api,params){
    console.log(9999);
    const {headers,url} = Urls
    let result= fetch(addParamsToUrl(url+api,params),headers)
    console.log(result,'????')
    return handleResult(result)
}


function handleResult(result){
    return new Promise((resolve,reject)=>{
        result.then((res)=>{
            const { code, data = {} } = result;
            if (code === 401) {
                //todo 跳转到登录页
                return;
            }
            if(code==200){
                resolve(data)
            }
        }).catch((err)=>{
            reject(err)
        })
    })
}




function addParamsToUrl(url,params){
    let newUrl=new URL(url)
    console.log(params)

    let arr=Object.entries(params)
    for(const [key,value] of Object.entries(params)){

        newUrl.searchParams.append(key,value)
    }
    console.log(newUrl.toString())
    return newUrl.toString()
}

