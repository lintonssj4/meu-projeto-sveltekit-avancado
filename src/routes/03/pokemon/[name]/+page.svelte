<script>
    let { data } = $props();
    const p = data.pokemon;
  </script>
  
  <h2 class="text-capitalize">{p.name}</h2>
  <img src={p.sprites.front_default} alt={p.name} class="mb-3" />
  
  <ul class="list-group">
    <li class="list-group-item"><strong>Altura:</strong> {p.height / 10} m</li>
    <li class="list-group-item"><strong>Peso:</strong> {p.weight / 10} kg</li>
    <li class="list-group-item">
      <strong>Tipos:</strong>
      {#each p.types as t, i}
        {t.type.name}{i < p.types.length - 1 ? ', ' : ''}
      {/each}
    </li>
  </ul>
  
  <a href="/03/pokemon" class="btn btn-outline-primary mt-3">Voltar</a>