<script>
import ListPage from "../components/ListPage.vue"
import Services from '../Services/index'

    export default {
        components:{
            ListPage,
        },
        data() {
            return {
                listData: [],
            }
        },
        created(){
            Services.getMenWatchList().then(response=>
            this.listData = response.data).catch(err=>console.log(err))
        }

        
    }
</script>

<template>
    <!-- class="surface-ground px-4 py-5 md:px-6 lg:px-8" -->
<div>
    <div   v-if="listData && listData.length > 0">
        <ListPage :data="listData" gender="Male"/>
    </div>
    <div v-else class="surface-ground  px-4 py-5 md:px-6 lg:px-8">
        <span class="flex justify-content-center align-item-center"> Loading....</span>
    </div>
    
</div>
</template>

<style lang="scss" scoped>

</style>