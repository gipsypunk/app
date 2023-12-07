<script lang='ts'>
    import p1 from "$lib/assets/clients/01.jpg"
    import p2 from "$lib/assets/clients/02.jpg"
    import p3 from "$lib/assets/clients/03.jpg"
    import p4 from "$lib/assets/clients/04.jpg"
    import p5 from "$lib/assets/clients/05.png"
    import p6 from "$lib/assets/clients/06.jpg"


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

                <Splide class="flex items-center"
                  options={ {
                      type   : 'loop',
                      padding: '10rem', 
                      gap:'12rem',
                      breakpoints: {
                        768: {
                              arrows: false,
                              padding: "1rem",
                        
                        },
                        
                      }
                        
                  } }
                >

                    <SplideSlide>
                        <Feedback 
                            FeedbackClient = "Ariana Lavina"
                            FeedbackClientJob = "Paramedic"
                            FeedbackText = "After a year and a half of using the filter system, we noticed that really in the kettle does not form limescale (previously had to periodically clean, for the last year and a half - not once!). The quality is excellent, we recommend it to everyone we know"
                            FeedbackImage = '{p1}'/>
                    </SplideSlide>

                    <SplideSlide>
                        <Feedback 
                            FeedbackClient = "Kieran Chesley"
                            FeedbackClientJob = "Electrical Engineer"
                            FeedbackText = "We bought from an online store many years ago. Not a single complaint since then.
                            I am thrilled with YesWater. Just one call for a filter change and they greet you by name, know your address, and even give you recommendations for filter life. Quick, easy, convenient.
                            The service is top notch! Thank you, YesWater. It's a cozy experience with you." 
                            FeedbackImage = '{p2}'/>
                    </SplideSlide>

                    <SplideSlide>
                        <Feedback 
                            FeedbackClient = "Celina Annelies"
                            FeedbackClientJob = "Art Director"
                            FeedbackText = "Ease of placing an order on the website.
                            Since I buy a set of spare parts for water filters for a year, the free shipping after a certain amount was a nice addition. Good store, all spare parts for filtration systems are available." 
                            FeedbackImage = '{p3}'/>
                    </SplideSlide>


                
                    <SplideSlide>
                        <Feedback 
                            FeedbackClient = "Reilly Raven"
                            FeedbackClientJob = "Mechanical Engineer "
                            FeedbackText = "Politeness and initiative of the operator in the online store, who quickly checked the availability of goods, advised the most optimal set of filters for four-stage purification. We agreed with the manager in an hour came to install. Thank you YesWater" 
                            FeedbackImage = '{p4}'/>
                    </SplideSlide>

                    <SplideSlide>
                        <Feedback 
                            FeedbackClient = "Ismael Virgilio"
                            FeedbackClientJob = "Digital Mrketer "
                            FeedbackText = "Everything is good, we have changed filters for the 3rd time, no complaints, ordered, called back - set the day of delivery, always on time. Helped to choose filters, came to install for free. Thank you to your team."

                            FeedbackImage = '{p5}'/>
                    </SplideSlide>

                    <SplideSlide>
                        <Feedback 
                            FeedbackClient = "Kathlyn Evonne"
                            FeedbackClientJob = "Childcare worker"
                            FeedbackText = "The store has a great CRM. You don't have to explain who you are and what you need every time. They remember better than me when I installed the filter, what model, even though it's been 5+ years. And when you call to check on your order for a new filter, you don't have to identify yourself or frantically search for the order number. Installation of the filter without any imposition of extras. The installer is competent and experienced." 
                            FeedbackImage = '{p6}'/>
                    </SplideSlide>







                </Splide>



            
                

                
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


