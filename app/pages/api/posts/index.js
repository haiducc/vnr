// pages/api/posts/index.js
import clientPromise from '../../../lib/mongodb'; // Kết nối MongoDB
import Post from '../../../models/Post'; // Mô hình bài viết

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db();

  if (req.method === 'GET') {
    try {
      const posts = await db.collection('posts').find({}).toArray();
      res.json(posts);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch posts' });
    }
  } else if (req.method === 'POST') {
    const { title, content, author } = req.body;

    // Tạo một bài viết mới
    const newPost = new Post({
      title,
      content,
      author,
    });

    try {
      // Lưu bài viết vào cơ sở dữ liệu
      await newPost.save();
      res.status(201).json(newPost);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      res.status(400).json({ error: 'Failed to create post' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
