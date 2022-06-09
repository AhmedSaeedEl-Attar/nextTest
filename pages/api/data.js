 import { PostsData } from "../../postdata";
export default function handler(req, res) {
 res.status(200).json(PostsData);
}