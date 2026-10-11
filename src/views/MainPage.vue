<template>
  <div class="main-container">

    <div class="title-container">

      <h2>Home</h2>

      <div>
        {{ userStore.getUserName }}님

        <button @click="logout">
          로그아웃
        </button>
      </div>

    </div>


    <TweetBar />

    <FeedList />

  </div>
</template>


<script>

import TweetBar from '@/components/TweetBar.vue';
import FeedList from '@/components/FeedList.vue';
import { useUserStore } from '@/store/user';


export default {

  name: "MainPage",


  components: {

    TweetBar,

    FeedList

  },


  data() {

    return {

      userStore: useUserStore()

    };

  },


  methods: {

    logout() {

      this.userStore.logout();

      this.$router.push("/login");

    },

  },

};

</script>


<style scoped>

.main-container {

  width: 320px;

}


.title-container {

  width: 320px;

  display: flex;

  justify-content: space-between;

  align-items: center;

  color: white;

  margin-bottom: 15px;

}


button {

  margin-left: 10px;

}

</style>