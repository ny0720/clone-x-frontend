<template>
  <div class="feed-list-container">

    <div v-if="feedStore.feedData.length > 0">

      <FeedItem
        v-for="feed in feedStore.feedData"
        :key="feed.id"
        :feed="feed"
      />

    </div>


    <div v-else>
      피드가 없습니다.
    </div>


  </div>
</template>


<script>
import FeedItem from "./FeedItem.vue";
import { useFeedStore } from "@/store/feed";


export default {

  name: "FeedList",


  components: {

    FeedItem

  },


  data() {

    return {

      feedStore: useFeedStore()

    };

  },


  async mounted() {

    await this.feedStore.getFeedData();

  }

};

</script>


<style scoped>

.feed-list-container {

  width: 320px;

  height: 60vh;

  overflow-y: auto;

  padding: 10px;

  box-sizing: border-box;

  background-color: black;

  color: white;

}


.feed-list-container > div:first-child {

  display: flex;

  flex-direction: column;

  gap: 12px;

}


.feed-list-container::-webkit-scrollbar {

  display: none;

}

</style>