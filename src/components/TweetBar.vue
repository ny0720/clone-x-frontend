<template>
  <div class="tweet-bar-container">

    <input
      type="text"
      class="input-form"
      :placeholder="userStore.placeholder"
      v-model="content"
    />


    <div
      class="icon-circle"
      @click="createFeed"
    >
      <img
        src="@/assets/search.png"
        class="twitter-icon"
        alt="tweet"
      />
    </div>

  </div>
</template>


<script>
import { useUserStore } from '@/store/user';
import { useFeedStore } from '@/store/feed';


export default {

  name: "TweetBar",


  data() {

    return {

      userStore: useUserStore(),

      feedStore: useFeedStore(),

      content: "",

    };

  },


  methods: {

    async createFeed() {

      if(!this.content) {
        return;
      }


      await this.feedStore.addFeed(
        this.content
      );


      this.content = "";

    },

  },

};
</script>


<style scoped>
.tweet-bar-container {
  position: relative;
  width: 100%;
  margin-bottom: 15px;
}

.input-form {
  box-sizing: border-box;
  width: 100%;
  height: 42px;
  border-radius: 20px;
  border: none;
  padding: 10px 50px 10px 15px;
  font-size: 14px;
  color: #333;
  background-color: white;
}

.icon-circle {
  position: absolute;
  right: 2px;
  top: 2px;
  width: 38px;
  height: 38px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.twitter-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
}
</style>