<template>

    <div class="w-full">
        <p>
            &emsp;This project is a small project I did for learning SPA with Laravel and Vue.js.
            It consist in a simple form where you can add, watch, list and edit your recipes and
            see other people's recipes.
        </p>

        <hr class="m-4">

        <div class="flex flex-wrap mb-6">

            <div class="w-full md:w-2/3">
                <p>Tools used:</p>
                <br>
                <ul class="list-disc pl-8">
                    <li><strong>For the backend:</strong></li>
                    <ul class="list-disc pl-8">
                        <li>PHP</li>
                        <li>Laravel Framework</li>
                    </ul>
                    <li><strong>For the frontend:</strong></li>
                    <ul class="list-disc pl-8">
                        <li>Vue.js</li>
                        <li>Laravel Mix (Webpack)</li>
                    </ul>
                    <li><strong>Versioning:</strong></li>
                    <ul class="list-disc pl-8">
                        <li>Git (with the git-flow methodology)</li>
                        <li>Gitlab</li>
                    </ul>
                </ul>
                <p>Source code:</p>
                <ul class="list-disc pl-8">
                    <li>
                      <a style="color: #039be5" href="https://github.com/FranLMSP/recipe-box">
                        https://github.com/FranLMSP/recipe-box
                      </a>
                    </li>
                </ul>
            </div>

            <div class="w-full md:w-1/3">
                <img
                    @click="openImage(require('@/assets/img/portfolio/recipe-box/arepa.png'), '')"
                    class="cursor-pointer w-full mb-4"
                    src="@/assets/img/portfolio/recipe-box/arepa.png"
                />
            </div>

        </div>
        <div class="flex flex-wrap">
            <img
                @click="openImage(require('@/assets/img/portfolio/recipe-box/form.png'), '')"
                class="cursor-pointer md:w-1/3 w-full p-2"
                src="@/assets/img/portfolio/recipe-box/form.png"
            />
            <img
                @click="openImage(require('@/assets/img/portfolio/recipe-box/list.png'), '')"
                class="cursor-pointer md:w-1/3 w-full p-2"
                src="@/assets/img/portfolio/recipe-box/list.png"
            />
        </div>

    </div>

</template>


<script>

export default {
    name: 'RecipeBox',
    props: ['openImage']
}

</script>
