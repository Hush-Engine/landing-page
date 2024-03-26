<template>
  <article class="bg-white rounded-2xl md:pl-20% md:pr-20%">
    <ContentDoc :path="`/posts/${slug}`" v-slot="{ doc }"  >
      <!-- Header  -->
      <header>
        <div class="text-center p-5">
          <h1 class="text-4xl font-bold lg:w-2/3 mx-auto">{{ doc.title }}</h1>
        </div>
        <div>
          <p class="text-gray-500 text-sm mt-2">Author: {{ doc.author }}</p>
          <Avatar :text="doc.author" />
          <p class="text-gray-500 text-sm mt-2">{{ DateUtils.toFriendlyString(doc.date) }}</p>
        </div>
        <section class="w-full h-screen">
        <img
          v-if="doc.thumbnail"
          :src="doc.thumbnail"
          :alt="doc.title"
          class="object-cover w-full h-full"
        />
        </section>
      </header>
      <!-- ./ Header  -->

      <!-- Content -->
      <div class="mt-4 content p-5">
        <ContentRenderer :value="doc" />
      </div>
    </ContentDoc>
  </article>
</template>

<style>
/**
 * Hyperlink style
 */
.content p a {
  color: #007bff;
  text-decoration: underline;
}

.content p a:hover {
  color: #0056b3;
  text-decoration: underline;
}

/**
 * The rest of the MD styling
 */
.content p:not(:last-child),
.content li:not(:last-child),
.content blockquote:not(:last-child),
.content h1:not(:last-child),
.content h2:not(:last-child),
.content h3:not(:last-child),
.content h4:not(:last-child),
.content pre:not(:last-child),
.content table:not(:last-child) {
  @apply mb-4;
}

.content h1 {
  @apply text-3xl font-bold;
}
.content h2 {
  @apply text-2xl font-bold;
}
.content h3 {
  @apply text-xl font-bold;
}
.content h4 {
  @apply text-lg font-bold;
}
.content h5 {
  @apply text-base font-bold;
}

.content p {
  @apply text-lg
}

</style>

<script lang="ts" setup>
const { slug } = useRoute().params;
</script>
