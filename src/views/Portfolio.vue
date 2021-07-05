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
          <a target="_blank" href="https://github.com/FranLMSP">Github</a>
          or <a target="_blank" href="https://gitlab.com/FranLMSP">Gitlab</a>),
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

        <fullscreen-image
            :src="imageSrc"
            :caption="imageCaption"
            :showing="showingImage"
            @toggle="val => showingImage = val"

        />

        <modal
            :title="modalTitle"
            :showModal="showModal"
            @modal-toggle="val => showModal = val"
        >
            <component :openImage="openImage" :is="portfolioName"></component>
        </modal>

      </div>
    </div>
  </div>

</template>

<script>

import Modal from '../components/Modal'
import Games from '../components/portfolio/Games'
import Flutter from '../components/portfolio/Flutter'
import Lms from '../components/portfolio/Lms'
import Dago from '../components/portfolio/Dago'
import Mkapp from '../components/portfolio/Mkapp'
import Mksys from '../components/portfolio/Mksys'
import Esteno from '../components/portfolio/Esteno'
import RecipeBox from '../components/portfolio/RecipeBox'
import Merng from '../components/portfolio/Merng'

import PortfolioCard from '../components/PortfolioCard'
import FullscreenImage from '../components/FullscreenImage'

export default {
  name: 'Portfolio',
  data() {
    return {
      imageSrc: '',
      imageCaption: '',
      showingImage: false,
      showModal: false,
      portfolioName: 'none',
      modalTitle: "",
      portfolioList: [
        {
          title: "Games I've made",
          name: "games",
          description: `
            Here is a list of games (or minigames) I have made using different languages
          `,
          image: '/img/pong.png'
        },
        {
          title: "Mobile applications in Flutter",
          name: "flutter",
          description: `
            Flutter project I made for the Aleli company and some other mini-projects I made for learning
          `,
          image: '/img/flutter.jpg'
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
          title: "Recipe Box",
          name: "recipe-box",
          description: `
            A small SPA project I did for learning Laravel Mix and Vue.js SPA
          `,
          image: '/img/portfolio/recipe-box/recipe-box.png'
        },
        {
          title: "Dago's page",
          name: "dago",
          description: `
            A complete rework to the Dago's page (page currently unavailable)
          `,
          image: '/img/dago.png'
        },
        {
          title: "MERNG Stack",
          name: "merng",
          description: `
            A basic "social network" app made with the MERNG stack
          `,
          image: '/img/mern.png'
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
        {
          title: "Esteno Reports",
          name: "esteno",
          description: `
            Management System for the Esteno company
          `,
          image: '/img/portfolio/esteno.jpg'
        },
      ]
    }
  },
  methods: {
    selectPortfolio(title, name) {
      this.modalTitle = title
      this.portfolioName = name
      this.showModal = true
    },
    openImage(src, caption) {
      this.imageSrc = src
      this.imageCaption = caption
      this.showingImage = true
    }
  },
  components: {
    Modal,
    Flutter,
    Games,
    Lms,
    Dago,
    Mkapp,
    Mksys,
    Esteno,
    PortfolioCard,
    FullscreenImage,
    RecipeBox,
    Merng
  }
}

</script>
