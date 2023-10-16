<script>
  import Footer from "$lib/components/Footer.svelte";
import Hero from "$lib/components/Hero.svelte";
  import ProjectGallery from "$lib/components/ProjectGallery.svelte";
  import Toolkit from "$lib/components/Toolkit.svelte";
  import Section from "$lib/components/Section.svelte";
  import { showProject } from "$lib/stores";
    import Project from "$lib/fragments/Project.svelte";

  export let data;
</script>

{#if !$showProject}
<Hero />
<Section title="Latest Projects">
  <ProjectGallery projects={data.projects}/>
</Section>
<Section title="My Toolkit">
  <Toolkit tools={data.toolkit} />
</Section>
{:else}
  <Project />
{/if}


