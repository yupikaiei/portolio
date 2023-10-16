<script>
    import Footer from "$lib/components/Footer.svelte";
    import TopNav from "$lib/components/TopNav.svelte"
</script>

<div class="w-screen h-screen flex flex-col">
    <TopNav>
        <div class="grow">
            <slot/>
        </div>
    </TopNav>
    <Footer/>
</div>

