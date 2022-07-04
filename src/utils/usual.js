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
/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || time === null || time === undefined) {
    return null;
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if (typeof time === 'string') {
      if (/^[0-9]+$/.test(time)) {
        // support "1548221490638"
        time = parseInt(time);
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/');
      }
    }

    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value];
    }
    return value.toString().padStart(2, '0');
  });
  return time_str;
}
export function formatDt(time) {
  return parseTime(time, '{i}:{s}');
}
export function getRandom(d) {
  return Math.floor(Math.random() * d);
}
export function getMusicUrl(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3 `;
}
