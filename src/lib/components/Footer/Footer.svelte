<script>
    import logo from "$lib/assets/logo/logo_l.png"
    import qr from "$lib/assets/qr.png"

</script>

<footer id="footer">
        <svg class="fill-blue-d mb-[-4px]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 184">
        <path class="f-bg-wave" d="M1285.4,81.2c-34,12.5-98.3,33.1-186.9,39.8c-230.8,17.6-274.8-85-472.8-71.3
		c-182,12.6-219.4,104.5-345.3,65.2C237.9,101.6,177,70.7,91.6,81.2c-31.7,4-62.6,13-91.6,26.6V184h1440V0
		C1392.2,33.7,1340.3,61,1285.4,81.2z"></path>
    </svg>
    <div class="bg-blue-d">
        <div class="container max-w-7xl mx-auto p-6">
            <div class='flex flex-col justify-between md:flex-row'>

                <div class="p-4">
                    <h3 class="text-2xl font-semibold text-white"><strong><span class="text-blue-b text-3xl">|</span></strong> Menu</h3>
                    <ul class='text-white'>
                        <li class="pt-2"><a href="/" class="menu-link hover:text-blue-b transition-colors">Home</a></li>
                        <li class="pt-2"><a href="#products" class="menu-link hover:text-blue-b transition-colors">Producs</a></li>
                        <li class="pt-2"><a href="#service" class="menu-link hover:text-blue-b transition-colors">Service</a></li>
                        <li class="pt-2"><a href="#about" class="menu-link hover:text-blue-b transition-colors">About us</a></li>
                        <li class="pt-2"><a href="" class="menu-link hover:text-blue-b transition-colors">Contact us</a></li>
                    </ul>                    
                </div>

                <div class='p-4'>

                    <div>
                        <h3 class="text-2xl font-semibold text-white"><strong><span class="text-blue-b text-3xl">|</span></strong> Contact us</h3>
                        <div class="text-white">
                            <p class="pt-2">Wilshire Blvd #1600 Los Angeles, CA 90024</p>
                            <p class="pt-2">Call us: 
                                <a href="tel:+14244386801" class="hover:text-blue-b font-semibold">424.438.6801</a>
                            </p>
                        </div>    
                    </div>


                    <div class="pt-8">
                        <h3 class="text-2xl font-semibold text-white"><strong><span class="text-blue-b text-3xl">|</span></strong> Social links</h3>
                        <ul class="flex space-x-2 pt-2">
                            <li class="p-2 w-8 h-8 rounded-full bg-blue-b flex justify-center items-center hover:bg-blue-c hover:scale-110">
                                <a href="https://www.facebook.com/YESWaterSoCal" target="_blank" class="scale-110">
                                    <svg class="w-4 h-4 fill-white">
                                        <use xlink:href="#fb"></use>
                                    </svg>
                                </a>
                            </li>

                            <li class="p-2 w-8 h-8 rounded-full bg-blue-b flex justify-center items-center hover:bg-blue-c hover:scale-110">
                                <a href="https://www.instagram.com/YESWATERLA/" target="_blank"  class="fill-white fill-white">
                                    <svg class="w-4 h-4">
                                        <use xlink:href="#inst"></use>
                                    </svg>
                                </a>
                            </li>

                            <li class="w-8 h-8 rounded-full bg-blue-b flex justify-center items-center hover:bg-blue-c hover:scale-110">
                                <a href="https://twitter.com/" target="_blank" class="scale-110">
                                    <svg class="w-4 h-4 fill-white">
                                        <use xlink:href="#x"></use>
                                    </svg>
                                </a>
                            </li>

                        </ul>
                    </div> 
                </div>

                <div class='p-4'>
                    <div>
                        <img src="{logo}" alt="" class="w-[200px] h-[52px] object-cover">
                    </div>

                    <div>
                        <img src="{qr}" alt="" class="w-[200px] h-[200px] object-cover">
                    </div>
                </div>
            </div>
            <div class='border-t border-slate-400/10 p-2'>
                   <p class="text-sm text-white">Copyright ©2023 YesWater. All rights reserved.</p>
            </div>
        </div>
    </div>
</footer>
