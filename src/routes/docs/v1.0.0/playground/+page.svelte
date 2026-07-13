<script>
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import "$lib/generated/sutairu.min.css";
  import Navbar from "../components/Navbar.svelte";
</script>

<Navbar />
<div class="container p-4 flex-y gap-4">
  

<div class="card flex-y p-3 w-100% gap-2 group text-center">
  <div class="bg-blue text-white group-hover:mv-x-150% p-2 r-2 w-40% tr-transform-750-linear">linear</div>
  <div class="bg-blue text-white group-hover:mv-x-150% p-2 r-2 w-40% tr-transform-750-ease-in-out">ease-in-out</div>
  <div class="bg-blue text-white group-hover:mv-x-150% p-2 r-2 w-40% tr-transform-750-ease-in">ease-in</div>
  <div class="bg-blue text-white group-hover:mv-x-150% p-2 r-2 w-40% tr-transform-750-ease-out">ease-out</div>
  <div class="bg-blue text-white group-hover:mv-x-150% p-2 r-2 w-40% tr-transform-750-ease">ease</div>
  <div class="bg-blue text-white group-hover:mv-x-150% p-2 r-2 w-40% tr-transform-750-step-start">step-start</div>
  <div class="bg-blue text-white group-hover:mv-x-150% p-2 r-2 w-40% tr-transform-750-step-end">step-end</div>
</div>



<div class="card flex-y p-3 w-375px gap-2 group text-center">
<div class="bg-blue text-white group-hover:mv-x-200px p-2 r-2 w-150px tr-transform-750-linear">linear</div>
<div class="bg-blue text-white group-hover:mv-x-200px p-2 r-2 w-150px tr-transform-750-ease-in-out">ease-in-out</div>
<div class="bg-blue text-white group-hover:mv-x-200px p-2 r-2 w-150px tr-transform-750-ease-in">ease-in</div>
<div class="bg-blue text-white group-hover:mv-x-200px p-2 r-2 w-150px tr-transform-750-ease-out">ease-out</div>
<div class="bg-blue text-white group-hover:mv-x-200px p-2 r-2 w-150px tr-transform-750-ease">ease</div>
<div class="bg-blue text-white group-hover:mv-x-200px p-2 r-2 w-150px tr-transform-750-step-start">step-start</div>
<div class="bg-blue text-white group-hover:mv-x-200px p-2 r-2 w-150px tr-transform-750-step-end">step-end</div>
</div>


</div>
