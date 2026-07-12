<script>
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import "$lib/generated/sutairu.min.css";
  import Navbar from "../components/Navbar.svelte";
</script>

<Navbar />
<div class="container p-4 w-xs flex-y gap-4">
  <div class="card group">
    <h3 class="header group-hover:text-accent">Card Heading</h3>
    <div class="body text-gray-400">Hovering anywhere over the card wrapper flips the header color.</div>
  </div>

  <div class="card group p-4 b-1 b-gray hover:bg-neutral">
    <div class="header">
      <h3 class="text-title group-hover:text-accent">Card Heading</h3>
    </div>
      <div class="body text-gray-400">Hovering anywhere over the card wrapper flips the header color.</div>

  </div>

  <div>
    <label for="exampleFormControlInputText" class="input-label">Text input</label>
    <input type="text" class="input" id="exampleFormControlInputText" placeholder="Default Input" />
  </div>

  <div>
    <label for="exampleDisabledInputText" class="input-label">Disabled input</label>
    <input type="text" class="input" id="exampleDisabledInputText" placeholder="Disabled Input" disabled />
  </div>

  <div>
    <label for="exampleVlidInputText" class="input-label">Valid input</label>
    <input type="text" class="input valid" id="exampleVlidInputText" placeholder="Valid Input" />
  </div>

  <div>
    <label for="exampleInvalidInputText" class="input-label">Invalid input</label>
    <input type="text" class="input invalid" id="exampleInvalidInputText" placeholder="Invalid Input" />
  </div>

  <div>
    <label for="exampleFormControlPassword" class="input-label">Password</label>
    <input type="password" class="input" id="exampleFormControlPassword" placeholder="••••••••" autocomplete="off" />
  </div>

  <div>
    <label for="exampleFormControlTextarea" class="input-label">Textarea</label>
    <textarea class="input" id="exampleFormControlTextarea" rows="5" placeholder="Comments"></textarea>
  </div>

  <div>
    <label for="exampleFormFile" class="input-label">File input</label>
    <input class="input" type="file" id="exampleFormFile" />
  </div>

  <div>
    <label for="exampleFormFileDisabled" class="input-label">Disabled file input</label>
    <input class="input" type="file" id="exampleFormFileDisabled" disabled />
  </div>

  <div>
    <label for="exampleFormSelectList" class="input-label">Select</label>
    <select class="input" aria-label="Default select example" id="exampleFormSelectList">
      <option selected>Select</option>
      <option value="1">First choice</option>
      <option value="2">Second choice</option>
      <option value="3">Third choice</option>
    </select>
  </div>
</div>
