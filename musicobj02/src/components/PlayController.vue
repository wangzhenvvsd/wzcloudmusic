<template>
    <div>
        <div class="playController">
            <div class="left">
                <img :src="playlist[playCurrentIndex].al" alt="">
                <div class="content">
                    <div>{{ playlist[playCurrentIndex].name }}</div>
                    <div>横划可切换上下首</div>
                </div>
            </div>
            <div class="right">
                <svg class="icon" aria-hidden="true" @click="kai" v-if="playnup">
                    <use xlink:href="#icon-bofang1"></use>
                </svg>
                <svg class="icon" aria-hidden="true" @click="ting" v-else="">
                    <use xlink:href="#icon-iconstop"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-liebiao1"></use>
                </svg>
            </div>
        </div>
        <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"></audio>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: "playcontroller",
    data() {
        return {
            playnup:true
        }
    },
    computed:{
        ...mapState(["playlist","playCurrentIndex"])  //获取正在播放曲列表，以及正在播放歌曲下标
    },
    methods:{
        kai(){
            //this.$refs.audio 获取audio标签
            this.$refs.audio.play()
            this.playnup = false
        },
        ting(){
            this.$refs.audio.pause()
            this.playnup = true
        }
    }
};
</script>

<style lang="less">
.playController {
    background: #fff;
    width: 7.5rem;
    height: 1.2rem;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ccc;

    .left {
        display: flex;
        padding: 0 0.2rem;

        img {
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 0.4rem;
        }

        .content {
            padding: 0 0.2rem;

            .tips {
                font-size: 0.2rem;
                color: #999;
            }
        }
    }

    .right {
        .icon {
            width: 0.4rem;
            height: 0.4rem;
            margin: 0 0.2rem;
        }
    }
}
</style>
