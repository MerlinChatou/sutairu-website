<script>
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import "$lib/generated/sutairu.min.css";
  import Navbar from "../components/Navbar.svelte";
</script>

<Navbar />
<div class="container p-4 w-xs flex-y gap-4">
  <div>
    <label for="exampleFormControlInputText" class="form-label">Text input</label>
    <input type="text" class="input" id="exampleFormControlInputText" placeholder="Default Input" />
  </div>

  <div>
    <label for="exampleDisabledInputText" class="form-label">Disabled input</label>
    <input type="text" class="input" id="exampleDisabledInputText" placeholder="Disabled Input" disabled />
  </div>

  <div>
    <label for="exampleVlidInputText" class="form-label">Valid input</label>
    <input type="text" class="input valid" id="exampleVlidInputText" placeholder="Valid Input" />
  </div>

  <div>
    <label for="exampleInvalidInputText" class="form-label">Invalid input</label>
    <input type="text" class="input invalid" id="exampleInvalidInputText" placeholder="Invalid Input" />
  </div>

  <div>
    <label for="exampleFormControlPassword" class="form-label">Password</label>
    <input type="password" class="input" id="exampleFormControlPassword" placeholder="••••••••" autocomplete="off" />
  </div>

  <div>
    <label for="exampleFormControlTextarea" class="form-label">Textarea</label>
    <textarea class="input" id="exampleFormControlTextarea" rows="5" placeholder="Comments"></textarea>
  </div>

  <div>
    <label for="exampleFormFile" class="form-label">File input</label>
    <input class="input" type="file" id="exampleFormFile" />
  </div>

  <div>
    <label for="exampleFormFileDisabled" class="form-label">Disabled file input</label>
    <input class="input" type="file" id="exampleFormFileDisabled" disabled />
  </div>

  <div>
    <label for="exampleFormSelectList" class="form-label">Select</label>
    <select class="input" aria-label="Default select example" id="exampleFormSelectList">
      <option selected>Select</option>
      <option value="1">First choice</option>
      <option value="2">Second choice</option>
      <option value="3">Third choice</option>
    </select>
  </div>

  
</div>
