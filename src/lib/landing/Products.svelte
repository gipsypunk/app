<script>
    import ProductCard from "$component/ProductCard/ProductCard.svelte";

    import f1 from "$lib/assets/filters/Filter2.jpg"
    import f2 from "$lib/assets/filters/UVFilter.jpg"
    import f3 from "$lib/assets/filters/Coarse.jpg"
    import f4 from "$lib/assets/filters/Disinfection.jpg"
    import f5 from "$lib/assets/filters/ReverseOsmosis.jpg"
    import f6 from "$lib/assets/filters/WaterSoftener.jpg"
    import f7 from "$lib/assets/filters/WholeHouse.png"
    import bg4 from "$lib/assets/bg-4.png"

    
</script>

<section id="products" class="bg-product-pattern bg-no-repeat bg-center">
    <div class="container max-w-7xl mx-auto p-6">
        <div class="flex flex-col items-center text-justify p-6">
            <h1 class="text-blue-d font-display text-4xl font-black  uppercase text-center">Choose your <span class="text-blue-b">water filter</span></h1>
        </div>
        <div class="flex flex-col justify-between items-center md:flex-row md:flex-wrap md:justify-center">
            <ProductCard ProductImage="{f1}" ProductTitle="Installing a water filter system" ProductPrice="99$"/>
            <ProductCard ProductImage="{f2}" ProductTitle="Installation of a UV Water Filter for disinfection" ProductPrice="99$"/>
            <ProductCard ProductImage="{f3}" ProductTitle="Installation of a Coarse Water Filter" ProductPrice="99$"/>
            <ProductCard ProductImage="{f4}" ProductTitle="Installation of a water disinfection filter" ProductPrice="99$"/>
            <ProductCard ProductImage="{f5}" ProductTitle="Installing a Reverse Osmosis Water Filter" ProductPrice="99$"/>
            <ProductCard ProductImage="{f6}" ProductTitle="Installing a Water Softener System" ProductPrice="99$"/>
            <ProductCard ProductImage="{f7}" ProductTitle="Installing a whole house Water Filter System" ProductPrice="99$"/>
        </div>
    </div>
</section>


