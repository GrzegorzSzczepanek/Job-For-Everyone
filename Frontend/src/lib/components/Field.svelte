<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    export let placeholder = "";
    export let label = "";
    export let value = "";
    export let type = "text";

    function typeAction(node) {
        node.type = type;
    }

    function onType() {
        dispatch('type', value);
    }
</script>

<label for="">{label}</label>
<input use:typeAction {placeholder} bind:value={value} />

<style lang="scss">

</style>