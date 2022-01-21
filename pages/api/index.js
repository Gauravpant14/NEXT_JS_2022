//to access api route , use localhost:3000/api
// localhost:3000/api/fileName

export default function handler(req,res){
res.status(200).json({name: 'Home Api Route'})
}