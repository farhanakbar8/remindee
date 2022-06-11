// Import needed libraries and dependencies

import { Reminder } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../client/prisma";
import { errorHandler } from "../../../helper/errorHandler";
import { genericException, genericResponse } from "../../../helper/response";

export default async function handler(
  req: NextApiRequest, // Request API Routes from NextJs
  res: NextApiResponse // Response API Routes from NextJs
) {
  /*
  In this function, the return value is either a response or an error, depending on
  what the request method get. If it is a "POST", some data need to be push to the
  DB, else it is a "GET", some data from DB will be posted to the endpoints.
  */
  switch (req.method) {
    case "POST": {
      // Get data from request.body
      const data = req.body;
      // try to post Reminder data to the DB using prisma.create() method.
      try {
        const reminder: Reminder = await prisma.reminder.create({
          data: { ...data },
        });
        // Send successful response
        res.send(genericResponse<Reminder>(true, 200, reminder));
      } catch (error) {
        // If some error occured, the error message
        // will be handles using errorHandler() method
        errorHandler(error, req, res);
      }
      break;
    }
    case "GET": {
      // Get userId and Reminders values from request body
      const userId = req.body.userId;
      // Find Reminder from the DB that has the same userId based on req.body.userId
      const reminders: Array<Reminder> = await prisma.reminder.findMany({
        where: { userId: userId },
      });
      // Send successful response
      res.send(genericResponse<Array<Reminder>>(true, 200, reminders));
    }
    default:
      // If the method is not "POST" or "GET", send exception "Method Not Allowed"
      res
        .status(404)
        .json(genericException<string>(false, 404, "Method Not Allowed"));
      break;
  }
}
