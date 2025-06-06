<script>
    let { data } = $props();
  </script>
  
  <h3>User</h3>
  <p><strong>Nome:</strong> {data.user.firstName} {data.user.lastName}</p>
  <p><strong>Idade:</strong> {data.user.age}</p>
  <p><strong>Gênero:</strong> {data.user.gender}</p>
  <p><strong>Email:</strong> {data.user.email}</p>
  <p><strong>Telefone:</strong> {data.user.phone}</p>
  <p><strong>Data de nascimento:</strong> {data.user.birthDate}</p>
  <p><strong>Tipo Sanguíneo:</strong> {data.user.bloodGroup}</p>
  <p><strong>Altura:</strong> {data.user.height}</p>
  <p><strong>Companhia:</strong> {data.user.company.name}</p>
  <p><strong>Departamento:</strong> {data.user.company.department}</p>
  <p><strong>Endereço:</strong> {data.user.address.address}, {data.user.address.city}, {data.user.address.state}, {data.user.address.country}</p>
  
  <h3>Postagens do usuário</h3>
  <ul>
    {#each data.posts.posts as post}
      <li><a href="/03/dummy/posts/{post.id}">{post.title}</a></li>
    {:else}
      <p>Esse usuário não postou nada ainda!</p>
    {/each}
  </ul>
  <p>
    <a href="/03/dummy/users">Voltar aos usuários</a>
  </p>