<script>
  import "../lib/generated/sutairu-v1-0-0.min.css";
  import hljs from "highlight.js";
  import MarkdownContent from './content.md';
  
  // Optional: If you have a navbar component
  import Navbar from '../components/Navbar.svelte'; 
  import { onMount } from "svelte";
  import Modal from "../../../../../../sutairu/lib/Modal";
  import ThemeModal from "../components/Themes/ThemeModal.svelte";

  onMount(() => {
    hljs.highlightAll();
    Modal.init();
  })
</script>

<!-- Keep your shared layout/navbar untouched -->
<Navbar />

<main class="max-w-xl mx-auto my-5 md:my-10 p-3">

  <article class="markdown-wrapper">
    <!-- Render the imported markdown file as a component -->
    <MarkdownContent />
  </article>
</main>
<ThemeModal />

