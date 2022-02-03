// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { SetChache } from "../../lib"

export default function handler(req, res) {
  SetChache(req,res)
  res.status(200).json({ name: 'John Doe' })
}
