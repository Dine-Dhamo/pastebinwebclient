export default function ResultBox({ url }) {
  if (!url) return null;

  return (
    <div className="bg-green-100 p-4 rounded mt-4">
      <p className="font-semibold mb-1">Share this link:</p>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 underline break-all"
      >
        {url}
      </a>
    </div>
  );
}
