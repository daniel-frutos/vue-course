<template>
    <dialog open>
        <slot></slot>
    </dialog>
</template>

<style scoped>
    dialog {
        background-color: #ffb3b3;
        color: #721c24;
        border: 1px solid #f5c6cb;
        border-radius: 0.25rem;
        padding: 1rem;
        margin: 1rem auto;
        max-width: 30rem;
    }
</style>