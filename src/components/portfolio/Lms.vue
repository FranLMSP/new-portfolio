<template>

    <div class="w-full">
        <p>
            &emsp;This project is a management system for the books of a library in a Highschool,
            located at <i>Los Teques, Venezuela</i>. This system has some features like books existence,
            transaction history, and the information of the students and their parents, to make it more
            easy to contact the parents just in case something happens.
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
                        <li>Laravel Framework - version 5.6</li>
                        <li>MariaDB database</li>
                        <li>Docker</li>
                        <li>Test Driven Development</li>
                    </ul>
                    <li><strong>For the frontend:</strong></li>
                    <ul class="list-disc pl-8">
                        <li>Vue.js</li>
                        <li>Materialize</li>
                        <li>Highcharts</li>
                        <li>Laravel Mix (Webpack)</li>
                    </ul>
                    <li><strong>Versioning:</strong></li>
                    <ul class="list-disc pl-8">
                        <li>Git (with the git-flow methodology)</li>
                        <li>Gitlab</li>
                    </ul>
                </ul>
            </div>

            <div class="w-full md:w-1/3">
                <img class="w-full mb-4" src="/img/portfolio/lms/1.png" />
                <img class="w-full" src="/img/portfolio/lms/2.png" />
            </div>

        </div>
        <div class="flex flex-wrap">
            <img class="md:w-1/2 w-full p-2" src="/img/portfolio/lms/3.png" />
            <img class="md:w-1/2 w-full p-2" src="/img/portfolio/lms/4.png" />
        </div>

    </div>

</template>


<script>

export default {
    name: 'Lms'
}

</script>
