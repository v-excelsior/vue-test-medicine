<template>
    <div class="main-page">
        <div class="main-page__info">
            <div class="nav">
                <router-link
                    tag="button"
                    to="/"
                    class="button nav__button nav__button-home"
                />
                <button
                    @click="playAgain()"
                    class="button nav__button nav__button-refresh"
                />
            </div>
            <div class="parameters">
                <span class="parameters__label">Параметри:</span>
                <div class="counters">
                    <div class="counter">
                        <img src="../assets/icons/unhappy.png" />
                        <div class="counter__data" v-text="med1Count"></div>
                    </div>
                    <div class="counter">
                        <img src="../assets/icons/happy.png" />
                        <div class="counter__data" v-text="med2Count"></div>
                    </div>
                    <div class="counter">
                        <img src="../assets/icons/heart.png" />
                        <div class="counter__data" v-text="med3Count"></div>
                    </div>
                </div>
            </div>
            <div class="queue-counter">
                <span class="queue-counter__label">Осталось в очереди:</span>
                <div class="queue-counter__data">
                    <span class="current-length">{{ queue.length }}</span> / 15
                </div>
            </div>
        </div>
        <div class="main-page__game" v-if="this.queue.length">
            <vue-tinder
                ref="tinder"
                key-name="id"
                :queue.sync="queue"
                @submit="onSubmit"
            >
                <patien-card
                    slot-scope="scope"
                    :card="scope.data"
                ></patien-card>
                <div class="med med-1" slot="nope"></div>
                <div class="med med-2" slot="super"></div>
                <div class="med med-3" slot="like"></div>
            </vue-tinder>
            <div class="controls">
                <button
                    @click="decide('nope')"
                    class="button controls__button controls__button-violet"
                >
                    Препарат 1
                </button>
                <button
                    @click="decide('super')"
                    class="button controls__button controls__button-blue"
                >
                    Препарат 2
                </button>
                <button
                    @click="decide('like')"
                    class="button controls__button controls__button-yellow"
                >
                    Препарат 3
                </button>
            </div>
        </div>
        <router-link
            tag="button"
            class="button results-button"
            v-else
            to="/results"
            >Результаты</router-link
        >
    </div>
