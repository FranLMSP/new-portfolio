<template>

    <div class="w-full text-left">
        <fullscreen-image
            :src="imageSrc"
            :caption="imageCaption"
            :showing="showingImage"
            @toggle="val => showingImage = val"

        />
        <p>
          Here is a list of Flutter apps I have made for the Aleli company and some other I made for learning.
          Feel free to click on the images!
        </p>

        <hr class="m-4">

        <div class="flex flex-wrap mb-6">

            <div class="w-full md:w-1/2">
                <h3 class="font-bold text-2xl">Mister Kombi app</h3>
                <p class="pl-4 mb-4">
                    This is the same app as the React Native one, but remaded with Flutter and with some optimizations, new features and improvements<br>
                </p>

                <p><strong>Features:</strong></p>
                <ul class="list-disc pl-8">
                    <li>Create sales offline</li>
                    <li>Create clients offline</li>
                    <li>Print tickets</li>
                    <li>Save the location of the client or sale</li>
                    <li>Take a pictures with the camera (in case the sale was not done)</li>
                    <li>Sync the sales done and created clients with the Mister Kombi server</li>
                </ul>
            </div>

            <div class="w-full md:w-1/2">
                <img
                    @click="openImage(require('@/assets/img/portfolio/flutter/mrkombi/1.png'), '')"
                    class="cursor-pointer h-48"
                    style="display: inline-block;"
                    src="@/assets/img/portfolio/flutter/mrkombi/1.png"
                />
                <img
                    @click="openImage(require('@/assets/img/portfolio/flutter/mrkombi/2.png'), '')"
                    class="cursor-pointer h-48"
                    style="display: inline-block;"
                    src="@/assets/img/portfolio/flutter/mrkombi/2.png"
                />
                <img
                    @click="openImage(require('@/assets/img/portfolio/flutter/mrkombi/3.png'), '')"
                    class="cursor-pointer h-48"
                    style="display: inline-block;"
                    src="@/assets/img/portfolio/flutter/mrkombi/3.png"
                />
                <img
                    @click="openImage(require('@/assets/img/portfolio/flutter/mrkombi/4.png'), '')"
                    class="cursor-pointer h-48"
                    style="display: inline-block;"
                    src="@/assets/img/portfolio/flutter/mrkombi/4.png"
                />
                <img
                    @click="openImage(require('@/assets/img/portfolio/flutter/mrkombi/5.png'), '')"
                    class="cursor-pointer h-48"
                    style="display: inline-block;"
                    src="@/assets/img/portfolio/flutter/mrkombi/5.png"
                />
                <img
                    @click="openImage(require('@/assets/img/portfolio/flutter/mrkombi/6.png'), '')"
                    class="cursor-pointer h-48"
                    style="display: inline-block;"
                    src="@/assets/img/portfolio/flutter/mrkombi/6.png"
                />
                <img
                    @click="openImage(require('@/assets/img/portfolio/flutter/mrkombi/7.png'), '')"
                    class="cursor-pointer h-48"
                    style="display: inline-block;"
                    src="@/assets/img/portfolio/flutter/mrkombi/7.png"
                />
                <img
                    @click="openImage(require('@/assets/img/portfolio/flutter/mrkombi/8.png'), '')"
                    class="cursor-pointer h-48"
                    style="display: inline-block;"
                    src="@/assets/img/portfolio/flutter/mrkombi/8.png"
                />
            </div>

        </div>

        <hr class="m-4">

        <div class="flex flex-wrap">

            <div class="w-full md:w-1/2">
                <img
                    @click="openImage(require('@/assets/img/portfolio/flutter/recipes-app/1.png'), '')"
                    class="cursor-pointer h-48"
                    style="display: inline-block;"
                    src="@/assets/img/portfolio/flutter/recipes-app/1.png"
                />
                <img
                    @click="openImage(require('@/assets/img/portfolio/flutter/recipes-app/2.png'), '')"
                    class="cursor-pointer h-48"
                    style="display: inline-block;"
                    src="@/assets/img/portfolio/flutter/recipes-app/2.png"
                />
                <img
                    @click="openImage(require('@/assets/img/portfolio/flutter/recipes-app/3.png'), '')"
                    class="cursor-pointer h-48"
                    style="display: inline-block;"
                    src="@/assets/img/portfolio/flutter/recipes-app/3.png"
                />
                <img
                    @click="openImage(require('@/assets/img/portfolio/flutter/recipes-app/4.png'), '')"
                    class="cursor-pointer h-48"
                    style="display: inline-block;"
                    src="@/assets/img/portfolio/flutter/recipes-app/4.png"
                />
            </div>

            <div class="w-full md:w-1/2">
                <h3 class="font-bold text-2xl">Basic recipes app</h3>
                <p class="pl-4 mb-4">
                    A basic recipes app I made for learning Flutter.<br>
                </p>
                <p><b>Features:</b></p>
                <ul class="list-disc pl-8">
                    <li>List and separate the recipes in categories</li>
                    <li>Add recipes to favorites</li>
                    <li>Filters</li>
                </ul>
                <p><strong>Source code:</strong></p>
                <ul class="list-disc pl-8">
                    <li>
                        Github:
                        <a
                            target="_blank"
                            href="https://github.com/FranLMSP/basic-recipes-app"
                        >
                            https://github.com/FranLMSP/basic-recipes-app
                        </a>
                    </li>
                </ul>
            </div>

        </div>

        <hr class="m-4">

        <div class="flex flex-wrap mb-6">

            <div class="w-full md:w-1/2">
                <h3 class="font-bold text-2xl">Basic expenses app</h3>
                <p class="pl-4 mb-4">
                  Basic expenses app I made for learning.
                </p>

                <p><strong>Features:</strong></p>
                <ul class="list-disc pl-8">
                    <li>Add and remove expenses</li>
                    <li>Sum the expenses per day of week</li>
                    <li>Landscape mode</li>
                </ul>
                <p><strong>Source code:</strong></p>
                <ul class="list-disc pl-8">
                    <li>
                        Github:
                        <a
                            target="_blank"
                            href="https://github.com/FranLMSP/basic-expenses-app"
                        >
                            https://github.com/FranLMSP/basic-expenses-app
                        </a>
                    </li>
                </ul>
            </div>

            <div class="w-full md:w-1/2">
                <img
                    @click="openImage(require('@/assets/img/portfolio/flutter/basic-expenses-app/1.png'), '')"
                    class="cursor-pointer h-48"
                    style="display: inline-block;"
                    src="@/assets/img/portfolio/flutter/basic-expenses-app/1.png"
                />
                <img
                    @click="openImage(require('@/assets/img/portfolio/flutter/basic-expenses-app/2.png'), '')"
                    class="cursor-pointer h-48"
                    style="display: inline-block;"
                    src="@/assets/img/portfolio/flutter/basic-expenses-app/2.png"
                />
                <img
                    @click="openImage(require('@/assets/img/portfolio/flutter/basic-expenses-app/3.png'), '')"
                    class="cursor-pointer h-48"
                    style="display: inline-block;"
                    src="@/assets/img/portfolio/flutter/basic-expenses-app/3.png"
                />
                <img
                    @click="openImage(require('@/assets/img/portfolio/flutter/basic-expenses-app/4.png'), '')"
                    class="cursor-pointer h-48"
                    style="display: inline-block;"
                    src="@/assets/img/portfolio/flutter/basic-expenses-app/4.png"
                />
            </div>

        </div>

        <div class="flex flex-wrap">

            <div class="w-full md:w-1/2">
                <img
                    @click="openImage(require('@/assets/img/portfolio/flutter/chat-app/1.png'), '')"
                    class="cursor-pointer m-auto h-48"
                    src="@/assets/img/portfolio/flutter/chat-app/1.png"
                />
            </div>

            <div class="w-full md:w-1/2">
                <h3 class="font-bold text-2xl">Basic chat app</h3>
                <p class="pl-4 mb-4">
                    A basic chat app I made for learning Flutter and Firebase.<br>
                </p>
                <p><strong>Source code:</strong></p>
                <ul class="list-disc pl-8">
                    <li>
                        Github:
                        <a
                            target="_blank"
                            href="https://github.com/FranLMSP/flutter-firebase-messaging"
                        >
                            https://github.com/FranLMSP/flutter-firebase-messaging
                        </a>
                    </li>
                </ul>
            </div>

        </div>

        <hr class="m-4">

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
