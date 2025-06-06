<script>
    let { data } = $props();
  </script>
  
  <h3>Postagens</h3>
  <p><strong>Titulo:</strong> {data.posts.title}</p>
  <p><strong>Conteúdo:</strong> {data.posts.body}</p>
  
  <h3>Comentários do postagens</h3>
  <ul>
    {#each data.comments as comment}
    <p><strong>Nome:</strong> {data.comments.name}</p>
    <p><strong>Email:</strong> {data.comments.email}</p>
    <p><strong>Conteúdo:</strong> {data.comments.body}</p>
    <br>  
    {:else}
      <p>Essa postagem não possui comentários ainda!</p>
    {/each}
  </ul>
  <p>
    <a href="/03/external/users/">Voltar aos usuários</a>
  </p>