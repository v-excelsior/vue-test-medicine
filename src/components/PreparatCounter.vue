<template>
    <div class="counter">
        <img :src="iconPath" />
        <transition name="move" mode="out-in">
            <div class="counter__data" v-text="counter" :key="counter"></div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'PreparatCounter',
    props: {
        counter: {
            type: Number,
            required: true,
        },
        iconPath: {
            type: String,
            required: true,
        },
    },
}
</script>
