<script lang="ts">
  import Icon from "@iconify/svelte";
</script>

<nav class="border-b border-github-border">
  <div class="container mx-auto">
    <ul class="flex space-x-6">
      <li class="border-b-2 border-orange-500">
        <a href="#" class="flex items-center px-4 py-2 hover:bg-gray-800">
          <Icon icon="octicon:code-16" class="mr-2" />
          <span>Code</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex items-center px-4 py-2 hover:bg-gray-800">
          <Icon icon="octicon:issue-opened-16" class="mr-2" />
          <span>Issues</span>
          <span class="ml-2 px-2 py-0.5 rounded-full bg-gray-700">64</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex items-center px-4 py-2 hover:bg-gray-800">
          <Icon icon="octicon:git-pull-request-16" class="mr-2" />
          <span>Pull requests</span>
          <span class="ml-2 px-2 py-0.5 rounded-full bg-gray-700">8</span>
        </a>
      </li>
    </ul>
  </div>
</nav>
