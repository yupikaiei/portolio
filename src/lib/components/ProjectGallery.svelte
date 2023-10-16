<script>
    export let projects = [];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each projects as project}
        <div class="card bg-base-100 shadow-xl">
            <figure><img src={project.cover.file.url} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{project.properties.Name.title[0].plain_text}</h2>
                <p>
                    {project.properties.Description.rich_text[0].plain_text}
                </p>
            </div>
        </div>
    {/each}
</div>
