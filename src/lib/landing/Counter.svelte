<script lang="ts">
    import { onMount } from 'svelte';

    onMount(() => {

        let counterContainer = document.
        querySelector("#counter");
        let counter = document.querySelectorAll(".counter-value");

        let CounterObserver = new
        IntersectionObserver((entries, observe) => {
                let [entry] = entries;
                if (!entry.isIntersecting) return;

                let speed = 100;
                counter.forEach((counter, index) => {
                    function updateCounter() {
                        const targetNumber = +counter.
                        dataset.target;
                        const initialNumber = +counter.innerText;
                        const incPerCount = 
                        targetNumber / speed;
                        if (initialNumber < targetNumber) {
                            counter.innerText = Math.
                            ceil(initialNumber + incPerCount);
                            setTimeout(updateCounter,
                            20);

                        }

                    }
                    updateCounter();
                })
            },{
                root: null,
                threshold: 0.4,
            });
            
            CounterObserver.observe(counterContainer);

    });
    // let counter = document.querySelectorAll(".counter-value")

    // let CounterObserver = new
    // IntersectionObserver((entries, observe) => {
    //         let [entry] = entries;
    //         if (!entry.isIntersecting) return;
    //
    //         let speed = 100;
    //         counters.forEach((counter, index) => {
    //             function updateCounter() {
    //                 const targetNumber = +counter.dataset.target;
    //                 const initialNumber = +counter.innerText;
    //                 const incPerCount = turgetNumber / speed;
    //                 if (initialNumber < targetNumber) {
    //                     counter.innerText = Math.ceil(initialNumber + incPerCount);
    //                     setTimeout(updateCounter, 20);
    //                 }
    //             }
    //             updateCounter();
    //         })   
    // },{
    //     root: null,
    //     threshold: 0.4,
    //     
    // });
    // CounterObserver.observe(counterContainer);
    


</script>


<section id="counter" class="pt-24 pb-24 relative overflow-hidden">
    <div class="container max-w-7xl mx-auto">
        <div id="#counter-container" class="flex flex-col justify-between items-center md:flex-row">
            <div class="p-8 flex flex-col items-center">
                <div class ="flex flex-row text-blue-600 text-10xl font-black font-display">
                     <span class="counter-value" data-target="1385">0000</span>
                </div>
                <h3 class="text-3xl font-black text-blue-600">Installed filters</h3>
            </div>

            <div class="p-8 flex flex-col items-center">
                <div class ="flex flex-row text-pink-400 text-10xl font-black font-display">
                     <span class="counter-value text-10xl" data-target="3">000</span>
                </div>
                <h3 class="text-3xl font-black text-pink-400">Years of successful work</h3>
            </div>


            <div class="p-8 flex flex-col items-center">
                <div class ="flex flex-row text-indigo-500 text-10xl font-black font-display">
                     <span class="counter-value text-10xl" data-target="99">00</span>
                     <span class="counter-sign "> %</span>       
                </div>
                <h3 class="text-3xl font-black text-indigo-500">Happy custumers</h3>
            </div>

        </div>

    
    </div>
</section>
