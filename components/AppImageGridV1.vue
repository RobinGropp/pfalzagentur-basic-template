<template>
  <div class="app--image-text-grid-v1 w-full px-3 xs:px-0">
    <div class="mobile-view w-full md:hidden">
      <div class="flex flex-col">
        <div class="w-full mb-4">
          <AppSlider :slides="images" />
        </div>
        <div class="w-full text-container" v-html="text" />
      </div>
    </div>
    <div ref="image_container" class="desktop-view w-full hidden md:flex flex-col" :class="{'fullscreen': fullscreen}">
      <div class="img-container w-full flex flex-col mb-4">
        <div class="md:w-full flex flex-row image-wrapper">
          <div class="w-1/2 flex flex-row gap-2">
            <div ref="image1" class="w-5/12 img-left">
              <img :src="pictureLeft" alt="">
            </div>
            <div ref="image2" class="w-7/12 img-center">
              <img :src="pictureCenter" alt="">
            </div>
          </div>
          <div class="w-1/2 flex flex-row">
            <div class="w-5/12" />
            <div ref="image3" class="w-7/12 img-right">
              <img :src="pictureRight" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-row text-wrapper">
        <div class="w-6/12 col-1" />
        <div class="w-6/12 col-2 flex flex-col">
          <div ref="text_container" class="w-full text-container" v-html="text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap, Power2 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  props: {
    images: {
      type: Array,
      required: true
    },
    pictureLeft: {
      required: true,
      type: String
    },
    pictureCenter: {
      required: true,
      type: String
    },
    pictureRight: {
      required: true,
      type: String
    },
    text: {
      type: String,
      required: false,
      default: ''
    },
    fullscreen: {
      type: Boolean,
      require: false,
      default: false
    }
  },
  mounted () {
    this.initAnimations()
  },
  methods: {
    initAnimations () {
      gsap.fromTo(
        this.$refs.image1,
        {
          x: '-5rem',
          opacity: 0
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: Power2.easeInOut,
          scrollTrigger: {
            trigger: this.$refs.image_container,
            start: 'top 90%',
            toggleActions: 'play complete none reverse',
          },
        },
      )

      gsap.fromTo(
        this.$refs.image2,
        {
          y: '-5rem',
          opacity: 0
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: Power2.easeInOut,
          scrollTrigger: {
            trigger: this.$refs.image_container,
            start: 'top 90%',
            toggleActions: 'play complete none reverse',
          }
        }
      )

      gsap.fromTo(
        this.$refs.image3,
        {
          x: '5rem',
          opacity: 0
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: Power2.easeInOut,
          scrollTrigger: {
            trigger: this.$refs.image_container,
            start: 'top 90%',
            toggleActions: 'play complete none reverse',
          },
        },
      )
      gsap.fromTo(
        this.$refs.text_container,
        {
          autoAlpha: 0,
          x: '2rem'
        },
        {
          autoAlpha: 1,
          x: 0,
          duration: 1.5,
          ease: Power2.easeInOut,
          stagger: 0.025,
          scrollTrigger: {
            trigger: this.$refs.image_container,
            start: 'top 85%',
            toggleActions: 'play complete none reverse',
          }
        },
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.img-container {
  @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
    min-height: 25vh;
  }
}

.img-left {
  img {
    @apply w-full;
    object-fit: cover;
  }
}

.img-center {
  height: 100%;
  max-height: 600px;

  img {
    @apply w-full;
    height: inherit;
    max-height: inherit;
    object-fit: cover;
  }

}

.img-right {
  height: 100%;

  img {
    max-height: 45%;
    @apply w-full;
    object-fit: cover;
  }
}
.image-wrapper {
  @apply xl:w-10/12;
}
.text-wrapper {
  .col-1 {
    @apply xl:w-5/12;

  }
  .col-2 {
    @apply xl:w-7/12;
  }
}
.fullscreen {
.image-wrapper {
  @apply xl:w-full;
}
.text-wrapper {
  .col-1 {
    @apply xl:w-6/12;

  }
  .col-2 {
    @apply xl:w-6/12;
  }
}
}
.text-container {
  @apply text-2xs md:text-3xs lg:text-2xs 2xl:text-sm 3xl:text-base xl:ml-2 text-gray-500;
  @screen 3xl {
    @apply w-10/12 mr-auto ml-4;
  }
}

</style>
