export default function Comments({ promise }) {
  const comments = promise;
  return (
    <div className="mt-10">
      <h1 className="font-bold text-5xl">Comments</h1>
      <ol>
        {Array.isArray(comments) ? (
          comments.map((comment) => <li key={comment.id}>{comment.body}</li>)
        ) : (
          <li>
            <h2 className="text-blue-500 font-bold">{comments.title}</h2>
            <p>{comments.body}</p>
          </li>
        )}
      </ol>
    </div>
  );
}
