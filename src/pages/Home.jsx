import { useState } from 'react';
import ErrorBanner from '../component/ErrorBanner';
import PasteForm from '../component/PasteForm';
import ResultBox from '../component/ResultBox';


export default function Home() {
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Pastebin Lite</h1>

      <ErrorBanner message={error} />
      <PasteForm onSuccess={setUrl} onError={setError} />
      <ResultBox url={url} />
    </div>
  );
}
