<template>
    <div class="feed-list-container">
    <!-- 1. 헤더 영역 (flex로 양끝 정렬) -->
    <div class="header-container">
      <h1 class="title">Home</h1>
      <span class="user-name">장다미님</span>
    </div>
    <TweetBar />
    <div v-if="initFeedData.length > 0" class="feed-wrapper">
      <FeedItem v-for="feed in initFeedData" :key="feed.id" :feed="feed" />
    </div>
    <div v-else class="empty">
      <div>피드가 없습니다.</div>
    </div>
  </div>
</template>

<script>
import FeedItem from "./FeedItem.vue"
import TweetBar from "./TweetBar.vue";

const testData = [
    {
        id: 11,
        content: "코딩은 재밌어!",
        user: {
            id: 12,
            name: "테스터"
        }
    },
    {
        id: 10,
        content: "JS 디버깅 중…",
        user: {
            id: 12,
            name: "테스터"
        }
    },
    {
        id: 9,
        content: "커피 한 잔의 여유...",
        user: {
            id: 13,
            name: "다미장"
        }
    },
    {
        id: 6,
        content: "주말에 드라마 몰아보기",
        user: {
            id: 13,
            name: "다미장"
        }
    },
    {
        id: 5,
        content: "우리 집 강아지 너무 귀여워",
        user: {
            id: 13,
            name: "다미장"
        }
    },
    {
        id: 4,
        content: "2025년에는 꼭 운동한다!",
        user: {
            id: 11,
            name: "user"
        }
    },
    {
        id: 3,
        content: "디버깅만 몇 시간째…",
        user: {
            id: 11,
            name: "user"
        }
    },
    {
        id: 2,
        content: "아침 커피로 하루 시작",
        user: {
            id: 11,
            name: "user"
        }
    },
    {
        id: 1,
        content: "오늘도 멋진 하루 되세요!",
        user: {
            id: 11,
            name: "user"
        }
    }
]
export default {
    name: "FeedList",
    data() {
      return {
        initFeedData: []
      }
    },
    components: { 
        FeedItem,
    TweetBar 
},
    created() {
      this.initFeedData = testData
    }
}
</script>

<style scoped>
/* 전체 컨테이너: 너비를 지정하고 검은 배경 지정 */
.feed-list-container {
  width: 320px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 10px;
  box-sizing: border-box;
  background-color: black;
  color: white;
}

/* 스크롤바 숨기기 (선택사항: 목표 이미지처럼 깔끔하게 보이려면) */
.feed-list-container::-webkit-scrollbar {
  display: none;
}

/* 헤더: 한 줄 양끝 정렬 */
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.title {
  font-size: 28px;
  font-weight: bold;
  margin: 0;
}

.user-name {
  font-size: 15px;
  font-weight: bold;
}

/* 카드 간격 지정 */
.feed-wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.empty {
  text-align: center;
  padding: 20px;
}
</style>