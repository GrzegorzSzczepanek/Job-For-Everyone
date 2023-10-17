<script lang="ts">
    import { getData } from '$lib';
    
    const promise = getData("http://127.0.0.1:3000/api/test");

</script>

<div>
    {#await promise}
        <p>...waiting</p>
    {:then response}
        <p>Message: {response.message}</p>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</div>

<style lang="scss">
    div {
        p {
            font-family: 'Raleway';
        }
    }
</style>