</template>
<script>
import VueTinder from 'vue-tinder'
import PatienCard from '../components/PatientCard.vue'
import { mapMutations, mapState } from 'vuex'
import mock from '../assets/mockData'
export default {
    components: {
        VueTinder,
        PatienCard,
    },
    data() {
        return {
            queue: [],
        }
    },
    methods: {
        ...mapMutations([
            'increaceMed1Count',
            'increaceMed2Count',
            'increaceMed3Count',
            'cleanState',
        ]),
        onSubmit(choice) {
            this.updateData(choice.type) //Documentation https://shanlh.github.io/vue-tinder/api/events.html#submit
        },
        decide(choice) {
            this.$refs.tinder.decide(choice) //Documentation https://shanlh.github.io/vue-tinder/api/methods.html#decide
        },
        updateData(choice) {
            switch (choice) {
                case 'nope': {
                    this.increaceMed1Count()
                    break
                }
                case 'super': {
                    this.increaceMed2Count()
                    break
                }
                case 'like': {
                    this.increaceMed3Count()
                    break
                }
            }
        },
        playAgain() {
            this.cleanState()
            this.queue = []
            this.mockQueue()
        },
        mockQueue() {
            for (let i = 0; i <= 14; i++) {
                this.queue.push({
                    id: (i + 1).toString(), //id value must be string and start from 1
                    name: mock[i].name,
                    age: mock[i].age,
                    text: mock[i].text,
                })
            }
        },
    },
    computed: {
        ...mapState(['med1Count', 'med2Count', 'med3Count']),
    },
    created() {
        this.mockQueue()
        this.cleanState()
    },
}
</script>
<style lang="scss">
.like-pointer {
    position: absolute;
    z-index: 1;
    top: 20px;
    width: 64px;
    height: 64px;
}
.main-page {
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow: hidden;
    .main-page__info {
        width: 470px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: linear-gradient(77.12deg, #2d8550 16.62%, #5e6ec2 83.38%);
    }
    .main-page__game {
        width: calc(100vw - 470px);
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
}
.nav {
    margin-top: 70px;
    margin-left: 50px;
    &__button {
        height: 70px;
        width: 70px;
        &-home {
            background: center no-repeat url('../assets/icons/home.png');
        }
        &-refresh {
            margin-left: 38px;
            background: center no-repeat url('../assets/icons/refresh.png');
        }
    }
}
.parameters {
    .parameters__label {
        display: inline-block;
        margin: 20px 40px;
        font-size: 36px;
        line-height: 44px;
        color: white;
        font-weight: bold;
    }
    .counters {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        .counter {
            margin: 10px 20px;
            box-shadow: 0px 0px 50px rgba(131, 42, 64, 0.4);
            background-color: white;
            border-radius: 40px;
            height: 80px;
            width: 190px;
            display: flex;
            align-items: center;
            padding: 10px;
            &__data {
                font-size: 48px;
                line-height: 59px;
                font-weight: bold;
                color: #424242;
                text-align: center;
                flex-grow: 1;
            }
        }
    }
}
.queue-counter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(255, 255, 255, 0.15);
    height: 134px;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: 0.02em;
    text-align: center;
    color: white;
    &__data {
        font-size: 44px;
        line-height: 50px;
        .current-length {
            font-weight: bold;
        }
    }
}
.vue-tinder {
    margin: 140px auto 0;
    width: 540px;
    height: 590px;
}

.controls {
    display: flex;
    justify-content: space-evenly;
    width: calc(100vw - 470px);
    &__button {
        font-size: 28px;
        line-height: 34px;
        font-weight: bold;
        color: #ffffff;
        height: 90px;
        margin: 50px 15px 50px;
        flex-grow: 1;
        &-violet {
            background: linear-gradient(258.29deg, #8049c7 0%, #ca57fd 100%);
        }
        &-blue {
            background: linear-gradient(258.29deg, #169ae4 0%, #0cc4fa 100%);
        }
        &-yellow {
            background: linear-gradient(
                90deg,
                yellow 0%,
                darken($color: yellow, $amount: 30%) 100%
            );
            //изменил цвет, не видно текст на кнопке
        }
    }
}
.med {
    position: absolute;
    height: 120px;
    width: 360px;
    bottom: 100px;
    left: 100px;
    transform: translate(-50%, 50%);
}
.med-1 {
    color: #8049c7;
    border: 8px solid #8049c7;
    transform: rotate(-30deg);
    &::after {
        display: block;
        position: absolute;
        line-height: 100px;
        text-align: center;
        font-size: 52px;
        font-weight: bold;
        width: 360px;
        content: 'Препарат 1';
    }
}

.med-2 {
    content: 'Препарат 2';
    color: #169ae4;
    border: 8px solid #169ae4;
    transform: rotate(-15deg);
    &::after {
        display: block;
        position: absolute;
        line-height: 100px;
        text-align: center;
        font-size: 52px;
        font-weight: bold;
        width: 360px;
        content: 'Препарат 2';
    }
}
.med-3 {
    color: yellow;
    border: 8px solid yellow;
    transform: rotate(30deg);
    &::after {
        display: block;
        position: absolute;
        line-height: 100px;
        text-align: center;
        font-size: 52px;
        font-weight: bold;
        width: 360px;
        content: 'Препарат 3';
    }
}
.results-button {
    margin: auto;
    height: 100px;
    width: 250px;
    color: white;
    font-size: 34px;
    background: #0cc4fa;
    transition:  0.2s;
    &:hover {
        width: 260px;
    }
}
@media (max-height: 900px) {
    .vue-tinder {
        margin-top: auto;
    }
}
</style>
