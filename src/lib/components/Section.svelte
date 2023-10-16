<script>
    export let title = "My Page";
</script>

<div class="p-5">
    <h1 class="text-5xl font-bold">{title}</h1>
    <div>
        <slot />
    </div>
</div>