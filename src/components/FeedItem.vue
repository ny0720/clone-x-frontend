
<template>
  <div class="feed-card">

    <button
      class="delete-btn"
      @click="handleClick(feed)"
    >
      X
    </button>

    <div class="feed-content">
      {{ feed.content }}
    </div>

    <div class="feed-user">
      {{ feed.user.name }}
    </div>

  </div>
</template>

<script>
import { useFeedStore } from '@/store/feed';

export default {
  name: "FeedItem",

  props: {
    feed: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      feedStore: useFeedStore()
    };
  },

  methods: {
    handleClick(feed) {
      this.$confirm({
        message: '정말 삭제하시겠습니까?',

        button: {
          no: '아뇨',
          yes: '네'
        },

        callback: confirm => {
          if (confirm) {
            this.feedStore.removedFeed(feed.id);
          }
        }
      });
    }
  }
};
</script>

<style scoped>
.feed-card {
  position: relative;
  background-color: white;
  color: black;
  border-radius: 12px;
  padding: 15px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.delete-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  background: none;
  border: none;
}

.feed-content {
  font-size: 15px;
  font-weight: 500;
  padding-right: 20px;
}

.feed-user {
  text-align: right;
  font-size: 13px;
  color: #333;
}
</style>
