<template>
  <div>
    <h1 class="text-6xl text-primary-dk">{{ page.title }}</h1>
    <FeaturedImage :image="page.featured_image" :title="page.title" />
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content('pages', params.slug).fetch();

    return { page };
  },
};
</script>
