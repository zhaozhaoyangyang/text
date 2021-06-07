<template>
  <div class="radio">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <h3>电台个性推荐 <van-icon name="arrow" /></h3>
      <div class="box1">
        <van-grid>
          <section v-for="item in recommendList" :key="item.id">
            <img :src="item.picUrl" alt="" @click="recommendProgram(item.id)" />
            <p>{{ item.rcmdText }}</p>
          </section>
        </van-grid>
      </div>
      <h3>热门电台 <van-icon name="arrow" /></h3>
      <div class="box1">
        <van-grid>
          <section v-for="item in hotList" :key="item.id">
            <img :src="item.picUrl" alt="" @click="hotprogram(item.id)" />
            <p>{{ item.rcmdtext }}</p>
          </section>
        </van-grid>
      </div>
      <h3>24小时节目榜 <van-icon name="arrow" /></h3>
      <div class="box1">
        <van-grid>
          <section v-for="item in programList" :key="item.id">
            <img
              :src="item.program.blurCoverUrl"
              alt=""
              @click="hoursProgram"
            />
            <p>{{ item.program.description }}</p>
          </section>
        </van-grid>
      </div>
      <h3>24小时主播榜 <van-icon name="arrow" /></h3>
      <div class="box1">
        <van-grid>
          <section v-for="item in peopleList" :key="item.id">
            <img :src="item.avatarUrl" alt="" @click="hoursProgram()" />
            <p>{{ item.nickName }}</p>
          </section>
        </van-grid>
      </div>
      <h3>主播新人榜 <van-icon name="arrow" /></h3>
      <div class="box1">
        <van-grid>
          <section v-for="item in newpeopleList" :key="item.id">
            <img :src="item.avatarUrl" alt="" />
            <p>{{ item.nickName }}</p>
          </section>
        </van-grid>
      </div>
      <h3>最热主播榜 <van-icon name="arrow" /></h3>
      <div class="box1">
        <van-grid>
          <section v-for="item in hotpopularList" :key="item.id">
            <img :src="item.avatarUrl" alt="" />
            <p>{{ item.nickName }}</p>
          </section>
        </van-grid>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import {
  dtTuijian,
  reqHot,
  reqTwenty,
  reqPeople,
  reqNewPeople,
  reqHotPopular,
  reqDetail,
} from "../../api/dt";
export default {
  inject: ["reload"],
  components: {},
  data() {
    return {
      recommendList: [],
      hotList: [],
      programList: [],
      peopleList: [],
      newpeopleList: [],
      hotpopularList: [],
      isLoading: false,
      mainSongList: [],
      songId: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    async recommend() {
      const result = await dtTuijian({ limit: 10 });
      // console.log(result.data.data);
      this.recommendList = result.data.data;
    },
    async hot() {
      const result = await reqHot({ limit: 10 });
      // console.log(result.data.djRadios);
      this.hotList = result.data.djRadios;
    },
    async program() {
      const result = await reqTwenty({ limit: 10 });
      // console.log(result.data.data.list);
      this.programList = result.data.data.list;
    },
    async people() {
      const result = await reqPeople({ limit: 10 });
      // console.log(result.data.data.list);
      this.peopleList = result.data.data.list;
    },
    async newpeople() {
      const result = await reqNewPeople({ limit: 10 });
      // console.log(result.data.data.list);
      this.newpeopleList = result.data.data.list;
    },
    async hotpopular() {
      const result = await reqHotPopular({ limit: 10 });
      // console.log(result.data.data.list);
      this.hotpopularList = result.data.data.list;
    },
    // 刷新
    onRefresh() {
      setTimeout(() => {
        // Toast("刷新成功");
        // location.reload();
        this.reload();
        this.isLoading = false;
      }, 1000);
    },
    async recommendProgram(id) {
      const result = await reqDetail({ rid: id });
      // console.log(result.data.programs);
      this.mainSongList = result.data.programs;
      this.songId = [];
      this.mainSongList.forEach((i) => {
        // console.log(i.mainSong.id);
        this.songId.push(i.mainSong.id);
        this.$store.commit("count/radioIdList", this.songId);
        console.log(this.$store.state.count.radioId);
      });
    },
    async hotprogram(id) {
      const result = await reqDetail({ rid: id });
      // console.log(result.data.programs);
      this.mainSongList = result.data.programs;
      this.songId = [];
      this.mainSongList.forEach((i) => {
        // console.log(i.mainSong.id);
        this.songId.push(i.mainSong.id);
        this.$store.commit("count/radioIdList", this.songId);
        console.log(this.$store.state.count.radioId);
      });
    },
    hoursProgram() {
      this.songId = [];
      this.programList.forEach((i) => {
        // console.log(i.program.mainSong.id);
        this.songId.push(i.program.mainSong.id);
        this.$store.commit("count/radioIdList", this.songId);
        console.log(this.$store.state.count.radioId);
      });
    },
  },
  created() {
    this.recommend();
    this.hot();
    this.program();
    this.people();
    this.newpeople();
    this.hotpopular();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.radio {
  padding-bottom: 60px;
}
.van-grid {
  flex-wrap: nowrap;
}
h3 {
  font-size: 20px;
  color: #2c0812;
  padding: 15px 10px 10px;
}
h3 .van-icon {
  font-size: 15px;
}
.box1 {
  width: 100%;
  overflow-x: scroll;
}
.box1::-webkit-scrollbar {
  display: none;
}
img {
  width: 100px;
  height: 100px;
  padding-top: 10px;
  border-radius: 50%;
}
p {
  margin: 0;
  color: #756368;
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
section {
  padding: 0 10px;
  text-align: center;
  position: relative;
}
</style>
