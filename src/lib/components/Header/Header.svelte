<script>

    import { base } from '$app/paths';
    import { onMount } from 'svelte';


    import logo from "$lib/assets/logo/logo_d.png";

    onMount(() => {

        const btn = document.getElementById('menu-btn')
        const menu = document.getElementById('r_nav')
        const link = document.querySelectorAll('.nav-link')


        btn?.addEventListener("click", navToggle);
        


        function navToggle() {
            btn?.classList.toggle('open')
            menu?.classList.toggle('flex')
            menu?.classList.toggle('hidden')
            
        }

    
        
        link.forEach(el => el.addEventListener("click", function(e) {
            btn?.classList.toggle('close');
            menu?.classList.toggle("hidden");
        }));
    

                
});
</script>





<header id="header" class="absolute w-full z-50 max-w-[2048px] pt-4 pb-4">
    <div class="container max-w-7xl mx-auto px-6 py-6">
        <div>

            <nav class="flex flex-row items-center justify-between">
                <a href="{base}/" class='p-2'><img src="{logo}" alt="" class="w-[200px] h-[52px] object-cover"></a>

                <ul class="hidden h-10 md:flex md:space-x-8 items-center">
                    <li><a  href="{base}/" class="el-10 text-blue-d hover:text-blue-b">Home</a></li>
                    <li><a  href="{base}#products" class="el-10 text-blue-d hover:text-blue-b">Products</a></li>
                    <li><a  href="{base}#service" class="el-10 text-blue-d hover:text-blue-b">Service</a></li>
                    <li><a  href="{base}#about" class="el-10 text-blue-d hover:text-blue-b">About us</a></li>
                    <li><a  href="{base}#testimonials" class="el-10 text-blue-d hover:text-blue-b">Testimonials</a></li>
                    <li><a  href="{base}#contacts" class="el-10 text-blue-d hover:text-blue-b">Contact us</a></li>
                </ul>

                <a href="tel:+14244386801" class="hidden md:flex px-8 py-3 bg-blue-b rounded-full text-white hover:bg-white hover:text-blue-b hover:border  hover:border-blue-b">Call us</a>



                <button id="menu-btn" type="button" class="hamburger z-40 bg-blue-m/30 backdrop-blur-lg md:hidden focus:outline-none block">
                    <input type="checkbox" name="" id="">
                    <span class=""></span>
                    <span class=""></span>
                    <span class=""></span>    
                    <span class=""></span>
                </button>


                
            </nav>



            <div id="r_nav" class="bg-slate-50 z-50 flex flex-col items-center rounded-3xl translate-x-1 hidden r_nav">




                <ul class="p-8 flex flex-col uppercase font-semibold">
                    <li class="p-2"><a  id="nav-link" href="{base}/" class="text-blue-d hover:text-blue-b nav-link">Home</a></li>
                    <li class="p-2"><a  id="nav-link" href="{base}#products" class="text-blue-d hover:text-blue-b nav-link">Products</a></li>
                    <li class="p-2"><a  id="nav-link" href="{base}#service" class="text-blue-d hover:text-blue-b nav-link">Service</a></li>
                    <li class="p-2"><a  id="nav-link" href="{base}#about" class="text-blue-d hover:text-blue-b nav-link">About us</a></li>
                    <li class="p-2"><a  id="nav-link" href="{base}#testimonials" class="text-blue-d hover:text-blue-b nav-link">Testimonials</a></li>
                    <li class="p-2"><a  id="nav-link" href="{base}#contacts" class="text-blue-d hover:text-blue-b nav-link">Contact us</a></li>
                </ul>

               <div class="p-8 flex  justify-center items-center">
                    <a href="tel:+14244386801" class="px-8 py-3 bg-blue-b rounded-full text-white hover:bg-white hover:text-blue-b hover:border  hover:border-blue-b">Call us</a>
               </div>

            </div>


        </div>
    </div>
</header>


