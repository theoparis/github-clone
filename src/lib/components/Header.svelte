<script lang="ts">
  import Icon from '@iconify/svelte';
</script>

<header class="bg-github-dark border-b border-github-border p-4">
  <div class="container mx-auto flex items-center justify-between">
    <div class="flex items-center space-x-4">
      <Icon icon="mdi:github" class="w-8 h-8" />
      <div class="flex items-center space-x-2">
        <a href="#" class="hover:text-gray-400">tursodatabase</a>
        <span>/</span>
        <a href="#" class="hover:text-gray-400 font-semibold">limbo</a>
      </div>
    </div>
    
    <div class="flex items-center space-x-4">
      <button class="flex items-center space-x-1 px-3 py-1 border border-github-border rounded-md hover:bg-gray-800">
        <Icon icon="octicon:eye-16" />
        <span>Watch</span>
        <span>20</span>
      </button>
      
      <button class="flex items-center space-x-1 px-3 py-1 border border-github-border rounded-md hover:bg-gray-800">
        <Icon icon="octicon:repo-forked-16" />
        <span>Fork</span>
        <span>80</span>
      </button>
      
      <button class="flex items-center space-x-1 px-3 py-1 border border-github-border rounded-md hover:bg-gray-800">
        <Icon icon="octicon:star-16" />
        <span>Star</span>
        <span>1.6k</span>
      </button>
    </div>
  </div>
</header>