import { Reminder } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../client/prisma";
import { errorHandler } from "../../../helper/errorHandler";
import { genericException, genericResponse } from "../../../helper/response";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST": {
      const data = req.body;
      try {
        const reminder: Reminder = await prisma.reminder.create({
          data: { ...data },
        });
        res.send(genericResponse<Reminder>(true, 200, reminder));
      } catch (error) {
        errorHandler(error, req, res);
      }
      break;
    }
    case "GET": {
      const userId = req.body.userId;
      const reminders: Array<Reminder> = await prisma.reminder.findMany({
        where: { userId: userId },
      });
      res.send(genericResponse<Array<Reminder>>(true, 200, reminders));
    }
    default:
      res
        .status(404)
        .json(genericException<string>(false, 404, "Method Not Allowed"));
      break;
  }
}
