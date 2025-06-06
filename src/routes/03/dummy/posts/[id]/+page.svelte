<script>
    let { data } = $props();
  </script>
  
  <h3>Postagens</h3>
  <p><strong>Titulo:</strong> {data.posts.title}</p>
  <p><strong>Conteúdo:</strong> {data.posts.body}</p>

  <p>
    <a href="/03/dummy/users/">Voltar aos usuários</a>
  </p>