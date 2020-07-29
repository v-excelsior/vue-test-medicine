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
                    <preparat-counter
                        :iconPath="require(`../assets/icons/unhappy.png`)"
                        :counter="medicament_1"
                    />
                    <preparat-counter
                        :iconPath="require(`../assets/icons/happy.png`)"
                        :counter="medicament_2"
                    />
                    <preparat-counter
                        :iconPath="require(`../assets/icons/heart.png`)"
                        :counter="medicament_3"
                    />
                </div>
            </div>
            <div class="queue-counter">
                <span class="queue-counter__label">Осталось в очереди:</span>
                <div class="queue-counter__data">
                    <transition name="move" mode="out-in">
                        <span
                            class="current-length"
                            v-text="queue.length"
                            :key="queue.length"
                        ></span>
                    </transition>
                    <span> / 15</span>
                </div>
            </div>
        </div>
        <transition name="fade" mode="out-in">
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
        </transition>
    </div>
</template>
<script>
import VueTinder from 'vue-tinder'
import PatienCard from '../components/PatientCard.vue'
import PreparatCounter from '../components/PreparatCounter.vue'
import { mapMutations, mapState } from 'vuex'
import mock from '../mocks/mockData'
export default {
    components: {
        VueTinder,
        PatienCard,
        PreparatCounter,
    },
    data() {
        return {
            queue: [],
        }
    },
    methods: {
        ...mapMutations(['increaceMedicamentCount', 'cleanState']),
        onSubmit(choice) {
            this.updateData(choice.type) //Documentation https://shanlh.github.io/vue-tinder/api/events.html#submit
        },
        decide(choice) {
            this.$refs.tinder.decide(choice) //Documentation https://shanlh.github.io/vue-tinder/api/methods.html#decide
        },
        updateData(choice) {
            switch (choice) {
                case 'nope': {
                    this.increaceMedicamentCount('medicament_1')
                    break
                }
                case 'super': {
                    this.increaceMedicamentCount('medicament_2')
                    break
                }
                case 'like': {
                    this.increaceMedicamentCount('medicament_3')
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
        ...mapState(['medicament_1', 'medicament_2', 'medicament_3']),
    },
    created() {
        this.mockQueue()
        this.cleanState()
    },
}
</script>
