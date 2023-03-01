import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({
    timestamps: true
})
export class UserModel{
    @Prop()
    FirstName: string

    @Prop()
    LastName: string

    @Prop()
    Email: string

    @Prop()
    Phone: string

    @Prop()
    Address: string

    @Prop()
    Picture: string
    
    @Prop()
    Cnic: string

    @Prop()
    Gender: string

    @Prop()
    Role:  string

    @Prop({type:[{id: {type: mongoose.Schema.Types.ObjectId, ref:'UserModel'}, comment: {type: String}}]})
    Comments: {
        id: UserModel,
        comment: string
    }[]
}

export type UserDocument = UserModel & Document;
export const UserSchema = SchemaFactory.createForClass(UserModel); 
