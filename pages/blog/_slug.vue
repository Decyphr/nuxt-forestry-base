<template>
  <div>
    <h1>{{ blog.title }}</h1>
    <content-blocks :blocks="blog.content_blocks" />
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const blog = await $content('blog', params.slug).fetch();

    return { blog };
  },
};
</script>
