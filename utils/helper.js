const calcReadingTime = (articleText) => {
  const wordsPerMinute = 150; // This is a good reading speed to understand the content.
  const nWords = articleText.trim().replace(/[^\w\s\d]/g, "").split(/\s+/).length;
  const time = Math.ceil(nWords / wordsPerMinute);

  return `${time} to ${time + 1} ${time == 1 ? "minute" : "minutes"}`;
}

export {
  calcReadingTime
}