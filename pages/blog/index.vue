<template>
  <div>
    <h1>All Blogs</h1>
    <section class="flex justify-between">
      <article v-for="post in posts" :key="post.id" class="p-8">
        <h3>{{ post.title }}</h3>
      </article>
    </section>
  </div>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('blog')
      .only(['path', 'title', 'createdAt', 'updatedAt'])
      .fetch();

    return { posts };
  },
};
</script>
