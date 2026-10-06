<template>
  <div class="tweet-bar-container">
    <input type="text" class="input-form" placeholder="what's good, 장다미?" />
    <!-- 트위터 아이콘 적용 -->
    <div class="icon-circle">
      <img src="@/assets/search.png" class="twitter-icon" alt="tweet" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TweetBar"
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
  /* 이미지가 흰색 새 모양일 경우 */
  object-fit: contain;
}
</style>