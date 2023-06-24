<script lang="ts">
  import '@vaadin/grid';
  import '@vaadin/text-field';
  import '@vaadin/email-field';
  import '@vaadin/button';
  import {CustomerEndpoint} from "Frontend/generated/endpoints";


  let customers = [];
  let name = '';
  let email = '';

  async function fetchCustomers() {
    customers = await CustomerEndpoint.getCustomers();
  }

  async function addCustomer() {
    const saved = await CustomerEndpoint.add(name, email);
    customers = [...customers, saved];
    name = '';
    email = '';
  }

  fetchCustomers();
</script>

<div class="form">
    <vaadin-text-field
            label="Name"
            value={name}
            on:change={e => name = e.target.value}></vaadin-text-field>
    <vaadin-email-field
            label="Email"
            value={email}
            on:change={e => email = e.target.value}></vaadin-email-field>
    <vaadin-button theme="primary" on:click={addCustomer}>Add</vaadin-button>
</div>

<vaadin-grid items={customers}>
    <vaadin-grid-column path="name"></vaadin-grid-column>
    <vaadin-grid-column path="email"></vaadin-grid-column>
</vaadin-grid>

<style>

</style>