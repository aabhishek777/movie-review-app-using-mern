import { api } from "./baseApi";

const token = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTQ1ZjhlNmVjMTM5OWRlMmQ4MjE4YiIsImlhdCI6MTY5MjY4ODI3MCwiZXhwIjoxNzI0MjI0MjcwfQ.C-hLwdQYwB885aH7QP7mviffxxGHYRByHevU8Lvg3Uc';
export const uploadTrailer= async (formData, onUploadProgress)=>{
   
    try {
      return await api.post('/movie/upload-trailer', formData , {
        headers:{
            Authorization: `Bearer ${token}`,
            'Content-Type':'multipart/form-data'
        },
        onUploadProgress:({loaded, total})=>{
            if(onUploadProgress)
            onUploadProgress(Math.floor((loaded/total)*100));
        }
       })

        
    } catch (error) {
        console.log(error);
    }

}