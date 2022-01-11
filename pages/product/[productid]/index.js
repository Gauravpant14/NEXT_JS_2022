import { useRouter } from "next/router"
const ProductDetail = () => {
    const router = useRouter()
    const productId = router.query.productid
    return (
        <div>
            <h1>Details about product {productId} </h1>
        </div>
    )
}

export default ProductDetail