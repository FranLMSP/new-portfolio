<template>

  <div class="max-w-sm w-full max-w-full lg:flex">
    <div class="w-full border-r lg:pl-10 border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <h2 class="text-gray-900 font-bold text-5xl mb-2">My knowledge 🧠</h2>
        <p>
            &emsp; In this page I have a list of the languages, frameworks, libraries or concepts I have some experience with.
            This could be a bit dated over the time, because of course, if you don't partice something every day you are going to
            eventualy get rusty, but nothing that can't be solved with some handwarming 😁
        </p>
        <hr class="m-10">

        <div class="grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-2 grid-rows-4 gap-4">
            <div class="grid grid-cols-2 grid-rows-1 mb-4">
                <div class="lg:ml-0 ml-16 lg:text-center">
                    <h4 class="text-xl mb-4">Backend</h4>
                    <p>
                        <svg class="ml-4 lg:m-auto" style="display: block;" width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"/></svg>
                    </p>
                </div>

                <div>
                    <ul class="list-disc">
                        <li><b>Linux</b></li>
                        <li><b>Docker</b></li>
                        <li><b>Relational databases (SQL)</b></li>
                        <ul class="list-disc pl-8">
                            <li>MySQL or Mariadb</li>
                            <li>PostgreSQL</li>
                        </ul>
                        <li><b>Non-relational databases (NoSQL)</b> (very low experience with this one)</li>
                        <ul class="list-disc pl-8">
                            <li>MongoDB</li>
                            <li>Firebase</li>
                        </ul>
                        <li><b>PHP</b></li>
                        <ul class="list-disc pl-8">
                            <li>Codeigniter</li>
                            <li>Laravel</li>
                            <ul class="list-disc pl-8">
                                <li>Test Driven Development</li>
                            </ul>
                        </ul>
                        <li><b>Node.js</b></li>
                        <ul class="list-disc pl-8">
                            <li>Sails.js</li>
                            <li>Node.js</li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div class="grid grid-cols-2 grid-rows-1 mb-4">
                <div class="lg:ml-0 ml-16 lg:text-center">
                    <h4 class="text-xl mb-4">Frontend</h4>
                    <p>
                        <svg class="ml-4 lg:m-auto" style="display: block;" width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"/></svg>
                    </p>
                </div>

                <div>
                    <ul class="list-disc">
                        <li><b>HTML</b></li>
                        <li><b>Javascript</b></li>
                        <ul class="list-disc pl-8">
                            <li>EcmaScript6</li>
                            <li>Vue.js</li>
                            <li>React.js (+ React Native)</li>
                            <li>HighCharts</li>
                            <li>jQuery</li>
                            <li>Canvas</li>
                        </ul>
                        <li><b>CSS</b></li>
                        <ul class="list-disc pl-8">
                            <li>Bootstrap</li>
                            <li>Materialize</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div class="grid grid-cols-2 grid-rows-1 mb-4">
                <div class="lg:m-0 ml-20 lg:text-center">
                    <h4 class="text-xl mb-4">Misc</h4>
                    <p>
                        <svg class="lg:m-auto" style="display: block;" width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"/></svg>
                    </p>
                </div>

                <div>
                    <ul class="list-disc">
                        <li><b>Spanish and English</b> (yes, those are also languages 😜)</li>
                        <li><b>C++</b></li>
                        <ul class="list-disc pl-8">
                            <li>SDL Library</li>
                        </ul>
                        <li><b>Bash commands / SSH</b></li>
                        <ul class="list-disc pl-8">
                            <li>Linux commands</li>
                            <li>Apache</li>
                            <li>Nginx (not much experience with this)</li>
                            <li>VIM Text Editor</li>
                        </ul>
                        <li><b>Python</b></li>
                        <ul class="list-disc pl-8">
                            <li>Basic web-scrapping</li>
                            <li>Very basic Numpy, Pandas and Matplotlib</li>
                            <li>Jupyter Notebooks</li>
                            <li>Pygame</li>
                        </ul>
                        <li><b>Regular expresions</b></li>
                        <li><b>Object-oriented programming</b></li>
                        <li><b>Recursion</b></li>
                        <li><b>Pointers</b></li>
                        <li><b>Model-Controller-View</b></li>
                        <li><b>Pascal and Basic</b></li>
                    </ul>
                </div>
            </div>
            <div class="grid grid-cols-2 grid-rows-1">
                <div class="lg:m-0 ml-20 lg:text-center">
                    <h4 class="text-xl mb-4">Git</h4>
                    <p>
                        <svg class="lg:m-auto" style="display: block;" width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"/></svg>
                    </p>
                </div>

                <div>
                    <ul class="list-disc">
                        <li><b>Git commands and Git-flow</b></li>
                        <li><b>Gitlab</b></li>
                        <li><b>Github</b></li>
                        <li><b>Bitbucket</b></li>
                    </ul>
                </div>
            </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Knowledge',
}

</script>
