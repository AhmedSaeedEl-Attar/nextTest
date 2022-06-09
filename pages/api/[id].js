import { PostsData } from "../../postdata";
export default function handler(req, res) {
    let id = req.query.id;
    let post = PostsData.find(post => post.id == id);
    if(post) {
        res.status(200).json(post);
    }else {
        res.status(404).json({error: "Post not found"});
    }
}