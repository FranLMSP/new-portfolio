<template>

    <div class="modal-image" @click="event => toggle(false, event)" v-show="showing">

      <span @click="toggle(false)" class="close-image">&times;</span>

      <img id="modal-image" :src="src" class="modal-image-content"/>

      <div id="modal-image-caption">{{ caption }}</div>
    </div>

</template>

<script>

export default {
    name: 'FullscreenImage',
    props: ['src', 'caption', 'showing'],
    data() {
        return {
            // Move the element to the body
            originalParentNode: null
        }
    },
    methods: {
        toggle(val, event = null) {
            const tag = event?.target?.tagName
            if(tag && tag.toLowerCase() == 'img') {
                return
            }
            this.$emit('toggle', val)
        }
    },
    mounted() {
        // Move this component to the body tag to make it visible.
        // This needs to be optimized
        if (!this.originalParentNode) {
            this.originalParentNode = this.$el.parentNode
        }
        this.$el.parentNode.removeChild(this.$el)
        document.querySelector('body').prepend(this.$el)

    },
    unmounted() {
        document.querySelector('body .modal-image').remove()
    }
}

</script>
<style>
    #modal-image {
      border-radius: 5px;
      cursor: pointer;
      transition: 0.3s;
    }

    #modal-image:hover {opacity: 0.7;}

    /* The Modal (background) */
    .modal-image {
      position: fixed; /* Stay in place */
      z-index: 999; /* Sit on top */
      padding-top: 100px; /* Location of the box */
      left: 0;
      top: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
    }

    /* Modal Content (Image) */
    .modal-image-content {
      margin: auto;
      display: block;
      max-height: calc(100vh - 200px)
    }

    /* Caption of Modal Image (Image Text) - Same Width as the Image */
    #modal-image-caption {
      margin: auto;
      display: block;
      width: 80%;
      max-width: 700px;
      text-align: center;
      color: #ccc;
      padding: 10px 0;
      height: 150px;
    }

    /* Add Animation - Zoom in the Modal */
    .modal-image-content, #modal-image-caption {
      animation-name: zoom;
      animation-duration: 0.6s;
    }

    @keyframes zoom {
      from {transform:scale(0)}
      to {transform:scale(1)}
    }

    /* The Close Button */
    .close-image {
      position: absolute;
      top: 15px;
      right: 35px;
      color: #f1f1f1;
      font-size: 40px;
      font-weight: bold;
      transition: 0.3s;
    }

    .close-image:hover,
    .close-image:focus {
      color: #bbb;
      text-decoration: none;
      cursor: pointer;
    }

    /* 100% Image Width on Smaller Screens */
    @media only screen and (max-width: 700px){
      modal-image-content {
        width: 100%;
      }
    }

</style>
