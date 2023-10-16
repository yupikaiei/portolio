<script>
    import AnimatedContainer from "./AnimatedContainer.svelte";
    import { selectedProject, showProject } from "$lib/stores";

    export let projects = [];

    function navigateToProject (project) {
        $selectedProject = project;
        window.scrollTo(0, 0);
        $showProject = true;
    }

</script>

<div id="anchor-projects" class="flex flex-wrap gap-4">
    {#each projects as project}
        <AnimatedContainer>
            <div class="card w-96 h-64 bg-base-100 shadow-xl image-full">
                <figure>
                    <img src={project.cover.file.url} alt="showcase" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        {project.properties.Name.title[0].plain_text}
                    </h2>
                    <p>
                        {project.properties.Caption.rich_text[0].plain_text}
                    </p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary" on:click={() => navigateToProject(project)}>More</button>
                    </div>
                </div>
            </div>
        </AnimatedContainer>
    {/each}
</div>
