<div class="app">
    <slot></slot>
</div>

<style lang="scss">
    .app {
        width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: radial-gradient(ellipse at 20% 20%, #35234b 0%, transparent 70%),
            radial-gradient(ellipse at 60% 20%, #2975bf 0%, transparent 70%),
            radial-gradient(ellipse at 100% 20%, #3d54b1 0%, transparent 70%),
            radial-gradient(ellipse at 100% 100%, #9f3c54 0%, transparent 70%),
            radial-gradient(ellipse at 20% 100%, #362d6f 0%, transparent 70%);
        background-blend-mode:screen;
    }
</style>