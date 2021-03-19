export default [
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@src/pages/404/index.vue"),
  },
];
