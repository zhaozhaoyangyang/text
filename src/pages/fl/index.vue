<template>
  <div class="">
    <van-tabs v-model="activeName">
      <van-tab title="歌手" name="a">
        <div class="boss">
          <div class="aa">
              <p>推荐</p>
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
      </van-tab>
      <van-tab title="歌单" name="b"> 123456</van-tab>
      <van-tab title="新碟上架" name="c"> 欧赔【iopi</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
        activeName: 'a',
    };
  },
  computed: {},
  watch: {},

  methods: {},
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.boss{
    width: 140px;
    height: 100%;
    /* background-color: red; */
    margin-top: 10px;
    border-right: 1px solid #f6f;
    background-color: #f9f9f9;


    
}
.a{
    width: 100px;
    height: 135px;
    /* background-color: skyblue; */
    margin-top: 20px;
    margin: auto;
    border-bottom: 1px solid #f6f;
}
.a p{
    padding-top: 40px;
    font-size: 20px;

}
.a li{
    color: black;
    font-size: 10px;
    margin: 5px 0;
    line-height: 20px;
    text-align: center;
}
.aa{
    /* background-color: skyblue; */
    width: 100px;
    height: 135px;
    /* text-align: center; */
    margin: auto;
    border-bottom: 1px solid #f6f;
}
.aa p{
    font-size: 20px;
    padding-top: 50px;
}
.aa li{
    font-size: 10px;
    margin:10px;
    text-align: center;
    padding-top: 5px;
}
.sss{
    padding-bottom: 60px;
}

</style>
