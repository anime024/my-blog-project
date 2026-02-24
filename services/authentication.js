require("dotenv").config();


const JWT=require("jsonwebtoken");
const secret=process.env.SECRET ;
function createTokenForUser(user){
    const payload={
        _id:user._id,
        email:user.email,
        profileImageUrl:user.profileImageURL,
        role:user.role,
    };
    const token=JWT.sign(payload,secret);
    return token;
}

function validateToken(token){
    // this will return payload informations
        return JWT.verify(token,secret);
    
}

module.exports={createTokenForUser,validateToken};