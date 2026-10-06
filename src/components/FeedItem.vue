<template>
  <div class="feed-card">
    <!-- 오른쪽 상단 X 버튼 -->
    <span class="delete-btn">X</span>
    
    <!-- 왼쪽 상단 본문 내용 -->
    <div class="feed-content">{{ feed.content }}</div>
    
    <!-- 오른쪽 하단 작성자 이름 -->
    <div class="feed-user">{{ feed.user.name }}</div>
  </div>
</template>

<script>
export default {
  name: "FeedItem",
  props: {
    feed: {
      type: Object,
      required: true
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
}

.feed-content {
  font-size: 15px;
  font-weight: 500;
  padding-right: 20px; /* X 버튼과 겹치지 않게 여백 */
}

.feed-user {
  text-align: right;
  font-size: 13px;
  color: #333;
}
</style>