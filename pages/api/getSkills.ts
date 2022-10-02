// Next JS API route support: https://nextjsx.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { Skill } from "../../typings";
import { sanityClient } from "./sanity";

const query = groq`
  *[_type == "skill"]
`;

type Data = {
  skills: Skill[];
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skills: Skill[] = await sanityClient.fetch(query);
  res.status(200).json({ skills });
}
