import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const glass = "/_app/immutable/assets/glass.5963907f.png";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="hero" data-svelte-h="svelte-ler6r3"><div class="bg-blue-a"><div class="container max-w-7xl mx-auto p-6"><div class="flex flex-col items-center md:flex-row-reverse"><div class="flex flex-col items-center md:w-2/4 md:justify-start animate-bounce2"><img${add_attribute("src", glass, 0)} alt="" class="w-[200px] h-[360px] md:w-[320px] md:h-[640px] object-cover"></div> <div class="flex flex-col md:w-2/4 md:justify-end md:pr-8"><h1 class="p-2 text-blue-d font-display text-3xl font-black uppercase text-center md:text-8xl md:text-start">Enjoy <span class="text-blue-b">pure water </span><br>in your entire home</h1> <h3 class="text-blue-d text-center break-words md:text-xl md:text-start">We will install a water treatment system <br>within 2 hours after placing the order</h3> <div class="flex flex-row pt-4"><button class="btn m-2 bg-blue-b text-base border-0 text-white hover:bg-white hover:text-blue-b hover:border hover:border-blue-b w-36 rounded-[50px] shadow-3xl">Order now</button> <a href="#features" class="btn m-2 bg-white text-base text-blue-b font-semibold hover:bg-blue-b hover:text-white hover:border-none w-36 rounded-[50px] shadow-3xl">Fuck off</a></div></div></div></div></div> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="fill-blue-a rotate-180 mt-[-10px]"><path fill-opacity="1" d="M0,64L40,90.7C80,117,160,171,240,165.3C320,160,400,96,480,106.7C560,117,640,203,720,213.3C800,224,880,160,960,133.3C1040,107,1120,117,1200,138.7C1280,160,1360,192,1400,208L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg></section>`;
});
const glass2 = "/_app/immutable/assets/glass_2.e789c6cc.png";
const Features = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="features" class="mt-8" data-svelte-h="svelte-1xlehsu"><div class="container max-w-7xl mx-auto p-6"><div class="flex flex-col items-center md:flex-row "><div class="flex flex-col items-center md:w-1/3"><h1 class="text-blue-d font-display text-4xl font-black uppercase text-center">Why you <br>should filter <br><span class="text-blue-b">your water</span>?</h1> <img${add_attribute("src", glass2, 0)} alt="" class="w-72 h-80"></div> <div class="flex flex-col justify-center items-center md:flex-row md:flex-wrap md:w-2/3"><div class="bg-blue-a w-[340px] h-[340px] rounded-3xl m-2 shadow-xl"><div class="p-8"><h3 class="text-blue-d font-display text-4xl font-black">1.</h3> <h1 class="text-blue-d text-2xl font-bold">Soft water means <br>there is no sedimen</h1> <p class="text-blue-d text-justify pt-2">By using water purification systems, you soften your water by stripping it of calcium and magnesium. The hardness is reduced by 80-90%, avoiding limescale deposits on plumbing fixtures and limescale in the kettle.</p></div></div> <div class="bg-blue-a w-[340px] h-[340px] rounded-3xl m-2 shadow-xl"><div class="p-8"><h3 class="text-blue-d font-display text-4xl font-black">2.</h3> <h1 class="text-blue-d text-2xl font-bold">Delicious filtered <br>water is possible</h1> <p class="text-blue-d text-justify pt-2">Filtered water is tasty and also devoid of the unpleasant chlorine odor, which has the effect of improving the taste of your morning coffee or tea.</p></div></div> <div class="bg-blue-a w-[340px] h-[340px] rounded-3xl m-2 shadow-xl"><div class="p-8"><h3 class="text-blue-d font-display text-4xl font-black">3.</h3> <h1 class="text-blue-d text-2xl font-bold">Filtered water is a <br>concern for nature</h1> <p class="text-blue-d text-justify pt-2">Using water filters, you protect the environment and leave it clean for future generations, even if only because you don&#39;t buy plastic bottles that have been laid out for several hundred years.</p></div></div> <div class="bg-blue-a w-[340px] h-[340px] rounded-3xl m-2 shadow-xl"><div class="p-8"><h3 class="text-blue-d font-display text-4xl font-black">4.</h3> <h1 class="text-blue-d text-2xl font-bold">The end of <br> chlorinated water</h1> <p class="text-blue-d text-justify pt-2">The water filter that we will supply will purify the water and get rid of the unpleasant taste of bleach.</p></div> <div class="flex flex-row justify-end p-8"><a href="" class="text-end text-blue-b hover:text-blue-d">Order the installation</a></div></div></div></div></div></section>`;
});
const ProductCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ProductTitle = "" } = $$props;
  let { ProductImage = "" } = $$props;
  let { ProductPrice = "" } = $$props;
  if ($$props.ProductTitle === void 0 && $$bindings.ProductTitle && ProductTitle !== void 0)
    $$bindings.ProductTitle(ProductTitle);
  if ($$props.ProductImage === void 0 && $$bindings.ProductImage && ProductImage !== void 0)
    $$bindings.ProductImage(ProductImage);
  if ($$props.ProductPrice === void 0 && $$bindings.ProductPrice && ProductPrice !== void 0)
    $$bindings.ProductPrice(ProductPrice);
  return `<div class="w-[280px] h-[420px] rounded-3xl bg-white flex flex-col items-center drop-shadow-2xl justify-between m-2"><div class="flex flex-col items-center"><img${add_attribute("src", ProductImage, 0)} alt="" class="w-56 h-40 p-2"> <h1 class="text-blue-d text-center p-4">${escape(ProductTitle)}</h1></div> <div class="flex flex-row p-2" data-svelte-h="svelte-hd8tbz"><svg class="w-4 h-4 fill-blue-b"><use xlink:href="#start"></use></svg> <svg class="w-4 h-4 fill-blue-b"><use xlink:href="#start"></use></svg> <svg class="w-4 h-4 fill-blue-b"><use xlink:href="#start"></use></svg> <svg class="w-4 h-4 fill-blue-b"><use xlink:href="#start"></use></svg> <svg class="w-4 h-4 fill-blue-b"><use xlink:href="#start"></use></svg></div> <div class="flex flex-col items-center p-4"><h3 class="text-blue-d text-2xl font-semibold p-4">${escape(ProductPrice)}</h3> <button class="btn bg-blue-b text-base border-0 text-white hover:bg-white hover:text-blue-b hover:border hover:border-blue-b w-36 rounded-[50px]" data-svelte-h="svelte-cg7mc7">Order now</button></div></div>                     `;
});
const f1 = "/_app/immutable/assets/Filter2.77c52b40.jpg";
const f2 = "/_app/immutable/assets/UVFilter.d4fef4b9.jpg";
const f3 = "/_app/immutable/assets/Coarse.fd910a98.jpg";
const f4 = "/_app/immutable/assets/Disinfection.1fc2d57d.jpg";
const f5 = "/_app/immutable/assets/ReverseOsmosis.c7cc42c8.jpg";
const f6 = "/_app/immutable/assets/WaterSoftener.36681a75.jpg";
const f7 = "/_app/immutable/assets/WholeHouse.afbd0bd8.png";
const Products = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="products"><div class="container max-w-7xl mx-auto p-6"><div class="flex flex-col items-center text-justify p-6" data-svelte-h="svelte-1hrpvqm"><h1 class="text-blue-d font-display text-4xl font-black uppercase text-center">Choose your <span class="text-blue-b">water filter</span></h1></div> <div class="flex flex-col justify-between items-center md:flex-row md:flex-wrap md:justify-center">${validate_component(ProductCard, "ProductCard").$$render(
    $$result,
    {
      ProductImage: f1,
      ProductTitle: "Installing a water filter system",
      ProductPrice: "99$"
    },
    {},
    {}
  )} ${validate_component(ProductCard, "ProductCard").$$render(
    $$result,
    {
      ProductImage: f2,
      ProductTitle: "Installation of a UV Water Filter for disinfection",
      ProductPrice: "99$"
    },
    {},
    {}
  )} ${validate_component(ProductCard, "ProductCard").$$render(
    $$result,
    {
      ProductImage: f3,
      ProductTitle: "Installation of a Coarse Water Filter",
      ProductPrice: "99$"
    },
    {},
    {}
  )} ${validate_component(ProductCard, "ProductCard").$$render(
    $$result,
    {
      ProductImage: f4,
      ProductTitle: "Installation of a water disinfection filter",
      ProductPrice: "99$"
    },
    {},
    {}
  )} ${validate_component(ProductCard, "ProductCard").$$render(
    $$result,
    {
      ProductImage: f5,
      ProductTitle: "Installing a Reverse Osmosis Water Filter",
      ProductPrice: "99$"
    },
    {},
    {}
  )} ${validate_component(ProductCard, "ProductCard").$$render(
    $$result,
    {
      ProductImage: f6,
      ProductTitle: "Installing a Water Softener System",
      ProductPrice: "99$"
    },
    {},
    {}
  )} ${validate_component(ProductCard, "ProductCard").$$render(
    $$result,
    {
      ProductImage: f7,
      ProductTitle: "Installing a whole house Water Filter System",
      ProductPrice: "99$"
    },
    {},
    {}
  )}</div></div></section>`;
});
const Service = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="service" class="relative bg-[radial-gradient( circle farthest-corner at 10% 20%, rgba(234,249,249,0.67) 0.1%, rgba(239,249,251,0.63) 90.1% )]" data-svelte-h="svelte-blp5cj"><div><div class="container max-w-7xl mx-auto p-6"><div class="flex flex-col items-center md:flex-row"></div></div></div></section>`;
});
const bg2 = "/_app/immutable/assets/bg-2.886b6c83.png";
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="section" data-svelte-h="svelte-5nua3m"><div><img${add_attribute("src", bg2, 0)} alt="" class="bg-blue-a rotate-180"></div> <div class="bg-blue-a"><div class="container max-w-7xl mx-auto p-6"><div class="flex flex-col items-center text-justify"><h1 class="text-4xl font-display uppercase font-black text-blue-d"><span class="text-blue-b">Our</span> story</h1> <p class="pt-8 text-blue-d text-justify">We are a vibrant, young, dynamic and multicultural company. Our priority goal is to make clean water accessible to everyone.
                    Customers place their trust in YesWater&#39;s ability to solve their water treatment needs, so it is important to return that trust by always exceeding their expectations. The YesWater will never get a second chance to make a good first impression, so the team ensures that they take care of the customer’s needs from the very beginning.
                    Customers renew their commitment every time they pay their bill, and YesWater strives to return that loyalty with superior service, genuine gratitude and a warm smile during every interaction.</p></div> <div class="pt-8 flex flex-col items-center text-justify"><h1 class="text-4xl font-display uppercase font-black text-blue-d">How we <span class="text-blue-b">work</span></h1> <div class="pt-8 flex flex-wrap justify-center"><div class="p-2"><div class="element-10 bg-white w-36 h-36 rounded-full flex justify-center items-center md:w-48 md:h-48"><svg class="w-20 h-20 fill-cyan-600 md:w-30 md:h-30"><use xlink:href="#order"></use></svg></div> <h3 class="text-blue-d font-display uppercase text-sm text-center pt-2 md:text-base">Make your order <br>on our site</h3></div> <div class="p-2"><div class="element-10 bg-white w-36 h-36 rounded-full flex justify-center items-center md:w-48 md:h-48"><svg class="w-20 h-20 fill-pink-400 md:w-30 md:h-30"><use xlink:href="#confirm"></use></svg></div> <h3 class="text-blue-d font-display uppercase text-sm text-center pt-2 md:text-base">We confirm <br>your order</h3></div> <div class="p-2"><div class="element-10 bg-white w-36 h-36 rounded-full flex justify-center items-center md:w-48 md:h-48"><svg class="w-20 h-20 fill-indigo-500 md:w-30 md:h-30"><use xlink:href="#car"></use></svg></div> <h3 class="text-blue-d font-display uppercase text-sm text-center pt-2 md:text-base">Our engineer will come <br> to you super fast</h3></div> <div class="p-2"><div class="element-10 bg-white w-36 h-36 rounded-full flex justify-center items-center md:w-48 md:h-48"><svg class="w-20 h-20 fill-blue-700 md:w-30 md:h-30"><use xlink:href="#filter2"></use></svg></div> <h3 class="text-blue-d font-display uppercase text-sm text-center pt-2 md:text-base">Installation takes <br> from 30-60 minutes</h3></div> <div class="p-2"><div class="element-10 bg-white w-36 h-36 rounded-full flex justify-center items-center md:w-48 md:h-48"><svg class="w-20 h-20 fill-sky-400 md:w-30 md:h-30"><use xlink:href="#water"></use></svg></div> <h3 class="text-blue-d font-display uppercase text-sm text-center pt-2 md:text-base">Done  now you can<br>enjoy clean water <br>every day</h3></div></div></div></div></div> <div><img${add_attribute("src", bg2, 0)} alt="" class="bg-blue-a"></div></section>`;
});
const logo = "/_app/immutable/assets/logo_l.7fe7da2a.png";
const qr = "/_app/immutable/assets/qr.be0b5abf.png";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer id="footer" data-svelte-h="svelte-1l00y0h"><svg class="fill-blue-d mb-[-4px]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 184"><path class="f-bg-wave" d="M1285.4,81.2c-34,12.5-98.3,33.1-186.9,39.8c-230.8,17.6-274.8-85-472.8-71.3
		c-182,12.6-219.4,104.5-345.3,65.2C237.9,101.6,177,70.7,91.6,81.2c-31.7,4-62.6,13-91.6,26.6V184h1440V0
		C1392.2,33.7,1340.3,61,1285.4,81.2z"></path></svg> <div class="bg-blue-d"><div class="container max-w-7xl mx-auto p-6"><div class="flex flex-col justify-between md:flex-row"><div class="p-4"><h3 class="text-2xl font-semibold text-white"><strong><span class="text-blue-b text-3xl">|</span></strong> Menu</h3> <ul class="text-white"><li class="pt-2"><a href="" class="menu-link hover:text-blue-b transition-colors">Home</a></li> <li class="pt-2"><a href="" class="menu-link hover:text-blue-b transition-colors">Producs</a></li> <li class="pt-2"><a href="" class="menu-link hover:text-blue-b transition-colors">Service</a></li> <li class="pt-2"><a href="" class="menu-link hover:text-blue-b transition-colors">About us</a></li> <li class="pt-2"><a href="" class="menu-link hover:text-blue-b transition-colors">Contact us</a></li></ul></div> <div class="p-4"><div><h3 class="text-2xl font-semibold text-white"><strong><span class="text-blue-b text-3xl">|</span></strong> Contact us</h3> <div class="text-white"><p class="pt-2">Wilshire Blvd #1600 Los Angeles, CA 90024</p> <p class="pt-2">Call us: 
                                <a href="tel:+14244386801" class="hover:text-blue-b font-semibold">424.438.6801</a></p></div></div> <div class="pt-8"><h3 class="text-2xl font-semibold text-white"><strong><span class="text-blue-b text-3xl">|</span></strong> Social links</h3> <ul class="flex space-x-2 pt-2"><li class="p-2 w-8 h-8 rounded-full bg-blue-b flex justify-center items-center hover:bg-blue-c hover:scale-110"><a href="https://www.facebook.com/YESWaterSoCal" target="_blank" class="scale-110"><svg class="w-4 h-4 fill-white"><use xlink:href="#fb"></use></svg></a></li> <li class="p-2 w-8 h-8 rounded-full bg-blue-b flex justify-center items-center hover:bg-blue-c hover:scale-110"><a href="https://www.instagram.com/YESWATERLA/" target="_blank" class="fill-white fill-white"><svg class="w-4 h-4"><use xlink:href="#inst"></use></svg></a></li> <li class="w-8 h-8 rounded-full bg-blue-b flex justify-center items-center hover:bg-blue-c hover:scale-110"><a href="https://twitter.com/" target="_blank" class="scale-110"><svg class="w-4 h-4 fill-white"><use xlink:href="#x"></use></svg></a></li></ul></div></div> <div class="p-4"><div><img${add_attribute("src", logo, 0)} alt="" class="w-[200px] h-[52px] object-cover"></div> <div><img${add_attribute("src", qr, 0)} alt="" class="w-[200px] h-[200px] object-cover"></div></div></div> <div class="border-t border-slate-400/10 p-2"><p class="text-sm text-white">Copyright ©2023 YesWater. All rights reserved.</p></div></div></div></footer>`;
});
const LandingPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main>${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(Features, "Features").$$render($$result, {}, {}, {})} ${validate_component(Products, "Products").$$render($$result, {}, {}, {})} ${validate_component(Service, "Service").$$render($$result, {}, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})}    </main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LandingPage, "LandingPage").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
