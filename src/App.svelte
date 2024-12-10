<script lang="ts">
  import Header from './lib/components/Header.svelte';
  import RepoNav from './lib/components/RepoNav.svelte';
  import FileExplorer from './lib/components/FileExplorer.svelte';
  import Sidebar from './lib/components/Sidebar.svelte';
</script>

<main class="min-h-screen flex">
  <div class="flex-grow">
    <Header />
    <RepoNav />
    <FileExplorer />
  </div>
  <Sidebar />
</main>
