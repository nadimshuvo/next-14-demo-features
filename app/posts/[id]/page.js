import Comments from "@/components/Comments";
import getPost from "@/lib/getPost";
import getPostComments from "@/lib/getPostComments";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function page({ params }) {
  const { id } = params;
  const postPromise = getPost(id);
  const commentsPromise = await getPostComments(id);

  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  // const post = await getPost(id);
  // const comments = await getPostComments(id);
  const post = await postPromise;

  return (
    <div className="mt-6 container mx-auto text-center">
      <div className="font-bold text-9xl">👀</div>
      <h2 className="my-10 text-blue-500 font-bold text-3xl">{post.title}</h2>
      <p className="mt-3">{post.body}</p>

      <Suspense fallback="<h1>Loading Comments ... </h1>">
        <Comments promise={commentsPromise} />
      </Suspense>
    </div>
  );
}
