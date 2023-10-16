<script>
  import Footer from "$lib/components/Footer.svelte";
import Hero from "$lib/components/Hero.svelte";
  import ProjectGallery from "$lib/components/ProjectGallery.svelte";
  import Toolkit from "$lib/components/Toolkit.svelte";
  import Section from "$lib/components/Section.svelte";

  export let data;
</script>

<Hero />
<Section title="My Projects">
  <ProjectGallery projects={data.projects}/>
</Section>
<Section title="My Toolkit">
  <Toolkit tools={data.toolkit} />
</Section>
<Footer />


