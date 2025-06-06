export async function load({ fetch, url }) {
    const idade = url.searchParams.get('idade');
    const genero = url.searchParams.get('genero');
    let link = 'https://dummyjson.com/users'
    if (idade) link += `/filter?key=age&value=${idade}`
    if (genero) link += `/filter?key=gender&value=${genero}`
    const res = await fetch(link);
    const users = await res.json();
    return { users };
  }