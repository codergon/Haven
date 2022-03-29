import express, { Router,Request,Response } from "express";
import { UserModel,UserDocument} from "../models/User";
import { sign,verify} from "jsonwebtoken"
// import { EMAIL_SENT_FROM,transporter } from "./register";
const router:Router=express.Router()


router.put("/forgot",async function (req:Request,res:Response) {
    try {
        const resetemail=req.body.resetemail;
    const user_account=await UserModel.findOne({email:resetemail});
    if(!user_account){
        res.status(401).json({
            message:"Could not find account of that email"
        })
    }else{
        var passwordResetToken=sign(user_account._id,String(process.env.RESET_PASSWORD_KEY),{ expiresIn: "20m" })
        // const msg = {
        //     to: resetemail,
        //     from: EMAIL_SENT_FROM,
        //     subject: "Click link to reset your password",
        //     html: `<h2>Here's your password-reset link!</h2>
        //     <a href="${process.env.CLIENT_URL}/forgotPassword?token=${passwordResetToken}">${process.env.CLIENT_URL}/forgotPassword?token=${passwordResetToken}</a>
        //     <p>For security reasons, this link will expire within 20 mins! </p>`,
        //   };

          user_account.updateOne({passwordResetToken:passwordResetToken},(err:Error,updatedUser:UserDocument)=>{
            if(err){
                res.status(401).json({
                    message:"Reset password link error"
                }) 
            }else{
                // transporter.sendMail(msg,function(err, info){
                //     if (err) {
                //         message:"Could not send mail now"
                //     } else {
                //         res.status(200).json({
                //             message:"Reset Password link sent to mail"
                //         });
                //     }
                //     });
            }
          })
    }
    } catch (error) {
        res.status(401).json({
            message:"An unexpected error occured"
        }) 
    }
})


router.put("/reset",async function (req:Request,res:Response) {
    const { resetLinkToken, newPassword } = req.body;
    try {
        const decoded=verify(resetLinkToken,String(process.env.RESET_PASSWORD_KEY))
        let found_user=await UserModel.findOne({passwordResetToken:resetLinkToken})
        if(found_user){
            found_user.update({
                password:newPassword,
                $unset:{passwordResetToken:""}
            })
        }
    } catch (error) {
        res.status(401).json({
            message:"Incorrect or Expired Reset Password Link, please resend forgot password email from Login page."
        }) 
    }
})