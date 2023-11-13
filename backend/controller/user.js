import path from 'path'
import User from '../model/user.js'
import multer from 'multer'
const upload = multer({ dest: 'uploads/' });
import ErrorHandler from '../utils/ErrorHandler.js'


export const CreateUser = ('/create-user', upload.single("file") , async (req, res) => {
    try{
        const {name, email, password} = req.body
    const userEmail = await User.findOne({email})

    if(userEmail){
        return next(new ErrorHandler("User already exists", 400))
    }

    const filename = req.file.filename;
    const fileUrl = path.join(filename);

    const user = {
        name : name,
        email: email,
        password: password,
        avatar: fileUrl
    };
    console.log(user);
    }catch(error){
        return next(new ErrorHandler(error.message, 400))
    }
})
