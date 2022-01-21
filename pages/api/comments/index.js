import { Comments } from "../../../data/comments";
const fetchData = async() => {
    const result = await fetch('http://localhost:4000/comments')
    const data = await result.json();
    return data
}
const postData =async(result) => {
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(result)
    }
    const resultt = await fetch('http://localhost:4000/comments', options)
    const data = await resultt.json();
    return data
}
export default async function handler (req,res){
    const data = await fetchData()
    if(req.method === 'GET'){

        res.status(200).json(data)
    }
    else if(req.method === 'POST') {
        const comment = req.body.comment;
        const newComment = {
            id: Date.now(),
            text: comment
        }
       const result =  await postData(newComment)
        res.status(201).json(result)
    }
}