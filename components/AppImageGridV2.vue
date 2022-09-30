<template>
  <div ref="griv_v2_container" class="app--image-grid-v2 w-full flex flex-col lg:flex-row" :class="{'lg:flex-row-reverse': imageRight}">
    <div ref="image_grid_v2" class="w-full xl:w-1/2">
      <img :src="image + '?w=1680&auto=compress,format'" alt="">
    </div>
    <div class="w-full xl:w-1/2 flex relative">
      <div class="mx-auto my-auto flex flex-col">
        <div ref="text_grid_v2" class="text-container" v-html="text" />
        <a ref="link_grid_v2" :href="link" class="mx-auto flex absolute top-0 lg:relative">
          <div class="mx-auto button-grid-v2 hidden xs:inline-block">
            <span class="button">{{ linkTitle }}</span>
          </div>
          <div class="inline-block button-grid-v2 mx-auto xs:hidden">
            <span class="button"> {{ linkTitleMobile }}</span>
          </div>
        </a>
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
    linkTitle: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    imageRight: {
      type: Boolean,
      required: true
    },
    linkTitleMobile: {
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
        this.$refs.text_grid_v2,
        {
          y: '5rem',
          opacity: 0
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: Power2.easeInOut,
          scrollTrigger: {
            trigger: this.$refs.griv_v2_container,
            start: 'top 90%',
            toggleActions: 'play complete none reverse',
          },
        },
      )
      gsap.fromTo(
        this.$refs.link_grid_v2,
        {
          y: '5rem',
          opacity: 0
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: Power2.easeInOut,
          scrollTrigger: {
            trigger: this.$refs.griv_v2_container,
            start: 'top 90%',
            toggleActions: 'play complete none reverse',
          },
        },
      )
      if (this.imageRight) {
        gsap.fromTo(
          this.$refs.image_grid_v2,
          {
            x: '5rem',
            opacity: 0.4
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: Power2.easeInOut,
            scrollTrigger: {
              trigger: this.$refs.griv_v2_container,
              start: 'top 90%',
              toggleActions: 'play complete none reverse',
            },
          },
        )
      } else {
        gsap.fromTo(
          this.$refs.image_grid_v2,
          {
            x: '-10%',
            opacity: 0.4
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: Power2.easeInOut,
            scrollTrigger: {
              trigger: this.$refs.griv_v2_container,
              start: 'top 90%',
              toggleActions: 'play complete none reverse',
            },
          },
        )
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app--image-grid-v2 {
  @screen xl {
    min-height: 50vh;
  }
  @screen 4xl {
    @apply max-w-screen-4xl mx-auto;
  }
    img{
      height: 100%;
      width: 100%;
      max-width: none;
      object-fit: cover;
    }
    a {
      width: 100%
    }
    @screen xs {
      a {
        width: auto;
      }
    }
}

.text-container {
  @apply text-left text-2xs md:text-3xs lg:text-2xs 2xl:text-sm 3xl:text-base mx-auto w-full px-5 pt-8 mb-4 text-gray-500;

  @screen md {
    @apply text-center w-10/12 mx-auto;
  }
  @screen lg {
    @apply pt-0;
  }

  @screen xl {
    @apply mb-8 pt-0;
  }
}

.button-grid-v2 {
  @apply absolute top-0 lg:relative;
  transform: translate(-50%, -50%);
  left: 50vw;
  @screen lg {
  transform: translate(0, 0);
  left: 0;
  }
}

</style>
