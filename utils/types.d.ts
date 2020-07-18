export type JWTUser = {
  email: string;
  id: string;
};

export type NextApiExtendedRequest = NextApiRequest & JWTUser;
