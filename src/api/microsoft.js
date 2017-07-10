import env from '~/config/env';

const endpoint =
  'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize';

export function getEmotions(url) {
  return fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify({ url }),
    headers: new Headers({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': env.MICROSOFT_API_KEY,
    }),
  })
    .then(data => data.json())
    .then(data => data);
}
