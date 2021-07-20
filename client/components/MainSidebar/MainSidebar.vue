<template>
  <aside class="main-sidebar p-4">
    <logo />

    .main-sidebar

    <div class="pt-5">
      <h3 class="main-sidebar__header">
        FAQ
      </h3>

      <ul class="main-sidebar__list p-0 mt-4">
        <li v-for="(question, index) in questions" :key="question" class="main-sidebar__item" @click="showAnswer(index)">
          <a href="#" class="main-sidebar__link">{{ question }}</a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  },
  data: () => ({
    questions: [
      'Вы кто такие?',
      'Как заказать?',
      'А доставляете?',
      '',
      'Как готовите?',
      'Это безопасно?',
      'Это вкусно?'
    ],
    answers: [
      '<span style="color:red;>Не "вас", а "меня"</span>',
      'Как заказать?',
      'А доставляете?',
      '',
      'Как готовите?',
      'Это безопасно?',
      'Это вкусно?'
    ]
  }),
  methods: {
    showAnswer (questionIndex) {
      console.log('showAnswer', questionIndex)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/colors";

.main-sidebar {
  display: none;
  position: fixed;
  width: 150px;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: $my__color--black;

  &__header {
    letter-spacing: 3px;
    font-weight: 900;
    color: $my__color--milk;
  }

  &__list {
    text-align: left;
  }

  &__link {
    line-height: 24px;
    font-size: 18px;
    color: $my__color--milk;

    &:hover {
      text-decoration: none;
      color: $my__color--gold;
    }
  }
}
</style>
