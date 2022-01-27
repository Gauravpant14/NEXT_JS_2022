import Image from "next/image"
import img from '/public/five.jpg'
function TravelPage(){
return (
    <div className="container">

        {/* 
        <--- Problem when using img tag of html directly without using Image component --->,
        1. Img size is not optimized
        2. will load original img size so load time will increse

        <--- TO solve this problem we use Image component from next js --->
        1. Img component optimize img size by converting img to webp format
        2. Lazy loading functionality 
        3. Blur functionality before loading img
        
        */}
        <Image src={img} placeholder="blur" blurDataURL="" width='280' height='420'/>

       { ['one','two','three','four','five'].map((path,i) => {
           return(
               <div key={i}>
                   <Image src={`/${path}.jpg`} alt="place" width='280' height='420'/>
               </div>)
       })}
    </div>
)
}
export default TravelPage