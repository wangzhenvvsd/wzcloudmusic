<template>
    <div>
        这里是listview
    </div>
</template>
<script>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { getPlaylist } from "@/api/index.js"  
export default {
    name: "listview",
    setup() {
        var route = useRoute()  //当前路由信息对象 等价于&route
        onMounted(async () => {
            const id = route.query.id;
            console.log(id);
            var res = await getPlaylist(id);
            console.log(res);
        })
    }
}
</script>