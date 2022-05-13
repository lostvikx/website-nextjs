import { marked } from "marked";

const calcReadingTime = (articleText) => {
  const wordsPerMinute = 150; // This is a good reading speed to understand the content.
  const nWords = articleText.trim().replace(/[^\w\s\d]/g, "").split(/\s+/).length;
  const time = Math.ceil(nWords / wordsPerMinute);

  return `${time} to ${time + 1} ${time == 1 ? "minute read" : "minutes read"}`;
}

// Customize the marked parser!
function createMarked(content) {

  const renderer = {
    link(href, title, text) {
      return `
        <a target="_blank" href=${href} title=${title}>
          ${text}
        </a>
      `;
    },
    paragraph(text) {
      return `
        <p class="article-p">
          ${text}
        </p>
      `;
    }
    // image(href, title, text) {
    //   return `<img src=${href} alt=${text} width="1000px" height="600px"/>`
    // }
  }

  marked.use({ renderer });
  return marked(content);
}

export {
  calcReadingTime,
  createMarked
}