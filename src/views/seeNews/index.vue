<template>
    <div>
    <div class="newDiv">
        <el-timeline v-for="(newsItems,index) in news" :key="index" class="timeline">
            <el-timeline-item :timestamp=newsItems.releaseTime placement="top" color='#B3C0D1'>
               <news-unit :news="newsItems"></news-unit>
            </el-timeline-item>
        </el-timeline>
    </div>
    </div>
</template>
<script>
    import newsUnit from  '../../components/news'
    export default {
            data(){
                return{
                    news:[
                        {
                            title:'场馆国庆节闭馆',
                            content:'由于放假因此场馆需要关闭',
                            author:'张老师',
                            releaseTime:'2019-8-13'
                        },
                        {
                            title:'场馆开业',
                            content:'由于放假因此场馆需要关闭',
                            author:'吴老师',
                            releaseTime:'2019-7-13'
                        }
                    ]
                }
            },
        components:{newsUnit}
    }
</script>
<style scoped>
 .newDiv{
     width:60%;
 }
    .timeline{
        display: flex;
        float: left;
    }
</style>