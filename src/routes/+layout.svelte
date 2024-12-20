<script>
	import '../app.css';
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";

	let { children } = $props();
  </script>

  
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
	<Header />
	<main class="py-8">
		{@render children()}
	</main>
	<Footer />
  </div>