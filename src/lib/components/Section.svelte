<script>
    export let title = "My Page";
</script>

<div class="p-5">
    <h2 class="text-2xl font-bold mb-5">{title}</h2>
    <div>
        <slot />
    </div>
</div>
