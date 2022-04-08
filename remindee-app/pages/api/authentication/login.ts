import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../client/prisma";
import { errorHandler } from "../../../helper/errorHandler";
import bcrypt from "bcrypt";
import { genericException, genericResponse } from "../../../helper/response";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST": {
      const { email, password } = req.body;
      try {
        const user: User | null = await prisma.user.findFirst({
          where: { email: email },
        });
        if (user?.password) {
          const validatePass = await bcrypt.compare(password, user.password);
          if (validatePass) {
            res.send(genericResponse<User | null>(true, 200, user));
          } else {
            res
              .status(401)
              .json(
                genericException(false, 401, "Password or Email doesn't exist")
              );
          }
        } else {
          res
            .status(401)
            .json(genericException(false, 401, "User doesn't exist"));
        }
      } catch (error) {
        errorHandler(error, req, res);
      }
      break;
    }

    default:
      res
        .status(404)
        .json(genericException<string>(false, 404, "Method Not Allowed"));
      break;
  }
}
