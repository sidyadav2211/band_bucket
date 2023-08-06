<script>
import Services from '../Services/index'

    export default {
        props:['id'],
        data(){
            return {
                watchDetails:[],
                currentImg:'',
            }
        },
        created(){
            Services.getMenWatchDetails(this.id).then(response=>{
                this.watchDetails = response.data
            }).catch(err=>console.log(err))
        },
        methods:{
        getImg(name){
                if(this.currentImg){
                    return require(`../assets/men/${name.variants[this.currentImg].variantImg}`)
                }
                return require(`../assets/men/${name.img}`) 

            },
            handleColor(index){
                return this.currentImg = index
            }
        }
        
    }
</script>

<template>
    <div v-if="watchDetails" class="flex flex-wrap md:w-full m-4 gap-4 ">
        <!-- <img class="w-4 shadow-2 border-round" src="../assets/men/m_watch1.jpg" alt="image"/> -->
        <img class="w-4 shadow-2 border-round" :src="watchDetails.img ? getImg(watchDetails) : watchDetails.img" :alt="watchDetails.name"/>
        <div class="text-base ">
            <h1>{{ watchDetails.name }}</h1>
             <p v-if="watchDetails.discountPrice" class="text-2xl font-semibold mr-2">₹ {{ watchDetails.discountPrice }}</p>
            <p  :class="{'line-through': watchDetails.discountPrice}" class=" text-2xl font-semibold">₹ {{ watchDetails.price }}</p>
            <div class="justify-content-start">
            <div  v-for="(color,i) in watchDetails.variants" 
                                    @mouseover="handleColor(i)"
                                     :key="i" class="border-none flex flex-row w-2rem h-2rem m-2"
                                       :style="{'background-color':color.variantColor}"></div>
            </div>
        </div>
    </div>
    <div v-else class="surface-ground  px-4 py-5 md:px-6 lg:px-8">
        <span class="flex justify-content-center align-item-center"> Loading....</span>
    </div>
    
</template>

<style lang="scss" scoped>

</style>