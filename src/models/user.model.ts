import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import config from 'config'
import {UserDocument} from '../interfaces/interface.user'


const userSchema = new mongoose.Schema(
    {
        name: {type: 'string', required: true},
        surname: {type: 'string', required: true},
        password: {type: 'string', required: true},
        email: {type: 'string', required: true, unique: true},
        role: {type: 'string', required: true},
        data: {type: 'object', required: true},
    },
    {
        timestamps: true
    }
)
const UserModel = mongoose.model("User", userSchema);

userSchema.pre("save", async function (next: any) {
  let self = this as UserDocument;

  if (self.isModified("password")) {
    const salt = await bcrypt.genSalt(10);

    const hash = bcrypt.hashSync(self.password, salt);

    self.password = hash;

    return next();
  } else {
    return next();
  }
})

userSchema.methods.comparePassword = async function (passwordAttemp: string): Promise<Boolean>{
    const self = this as UserDocument
    return await bcrypt.compare(passwordAttemp, self.password)
}

export default UserModel