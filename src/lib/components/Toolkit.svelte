<script>
    export let tools = [
        { name: "Tool 1" },
        { name: "Tool 2" },
        { name: "Tool 3" },
        { name: "Tool 4" },
    ];
</script>

<div class="flex flex-wrap gap-2 pt-12 pb-12">
    {#each tools as tool}
        <div class="badge badge-secondary">{tool.name}</div>
    {/each}
</div>
