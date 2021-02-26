<template>
  <div class="block-accordion">
    <h3 class="accordion-toggle" :class="{ open: isOpen }">
      <button
        :aria-label="`${block.accordion_headline}: Learn More`"
        :aria-expanded="isOpen"
        @click="toggleOpen"
      >
        {{ block.accordion_headline }}
      </button>
    </h3>
    <div class="accordion-content" v-html="block.accordion_content"></div>
  </div>
</template>
<script>
export default {
  name: 'Accordion',
  props: {
    block: { type: Object, required: true },
  },

  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
