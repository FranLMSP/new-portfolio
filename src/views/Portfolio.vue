<template>
  <div class="max-w-sm w-full max-w-full lg:flex">
    <div class="w-full border bg-gray-100 lg:pl-10 border-gray-400 lg:border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <h2 class="text-gray-900 font-bold text-5xl mb-2">Portfolio</h2>
        <p class="mb-5 pl-5">
          Here is a list of some projects I have worked on.
          There are some projects I decided to not put in here for some reasons
          (those are either not as important as I think, or very similar to the other ones,
          or private projects, but you can find some of them on my
          <a target="_blank" href="https://github.com/FranLMSP" style="color:#039be5;">Github</a>
          or <a target="_blank" href="https://gitlab.com/FranLMSP" style="color:#039be5;" >Gitlab</a>),
          so here are the most important ones for me. <br>
          Feel free to click on them to see more details!
        </p>

        <div class="w-full flex flex-wrap">


            <div class="w-full md:w-5/12 lg:w-64 m-4 rounded overflow-hidden bg-white shadow-lg">
              <img class="w-full" src="/img/pong.png" alt="Pong">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Games I've made</div>
                <p class="text-gray-700 text-base">
                  Here is a list of games (or minigames) I have made using different languages.
                </p>
              </div>
            </div>

            <div class="w-full md:w-5/12 lg:w-64 m-4 rounded overflow-hidden bg-white shadow-lg">
              <img class="w-full" src="/img/books.jpg" alt="Books">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Library Management System</div>
                <p class="text-gray-700 text-base">
                  A Management System for a Highschool's library me and my team made for the
                  college project.
                </p>
              </div>
            </div>

            <div class="w-full md:w-5/12 lg:w-64 m-4 rounded overflow-hidden bg-white shadow-lg">
              <img class="w-full" src="/img/dago.png" alt="Books">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Dago's page</div>
                <p class="text-gray-700 text-base">
                  A complete rework to the Dago's page (page currently unavailable).
                </p>
              </div>
            </div>

            <div class="w-full md:w-5/12 lg:w-64 m-4 rounded overflow-hidden bg-white shadow-lg">
              <img class="w-full" src="/img/rn.png" alt="Books">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Mister Kombi App</div>
                <p class="text-gray-700 text-base">
                  Android application made in React Native for the Mister Kombi restaurant
                </p>
              </div>
            </div>


            <div class="w-full md:w-5/12 lg:w-64 m-4 rounded overflow-hidden bg-white shadow-lg">
              <img class="w-full" src="/img/mrkombi.jpg" alt="Books">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Mister Kombi Management System</div>
                <p class="text-gray-700 text-base">
                  Management System for the Mister Kombi restaurant
                </p>
              </div>
            </div>
        </div>

        <modal :title="modalTitle" v-model:showModal="showModal" @modal-toggle="val => showModal = val">
            <test></test>
        </modal>

      </div>
    </div>
  </div>

</template>

<script>

import Modal from '../components/Modal'
import Test from '../components/portfolio/Test'

export default {
  name: 'Experience',
  data() {
    return {
      showModal: false,
      portfolioName: 'none',
      modalTitle: "Test title"
    }
  },
  methods: {
    selectPortfolio(title, name) {
      this.modalTitle = title
      this.portfolioName = name
    }
  },
  components: {
    Modal,
    Test,
  }
}

</script>