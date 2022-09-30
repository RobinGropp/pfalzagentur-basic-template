<template>
  <div ref="grid_v3_container" class="app-image-grid-v3 w-full mx-auto">
    <div class="mobile xs:hidden">
      <div ref="grid_v3_image" class="img-container w-full flex mb-4 md:mb-8 2xl:mb-12">
        <div class="w-full">
          <AppSlider :slides="imageMobile" />
        </div>
      </div>
      <div ref="grid_v3_text_mobile" class="text-container text-container-mobile text-left text-gray-500 w-full">
        <div v-html="text" />
      </div>
    </div>
    <div class="desktop hidden xs:block">
      <h4 ref="grid_v3_headline" class="text-center mb-4 xl:mb-8">
        {{ headline }}
      </h4>
      <div ref="grid_v3_image" class="img-container w-full flex mb-4 md:mb-8 2xl:mb-12">
        <img class="xs:px-4" :src="image + '?w=1680&auto=compress,format'" alt="">
      </div>
      <div ref="grid_v3_text" class="text-container text-center text-gray-500 w-full">
        <div v-html="text" />
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
    text: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    imageMobile: {
      type: Array,
      required: true
    },
    headline: {
      type: String,
      required: true
    }
  },
  mounted () {
    this.initAnimations()
  },
  methods: {
    initAnimations () {
      gsap.fromTo(
        this.$refs.grid_v3_headline,
        {
          y: '100%',
          opacity: 0
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: Power2.easeInOut,
          scrollTrigger: {
            trigger: this.$refs.grid_v3_container,
            start: 'top 90%',
            toggleActions: 'play complete none reverse',
          },
        },
      )
      gsap.fromTo(
        this.$refs.grid_v3_image,
        {
          y: '2rem',
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.01,
          ease: Power2.easeInOut,
          scrollTrigger: {
            trigger: this.$refs.grid_v3_image,
            start: 'top 90%',
            toggleActions: 'play complete none reverse',
          },
        },
      )
      gsap.fromTo(
        this.$refs.grid_v3_text,
        {
          autoAlpha: 0,
          y: '1rem'
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: Power2.easeInOut,
          stagger: 0.025,
          scrollTrigger: {
            trigger: this.$refs.grid_v3_text,
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
.app-image-grid-v3 {
  @apply md:px-4 w-full md:w-11/12 xl:max-w-screen-xl lg:px-12;
}
.img-container {
  img{
    @screen xl {
      width: 100%;
      height: auto;
      object-fit: cover;
      max-height: 615px;
    }
  }
}
.button_in_ret {
  @apply mx-auto;
  width: 90%;
  max-width: 170px;
}
.text-container {
  @apply text-2xs md:text-3xs lg:text-2xs 2xl:text-sm 3xl:text-base text-gray-500;
  ::v-deep {
    h4 {
      @apply text-3xs;
      font-weight: 400!important;
       letter-spacing: 0.2em;
    }
    a {
      @apply underline;
      &:hover {
        @apply text-blue-400;
      }
    }
  }
}
</style>
