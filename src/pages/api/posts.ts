import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { _start } = req.query;
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${_start}&_limit=12`);
    const posts = await response.json();
    res.statusCode = 200;
    res.json(posts);
  } catch (err) {
    console.log(err);
  }
};
