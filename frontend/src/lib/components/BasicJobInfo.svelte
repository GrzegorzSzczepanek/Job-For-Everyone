<script>
    export let up;
    export let down;
</script>

<div class="basic_info">
    <strong>
        <p class="top">{up}</p>
    </strong>
    <strong>
        <p class="bottom">{down}</p>
    </strong>
</div>

<style>
    #basic_info {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p {
        margin-left: 10px;
        margin-right: 10px;
        font-size: 18px;
        text-align: center;
    }

    .bottom {
        /* background-color: #232323; */
        color: white;
        border-radius: 100px;
        background: linear-gradient(#2C2F48,#2C2F48) padding-box,linear-gradient(90deg,#6359E1,#3428CF) border-box;
        border: 2px solid transparent;
        padding: 10px;
    }
</style>
