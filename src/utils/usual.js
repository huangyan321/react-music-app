export function formatImgUrl(url, size) {
  return `${url}?param=${size}y${size}`;
}
export function formatQuantity(count) {
  if (count > 10000 && count < 100000000) {
    return `${(count / 10000).toFixed(1)}万`;
  } else if (count > 100000000) {
    return `${(count / 100000000).toFixed(1)}亿`;
  } else {
    return count;
  }
}
