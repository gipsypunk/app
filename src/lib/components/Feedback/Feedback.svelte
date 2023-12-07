<script lang="ts">
    import p1 from "$lib/assets/clients/01.jpg"

    export let FeedbackImage = ''
    export let FeedbackClient = ''
    export let FeedbackClientJob = ''
    export let FeedbackText = ''

</script>



<div class="px-4 py-4 mb-20 mt-20 bg-white rounded-3xl shadow-lg flex flex-col justify-center items-center  md:flex-row md:flex-row-reverse">
    <div class="flex justify-center md:w-1/3">
        <img src="{FeedbackImage}" alt="" class="w-[200px] h-[200px] rounded-full object-cover">
    </div>

    <div class="md:w-2/3">
        <div class="pl-2 flex flex-row items-center justify-between">
            <h1 class="text-blue-d text-3xl font-semibold">{FeedbackClient}</h1>
            <svg class="w-16 h-16 fill-slate-400">
                <use xlink:href="#quotation"></use>
            </svg>
        </div>
        <h3 class="p-2 text-xl text-blue-b">{FeedbackClientJob}</h3>
        <div class="bg-blue-a rounded-3xl">
            <p class="p-6 text-blue-d text-justify">{FeedbackText}</p>            
        </div>        
    </div>
</div>

