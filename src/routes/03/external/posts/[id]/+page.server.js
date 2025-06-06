export async function load({ params, fetch }) {
  const resPosts = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}/posts`);
  const posts = await resPosts.json();
 
  const resComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`);
  const comments = await resComments.json();
 
  return { posts, comments };
}