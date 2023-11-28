import jwt  from "jsonwebtoken";
import User from "../schema/user.js";


export const isAuth = async (req, res, next)=>{
    const authHeader = req.headers['authorization'];
  
    if (authHeader) {
        const token = authHeader.split(' ')[1]; 
        req.token = token; 
        const decode = await jwt.verify(token, 'secret')
        const {id}= decode;
        const user= await User.findById(id);
        req.user= user;
         return next();
    }
    return res.status(400).json({msg:" you are not Authorized!"})


}

export const isAdmin= async( req, res ,next)=>{
    const {role}= req.user
    
    if(role==='admin'){
        
     return next();
}
 return res.status(400).json({msg:'you are not authorized!'})

}