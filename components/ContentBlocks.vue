<template>
  <div>
    <div v-for="(block, idx) in blocks" :key="`block-${idx}`">
      <accordion v-if="block.block_type === 'accordion'" :block="block" />

      <blockquote-block
        v-else-if="block.block_type === 'blockquote'"
        :block="block"
      />
      <!--
TODO: Figure out forms
      {% case "form" %}
        {% include '_includes/blocks/form' with { 'block': block } %}
-->
    </div>
  </div>
</template>
<script>
import Accordion from '~/components/blocks/Accordion';
import BlockquoteBlock from '~/components/blocks/BlockquoteBlock';

export default {
  components: {
    Accordion,
    BlockquoteBlock,
  },
  props: {
    blocks: { type: Array, default: () => [] },
    childPages: { type: Array, default: () => [] },
  },
};
</script>
