<template>
  <section class="my-10">
    <figure>
      <img :src="image" :alt="title" />
    </figure>
  </section>
</template>
<script>
export default {
  props: {
    image: { type: String, required: true },
    title: { type: String },
  },
};
</script>
