<template>

    <div class="w-full text-left">
        <p>
            &emsp; A small project made with the MERNG stack (Mongodb, React, Node, GraphQL) for practice
            and learning purposes following tutorials.
        </p>

        <hr class="m-4">

        <div class="flex flex-wrap mb-6">

            <div class="w-full md:w-2/3">
                <p>Tools used:</p>
                <br>
                <ul class="list-disc pl-8">
                    <li><strong>For the backend:</strong></li>
                    <ul class="list-disc pl-8">
                        <li>Node.js</li>
                        <li>MongoDB</li>
                        <li>GraphQL</li>
                    </ul>
                    <li><strong>For the frontend:</strong></li>
                    <ul class="list-disc pl-8">
                        <li>React.js</li>
                        <li>React hooks</li>
                        <li>Custom hooks</li>
                        <li>React router</li>
                        <li>Semantic UI React</li>
                    </ul>
                    <li><strong>Source code:</strong></li>
                    <ul class="list-disc pl-8">
                        <li>
                          Frontend:
                          <a style="color: #039be5" href="https://github.com/FranLMSP/merng-web">
                            https://github.com/FranLMSP/merng-web
                          </a>
                        </li>
                        <li>
                          Backend:
                          <a style="color: #039be5" href="https://github.com/FranLMSP/merng-server">
                            https://github.com/FranLMSP/merng-server
                          </a>
                        </li>
                    </ul>
                </ul>
            </div>

            <div class="w-full md:w-1/3">
                <img
                    @click="openImage(require('@/assets/img/portfolio/merng/1.png'), '')"
                    class="cursor-pointer w-full mb-4"
                    src="@/assets/img/portfolio/merng/1.png"
                />
            </div>

        </div>
        <div class="flex flex-wrap">
            <img
                @click="openImage(require('@/assets/img/portfolio/merng/2.png'), '')"
                class="cursor-pointer md:w-1/3 w-full p-2"
                src="@/assets/img/portfolio/merng/2.png"
            />
            <img
                @click="openImage(require('@/assets/img/portfolio/merng/3.png'), '')"
                class="cursor-pointer md:w-1/3 w-full p-2"
                src="@/assets/img/portfolio/merng/3.png"
            />
            <img
                @click="openImage(require('@/assets/img/portfolio/merng/4.png'), '')"
                class="cursor-pointer md:w-1/3 w-full p-2"
                src="@/assets/img/portfolio/merng/4.png"
            />
        </div>

    </div>

</template>


<script>

export default {
    name: 'Merng',
    props: ['openImage']
}

</script>
