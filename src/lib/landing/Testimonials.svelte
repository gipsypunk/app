<script lang='ts'>
    import p1 from "$lib/assets/clients/01.jpg"
    import p2 from "$lib/assets/clients/02.jpg"
    import p3 from "$lib/assets/clients/03.jpg"
    import bg3 from "$lib/assets/bg-3.png"



    import Feedback from "$component/Feedback/Feedback.svelte";




    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/splide/css';

</script>


<section id='testimonials' class="pt-24 pb-24 relative overflow-hidden ">
    <div class="bg-[linear-gradient(180deg,#FFFFFF_0%,#F3FAFF_100%)]">
    
        <div class="container max-w-7xl mx-auto p-6">
            <div class="flex flex-col max-h-max mr-auto ml-auto relative">
                <div class="flex flex-col items-center">
                        <h1 class="text-4xl font-display uppercase font-black text-blue-d text-center">What our <span class="text-blue-b">clients say</span></h1>
                        <h3 class="text-xl text-blue-d">Testomonials</h3>
                </div>


                <div class="">

                    <Feedback 
                        FeedbackClient = "Ariana Lavina"
                        FeedbackClientJob = "Paramedic"
                        FeedbackText = "After a year and a half of using the filter system, we noticed that really in the kettle does not form limescale (previously had to periodically clean, for the last year and a half - not once!). The quality is excellent, we recommend it to everyone we know"
                        FeedbackImage = '{p1}'
                    />



                </div>

                
                

                
            </div>
        </div>

    </div>
    <div>
        <img src="{bg3}" alt="" class="bg-[#F3FAFF]">
    </div>
</section>


            <!-- <Splide clas="flex flex-row justify-center items-center"> -->
            <!--      -->
            <!--     <SplideSlide> -->
            <!--         <div class="bg-amber-500 w-[400px] flex justify-center items-center"> -->
            <!--             <img src="{f1}" alt="" class="w-[200px] h-[200px]"> -->
            <!--         </div> -->
            <!--     </SplideSlide> -->
            <!---->
            <!--     <SplideSlide> -->
            <!--         <div class="bg-amber-500 w-[400px] flex justify-center items-center"> -->
            <!--             <img src="{f2}" alt="" class="w-[200px] h-[200px]"> -->
            <!--         </div> -->
            <!--     </SplideSlide> -->
            <!---->
            <!--     <SplideSlide> -->
            <!--         <div class="bg-amber-500 w-[400px] flex justify-center items-center"> -->
            <!--             <img src="{f3}" alt="" class="w-[200px] h-[200px]"> -->
            <!--         </div> -->
            <!--     </SplideSlide> -->
            <!---->
            <!--     <SplideSlide> -->
            <!--         <div class="bg-amber-500 w-[400px] flex justify-center items-center"> -->
            <!--             <img src="{f4}" alt="" class="w-[200px] h-[200px]"> -->
            <!--         </div> -->
            <!--     </SplideSlide> -->
            <!---->
            <!---->
            <!---->
            <!-- </Splide> -->


