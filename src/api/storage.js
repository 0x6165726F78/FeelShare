import env from '~/config/env';

export async function uploadImageAsync(uri) {
  let apiUrl = env.STORAGE_URI;
  let uriParts = uri.split('.');
  let fileType = uri[uri.length - 1];
  let formData = new FormData();

  formData.append('photo', {
    uri,
    name: `photo.${fileType}`,
    type: `image/${fileType}`,
  });

  let options = {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  };
  return fetch(apiUrl, options);
}
