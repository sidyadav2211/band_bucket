<script>
import garmin1 from '../assets/garmin2.jpg'
import garmin2 from '../assets/garmin3.jpg'
import garmin3 from '../assets/garmin4.jpg'
import garmin4 from '../assets/garminslider.jpg'
import BrandSelling  from '../components/BrandSelling.vue'
import FooterPage from '../components/FooterPage.vue'

    export default {
        components: {
            BrandSelling,
            FooterPage,
        },
        data(){
            return {
                products: [
              {
                id:1,
                name:'img',
                image: garmin1,
              },
               {
                id:2,
                name:'img',
                image: garmin2,

              },
              {
                id:3,
                name:'img',
                image: garmin3,

              },
              {
                id:4,
                name:'img',
                image: garmin4,

              },
            //   {
            //     id:5,
            //     name:'img',
            //     image:garmin5,

            //   },

            ],
            responsiveOptions: [
                {
                    breakpoint: '1199px',
                    numVisible: 3,
                    numScroll: 3
                },
                {
                    breakpoint: '991px',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    breakpoint: '767px',
                    numVisible: 1,
                    numScroll: 1
                }
            ]
            }
        },
        methods: {
        getSeverity(status) {
            switch (status) {
                case 'INSTOCK':
                    return 'success';

                case 'LOWSTOCK':
                    return 'warning';

                case 'OUTOFSTOCK':
                    return 'danger';

                default:
                    return null;
            }
        }
    }
       
    }
</script>

<template>
    <div class="card hidden lg:block">
        <PCarousel :value="products" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions"  :autoplayInterval="3000">
            <template #item="slotProps">
                <div class="surface-border border-round m-1 text-center py-1 px-1">
                    <div class="mb-1">
                        <img :src="slotProps.data.image" :alt="slotProps.data.name" height="400" class="w-auto shadow-2" />
                    </div>
                    <!-- <div>
                        <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                        <h6 class="mt-0 mb-3">${{ slotProps.data.price }}</h6>
                        <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" />
                        <div class="mt-5">
                            <PButton icon="pi pi-search" rounded class="mr-2" />
                            <PButton icon="pi pi-star-fill" rounded severity="success" class="mr-2" />
                            <PButton icon="pi pi-cog" rounded severity="help" />
                        </div>
                    </div> -->
                </div>
            </template>
        </PCarousel>
    </div>
    <div class="grid align-items-center m-auto w-9">
        
        <div class="col-12 md:col-6 ">
            <Router-Link :to="{name:'MensWatch'}">
            <div class="relative text-center surface-border border-round cursor-pointer ">
            
                <img  src="../assets/garmin7.jpg" alt="pic" height="450" class="w-9 shadow-2" />
                <PTag id="tag-overImg" class="mt-1 text-base"  severity="success" value="Men" />
                
        </div>
        </Router-Link>
        </div>
        <div class="col-12 md:col-6">
            <div class=" relative text-center surface-border border-round">

                <img src="../assets/womengarmin.jpg" alt="pic" height="450" class="w-9 shadow-2" />
                <PTag id="tag-overImg" class="mt-1 text-base" severity="info" value="Women" />
            </div>
        </div>
    </div>
    <div class="mt-2">
        <BrandSelling/>
    </div>
    <div>
        <FooterPage/>
    </div>
</template>

<style  scoped>
#tag-overImg{
    position: absolute;
    top: 4px;
    right: 100px;
}

</style>