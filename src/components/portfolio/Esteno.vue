<template>

    <div class="w-full">

        <p>
            &emsp; A Management System for the <b>Esteno</b> company.
            In this system, you can report if the employees do something wrong.
            It's a very simple system.
        </p>

        <hr class="m-4">

        <div class="flex flex-wrap mb-6">

            <div class="w-full md:w-1/2">

                <p>Tools used:</p>

                <br>
                <ul class="list-disc pl-8">
                    <li><strong>For the backend:</strong></li>
                    <ul class="list-disc pl-8">
                        <li>Codeigniter</li>
                        <li>Mariadb</li>
                    </ul>
                    <li><strong>For the frontend:</strong></li>
                    <ul class="list-disc pl-8">
                        <li>jQuery</li>
                        <li>Bootstrap</li>
                        <li>Data Tables</li>
                    </ul>
                </ul>
            </div>

            <div class="w-full md:w-1/2">
                <img
                    @click="openImage('/img/portfolio/esteno/1.png', '')"
                    class="cursor-pointer m-auto mb-4"
                    src="/img/portfolio/esteno/1.png"
                />
            </div>

        </div>
        <div class="flex flex-wrap">
            <img
                @click="openImage('/img/portfolio/esteno/2.png', '')"
                class="cursor-pointer md:w-1/3 h-auto w-full p-2"
                src="/img/portfolio/esteno/2.png"
            />
            <img
                @click="openImage('/img/portfolio/esteno/3.png', '')"
                class="cursor-pointer md:w-1/3 h-auto w-full p-2"
                src="/img/portfolio/esteno/3.png"
            />
            <img
                @click="openImage('/img/portfolio/esteno/4.png', '')"
                class="cursor-pointer md:w-1/3 h-auto w-full p-2"
                src="/img/portfolio/esteno/4.png"
            />
        </div>

    </div>

</template>


<script>

export default {
    name: 'Esteno',
    props: ['openImage']
}

</script>
