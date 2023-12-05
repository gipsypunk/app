<script lang="ts">


    export let ProductTitle = ''
    export let ProductImage = ''
    export let ProductPrice = '' 

</script>





<div class="w-[280px] h-[420px] rounded-3xl bg-white flex flex-col items-center drop-shadow-2xl justify-between m-2">
    <div class="flex flex-col items-center">
        <img src="{ProductImage}" alt="" class="w-56 h-40 p-2">
        <h1 class="text-blue-d text-center p-4">{ProductTitle}</h1>
    </div>
    <div class="flex flex-row p-2">
        <svg class="w-4 h-4 fill-blue-b">
            <use xlink:href="#start"></use>
        </svg>

        <svg class="w-4 h-4 fill-blue-b">
            <use xlink:href="#start"></use>
        </svg>

        <svg class="w-4 h-4 fill-blue-b">
            <use xlink:href="#start"></use>
        </svg>

        <svg class="w-4 h-4 fill-blue-b">
            <use xlink:href="#start"></use>
        </svg>

        <svg class="w-4 h-4 fill-blue-b">
            <use xlink:href="#start"></use>
        </svg>
    </div>
      
    <div class="flex flex-col items-center p-4">
        <h3 class="text-blue-d text-2xl font-semibold p-4">{ProductPrice}</h3>
        <button class="btn  bg-blue-b text-base border-0 text-white hover:bg-white hover:text-blue-b hover:border hover:border-blue-b w-36 rounded-[50px]">Order now</button>
    </div>
</div>



