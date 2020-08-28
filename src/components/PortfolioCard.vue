<template>

    <div
        style="cursor: pointer"
        :title="title"
        class="w-full md:w-5/12 lg:w-64 m-4 rounded overflow-hidden bg-white shadow-lg"
    >
      <img class="w-full" :src="image" alt="Books">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ title }}</div>
        <p class="text-gray-700 text-base">
          {{ description }}
        </p>
      </div>
    </div>


</template>

<script>

export default {
    name: 'PortfolioCard',
    props: ['title', 'image', 'description']
}

</script>
