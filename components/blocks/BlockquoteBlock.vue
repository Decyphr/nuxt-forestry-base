<template>
  <blockquote class="block-blockquote" :class="position">
    <p>{{ block.blockquote_content }}</p>
    <cite>--{{ block.citation }}</cite>
  </blockquote>
</template>
<script>
export default {
  name: 'BlockquoteBlock',
  props: {
    block: { type: Object, required: true },
  },

  data() {
    return {
      position: {
        'position-left': this.block.blockquote_position === 'Left',
        'position-right': this.block.blockquote_position === 'Right',
        'position-full': this.block.blockquote_position === 'Full',
      },
    };
  },
};
</script>
