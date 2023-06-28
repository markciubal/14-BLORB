const loginFormHandler = async (event) => {
  // TODO: Add a comment describing the functionality of this statement
  event.preventDefault();

  // TODO: Add a comment describing the functionality of these expressions
  const comment = document.querySelector('#comment').value.trim();
  const post_id = document.querySelector('#post_id').value.trim();

  if (comment && post_id) {
    // TODO: Add a comment describing the functionality of this expression
    const response = await fetch('/api/comments/create', {
      method: 'POST',
      body: JSON.stringify({ comment, post_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert('Successfully posted!');
      document.location.replace('/browse');
    } else {
      alert('Failed to post comment.');
    }
  }
};

document
  .querySelector('.post-form')
  .addEventListener('submit', loginFormHandler);
