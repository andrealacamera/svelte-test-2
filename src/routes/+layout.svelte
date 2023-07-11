<script>
  import "../app.css";
  import Header from "$lib/Header.svelte";
</script>

<div class="max-w-[1280px] min-h-screen bg-purple-900 text-purple-50 m-auto p-4">
  <Header />
  <slot />
</div>