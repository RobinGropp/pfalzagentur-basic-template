<template>
  <div ref="grid_v4_container" class="app--image-grid-v4 w-full mx-auto" :class="{'app-grid-v5': appGridV5 }">
    <div class="mobile-container w-full md:hidden">
      <div class="flex flex-col">
        <div class="w-full mb-4 h-4/12">
          <AppSlider :slides="images" />
        </div>
        <div class="w-full text-container" v-html="text" />
      </div>
    </div>
    <div class="desktop-container w-full h-full flex-row gap-4 hidden md:flex xl:gap-0">
      <div class="w-full md:w-1/2 flex flex-col gap-4 xl:gap-6">
        <div ref="image1" class="col-left-top md:ml-auto">
          <img :src="pictureLeftTop" alt="">
        </div>
        <div v-if="pictureLeftBottom !== null" ref="image2" class="col-left-bottom md:ml-auto">
          <img :src="pictureLeftBottom" alt="">
        </div>
      </div>
      <div class="w-full md:w-1/2">
        <div class="col-right w-full h-full ml-auto flex flex-col">
          <div ref="grid_v4_text" class="text-container mr-auto">
            <div v-html="text" />
          </div>
          <div ref="image3" class="col-right-bottom">
            <img :src="pictureRight + '?w=1680&auto=compress,format'" alt="">
          </div>
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
    text: {
      type: String,
      required: false,
      default: ''
    },
    images: {
      type: Array,
      required: true
    },
    pictureLeftTop: {
      required: true,
      type: String
    },
    pictureLeftBottom: {
      required: false,
      default: null,
      type: String
    },
    pictureRight: {
      required: true,
      type: String
    },
    appGridV5: {
      type: Boolean,
      required: false,
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
            trigger: this.$refs.grid_v4_container,
            start: 'top 90%',
            toggleActions: 'play complete none reverse',
          },
        },
      )
      if (this.pictureLeftBottom !== null) {
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
              trigger: this.$refs.grid_v4_container,
              start: 'top 90%',
              toggleActions: 'play complete none reverse',
            },
          },
        )
      }
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
            trigger: this.$refs.grid_v4_container,
            start: 'top 90%',
            toggleActions: 'play complete none reverse',
          },
        },
      )
      gsap.fromTo(
        this.$refs.grid_v4_text,
        {
          opacity: 0,
          y: '5rem'
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: Power2.easeInOut,
          scrollTrigger: {
            trigger: this.$refs.grid_v4_container,
            start: 'top 90%',
            toggleActions: 'play complete none reverse',
          },
        },
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.app--image-grid-v4 {
  @screen xl {
    @apply max-w-screen-2xl;
  }
  &.app-grid-v5 {
    .text-container {
      @apply md:text-3xs xl:text-xs 2xl:text-base py-0 text-gray-500;
        margin-bottom: auto;
        margin-top: 0;
        padding-bottom: 10%;

        @screen xs {
          max-width: 90%;
        }

        @screen lg {
          @apply mb-auto;
        }
    }
    .col-left-top {
      margin-bottom: 20%;
    }
    .col-left-bottom {
      @apply hidden;
    }
    .col-right-bottom {
        padding-bottom: 0%;
    }
  }
}

.col-right-bottom,
.text-container {
  @screen xl {
    height: 50%;
  }
}

.col-left-top {
  @apply ml-auto;
  max-width: 92%;
  width: 100%;
  z-index: 100;
  @screen md {
    height: 100%;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.col-left-bottom {
  @screen md {
    height: 25%;
    width: 100%;
    max-width: 75%;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.desktop-container {
  max-height: 1400px;
  height: auto;
}

.col-right {
  @screen xl {
    max-width: 80%;
  }
}

.text-container {
  @apply h-auto text-2xs md:text-3xs lg:text-2xs 2xl:text-sm 3xl:text-base;
  padding-bottom: 15%;

  @screen md {
    padding-bottom: 30%;
    max-width: 90%;
    @apply mb-auto;
  }

  @screen xl {
    padding-bottom: 0;
    max-width: 65%;
    @apply mt-auto;
  }

  @screen 3xl {
    max-width: 400px;
  }
}

.col-right-bottom {
  padding-bottom: 25%;
  @screen md {
    width: 100%;
    height: auto;
    max-height: 47%;
    max-width: 90.31%;
  }

  @screen xl {
    padding-bottom: 15%;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>
