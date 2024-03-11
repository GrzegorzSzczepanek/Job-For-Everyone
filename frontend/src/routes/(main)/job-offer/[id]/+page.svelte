<script>
	import { backend } from "$lib";
	import JobOfferDescription from "$lib/components/JobOfferDescription.svelte";
	import JobOfferHeader from "$lib/components/JobOfferHeader.svelte";

    export let data;

    function getJobOfferData() {
        return backend.get("joboffer", "dawid", { id: data.id });
    }

</script>

<main>
    <div>
        {#await getJobOfferData()}
            <p>Oczekuję na dane...</p>
        {:then jobOfferData}
            <JobOfferHeader {...jobOfferData} />
            <JobOfferDescription />
        {:catch error}
            <p>Error: {error}</p>
        {/await}
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
