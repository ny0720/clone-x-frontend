import { defineStore } from "pinia";
import { authApi } from "@/api/axios";


export const useFeedStore = defineStore("feedStore", {

  state: () => ({
    feedData: [],
  }),


  getters: {

    getFeedCount: (state) =>
      state.feedData.length,

  },


  actions: {


    async getFeedData() {

      const response =
        await authApi.get("/feed");

      this.feedData =
        response.data;

    },


    async addFeed(content) {

      const response =
        await authApi.post(
          "/feed",
          {
            content,
          }
        );


      this.feedData.unshift(
        response.data
      );

    },


    async removedFeed(feedId) {

      await authApi.delete(
        `/feed/${feedId}`
      );


      this.feedData =
        this.feedData.filter(
          feed => feed.id !== feedId
        );

    },


  },

});