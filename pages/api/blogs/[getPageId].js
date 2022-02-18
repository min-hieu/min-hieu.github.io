import { NotionAPI } from 'notion-client'

const notion = new NotionAPI();

export default async (req, res) => {
  const { getPageId } = req.query

  if (req.method === 'GET') {
    const page = await notion.getPage(getPageId)
    res.status(200).json({ data: page })
  }
}
