import { redirect } from "next/navigation";
import { comments } from "../data";
// get the request
export async function GET(request: Request, {params}: {params: {id: string}}) {
    if(parseInt(params.id)>comments.length){
        redirect("/comments");
    }
    const comment = comments.find((comment) => comment.id === Number(params.id));
    return Response.json(comment);
}
// update the comment
export async function PUT(request: Request, {params}: {params: {id: string}}) {
    const comment = await request.json();
    const index = comments.findIndex((comment) => comment.id === Number(params.id));
    comments[index] = { id: Number(params.id), text: comment.text };
    return Response.json(comments[index]);
}
// delete the comment
export async function DELETE(request: Request, {params}: {params: {id: string}}) {
    const index = comments.findIndex((comment) => comment.id === Number(params.id));
    comments.splice(index, 1);
    return new Response("Comment deleted successfully", { status: 200 });
}
//patch the comment
export async function PATCH(request: Request, {params}: {params: {id: string}}) {
    const comment = await request.json();
    const index = comments.findIndex((comment) => comment.id === Number(params.id));
    comments[index].text=comment.text  
    return Response.json(comments[index]);
}