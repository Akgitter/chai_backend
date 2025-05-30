import mongoose, {Schema} from mongoose;
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

const userSchema =new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        fullname: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String, //cloudinary
            required: true
        },
        coverImage: {
            type: String,
        },
        watchHistroy: [
            {
                type: Schema.Type.ObjectId,
                ref: "Video"
            }
        ],
        password:{
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

userSchema.pre("save", async function (next) {
    if(!this.isMdodified("password")) return next();

    this.password = bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(pasword){
    return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema)