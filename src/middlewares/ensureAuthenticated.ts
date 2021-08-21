import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  console.log(authToken);

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, "") as IPayload;

    req.user_id = sub;

    return next();
  } catch (err) {
    res.status(401).end();
  }
}
