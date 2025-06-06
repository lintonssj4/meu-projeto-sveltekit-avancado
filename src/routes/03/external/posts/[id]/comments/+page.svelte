<script>
    let { data } = $props();
  </script>
  
  <h3>Comentários</h3>
  <p><strong>Nome:</strong> {data.comments.name}</p>
  <p><strong>Email:</strong> {data.comments.email}</p>
  <p><strong>Conteúdo:</strong> {data.comments.body}</p>
  
  <p>
    <a href="/03/external/users">Voltar aos usuários</a>
  </p>