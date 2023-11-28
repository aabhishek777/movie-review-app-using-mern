import { api } from "./baseApi"



const token = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTQ1ZjhlNmVjMTM5OWRlMmQ4MjE4YiIsImlhdCI6MTY5MjY4ODI3MCwiZXhwIjoxNzI0MjI0MjcwfQ.C-hLwdQYwB885aH7QP7mviffxxGHYRByHevU8Lvg3Uc';



 export const getLatestActors= async (pageNo,limit)=>{

try {
 return await api.get(`/actor/actors?limit=${limit}&pageNo=${pageNo}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    
} catch (error) {
    console.log(error)
    return error;
}
}