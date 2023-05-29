<template>
    <div class="listView"> 
        <!-- 歌单详情 -->
        <list-view-top :playlist="music.playlist"></list-view-top>
        <!-- 歌曲列表 -->
        <play-list :playlist="music.playlist"></play-list>
    </div>
</template>
<script>
import { useRoute } from 'vue-router'
import { onMounted, reactive } from 'vue'
import { getPlaylist } from "@/api/index.js"  
import listViewTop from '../components/ListViewTop.vue'
import playList from '../components/PlayList.vue'
export default {
    name: "listview",
    setup() {
        var route = useRoute()  //当前路由信息对象 等价于&route
        var music =reactive({
            list:[],
            playlist:{
                creator:{},//歌单详情
                tracks:[]//播放列表
            }
        })
        onMounted(async () => {
            const id = route.query.id;//当前歌单的id
            console.log(id);
            var res = await getPlaylist(id);
            console.log(res);
            music.playlist = res.data.playlist
            
        })
        return {music}
    },
    components:{
        listViewTop,
        playList
    }
}
</script>