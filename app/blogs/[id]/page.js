export default function BlogPage({ params }) {
  const { id } = params;
  return (
    <div className="container mx-auto text-center font-bold text-9xl">
      <div className="font-bold text-9xl">🔞</div>
      The blog id is : <span className="text-blue-500">{id}</span>
    </div>
  );
}
