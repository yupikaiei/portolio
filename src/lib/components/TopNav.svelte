<script>
  import { showProject } from "$lib/stores";
  let drawer;

  function handleAnchorClick(event) {
    $showProject = false;
    event.preventDefault();
    drawer.checked = false;
    const link = event.currentTarget;
    const anchorId = new URL(link.href).hash.replace("#", "");
    const anchor = document.getElementById(anchorId);
    window.scrollTo({
      top: anchor.offsetTop,
      behavior: "smooth",
    });
  }
</script>

<div class="drawer">
  <input
    bind:this={drawer}
    id="my-drawer-3"
    type="checkbox"
    class="drawer-toggle"
  />
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="w-full navbar bg-base-300 fixed z-40">
      <div class="flex-none lg:hidden">
        <label
          for="my-drawer-3"
          aria-label="open sidebar"
          class="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            /></svg
          >
        </label>
      </div>
      <div class="flex-1 px-2 mx-2" />
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          <!-- Navbar menu content here -->
          <li>
            <a href="#anchor-projects" on:click={handleAnchorClick}>Projects</a>
          </li>
          <li>
            <a href="#anchor-tools" on:click={handleAnchorClick}>My Toolkit</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- Page content here -->
    <div class="mt-20">
      <slot />
    </div>
  </div>
  <div class="drawer-side z-50">
    <label
      for="my-drawer-3"
      aria-label="close sidebar"
      class="drawer-overlay"
    />
    <ul class="menu p-4 w-80 min-h-full bg-base-200">
      <!-- Sidebar content here -->
      <li>
        <a href="#anchor-projects" on:click={handleAnchorClick}>Projects</a>
      </li>
      <li>
        <a href="#anchor-tools" on:click={handleAnchorClick}>My Toolkit</a>
      </li>
    </ul>
  </div>
</div>
