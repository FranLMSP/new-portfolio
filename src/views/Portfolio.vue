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
                v-for="portfolio in portfolioList"
                @click="selectPortfolio(portfolio.title, portfolio.name)"
                :title="portfolio.title"
                :key="portfolio.name"
                :image="portfolio.image"
                :description="portfolio.description"
            />

        </div>

        <modal
            :title="modalTitle"
            :showModal="showModal"
            @modal-toggle="val => showModal = val"
        >
            <game v-if="portfolioName === 'games'" />
            <lms v-else-if="portfolioName === 'lms'" />
            <dago v-else-if="portfolioName === 'dago'" />
        </modal>

      </div>
    </div>
  </div>

</template>

<script>

import Modal from '../components/Modal'
import Game from '../components/portfolio/Game'
import Lms from '../components/portfolio/Lms'
import Dago from '../components/portfolio/Dago'

import PortfolioCard from '../components/PortfolioCard'

export default {
  name: 'Portfolio',
  data() {
    return {
      showModal: false,
      portfolioName: 'none',
      modalTitle: "Test title",
      portfolioList: [
        {
          title: "Games I've made",
          name: "games",
          description: `
            Here is a list of games (or minigames) I have made using different languages.
          `,
          image: '/img/pong.png'
        },
        {
          title: "Library Management System",
          name: "lms",
          description: `
            A Management System for a Highschool's library me and my team made for the
            college project.
          `,
          image: '/img/books.jpg'
        },
        {
          title: "Dago's page",
          name: "dago",
          description: `
            A complete rework to the Dago's page (page currently unavailable).
          `,
          image: '/img/dago.png'
        },
        {
          title: "Mister Kombi App",
          name: "mkapp",
          description: `
            Android application made in React Native for the Mister Kombi restaurant
          `,
          image: '/img/rn.png'
        },
        {
          title: "Mister Kombi Management System",
          name: "mksys",
          description: `
            Management System for the Mister Kombi restaurant
          `,
          image: '/img/mrkombi.jpg'
        },
      ]
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
    Game,
    Lms,
    Dago,
    PortfolioCard,
  }
}

</script>
