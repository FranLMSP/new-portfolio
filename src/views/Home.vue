<template>

  <div class="max-w-sm w-full lg:max-w-full lg:flex">
    <div
      class="h-48 lg:h-auto lg:w-56 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      style="background-image: url('/img/me.png')"
      title="My photo"
    >
    </div>
    <div class="w-full h-64 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <h2 class="text-gray-900 font-bold text-5xl mb-2">Franco Colmenarez</h2>
        <p class="text-gray-700 text-lg text-base mb-4">Backend and Frontend programmer</p>
        <hr>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}

</script>
