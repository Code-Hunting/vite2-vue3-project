<template>
  <div class="main-container">
    <div class="page-container">
      <h1 class="no-found-title">{{ pageInfo.title }}</h1>
      <p class="no-found-desc">{{ pageInfo.desc }}</p>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { gsap } from "gsap";

export default {
  setup() {
    const store = useStore();
    onMounted(() => {
      // register the effect with GSAP:
      gsap.registerEffect({
        name: "fade",
        effect: (targets, config) => {
          return gsap.to(targets, { duration: config.duration, opacity: 0 });
        },
        defaults: { duration: 5 }, //defaults get applied to any "config" object passed to the effect
        extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
      });

      // // now we can use it like this:
      gsap.effects.fade(".no-found-title");
      gsap.effects.fade(".no-found-desc");
      setTimeout(() => {
        store.dispatch("other/asyncGetPageInfo");
      }, 1000);
    });
    return {
      // 在 computed 函数中访问 getter
      pageInfo: computed(() => store.getters["other/getPageInfo"]),
    };
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
