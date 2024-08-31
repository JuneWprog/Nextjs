
import {notFound} from "next/navigation";
import { useParams } from "next/navigation";
export default function Review({params}:{params:{productid:string,reviewid:string}}) {
    if(parseInt(params.reviewid) > 100){
        notFound();
    }
   
    return (
      <div>
        <h1>Review {params.reviewid}</h1>
        <p>This is an example of nested dynamic route in next.js. </p>
        <p> url: /products/1/reviews/1</p>
      </div>
    );
  }