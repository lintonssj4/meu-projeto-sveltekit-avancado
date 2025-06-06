<script>
    let { data } = $props();
  </script>
   
  <h3>Usuários</h3>
  <form>
    <input name="idade" type="number" placeholder="Filtrar por idade">
    <button>Filtrar</button>
  </form>

  <form>
    <input name="genero" placeholder="Filtrar por gênero">
    <button>Filtrar</button>
  </form>
  <ul>
    {#each data.users.users as user}
      <li><a href="/03/dummy/users/{user.id}">{user.firstName} {user.lastName}</a></li>
    {/each}
  </ul>