<template>

    <div class="w-full">
        <p>Here is a list of game prototypes or minigames I've made for different porpuses.</p>

        <hr class="m-4">

        <div class="flex flex-wrap mb-6">

            <div class="w-full md:w-2/3">
                <h3 class="font-bold text-2xl">2048 Game in Javascript</h3>
                <p class="pl-4 mb-4">
                    A 2048 game game made with Javascript.<br>
                    You can <a style="color: #039be5" target="_blank" href="https://franlmsp.github.io/20480-game/">play 2048</a> here!
                </p>

                <p>Tools used:</p>
                <ul class="list-disc pl-8">
                    <li><strong>Javascript</strong> and <strong>HTML Canvas</strong></li>
                    <li><strong>Object-oriented programming</strong></li>
                </ul>
            </div>

            <div class="w-full md:w-1/3">
                <img class="m-auto h-48" src="/img/portfolio/games/2048.png" />
            </div>

        </div>

        <hr class="m-4">

        <div class="flex flex-wrap">

            <div class="w-full md:w-1/3">
                <img class="m-auto h-48" src="/img/pong.png" />
            </div>

            <div class="w-full md:w-2/3">
                <h3 class="font-bold text-2xl">Pong and Snake in Javascript</h3>
                <p class="pl-4 mb-4">
                    A Pong Game and a very basic Snake game made with Javascript.<br>
                    You can <a style="color: #039be5" target="_blank" href="https://franlmsp.github.io/PongScript/">play Pong</a>
                    and <a style="color: #039be5" target="_blank" href="https://franlmsp.github.io/SnakeScript/">play Snake</a> here!
                    Pong also works on mobile devices!
                </p>
                <p>Tools used:</p>
                <ul class="list-disc pl-8">
                    <li><strong>Javascript</strong> and <strong>HTML Canvas</strong></li>
                    <li><strong>Object-oriented programming</strong></li>
                </ul>
            </div>

        </div>

    </div>

</template>


<script>

export default {
    name: 'Game'
}

</script>
