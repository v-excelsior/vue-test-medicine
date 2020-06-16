<template>
    <div class="results">
        <router-link to="/">Home</router-link>
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
            tag="button"
            class="button results__button-refresh"
            to="/main-page"
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
<style lang="scss">
.results {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    &__data {
        display: flex;
        margin-left: 130px;
        &-item {
        }
    }
    &-info {
        margin-left: 130px;
        max-width: 580px;
        &__label {
            font-size: 25px;
            line-height: 30px;
            letter-spacing: 0.02em;
            color: #8e9ad5;
            margin-bottom: 10px;
        }
        &__res {
            font-size: 32px;
            line-height: 35px;
            font-weight: bold;
            letter-spacing: 0.02em;
            color: #8e9ad5;
            margin-bottom: 20px;
        }
        &__text {
            font-size: 24px;
            line-height: 29px;
            color: #424242;
        }
        &::before {
            display: block;
            content: '';
            margin-bottom: 40px;
            width: 500px;
            height: 3px;
            background-color: red;
        }
    }
    &__button-refresh {
        position: absolute;
        bottom: 85px;
        left: 130px;
        width: 270px;
        height: 60px;
        background: linear-gradient(90deg, #d9d9d9 0%, #a1a1a1 100%);
        font-size: 24px;
        line-height: 29px;
        font-weight: bold;
        color: white;
    }
}

.circle-bg {
    z-index: -1;
    top: 0;
    right: 0;
    position: absolute;
}
</style>
