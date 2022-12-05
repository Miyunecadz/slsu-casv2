import { defineStore } from "pinia";

export const useUserStore = defineStore("authUser", {
  state: () => {
    return {
      user: {},
    };
  },
  actions: {
    logout() {
      this.user = {};
    },
  },
});
