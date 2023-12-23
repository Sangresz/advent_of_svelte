<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";

  let dones: number[] = [1];

  let days: number[] = [];

  let first_not_done_index: number;
  if (dones.length > 0) {
    first_not_done_index = dones[dones.length - 1] + 1;
  } else {
    first_not_done_index = 1;
  }

  for (let i = first_not_done_index; i <= 25; i++) {
    days.push(i);
  }
</script>

<div class="flex flex-col h-screen items-center justify-center gap-y-4">
  <img
    src="/santa-svelte.png"
    alt="Svelte Santa Logo"
    class="w-auto max-h-[400px]"
  />
  <h1 class="text-3xl">Sangres' Advent Of Svelte</h1>

  <div class="grid grid-cols-5 gap-2">
    {#each dones as day}
      <Button href={`/day/${day}`} size="lg" variant="green">
        {day}
      </Button>
    {/each}
    {#each days as day}
      <Button size="lg" variant="red">
        {day}
      </Button>
    {/each}
  </div>
</div>
