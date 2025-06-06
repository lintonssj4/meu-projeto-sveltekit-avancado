export async function load({ params, fetch }) {
    const resPosts = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}/posts`);
    const posts = await resPosts.json();

    return { posts };
  }