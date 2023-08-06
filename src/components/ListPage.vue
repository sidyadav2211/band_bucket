<script>
// import { computed } from 'vue';

    export default {
        props:{
        data:{
            type: Array,
            required: true,
        },
        gender:{
            type:String,
        }
    },
    data(){
        return {
            img:null,
            currentId:'',
            
        }
    },
    // mounted(){
    //     if(this.props.data && this.props.data != undefined){
    //         this.watchData = this.props.data;
    //     }
    // }
    // const imageData = computed(()=>{
    //     if
    // }),
  
  
    methods:{
        getImg(name){
                if(this.img){
                    const dataImg = name.id === this.currentId;
                    if(dataImg === true){
                        return require( `../assets/men/${name.variants[this.img].variantImg}`) 
                    }else{
                        return require( `../assets/men/${name.img}`) 
                    }
                }
                return require( `../assets/men/${name.img}`) 

            },
        
        getSeverity(status){
            switch(status){
                case "INSTOCK":
                    return 'success';
                case 'LOWSTOCK':
                    return 'warning';
                case 'OUTOFSTOCK':
                    return 'danger';
                default:
                    return null;
            }
        },
        handleColor(item,id){
            this.currentId = id;
           return  this.img =  item;
    },
    }
}
</script>

<template>

    <div class="card">
        <PDataView :value="data" layout="grid"  >
        <template #grid="slotProps">    
                <div class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                    <div class="p-4 border-1 surface-border surface-card border-round cursor-pointer" >
                        <Router-Link class="no-underline text-gray-900" :to="{name:'MensWatchDetail',params:{ id: slotProps.data.id}}">

                        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                            <div class="flex align-items-center gap-2">
                                <!-- <i class="pi pi-tag"></i> -->

                                <span class="font-semibold text-base">{{ slotProps.data.name }}</span>
                            </div>
                            <PTag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)"></PTag>
                        </div>
                        <div class="flex flex-column align-items-center gap-3 py-5">
                            <img class="w-9 shadow-2 border-round" :src="getImg(slotProps.data)"  :alt="slotProps.data.name" />
                            <div class="flex  flex-wrap  md:justify-content-between justify-content-center">
                                    <div  v-for="(color,i) in slotProps.data.variants " 
                                    @mouseover="handleColor(i, slotProps.data.id)"
                                     :key="i" class="border-none flex flex-column w-2rem h-2rem m-2"
                                       :style="{'background-color':color.variantColor}"></div>
                            </div>
                                            <!-- <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating> --> 
                        </div>
                        <div class="flex align-items-center justify-content-between">
                            <span v-if="slotProps.data.discountPrice" class="text-2xl font-semibold mr-2">₹{{ slotProps.data.discountPrice }}</span>
                            <span  :class="{'line-through': slotProps.data.discountPrice}" class="flex-1   text-2xl font-semibold">₹{{ slotProps.data.price }}</span>

                            <!-- <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button> -->
                        </div>
                        </Router-Link>
                    </div>
                </div>
            </template>
            </PDataView>
    </div>
</template>

<style  scoped>


</style>