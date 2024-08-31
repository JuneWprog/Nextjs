import { type NextRequest } from "next/server";
import { comments } from "./data";

//query all the comments
// export async function GET() {
    
//     return Response.json(comments);
//   }

// http://localhost:3000/comments?text=second 
// search the comments for a specific content
// http://localhost:3000/comments return an all comments if query is not provided
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const text = searchParams.get("text");
  const filteredComments = text
    ? comments.filter((comment) => comment.text.includes(text))
    : comments;
  return Response.json(filteredComments);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = { id: comments.length + 1, text: comment.text };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
