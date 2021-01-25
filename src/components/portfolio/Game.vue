<template>

    <div class="w-full text-left">
        <fullscreen-image
            :src="imageSrc"
            :caption="imageCaption"
            :showing="showingImage"
            @toggle="val => showingImage = val"

        />
        <p>Here is a list of game prototypes or minigames I've made for different porpuses.</p>

        <hr class="m-4">

        <div class="flex flex-wrap mb-6">

            <div class="w-full md:w-2/3">
                <h3 class="font-bold text-2xl">2048 Game in Javascript</h3>
                <p class="pl-4 mb-4">
                    A 2048 game game made with Javascript.<br>
                    You can <a target="_blank" href="https://franlmsp.github.io/2048-game/">play 2048</a> here!
                </p>

                <p>Tools used:</p>
                <ul class="list-disc pl-8">
                    <li><strong>Javascript</strong> and <strong>HTML Canvas</strong></li>
                    <li><strong>Object-oriented programming</strong></li>
                </ul>
                <p>Source code:</p>
                <ul class="list-disc pl-8">
                    <li>
                        <strong>2048: </strong>
                        <a
                            target="_blank"
                            href="https://github.com/FranLMSP/2048-game"
                        >
                            https://github.com/FranLMSP/2048-game
                        </a>
                    </li>
                </ul>
            </div>

            <div class="w-full md:w-1/3">
                <img
                    @click="openImage(require('@/assets/img/portfolio/games/2048.png'), '2048 game made in Javascript')"
                    class="cursor-pointer m-auto h-48"
                    src="@/assets/img/portfolio/games/2048.png"
                />
            </div>

        </div>

        <hr class="m-4">

        <div class="flex flex-wrap">

            <div class="w-full md:w-1/3">
                <img
                    @click="openImage(require('@/assets/img/pong.png'), '2 player pong game made in Javascript')"
                    class="cursor-pointer m-auto h-48"
                    src="@/assets/img/pong.png"
                />
            </div>

            <div class="w-full md:w-2/3">
                <h3 class="font-bold text-2xl">Pong and Snake in Javascript</h3>
                <p class="pl-4 mb-4">
                    A Pong Game and a very basic Snake game made with Javascript.<br>
                    You can <a target="_blank" href="https://franlmsp.github.io/PongScript/">play Pong</a>
                    and <a target="_blank" href="https://franlmsp.github.io/SnakeScript/">play Snake</a> here!
                    Pong also works on mobile devices!
                </p>
                <p>Tools used:</p>
                <ul class="list-disc pl-8">
                    <li><strong>Javascript</strong> and <strong>HTML Canvas</strong></li>
                    <li><strong>Object-oriented programming</strong></li>
                </ul>
                <p>Source code:</p>
                <ul class="list-disc pl-8">
                    <li>
                        <strong>Pong: </strong>
                        <a
                            target="_blank"
                            href="https://github.com/FranLMSP/PongScript"
                        >
                            https://github.com/FranLMSP/PongScript
                        </a>
                    </li>
                    <li>
                        <strong>Snake: </strong>
                        <a
                            target="_blank"
                            href="https://github.com/FranLMSP/SnakeScript"
                        >
                            https://github.com/FranLMSP/SnakeScript
                        </a>
                    </li>
                </ul>
            </div>

        </div>

        <hr class="m-4">

        <div class="flex flex-wrap mb-6">

            <div class="w-full md:w-2/3">
                <h3 class="font-bold text-2xl">Tetris in C++</h3>
                <p class="pl-4 mb-4">
                    Basic Tetris made with C++.
                </p>

                <p>Tools used:</p>
                <ul class="list-disc pl-8">
                    <li><strong>C++</strong></li>
                    <li><strong>Object-oriented programming</strong></li>
                    <li><strong>SDL Library</strong></li>
                </ul>
                <p>Source code:</p>
                <ul class="list-disc pl-8">
                    <li>
                        <strong>Tetris: </strong>
                        <a
                            target="_blank"
                            href="https://github.com/FranLMSP/tetris-sdl"
                        >
                            https://github.com/FranLMSP/tetris-sdl
                        </a>
                    </li>
                </ul>
            </div>

            <div class="w-full md:w-1/3">
                <img
                    @click="openImage(require('@/assets/img/portfolio/games/tetris.png'), 'Tetris game made in C++')"
                    class="cursor-pointer m-auto h-48"
                    src="@/assets/img/portfolio/games/tetris.png"
                />
            </div>

        </div>

        <hr class="m-4">

        <div class="flex flex-wrap">

            <div class="w-full md:w-1/3">
                <img
                    @click="openImage(require('@/assets/img/portfolio/games/jailsdream.png'), 'Platformer game prototype made in C++')"
                    class="cursor-pointer m-auto h-48"
                    src="@/assets/img/portfolio/games/jailsdream.png"
                />
            </div>

            <div class="w-full md:w-2/3">
                <h3 class="font-bold text-2xl">Jail's Dream</h3>
                <p class="pl-4 mb-4">
                    A Platformer prototype in a level with blocks to test the physics of the game.<br>
                </p>
                <p>Tools used:</p>
                <ul class="list-disc pl-8">
                    <li><strong>C++</strong></li>
                    <li><strong>Object-oriented programming</strong></li>
                    <li><strong>SDL Library</strong></li>
                </ul>
                <p>Source code:</p>
                <ul class="list-disc pl-8">
                    <li>
                        <strong>Jails Dream: </strong>
                        <a
                            target="_blank"
                            href="https://github.com/FranLMSP/jailsdream"
                        >
                            https://github.com/FranLMSP/jailsdream
                        </a>
                    </li>
                </ul>
            </div>

        </div>

        <hr class="m-4">

        <div class="flex flex-wrap mb-6">

            <div class="w-full md:w-2/3">
                <h3 class="font-bold text-2xl">Cat</h3>
                <p class="pl-4 mb-4">
                    A Game prototype similar to the space games where you have to shoot to everyone.<br>
                    In this game you are a cat and you have to shoot hairballs to different enemies.
                    Isn't that amazing?
                </p>

                <p>Tools used:</p>
                <ul class="list-disc pl-8">
                    <li><strong>C++</strong></li>
                    <li><strong>Object-oriented programming</strong></li>
                    <li><strong>SDL Library</strong></li>
                </ul>
                <p>Source code:</p>
                <ul class="list-disc pl-8">
                    <li>
                        <strong>Cat minigame: </strong>
                        <a
                            target="_blank"
                            href="https://github.com/FranLMSP/cat-minigame"
                        >
                            https://github.com/FranLMSP/cat-minigame
                        </a>
                    </li>
                </ul>
            </div>

            <div class="w-full md:w-1/3">
                <img
                    @click="openImage(require('@/assets/img/portfolio/games/cat.png'), 'Space shooter game prototype made in C++')"
                    class="cursor-pointer m-auto h-48"
                    src="@/assets/img/portfolio/games/cat.png"
                />
            </div>

        </div>

        <hr class="m-4">

        <div class="flex flex-wrap">

            <div class="w-full md:w-1/3">
                <img
                    @click="openImage(require('@/assets/img/portfolio/games/collage.png'), 'Simple games made as a college test')"
                    class="cursor-pointer m-auto h-48"
                    src="@/assets/img/portfolio/games/collage.png"
                />
            </div>

            <div class="w-full md:w-2/3">
                <h3 class="font-bold text-2xl">Games for the college</h3>
                <p class="pl-4 mb-4">
                    At the college, as evaluation, we had to do different games to develop
                    our programming logic, like pointers, loops, recursivity, etc.
                    The games we developed were Snake, 4-in-line, tic-tac-toe and others.
                </p>
                <p>Tools used:</p>
                <ul class="list-disc pl-8">
                    <li><strong>Pascal</strong></li>
                </ul>
            </div>

        </div>
    </div>

</template>


<script>
import FullscreenImage from '../FullscreenImage'

export default {
    name: 'Game',
    props: ['openImage'],
    data() {
        return {
            imageSrc: '',
            imageCaption: '',
            showingImage: false
        }
    },
    components: {
        FullscreenImage
    }
}

</script>
