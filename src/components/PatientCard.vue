<template>
    <div class="patient-card">
        <img class="patient-card__image" :src="getImgUrl(card.id)" />
        <div class="patient-card__info">
            <p class="patient-card__name">{{ card.name }} , {{ card.age }}</p>
            <p class="patient-card__text">{{ card.text }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PatientCard',
    props: {
        card: {
            type: Object,
        },
    },
    methods: {
        getImgUrl(id) {
            return require('../assets/Patient-' + id + '.jpg')
        },
    },
}
</script>
<style lang="scss">
.patient-card {
    user-select: none;
    border-radius: 20px;
    height: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    &__image {
        width: 100%;
    }
    &__info {
        padding: 20px 60px;
    }
    &__name {
        font-size: 32px;
        line-height: 39px;
        color: #8e9ad5;
        margin-bottom: 20px;
    }
    &__text {
        overflow: auto;
        max-height:140px;
        font-size: 20px;
        line-height: 24px;
        color: #424242;
    }
}
</style>
