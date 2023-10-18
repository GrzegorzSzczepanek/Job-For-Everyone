<script>
    export let name = "";
    export let type = "text";
    let value = "";
</script>

<label for="{name}">{name}:</label>
<input {type} bind:value={value}>

<style lang="scss">

</style>