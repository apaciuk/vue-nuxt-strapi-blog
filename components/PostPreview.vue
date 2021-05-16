<template>
    <NuxtLink
    :to="id"><uk-article class="uk-article">
    <div
    class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" :data-src="thumbnailURL" uk-img>
    </div>
     <div class="post-preview-content">
      <h2 class="uk-article-title uk-margin-top">{{ title }}</h2>
      <p class="uk-text-lead">{{ excerpt }}</p>
      <p>{{ content }}</p>
    </div>
  </uk-article></NuxtLink>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        excerpt: {
            type: String,
            required: true
        },
        thumbnailURL: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: rgb(47, 49, 54);
}
</style>