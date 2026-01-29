import { useState } from 'react';
import { createPaste } from '../api/pastes';

export default function PasteForm({ onSuccess, onError }) {
  const [content, setContent] = useState('');
  const [ttl, setTtl] = useState('');
  const [views, setViews] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    onError(null);

    const payload = { content };

    if (ttl) payload.ttl_seconds = Number(ttl);
    if (views) payload.max_views = Number(views);

    try {
      setLoading(true);
      const res = await createPaste(payload);
      onSuccess(res.url);
      setContent('');
      setTtl('');
      setViews('');
    } catch (err) {
      onError(err.error || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <textarea
        className="w-full p-3 border rounded"
        rows="6"
        placeholder="Paste your text here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <div className="flex gap-4">
        <input
          type="number"
          min="1"
          placeholder="TTL (seconds)"
          className="flex-1 p-2 border rounded"
          value={ttl}
          onChange={(e) => setTtl(e.target.value)}
        />

        <input
          type="number"
          min="1"
          placeholder="Max views"
          className="flex-1 p-2 border rounded"
          value={views}
          onChange={(e) => setViews(e.target.value)}
        />
      </div>

      <button
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? 'Creating...' : 'Create Paste'}
      </button>
    </form>
  );
}
