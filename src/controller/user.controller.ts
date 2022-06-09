import { Response, Request } from "express";
import { createUser } from "../services/user.services";
// import { createUserInput } from '../validate/user.validate';

export async function createUserHandler(
  req: Request<{}, {}, any["body"]>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    console.log("Il y a pas de problème 🙌");
    res.status(200).send({
      message: "Utilisateur à bien été crée ☑️",
      user: user,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).send(error.message);
  }
}
