const loginFormHandler = async (event) => {
  // TODO: Add a comment describing the functionality of this statement
  event.preventDefault();

  // TODO: Add a comment describing the functionality of these expressions
  const title = document.querySelector('#title-post').value.trim();
  const body = document.querySelector('#body-post').value.trim();
  const id = document.querySelector('#id-post').value.trim();
  console.log(title, body, id);
  if (title && body && id) {
    // TODO: Add a comment describing the functionality of this expression
    const response = await fetch('/api/posts/update', {
      method: 'PATCH',
      body: JSON.stringify({ id, title, body }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if (response.ok) {
      alert('Successfully posted!');
      document.location.replace('/browse');
    } else {
      console.log(response);
      alert('Failed to update post.');
    }
  }
};

document
  .querySelector('.post-form')
  .addEventListener('submit', loginFormHandler);
