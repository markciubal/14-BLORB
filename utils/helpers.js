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
  // Used to check if user ID equals post author ID.
  ifEquals: (a, b, post) => {
    if (a == b) {      
      return `<a href="/update/${post}">Edit Post</a>`;
    } else {
      return;
    }
  }
};
