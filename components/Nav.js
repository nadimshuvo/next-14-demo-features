import Link from "next/link";

export default function Nav() {
  return (
    <div className="container mx-auto text-center my-10">
      <Link href="/" className="font-bold text-blue-500 hover:text-blue-700">
        Home
      </Link>{" "}
      |{" "}
      <Link
        href="/about"
        className="font-bold text-blue-500 hover:text-blue-700"
      >
        About
      </Link>{" "}
      |{" "}
      <Link
        href="/blogs"
        className="font-bold text-blue-500 hover:text-blue-700"
      >
        Blogs
      </Link>{" "}
      |{" "}
      <Link
        href="/posts"
        className="font-bold text-blue-500 hover:text-blue-700"
      >
        Post
      </Link>
      <hr></hr>
    </div>
  );
}
