<template>
    <div class="results">
        <router-link to="/" tag="button" class="button results__button-home" />
        <div class="results__data">
            <div class="results__data-item">
                <p class="percent">{{ getPercent(med1Count) }} %</p>
                <p class="name">Препарат 1</p>
            </div>
            <div class="results__data-item">
                <p class="percent">{{ getPercent(med2Count) }} %</p>
                <p class="name">Препарат 2</p>
            </div>
            <div class="results__data-item">
                <p class="percent">{{ getPercent(med3Count) }} %</p>
                <p class="name">Препарат 3</p>
            </div>
        </div>
        <div class="results-info">
            <p class="results-info__label">Ваш результат:</p>
            <p class="results-info__res">«Что я здесь делаю?»</p>
            <p class="results-info__text">
                Это тестовое задание, так что не будем углубляться в глубины
                проблем фармацевтов.
            </p>
        </div>

        <router-link
            to="/main-page"
            tag="button"
            class="button results__button-refresh"
        >
            Попробовать еще
        </router-link>
        <div class="circle-bg">
            <img src="../assets/results-bg.jpg" />
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'ResultsPage',
    methods: {
        getPercent(count) {
            return Math.floor((count / 15) * 100)
        },
    },
    computed: {
        ...mapState(['med1Count', 'med2Count', 'med3Count']),
    },
}
</script>

