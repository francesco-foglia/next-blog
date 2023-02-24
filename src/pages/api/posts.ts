import { NextApiRequest, NextApiResponse } from 'next';

export default async function post(req: NextApiRequest, res: NextApiResponse) {
  try {
    const page = req.query.page ? Number(req.query.page) : 1;
    const pageSize = 12;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${pageSize}&_page=${page}`);
    const posts = await response.json();
    res.status(200).send(posts);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
