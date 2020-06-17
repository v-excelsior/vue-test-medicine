<template>
    <div class="home">
        <div class="greeting">
            <span class="greeting__welcome-text">Добро пожаловать в игру</span>
            <h2 class="greeting__game-name">
                Помоги <span class="upper">фармацевту</span>
            </h2>
            <router-link
                to="/main-page"
                tag="button"
                class="button greeting__button"
            >
                Начать
            </router-link>
        </div>
    </div>
</template>
