module.exports = {
  get_emoji: () => {
    const randomNum = Math.random();
    let book = "📗";

    if (randomNum > 0.7) {
      book = "📘";
    } else if (randomNum > 0.4) {
      book = "📙";
    }

    return `<span for="img" aria-label="book">${book}</span>`;
  },
  ifEquals: (a, b) => {
    console.log(a, b);
    if (a == b) {
      
      return `<a href="/update/${a}">Edit Post</a>`;
    } else {
      return;
    }
  }
};
