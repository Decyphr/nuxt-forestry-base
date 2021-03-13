<template>
  <header class="w-full bg-primary-dk">
    <nav class="max-w-screen-xl m-auto flex items-center py-3 flex-wrap">
      <nuxt-link to="/" class="p-2 mr-4 inline-flex items-center">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="fill-current text-white h-8 w-8 mr-2"
        >
          <path
            d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
          />
        </svg>
        <span class="text-xl text-white font-bold uppercase tracking-wide">{{
          identity.siteName
        }}</span>
      </nuxt-link>
      <button
        @click="toggleOpen"
        class="text-white inline-flex p-3 hover:text-primary-lt rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        data-target="#navigation"
      >
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            fill="currentColor"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            fill="currentColor"
          />
        </svg>
      </button>
      <transition name="slide">
        <div
          class="top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
          id="navigation"
          :class="{ hidden: !isOpen }"
        >
          <div
            class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto"
          >
            <nuxt-link
              to="/"
              class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-secondary-lt items-center justify-center transition ease-in duration-75 hover:text-primary-lt hover:text-white"
            >
              <span>Home</span>
            </nuxt-link>
            <nuxt-link
              to="/about"
              class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-secondary-lt items-center justify-center transition ease-in duration-75 hover:text-primary-lt hover:text-white"
            >
              <span>About</span>
            </nuxt-link>
            <nuxt-link
              to="/contact"
              class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-secondary-lt items-center justify-center transition ease-in duration-75 hover:text-primary-lt hover:text-white"
            >
              <span>Contact</span>
            </nuxt-link>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>
<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    isOpen: false,
  }),

  computed: {
    ...mapState(['identity']),
  },

  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
<style scoped></style>
