<!-- src/lib/components/ProgramCard.svelte -->
<script>
    export let title;
    export let isMain = false;
  </script>
  
  <div class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 overflow-hidden">
    {#if isMain}
      <div class="bg-gradient-to-br from-blue-100 to-blue-200 p-6 flex items-center gap-4">
        <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center p-3">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" class="w-full h-full">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-blue-900">{title}</h3>
      </div>
      <div class="p-6">
        <slot />
      </div>
    {:else}
      <div class="p-4">
        <h3 class="text-xl font-bold text-blue-900 mb-2">{title}</h3>
        <slot />
      </div>
    {/if}
  </div>