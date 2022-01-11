import React from 'react'
import {useRouter} from 'next/router'
const Review = () => {
    const router = useRouter()
    const {productid, reviewid} = router.query
    return (
        <div>
            <h1>Review {reviewid}, Product {productid} </h1>
        </div>
    )
}

export default Review
