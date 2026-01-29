const BASE_URL = process.env.API_BASE_URL;

export async function createPaste(payload) {
  console.log(BASE_URL,"cheking the baseurl..")
  const res = await fetch(`${BASE_URL}/api/pastes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok) throw data;
  return data;
}
