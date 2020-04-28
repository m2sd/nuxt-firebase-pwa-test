<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        firebase-pwa-test
      </h1>
      <h2 class="subtitle">
        Minimal test case for @nuxtjs/firebase + @nuxtjs/pwa conflict
      </h2>
      <div class="links">
        <p>Open the console and click the button</p>
        <a class="button--green" @click="onStartTest()">
          Start test
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import consola from 'consola'

import Logo from '~/components/Logo.vue'

const logger = consola.withScope('test')

export default {
  components: {
    Logo,
  },
  mounted() {
    logger.info(
      'Please check that the service workers have been registered\nYou should see a corresponding message here in the console'
    )
  },
  methods: {
    async onStartTest() {
      await this.$fireAuth.signInAnonymously()

      logger.info('Window will reload in 5 seconds.')
      if (process.env.WORKBOX_POSITION === 'before') {
        logger.info(
          'After the reload check the console to see workbox caching messages.'
        )
        logger.error(
          'Note that, in the network tab, the authorization header is missing from the page request.'
        )
      } else {
        logger.info(
          'After the reload open the network tab\nCheck the second localhost entry (gear icon)\nThe authorization header is present on the request'
        )
        logger.error(
          'Note that there are no workbox messages regarding cached routes.'
        )
      }

      setTimeout(() => {
        window.location.reload()
      }, 5000)
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
