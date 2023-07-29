<template>
  <div class="card relative z-2 gap-1">
        <PMenubar :model="items" class="mr-2">
            <template #start >
                <img  alt="BandBucket" src="./assets/MainIcons.jpg" height="50" class="mr-2"  />
            </template>
        </PMenubar>
    </div>
    
  <RouterView />
</template>

<script>
// import HomePage from './views/HomePage.vue'




export default {
  name: 'App',
  components: {
    // HomePage,
  },
   data() {
        return {
            items: [
                {
                    label: 'Home',
                    to:'/'
                },
                {
                    label: 'Watch',
                    items: [
                        {
                            label: 'Mens',
                            to: '/mens-watch'
                        },
                        {
                            label: 'Womens',
                        },
                        
                    ]
                },
                
            ],
            
        };
    },
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
