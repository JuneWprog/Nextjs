// client side rendering

"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";


export default function Product() {
    const { productid } = useParams();
    const router = useRouter();
    const handleClick = () => {
        console.log('Order Placed for Product', productid);
        router.push('/'); //redirect to home page
        // router.back(); previous page
        // router.forward(); next page
        // router.replace('/'); replace the current page
    }
    return (
      <div className="ml-4">
        <h1>Product {productid}</h1>
        <p>This is an example of dynamica routs in next.js using [productid].</p>
        <p>The url is : /products/1</p>
        <hr/>
        <p>routing to home after click button</p>
        <button onClick = {handleClick} className="border-rose-600 border-2 rounded-lg p-1 hover:bg-rose-600 hover:text-white"> Place Order</button>
      </div>
    );
  }


//server side rendering
// type Props={
//     params:{productid: string}
// }
// export const generateMetadata = ({params}:Props) => {
//     return {
//         title: `Product ${params.productid}`,
//         description: `Product ${params.productid} description`,
//     };
// }

// const ProductPage = ({ params }: Props) => {
   
//     return (
//         <div>
//             <h1>Product {params.productid}</h1>
//             {/* Render other client-side components here */}
            
//         </div>
//     );
// }

// export default ProductPage;