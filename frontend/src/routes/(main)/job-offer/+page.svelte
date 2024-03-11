<script>
	import JobOfferDescription from "$lib/components/JobOfferDescription.svelte";
    import JobOfferHeader from "$lib/components/JobOfferHeader.svelte";

</script>

<main>
    <div>
        <JobOfferHeader />
        <JobOfferDescription />
    </div>

</main>

<style lang="scss">
    main {
        width: 100vw;
        background: $primary;
        flex-grow: 1;
        display: flex;
        justify-content: center;

    }
    div {
        margin-top: 30px;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
    }

</style>
