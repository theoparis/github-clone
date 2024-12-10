<script lang="ts">
  import Icon from '@iconify/svelte';

  const files = [
    { type: 'folder', name: '.github/workflows', lastUpdate: '3 weeks ago', message: 'Fix Python release workflow' },
    { type: 'folder', name: 'bindings', lastUpdate: 'yesterday', message: 'Merge feat(wasm): add get and iterate func' },
    { type: 'folder', name: 'cli', lastUpdate: '3 weeks ago', message: 'various fixes in btree' },
    { type: 'folder', name: 'core', lastUpdate: 'yesterday', message: 'Merge feat(core/translate): support HAVING' },
    { type: 'file', name: 'CHANGELOG.md', lastUpdate: 'yesterday', message: 'Update CHANGELOG' },
    { type: 'file', name: '.gitignore', lastUpdate: '2 months ago', message: 'ignore .vscode directory' }
  ];
</script>

<div class="container mx-auto mt-4">
  <div class="flex justify-between items-center mb-4">
    <div class="flex items-center space-x-2">
      <button class="px-3 py-1 bg-github-btn text-white rounded-md hover:bg-opacity-90">
        Code
      </button>
      <input type="text" placeholder="Go to file" class="px-3 py-1 bg-github-dark border border-github-border rounded-md">
    </div>
  </div>

  <div class="border border-github-border rounded-md overflow-hidden">
    <div class="bg-gray-800/30 p-3 border-b border-github-border">
      <div class="flex items-center space-x-2">
        <img src="https://github.com/penberg.png" alt="avatar" class="w-6 h-6 rounded-full">
        <span class="font-semibold">penberg</span>
        <span class="text-gray-500">Update CHANGELOG</span>
      </div>
    </div>

    <table class="w-full">
      <tbody>
        {#each files as file}
          <tr class="border-b border-github-border hover:bg-gray-800/30">
            <td class="py-2 px-3">
              <div class="flex items-center">
                <Icon icon={file.type === 'folder' ? 'octicon:file-directory-fill-16' : 'octicon:file-16'} 
                      class="mr-2 text-blue-400" />
                <a href="#" class="text-blue-400 hover:underline">{file.name}</a>
              </div>
            </td>
            <td class="py-2 px-3 text-gray-500">{file.message}</td>
            <td class="py-2 px-3 text-gray-500 text-right">{file.lastUpdate}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>