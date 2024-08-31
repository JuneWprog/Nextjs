import Link from "next/link";

const ProductsPage = () => {
    return (
        <div>
            <ul>
              {/* using map */}
                {[1,2,3,4,5].map((productid)=>(
                    <li key={productid}>
                        <Link href={`/products/${productid}`}>Product {productid}</Link>
                    </li>
                ))}
               
                
            </ul>
           
        </div>
    );
}

export default ProductsPage;