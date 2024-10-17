import dbConnect from '../../../lib/mongodb';
import Post from '../../../models/Post';

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === 'GET') {
    const post = await Post.findById(id);
    return res.json(post);
  }

  if (req.method === 'PUT') {
    const { title, content } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(id, { title, content }, { new: true });
    return res.json(updatedPost);
  }

  if (req.method === 'DELETE') {
    await Post.findByIdAndDelete(id);
    return res.status(204).end(); // No Content
  }

  return res.status(405).end(); // Method Not Allowed
}
