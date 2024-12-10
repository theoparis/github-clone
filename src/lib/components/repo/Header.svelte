<script lang="ts">
  import Icon from "@iconify/svelte";
</script>

<header
  class="bg-github-dark border-b border-github-border p-4 flex flex-col gap-4"
>
  <div class="container mx-auto flex items-center justify-between">
    <div class="flex items-center space-x-2">
      <Icon icon="mdi:github" class="w-8 h-8" />
      <div class="flex items-center space-x-2">
        <a href="#" class="hover:text-gray-400">theoparis</a>
        <span>/</span>
        <a href="#" class="hover:text-gray-400 font-semibold">github-clone</a>
      </div>
    </div>

    <div class="flex items-center space-x-2">
      <button
        class="flex items-center space-x-1 px-3 py-2 border border-github-border rounded-md hover:bg-gray-800 gap-2"
      >
        <Icon icon="octicon:plus-16" />
        <Icon icon="octicon:triangle-down-16" class="text-gray-400" />
      </button>

      <button
        class="flex items-center space-x-1 px-3 py-2 border border-github-border rounded-md hover:bg-gray-800"
      >
        <Icon icon="octicon:bell-16" />
      </button>

      <!-- Profile icon -->
      <img
        src="https://github.com/theoparis.png"
        alt="Profile"
        class="flex items-center space-x-1 border border-github-border rounded-full hover:bg-gray-800 w-8 h-8"
      />
    </div>
  </div>
  <div class="container mx-auto flex items-center justify-between">
    <div class="flex items-center space-x-2">
      <button
        class="flex items-center space-x-1 px-3 py-1 border border-github-border rounded-md hover:bg-gray-800"
      >
        <Icon icon="octicon:eye-16" />
        <span>Watch</span>
        <span>20</span>
      </button>

      <button
        class="flex items-center space-x-1 px-3 py-1 border border-github-border rounded-md hover:bg-gray-800"
      >
        <Icon icon="octicon:repo-forked-16" />
        <span>Fork</span>
        <span>80</span>
      </button>

      <button
        class="flex items-center space-x-1 px-3 py-1 border border-github-border rounded-md hover:bg-gray-800"
      >
        <Icon icon="octicon:star-16" />
        <span>Star</span>
        <span>1.6k</span>
      </button>
    </div>
  </div>
</header>
