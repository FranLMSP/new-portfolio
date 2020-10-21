<template>

  <div class="max-w-sm w-full max-w-full lg:flex">
    <div
      class="h-48 lg:h-auto lg:w-64 md:h-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      :style="`background-image: url('${require('@/assets/img/prog.jpg')}'); background-position: center`"
      title="My photo"
    >
    </div>
    <div class="w-full border-r lg:pl-10 border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <h2 class="text-gray-900 font-bold text-5xl mb-2">About me</h2>
        <p class="text-gray-700 text-lg text-base mb-4">
          &emsp; Hi there! I'm Franco, thank you for visiting my page! 🖤 <br>
          <br>
          &emsp; I'm a technology enthusiast, venezuelan, currently living in Ecuador.
          Graduated from <strong>Instituto Universitario de Tecnología Federico Rivero Palacio (IUT-FRP)</strong>
          in Venezuela as a <strong>University Superior Technician</strong> and constantly learning and
          studying online.🎓<br>
          <br>
          &emsp; I like to mess around with technology and programming in general in my free times
          and learning something new every day, for example, a new framework or a new language, or
          how to do a specific thing with some technology. I also love the Linux ecosystem in general.
          In fact, GNU/Linux is my main OS! 🐧<br>
          <br>
          &emsp; Learning more and more about how our technology works is what I really like, always trying to
          find the most optimal way to do computing. Optimization is something very miss-valuated in this days, so
          I enjoy to optimize and make the code more efficient and also readable. That way, the software in general
          can be more fast, reliable, and accesible to everyone!⚙️
        </p>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'About',
  components: {
  }
}

</script>
