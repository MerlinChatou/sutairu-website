<script>
  import "../docs/v1/lib/generated/sutairu-v1.min.css";
  import hljs from "highlight.js";
  import MarkdownContent from './content.md';
  
  // Optional: If you have a navbar component
  import Navbar from '../docs/v1/components/Navbar.svelte'; 
  import Footer from "../docs/v1/components/Footer.svelte";
  import { onMount } from "svelte";
  import { Modal } from "@merlin-chatou/sutairu";
  import ThemeModal from "../docs/v1/components/Themes/ThemeModal.svelte";

  onMount(() => {
    hljs.highlightAll();
    Modal.init();
  })
</script>

<svelte:head>
	<title>Sutairu — Legal Notice & Privacy Policy</title>
	<meta
		name="description"
		content="Legal notice, disclaimer of warranty, limitation of liability, and GDPR privacy policy for sutairu.dev and the Sutairu CSS framework."
	/>

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Legal Notice & Privacy Policy — Sutairu" />
	<meta
		property="og:description"
		content="Legal notice, disclaimer of warranty, limitation of liability, and GDPR privacy policy for sutairu.dev and the Sutairu CSS framework."
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

<Footer />


<ThemeModal />

