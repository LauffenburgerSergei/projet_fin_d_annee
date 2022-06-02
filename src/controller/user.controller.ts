import { Response, Request } from "express";
import { createUser } from "../services/user.services";

async function handleCreateUser(req: Request, res: Response) {
  try {
    const user = await createUser(req.body);
    res.status(200).send({
      message: "Ok utilisateur créer",
    });
  } catch (error: any) {
    res.status(400).send({
      message: error,
    });
  }
}
