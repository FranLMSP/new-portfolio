<template>

    <div class="w-full">
        <p>
            &emsp; The Dago's page had many internal issues, so we the developer team remade the
            entire website, both the public website and the administrative interface, where
            you can configure many things like the product images, keywords, descriptions,
            a search engine, etc.
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
                        <li>The company's framework</li>
                    </ul>
                    <li><strong>For the frontend:</strong></li>
                    <ul class="list-disc pl-8">
                        <li>jQuery</li>
                        <li>Materialize</li>
                    </ul>
                </ul>
            </div>

            <div class="w-full md:w-1/3">
                <img
                    @click="openImage('/img/portfolio/dago/1.png', '')"
                    class="cursor-pointer w-full mb-4"
                    src="/img/portfolio/dago/1.png"
                />
            </div>

        </div>
        <div class="flex flex-wrap">
            <img
                @click="openImage('/img/portfolio/dago/2.png', '')"
                class="cursor-pointer md:w-1/3 w-full p-2"
                src="/img/portfolio/dago/2.png"
            />
            <img
                @click="openImage('/img/portfolio/dago/3.png', '')"
                class="cursor-pointer md:w-1/3 w-full p-2"
                src="/img/portfolio/dago/3.png"
            />
            <img
                @click="openImage('/img/portfolio/dago/4.png', '')"
                class="cursor-pointer md:w-1/3 w-full p-2"
                src="/img/portfolio/dago/4.png"
            />
            <img
                @click="openImage('/img/portfolio/dago/5.png', '')"
                class="cursor-pointer md:w-1/3 w-full p-2"
                src="/img/portfolio/dago/5.png"
            />
            <img
                @click="openImage('/img/portfolio/dago/6.png', '')"
                class="cursor-pointer md:w-1/3 w-full p-2"
                src="/img/portfolio/dago/6.png"
            />
            <img
                @click="openImage('/img/portfolio/dago/7.png', '')"
                class="cursor-pointer md:w-1/3 w-full p-2"
                src="/img/portfolio/dago/7.png"
            />
            <img
                @click="openImage('/img/portfolio/dago/8.png', '')"
                class="cursor-pointer md:w-1/3 w-full p-2"
                src="/img/portfolio/dago/8.png"
            />
            <img
                @click="openImage('/img/portfolio/dago/9.png', '')"
                class="cursor-pointer md:w-1/3 w-full p-2"
                src="/img/portfolio/dago/9.png"
            />
        </div>

    </div>

</template>


<script>

export default {
    name: 'Dago',
    props: ['openImage']
}

</script>
