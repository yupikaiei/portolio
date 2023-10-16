<script>
    import AnimatedContainer from "./AnimatedContainer.svelte";

    export let tools = [
        { name: "Tool 1" },
        { name: "Tool 2" },
        { name: "Tool 3" },
        { name: "Tool 4" },
    ];
</script>

<div id="anchor-tools" class="flex flex-wrap gap-2 pt-12 pb-12">
    {#each tools as tool}
        <AnimatedContainer>
            <div class="badge badge-secondary">{tool.name}</div>
        </AnimatedContainer>
    {/each}
</div>
