<template>
<!--CARDS WRAPPER-->
 <div class="uk-container uk-container-expand">
  <h1 class="uk-text-center uk-text-uppercase uk-text-bold uk-heading-bullet">Vue UIKit Strapi Blog</h1>
 <div class="uk-grid uk-grid-medium uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l  uk-child-width-1-5@xl uk-grid-match js-filter" data-uk-grid="masonry: true" data-uk-sortable="handle: .drag-icon">
 <PostPreview v-for="post in posts"
   :key="post.id"
   :title="post.title"
   :excerpt="post.excerpt"
   :thumbnailURL="post.thumbnailURL"
   :content="post.content"
   :id="post.id" />
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      posts: [
        {
        title: "A New Beginning",
        excerpt: "This will be awesome",
        content: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Curabitur aliquet quam id dui posuere blandit.",
        thumbnailURL: "https://picsum.photos/400/300",
        id: "a-new-beginning"
        },
        {
        title: "A Old Beginning",
        excerpt: "This will be even more awesome",
        content: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Curabitur aliquet quam id dui posuere blandit.",
        thumbnailURL: "https://picsum.photos/400/300",
        id: "an-old-beginning"
      },
      {
        title: "A Older Ending",
        excerpt: "This will be really awesome",
        content: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Curabitur aliquet quam id dui posuere blandit.",
        thumbnailURL: "https://picsum.photos/400/300",
        id: "an-older-beginning"
      },
        {
        title: "A New Fangled Ending",
        excerpt: "This will be really wierd",
        content: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Curabitur aliquet quam id dui posuere blandit.",
        thumbnailURL: "https://picsum.photos/400/300",
        id: "an-new-fangled-ending"
      },
            {
        title: "A New Ordinary Ending",
        excerpt: "This is perfectly normal",
        content: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Curabitur aliquet quam id dui posuere blandit.",
        thumbnailURL: "https://picsum.photos/400/300",
        id: "an-ordinary-ending"
      }

      ]
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
