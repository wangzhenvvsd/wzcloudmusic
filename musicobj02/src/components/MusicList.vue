<template>
  <div class="container">
    <div class="scroll">
      <div class="item" v-for="(item, index) in musiclists" :key="index">
        <div style="margin:0 auto">
          <img :src="item.picUrl" alt="" style="width:125px;height:125px;display:block;margin:0 auto;"> 

        <div style="font-size:.1rem;height:2rem;width:3rem;margin:0 auto;white-space:normal;">
          {{ item.name }}
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { getIconlist } from '@/api/index.js';

export default {
  name: "musiclist",
  data() {
    return {
      musiclists: [
        { picUrl: ""},
        { picUrl: "" },
        { picUrl: "" },
        { picUrl: "" },
        { picUrl: "" },
        { picUrl: "" }
      ]
    }
  },
  async mounted() {
    var ks = await getIconlist(6)
    console.log(ks.data.result)
    this.musiclists = ks.data.result
  }
}
</script>
  
<style>
.container {
  width: 100%;
  overflow-x: auto;
}

.scroll {
  white-space: nowrap;
}

.item {
  display: inline-block;
  width: 200px;
  height: 200px;
  margin: 10px;
  /* background-color: gray; */
  /* color: white; */
  text-align: left;
  font-size: 24px;
  
}
</style>
  