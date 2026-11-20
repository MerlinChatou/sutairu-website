<script>
  import "../lib/generated/sutairu-v1-0-0.min.css";
  import hljs from "highlight.js";
  import MarkdownContent from './content.md';
  
  // Optional: If you have a navbar component
  import Navbar from '../components/Navbar.svelte'; 
  import { onMount } from "svelte";
  import { Modal } from "@merlin-chatou/sutairu";
  import ThemeModal from "../components/Themes/ThemeModal.svelte";

  onMount(() => {
    hljs.highlightAll();
    Modal.init();
  })
</script>

<svelte:head>
	<title>Sutairu — Install</title>
	<meta
		name="description"
		content="Install Sutairu via npm and configure the on-demand CLI scanner to generate lightweight, atomic utility CSS for your project."
	/>

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Install — Sutairu" />
	<meta
		property="og:description"
		content="Install Sutairu via npm and configure the on-demand CLI scanner to generate lightweight, atomic utility CSS for your project."
	/>

	<!-- Twitter / X -->
	<meta name="twitter:card" content="summary" />
</svelte:head>


<Navbar searchBarVisible={false} />

<main class="max-w-xl mx-auto my-5 md:my-10 p-3">

  <article class="markdown-wrapper">
    <!-- Render the imported markdown file as a component -->
    <MarkdownContent />
  </article>
</main>
<ThemeModal />

