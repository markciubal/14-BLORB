const deleteFormHandler = async (event) => {
  // TODO: Add a comment describing the functionality of this statement
  event.preventDefault();

  const id = document.querySelector('#id-post').value.trim();
  if (id) {
    // TODO: Add a comment describing the functionality of this expression
    const response = await fetch('/api/posts/delete', {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if (response.ok) {
      alert('Successfully deleted!');
      document.location.replace('/browse');
    } else {
      console.log(response);
      alert('Failed to update post.');
    }
  }
};

document
  .querySelector('.delete-form')
  .addEventListener('submit', deleteFormHandler);
