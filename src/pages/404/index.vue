<template>
  <div class="main-container">
    <div class="page-container">
      <h1 class="no-found-title">404 Not Found!</h1>
      <p class="no-found-desc">您要找的资源不存在了</p>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { gsap } from "gsap";

export default {
  setup() {
    onMounted(() => {
      // register the effect with GSAP:
      gsap.registerEffect({
        name: "fade",
        effect: (targets, config) => {
          return gsap.to(targets, { duration: config.duration, opacity: 0 });
        },
        defaults: { duration: 2 }, //defaults get applied to any "config" object passed to the effect
        extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
      });

      // // now we can use it like this:
      gsap.effects.fade(".no-found-title");
      gsap.effects.fade(".no-found-desc");
    });
  },
};
</script>

<style lang="less" scoped>
.main-container {
  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: 100px;
  .page-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 500px;
  }
}
</style>
