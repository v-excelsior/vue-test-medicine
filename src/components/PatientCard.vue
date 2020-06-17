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
            required: true,
        },
    },
    methods: {
        getImgUrl(id) {
            return require('../assets/Patient-' + id + '.jpg')
        },
    },
}
</script>
