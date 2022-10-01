// Next JS API route support: https://nextjsx.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { PageInfo } from "../../typings";
import { sanityClient } from "./sanity";

const query = groq`
  *[_type == "pageInfo"][0]
`;

type Data = {
  pageInfo: PageInfo;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo: PageInfo = await sanityClient.fetch(query);
  res.status(200).json({ pageInfo });
}
