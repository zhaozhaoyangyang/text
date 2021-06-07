<template>
  <div class="">
    <van-tabs v-model="activeName">
      <van-tab title="歌手" name="a">
        <div class="boss">
          <div class="a">
            <p class="b">推荐</p>
            <ul>
              <li>推荐歌手</li>
              <li>入驻歌手</li>
            </ul>
          </div>
          <div class="a">
            <p>华语</p>
            <ul>
              <li>华语男歌手</li>
              <li>华语女歌手</li>
              <li>华语组合乐队</li>
            </ul>
          </div>
          <div class="a">
            <p>欧美</p>
            <ul>
              <li>欧美男歌手</li>
              <li>欧美女歌手</li>
              <li>欧美组合乐队</li>
            </ul>
          </div>
          <div class="a">
            <p>日本</p>
            <ul>
              <li>日本男歌手</li>
              <li>日本女歌手</li>
              <li>日本组合乐队</li>
            </ul>
          </div>
          <div class="a">
            <p>韩国</p>
            <ul>
              <li>韩国男歌手</li>
              <li>韩国女歌手</li>
              <li>韩国组合乐队</li>
            </ul>
          </div>
          <div class="a sss">
            <p>其他</p>
            <ul>
              <li>其他男歌手</li>
              <li>其他女歌手</li>
              <li>其他组合乐队</li>
            </ul>
          </div>
        </div>
        <div class="right">
          <div class="right-top">
            <span class="s1">入驻歌手</span>
            <span class="s2">更多></span>
          </div>

         <!-- 歌手列表 -->
         <div class="sl">
         <div class="singList" v-for="(item) in arr.slice(0,20)" :key="item.id">
             <img :src="item.img1v1Url" alt="" @click="btn(item.id)">
             <p>{{item.name}}</p>
         </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="歌单" name="b"> 123456</van-tab>
      <van-tab title="新碟上架" name="c"> 欧赔【iopi</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import {getSinger,reqsings} from '../../api/fl'
export default {
  components: {},
  data() {
    return {
      activeName: "a",
      arr:[]
    };
  },
  computed: {},
  watch: {},

  methods: {
    //歌手列表
     async getsing(){
         const result = await getSinger()
         console.log(result);
         this.arr = result.data.artists
        //  console.log(this.arr);
      },
      //歌手单曲
     async btn(id){
       console.log(id);
        const result = await reqsings(id)
        console.log(result);
        this.$router.push('/singer')
      }
  },
  created() {
      this.getsing()
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.boss {
  width: 140px;
  height: 100%;
  border-right: 1px solid #f6f;
  background-color: #f9f9f9;
  float: left;
}
ul {
  margin-top: 5px;
}
.a {
  width: 100px;
  height: 135px;
  margin-top: 20px;
  margin: auto;
  border-bottom: 1px solid #f6f;
}
.a p {
  padding-top: 40px;
  font-size: 20px;
}
.a li {
  color: black;
  font-size: 10px;
  margin: 5px 0;
  line-height: 20px;
  text-align: center;
}
.sss {
  padding-bottom: 60px;
}
.right {
  float: left;
  width: 234px;
  margin-top: 10px;
  text-align: center;
  /* background-color: springgreen; */
}
.right-top {
  width: 200px;
  /* background-color: red; */
  height: 55px;
  margin: auto;
  line-height: 60px;
  border-bottom: 3px solid black;
}
.right-top .s1 {
  float: left;
  font-size: 15px;
}
.right-top .s2 {
  font-size: 10px;
  float: right;
}
.singList  img{
    width: 90px;
    height: 90px;
}
.singList p{
  font-size: 5px;
}

.singLisy{
  margin: 10px;
}
.sl{
  width: 200px;
  /* background: skyblue; */
  margin: 0  auto 10px;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-around;
}
</style>
