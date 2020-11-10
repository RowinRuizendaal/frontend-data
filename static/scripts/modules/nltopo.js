export default function (url) {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data
    });
  }