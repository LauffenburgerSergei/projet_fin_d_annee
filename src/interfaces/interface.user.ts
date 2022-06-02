import mongoose from 'mongoose';

export interface UserDocument extends mongoose.Document {
    name: string;
    surname: string;
    password: string;
    email: string;
    role: string;
    data: object;
    createdat: Date;
    updatedat: Date;
}