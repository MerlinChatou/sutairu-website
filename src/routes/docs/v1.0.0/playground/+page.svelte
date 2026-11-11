<script>
  import "../lib/generated/sutairu-v1-0-0.min.css";
  import { Modal } from "@merlin-chatou/sutairu";
  import Navbar from "../components/Navbar.svelte";
  import iconsMeta from "@merlin-chatou/sutairu/icons-meta";
  import iconsData from "@merlin-chatou/sutairu/icons-data";
  import MiniSearch from "minisearch";

  import { onMount } from "svelte";
  onMount(() => {
    Modal.init();
  });

</script>

<Navbar />


<div class="tabs-pure w-md">
  <!-- Hidden Radio Inputs to hold state -->
  <input type="radio" name="sutairu-tabs" id="tab-gen" class="tab-input" checked>
  <input type="radio" name="sutairu-tabs" id="tab-sec" class="tab-input">
  <input type="radio" name="sutairu-tabs" id="tab-bil" class="tab-input">

  <!-- Tab Header Labels -->
  <div class="tab-list">
    <label for="tab-gen" class="tab-label">General</label>
    <label for="tab-sec" class="tab-label">Security</label>
    <label for="tab-bil" class="tab-label">Billing</label>
  </div>

  <!-- Tab Panels -->
  <div class="tab-panels">
    <div class="tab-panel" id="panel-gen">
      <p>General account settings and preferences go here.</p>
    </div>
    <div class="tab-panel" id="panel-sec">
      <p>Password, 2FA, and security logs.</p>
    </div>
    <div class="tab-panel" id="panel-bil">
      <p>Invoices, payment methods, and subscription plans.</p>
    </div>
  </div>
</div>

<style>
 /* Hide the native radio inputs */
.tabs-pure .tab-input {
  display: none;
}

/* Layout for the tab headers */
.tabs-pure .tab-list {
  display: flex;
  gap: 0.5rem;
  border-bottom: 2px solid var(--border-color, #e2e8f0);
  margin-bottom: 1rem;
}

/* Tab Header Styling */
.tabs-pure .tab-label {
  padding: 0.75rem 1rem;
  font-weight: 500;
  cursor: pointer;
  color: var(--text-muted, #64748b);
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.tabs-pure .tab-label:hover {
  color: var(--text-color, #0f172a);
}

/* Hide all panels by default */
.tabs-pure .tab-panel {
  display: none;
}

/* State 1: General Tab Checked */
#tab-gen:checked ~ .tab-list label[for="tab-gen"],
#tab-sec:checked ~ .tab-list label[for="tab-sec"],
#tab-bil:checked ~ .tab-list label[for="tab-bil"] {
  color: var(--primary-color, #2563eb);
  border-bottom-color: var(--primary-color, #2563eb);
}

#tab-gen:checked ~ .tab-panels #panel-gen,
#tab-sec:checked ~ .tab-panels #panel-sec,
#tab-bil:checked ~ .tab-panels #panel-bil {
  display: block;
} 
</style>