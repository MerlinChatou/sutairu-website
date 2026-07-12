<script>
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import "$lib/generated/sutairu.min.css";
  import Navbar from "../components/Navbar.svelte";
</script>

<Navbar />
<div class="container p-4 flex-y gap-4 max-w-md">
  <div class="input-group">
    <span class="bg-subtle">$</span>
    <input type="text" class="input" placeholder="Amount" />
    <button class="btn btn-primary">Donate</button>
  </div>

  <div class="input-group max-w-md r-pill">
    <span class="bg-subtle">$</span>
    <input type="text" class="input" placeholder="Amount" />
    <button class="btn btn-primary">Donate</button>
  </div>

  <div class="input-group max-w-md fs-3xl">
    <span class="bg-subtle">$</span>
    <input type="text" class="input" placeholder="Amount" />
    <button class="btn btn-primary">Donate</button>
  </div>

  <div class="input-group max-w-md">
    <span class="bg-subtle"><i class="fa-solid fa-user"></i></span>
    <input type="text" class="input" placeholder="Username" />
    <span class="bg-subtle"><i class="fa-solid fa-lock"></i></span>
    <input type="password" class="input" placeholder="••••••••" />
  </div>


  <div class="input-group max-w-md valid">
    <span class="bg-subtle"><i class="fa-solid fa-check text-green"></i></span>
    <input type="text" class="input" placeholder="Valid group" />
  </div>

  <div class="input-group max-w-md invalid">
    <span class="bg-subtle"><i class="fa-solid fa-xmark text-red"></i></span>
    <input type="text" class="input" placeholder="Invalid group" />
  </div>
</div>
