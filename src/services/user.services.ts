import { DocumentDefinition } from "mongoose";
import UserModel from "../models/user.model";
import { UserDocument } from "../interfaces/interface.user";

export async function createUser(
  input: DocumentDefinition<UserDocument>
): Promise<any> {
  try {
    UserModel.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
}
