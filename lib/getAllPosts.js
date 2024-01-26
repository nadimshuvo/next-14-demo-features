export default async function getAllPosts() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts?", {
    next: {
      revalidate: 10,
    },
  });

  return result.json();
}
