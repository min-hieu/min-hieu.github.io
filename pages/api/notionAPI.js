import axios from "axios";
import { NotionAPI } from 'notion-client'

const notion = new NotionAPI();

export default async (req, res) => {
  if (req.method === 'GET') {
    const page = await notion.getPage('Blogs-bde62b64df0847838567b41207f030eb')
    res.status(200).json({ data: page })
  } else {
    // Handle any other HTTP method
  }
}
