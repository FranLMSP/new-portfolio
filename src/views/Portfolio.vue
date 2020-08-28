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

            <portfolio-card
                @click="selectPortfolio('Games I\'ve made', 'games')"
                title="Games I've made"
                image="/img/pong.png"
                description="
                  Here is a list of games (or minigames) I have made using different languages.
                "
            />

            <portfolio-card
                title="Library Management System"
                image="/img/books.jpg"
                description="
                  A Management System for a Highschool's library me and my team made for the
                  college project.
                "
            />

            <portfolio-card
                title="Dago's page"
                image="/img/dago.png"
                description="A complete rework to the Dago's page (page currently unavailable)."
            />

            <portfolio-card
                title="Mister Kombi App"
                image="/img/rn.png"
                description="Android application made in React Native for the Mister Kombi restaurant"
            />

            <portfolio-card
                title="Mister Kombi Management System"
                image="/img/mrkombi.jpg"
                description="Management System for the Mister Kombi restaurant"
            />

        </div>

        <modal
            :title="modalTitle"
            :showModal="showModal"
            @modal-toggle="val => showModal = val"
        >
            <test></test>
        </modal>

      </div>
    </div>
  </div>

</template>

<script>

import Modal from '../components/Modal'
import Test from '../components/portfolio/Test'
import PortfolioCard from '../components/PortfolioCard'

export default {
  name: 'Portfolio',
  data() {
    return {
      showModal: false,
      portfolioName: 'none',
      modalTitle: "Test title"
    }
  },
  methods: {
    selectPortfolio(title, name) {
      console.log('test')
      this.modalTitle = title
      this.portfolioName = name
      this.showModal = true
    }
  },
  components: {
    Modal,
    Test,
    PortfolioCard,
  }
}

</script>
