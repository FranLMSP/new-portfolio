<template>

    <div class="w-full">

        <div class="flex flex-wrap mb-6">

            <div class="w-full md:w-2/3">
                <p>
                    &emsp; An Android application for the <b>Mister Kombi</b> restaurant.<br>
                    In this app, you can do offline sellings and then upload them when you have
                    internet access. You can also open and close journeys and create new clients offline.
                </p>

                <hr class="m-4">

                <p>Tools used:</p>

                <br>
                <ul class="list-disc pl-8">
                    <li><strong>For the frontend:</strong></li>
                    <ul class="list-disc pl-8">
                        <li>React Native</li>
                        <li>Redux</li>
                    </ul>
                    <li><strong>Backend:</strong></li>
                    <ul class="list-disc pl-8">
                        <li>The Mister Kombi Management system (see the Mister Kombi system portfolio)</li>
                    </ul>
                </ul>
            </div>

            <div class="w-full md:w-1/3">
                <img
                    @click="openImage(require('@/assets/img/portfolio/mkapp/finish_selling.png'), '')"
                    class="cursor-pointer m-auto mb-4"
                    src="@/assets/img/portfolio/mkapp/finish_selling.png"
                />
            </div>

        </div>
        <div class="flex flex-wrap">
            <img
                @click="openImage(require('@/assets/img/portfolio/mkapp/details.png'), '')"
                class="cursor-pointer md:w-1/5 w-full p-2"
                src="@/assets/img/portfolio/mkapp/details.png"
            />
            <img
                @click="openImage(require('@/assets/img/portfolio/mkapp/journeys.png'), '')"
                class="cursor-pointer md:w-1/5 w-full p-2"
                src="@/assets/img/portfolio/mkapp/journeys.png"
            />
            <img
                @click="openImage(require('@/assets/img/portfolio/mkapp/settings.png'), '')"
                class="cursor-pointer md:w-1/5 w-full p-2"
                src="@/assets/img/portfolio/mkapp/settings.png"
            />
            <img
                @click="openImage(require('@/assets/img/portfolio/mkapp/login.png'), '')"
                class="cursor-pointer md:w-1/5 w-full p-2"
                src="@/assets/img/portfolio/mkapp/login.png"
            />
            <img
                @click="openImage(require('@/assets/img/portfolio/mkapp/products.png'), '')"
                class="cursor-pointer md:w-1/5 w-full p-2"
                src="@/assets/img/portfolio/mkapp/products.png"
            />
        </div>

    </div>

</template>


<script>

export default {
    name: 'Mkapp',
    props: ['openImage']
}

</script>
