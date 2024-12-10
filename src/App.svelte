<script lang="ts">
  import Header from "@lib/components/repo/Header.svelte";
  import RepoNav from "@lib/components/repo/Nav.svelte";
  import FileExplorer from "@lib/components/repo/FileExplorer.svelte";
  import Sidebar from "@lib/components/repo/Sidebar.svelte";
</script>

<main class="min-h-screen flex">
  <div class="flex-grow">
    <Header />
    <RepoNav />
    <FileExplorer />
  </div>
  <Sidebar />
</main>
