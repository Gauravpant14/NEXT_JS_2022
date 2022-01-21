const deleteComment = async(id) => {
    const options = {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    const resultt = await fetch(`http://localhost:4000/comments/${id}`, options)
    console.log(resultt, 'fdsfdds')
   return resultt
    console.log(data, 'deleted');
    return data
}
export default async function handler(req,res) {
    const {commentId} = req.query
    const comment = await deleteComment(commentId)
    console.log(comment)
    res.status(201).json(comment)
}