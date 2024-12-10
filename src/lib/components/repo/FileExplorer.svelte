<script lang="ts">
  import Icon from "@iconify/svelte";

  export let files = [
    {
      type: "file",
      name: "CHANGELOG.md",
      lastUpdate: "yesterday",
      message: "chore(release): 1.0.0",
    },
    {
      type: "file",
      name: "README.md",
      lastUpdate: "2 months ago",
      message: "docs: update README",
    },
  ];

  let branchSelect = false;
</script>

<div class="container md:px-4 lg:px-5 px-3 mt-4">
  <div class="flex justify-between items-center mb-4">
    <div class="flex items-center space-x-2">
      <button
        class="px-3 py-1 bg-gray-700 text-white rounded-md hover:bg-opacity-90 flex items-center"
        on:click={() => (branchSelect = !branchSelect)}
      >
        <Icon icon="octicon:git-branch-16" class="mr-2" />
        <span>main</span>
        <Icon icon="octicon:chevron-down-16" class="ml-2 text-gray-400" />
      </button>

      {#if branchSelect}
        <div
          class="absolute rounded-md mt-2 p-4 gap-3 flex flex-col bg-github-dark-secondary y-10"
        >
          <div class="flex items-center gap-4">
            <h3 class="text-lg font-semibold">Switch branches/tags</h3>
            <button
              on:click={() => (branchSelect = false)}
              class="cursor-pointer"
            >
              <Icon icon="octicon:x-16" class="text-gray-400" />
            </button>
          </div>
          <div
            class="flex justify-between items-center pb-2 border-b border-github-border"
          >
            <span
              class="text-gray-500 bg-github-dark flex gap-2 items-center px-3 py-1 rounded-md border border-github-border"
            >
              <Icon icon="octicon:search-16" class="text-gray-400" />
              <input type="text" placeholder="Find or create a branch..." />
            </span>
          </div>
          <div class="flex items-center space-x-2">
            <Icon icon="octicon:git-branch-16" class="text-gray-400" />
            <span>main</span>
          </div>
        </div>
      {/if}
    </div>
    <div class="flex items-center space-x-2">
      <button
        class="flex items-center px-3 py-1 text-white rounded-md hover:bg-opacity-90 bg-github-btn"
      >
        <Icon icon="octicon:code-16" class="mr-2" />
        Code
        <Icon icon="octicon:chevron-down-16" class="ml-2 text-gray-400" />
      </button>
      <input
        type="text"
        placeholder="Go to file"
        class="px-3 py-1 bg-github-dark border border-github-border rounded-md"
      />
    </div>
  </div>

  <div class="border border-github-border rounded-md overflow-hidden">
    <div class="bg-gray-800/30 p-3 border-b border-github-border">
      <div class="flex items-center space-x-2">
        <img
          src="https://github.com/theoparis.png"
          alt="avatar"
          class="w-6 h-6 rounded-full"
        />
        <span class="font-semibold">theoparis</span>
        <span class="text-gray-500">chore(release): 1.0.0</span>
      </div>
    </div>

    <table class="w-full">
      <tbody>
        {#each files as file}
          <tr class="border-b border-github-border hover:bg-gray-800/30">
            <td class="py-2 px-3">
              <div class="flex items-center">
                <Icon
                  icon={file.type === "folder"
                    ? "octicon:file-directory-fill-16"
                    : "octicon:file-16"}
                  class="mr-2"
                />
                <a href="#" class="hover:underline">{file.name}</a>
              </div>
            </td>
            <td class="py-2 px-3 text-gray-500">{file.message}</td>
            <td class="py-2 px-3 text-gray-500 text-right">{file.lastUpdate}</td
            >
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
