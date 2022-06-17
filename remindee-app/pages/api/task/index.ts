import { TaskList } from "@prisma/client";
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
        const tasks: TaskList = await prisma.taskList.create({
          data: { ...data },
        });
        res.send(genericResponse<TaskList>(true, 200, tasks));
      } catch (error) {
        errorHandler(error, req, res);
      }
      break;
    }
    case "GET": {
      const userId = req.query.userId as string;
      const tasks: Array<TaskList> = await prisma.taskList.findMany({
        where: { userId: userId },
      });
      res.send(genericResponse<Array<TaskList>>(true, 200, tasks));
    }
    case "DELETE": {
      const id = req.query.id as string;

      await prisma.taskList.delete({
        where: {
          id: id,
        },
      });

      res.status(204).end();
      break;
    }
    default:
      res
        .status(404)
        .json(genericException<string>(false, 404, "Method Not Allowed"));
      break;
  }
}
