<!-- src/lib/components/DonationCard.svelte -->
<script>
    export let title;
  </script>
  
  <div class="bg-white p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
    <h4 class="text-xl font-bold text-blue-900 mb-4">{title}</h4>
    <div class="space-y-2">
      <slot />
    </div>
  </div>