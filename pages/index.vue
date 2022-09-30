<template>
  <div>
    <section class="bg-blue-400 py-24">
      <div class="app--container mb-8 md:mb-24 xl:mb-28 2xl:mb-44">
        <AppImageGridV1
          :text="'asdf'"
          :images="images1"
          :picture-left="images1[0].image"
          :picture-center="images1[1].image"
          :picture-right="images1[2].image"
        />
      </div>
    </section>

    <section class="bg-blue-400 py-24">
      <div class="app--container mb-8 md:mb-24 xl:mb-28 2xl:mb-44">
        <AppImageGridV4
          :images="images1"
          :text="'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'"
          :app-grid-v5="true"
          :picture-left-top="images1[0].image"
          :picture-left-bottom="images1[1].image"
          :picture-right="images1[2].image"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      images1: [
        {
          image: require('~/assets/images/placeholder-image-icon-21.jpg')
        },
        {
          image: require('~/assets/images/placeholder-image-icon-21.jpg')
        },
        {
          image: require('~/assets/images/placeholder-image-icon-21.jpg')
        }
      ]
    }
  }
}
</script>
