import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component, f as compute_rest_props, h as createEventDispatcher, i as spread, j as escape_attribute_value, k as escape_object } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
const logo$1 = "/_app/immutable/assets/logo_d.f6853263.png";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header id="header" class="absolute w-full z-50 max-w-[2048px] pt-4 pb-4" data-svelte-h="svelte-13ooxph"><div class="container max-w-7xl mx-auto px-6 py-6"><div><nav class="flex flex-row items-center justify-between"><a href="${escape(base, true) + "/"}" class="p-2"><img${add_attribute("src", logo$1, 0)} alt="" class="w-[200px] h-[52px] object-cover"></a> <ul class="hidden h-10 md:flex md:space-x-8 items-center"><li><a href="${escape(base, true) + "#home"}" class="el-10 text-blue-d hover:text-blue-b">Home</a></li> <li><a href="${escape(base, true) + "#products"}" class="el-10 text-blue-d hover:text-blue-b">Products</a></li> <li><a href="${escape(base, true) + "#service"}" class="el-10 text-blue-d hover:text-blue-b">Service</a></li> <li><a href="${escape(base, true) + "#about"}" class="el-10 text-blue-d hover:text-blue-b">About us</a></li> <li><a href="${escape(base, true) + "#testimonials"}" class="el-10 text-blue-d hover:text-blue-b">Testimonials</a></li> <li><a href="${escape(base, true) + "#contacts"}" class="el-10 text-blue-d hover:text-blue-b">Contact us</a></li></ul> <a href="tel:+14244386801" class="hidden md:flex px-8 py-3 bg-blue-b rounded-full text-white hover:bg-white hover:text-blue-b hover:border hover:border-blue-b">Call us</a> <button id="menu-btn" type="button" class="hamburger z-40 bg-blue-m/30 backdrop-blur-lg md:hidden focus:outline-none block"><input type="checkbox" name="" id=""> <span class=""></span> <span class=""></span> <span class=""></span> <span class=""></span></button></nav> <div id="r_nav" class="bg-slate-50 z-50 flex flex-col items-center rounded-3xl translate-x-1 hidden r_nav"><ul class="p-8 flex flex-col uppercase font-semibold"><li class="p-2"><a id="nav-link" href="${escape(base, true) + "#home"}" class="text-blue-d hover:text-blue-b nav-link">Home</a></li> <li class="p-2"><a id="nav-link" href="${escape(base, true) + "#products"}" class="text-blue-d hover:text-blue-b nav-link">Products</a></li> <li class="p-2"><a id="nav-link" href="${escape(base, true) + "#service"}" class="text-blue-d hover:text-blue-b nav-link">Service</a></li> <li class="p-2"><a id="nav-link" href="${escape(base, true) + "#about"}" class="text-blue-d hover:text-blue-b nav-link">About us</a></li> <li class="p-2"><a id="nav-link" href="${escape(base, true) + "#testimonials"}" class="text-blue-d hover:text-blue-b nav-link">Testimonials</a></li> <li class="p-2"><a id="nav-link" href="${escape(base, true) + "#contacts"}" class="text-blue-d hover:text-blue-b nav-link">Contact us</a></li></ul> <div class="p-8 flex justify-center items-center"><a href="tel:+14244386801" class="px-8 py-3 bg-blue-b rounded-full text-white hover:bg-white hover:text-blue-b hover:border hover:border-blue-b">Call us</a></div></div></div></div></header>`;
});
const glass = "/_app/immutable/assets/glass.e1d5833c.png";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="hero" class="pb-24 relative overflow-hidden" data-svelte-h="svelte-us55km"><div class="bg-blue-a"><div class="container max-w-7xl mx-auto p-6"><div class="pt-[100px] flex flex-col items-center md:flex-row-reverse"><div class="flex flex-col items-center md:w-2/4 md:justify-start animate-bounce2"><img${add_attribute("src", glass, 0)} alt="" class="w-[200px] h-[360px] md:w-[320px] md:h-[640px] object-cover"></div> <div class="pt-20 flex flex-col md:w-2/4 md:justify-end md:pr-8"><h1 class="p-2 text-blue-d font-display text-3xl font-black uppercase text-center md:text-8xl md:text-start">Enjoy <span class="text-blue-b">pure water </span><br>in your entire home</h1> <h3 class="text-blue-d text-center break-words md:text-xl md:text-start">We will install a water treatment system <br>within 2 hours after placing the order</h3> <div class="flex flex-row pt-4"><button class="btn m-2 bg-blue-b text-base border-0 text-white hover:bg-white hover:text-blue-b hover:border hover:border-blue-b w-36 rounded-[50px] shadow-3xl">Order now</button> <a href="#features" class="btn m-2 bg-white text-base text-blue-b font-semibold hover:bg-blue-b hover:text-white hover:border-none w-36 rounded-[50px] shadow-3xl">Read more</a></div></div></div></div></div> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="fill-blue-a rotate-180 mt-[-10px]"><path fill-opacity="1" d="M0,64L40,90.7C80,117,160,171,240,165.3C320,160,400,96,480,106.7C560,117,640,203,720,213.3C800,224,880,160,960,133.3C1040,107,1120,117,1200,138.7C1280,160,1360,192,1400,208L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg></section>`;
});
const glass2 = "/_app/immutable/assets/glass_2.ca5b1351.png";
const Features = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="features" class="pt-24 pb-24 relative overflow-hidden" data-svelte-h="svelte-gvvw99"><div class="container max-w-7xl mx-auto p-6"><div class="flex flex-col items-center md:flex-row "><div class="flex flex-col items-center md:w-1/3"><h1 class="text-blue-d font-display text-4xl font-black uppercase text-center">Why you <br>should filter <br><span class="text-blue-b">your water</span>?</h1> <img${add_attribute("src", glass2, 0)} alt="" class="w-72 h-80"></div> <div class="flex flex-col justify-center items-center md:flex-row md:flex-wrap md:w-2/3"><div class="bg-blue-a w-[340px] h-[340px] rounded-3xl m-2 shadow-xl"><div class="p-8"><h3 class="text-blue-d font-display text-4xl font-black">1.</h3> <h1 class="text-blue-d text-2xl font-bold">Soft water means <br>there is no sedimen</h1> <p class="text-blue-d text-justify pt-2">By using water purification systems, you soften your water by stripping it of calcium and magnesium. The hardness is reduced by 80-90%, avoiding limescale deposits on plumbing fixtures and limescale in the kettle.</p></div></div> <div class="bg-blue-a w-[340px] h-[340px] rounded-3xl m-2 shadow-xl"><div class="p-8"><h3 class="text-blue-d font-display text-4xl font-black">2.</h3> <h1 class="text-blue-d text-2xl font-bold">Delicious filtered <br>water is possible</h1> <p class="text-blue-d text-justify pt-2">Filtered water is tasty and also devoid of the unpleasant chlorine odor, which has the effect of improving the taste of your morning coffee or tea.</p></div></div> <div class="bg-blue-a w-[340px] h-[340px] rounded-3xl m-2 shadow-xl"><div class="p-8"><h3 class="text-blue-d font-display text-4xl font-black">3.</h3> <h1 class="text-blue-d text-2xl font-bold">Filtered water is a <br>concern for nature</h1> <p class="text-blue-d text-justify pt-2">Using water filters, you protect the environment and leave it clean for future generations, even if only because you don&#39;t buy plastic bottles that have been laid out for several hundred years.</p></div></div> <div class="bg-blue-a w-[340px] h-[340px] rounded-3xl m-2 shadow-xl"><div class="p-8"><h3 class="text-blue-d font-display text-4xl font-black">4.</h3> <h1 class="text-blue-d text-2xl font-bold">The end of <br> chlorinated water</h1> <p class="text-blue-d text-justify pt-2">The water filter that we will supply will purify the water and get rid of the unpleasant taste of bleach.</p></div> <div class="flex flex-row justify-end p-8"><a href="" class="text-end text-blue-b hover:text-blue-d">Order the installation</a></div></div></div></div></div></section>`;
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
  return `<div class="w-[280px] h-[420px] rounded-3xl bg-white flex flex-col items-center drop-shadow-2xl justify-between m-2"><div class="flex flex-col items-center"><img${add_attribute("src", ProductImage, 0)} alt="" class="w-56 h-40 p-2"> <h1 class="text-blue-d text-center p-4">${escape(ProductTitle)}</h1></div> <div class="flex flex-row p-2" data-svelte-h="svelte-hd8tbz"><svg class="w-4 h-4 fill-blue-b"><use xlink:href="#start"></use></svg> <svg class="w-4 h-4 fill-blue-b"><use xlink:href="#start"></use></svg> <svg class="w-4 h-4 fill-blue-b"><use xlink:href="#start"></use></svg> <svg class="w-4 h-4 fill-blue-b"><use xlink:href="#start"></use></svg> <svg class="w-4 h-4 fill-blue-b"><use xlink:href="#start"></use></svg></div> <div class="flex flex-col items-center p-4"><h3 class="text-blue-d text-2xl font-semibold p-4">${escape(ProductPrice)}</h3> <button class="px-8 btn bg-white border-blue-b rounded-full text-base text-blue-b hover:text-white hover:bg-blue-b md:hover:border-none " data-svelte-h="svelte-1i34irk">Order now</button></div></div>`;
});
const f1 = "/_app/immutable/assets/Filter2.82ec7bf7.jpg";
const f2 = "/_app/immutable/assets/UVFilter.95e89318.jpg";
const f3 = "/_app/immutable/assets/Coarse.40a60222.jpg";
const f4 = "/_app/immutable/assets/Disinfection.c7559507.jpg";
const f5 = "/_app/immutable/assets/ReverseOsmosis.e166af52.jpg";
const f6 = "/_app/immutable/assets/WaterSoftener.64121b5b.jpg";
const f7 = "/_app/immutable/assets/WholeHouse.b9c5bf25.png";
const Products = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="products" class="bg-product-pattern bg-no-repeat bg-center pt-24 pb-24 relative overflow-hidden"><div class="container max-w-7xl mx-auto p-6"><div class="flex flex-col items-center text-justify p-6" data-svelte-h="svelte-1hrpvqm"><h1 class="text-blue-d font-display text-4xl font-black uppercase text-center">Choose your <span class="text-blue-b">water filter</span></h1></div> <div class="flex flex-col justify-between items-center md:flex-row md:flex-wrap md:justify-center">${validate_component(ProductCard, "ProductCard").$$render(
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
  return `<section id="service" class="pt-24 pb-24 relative overflow-hidden" data-svelte-h="svelte-1vxh2s0"><div><div class="container max-w-7xl mx-auto p-6"><div class="flex flex-col items-center"><h1 class="text-4xl font-display uppercase font-black text-blue-d"><span class="text-blue-b">Our</span> service</h1> <p class="pt-8 text-blue-d text-xl text-center">Customers renew their commitment every time they pay their bill, and YesWater strives to return that loyalty with superior service, genuine gratitude and a warm smile during every interaction.</p></div> <div class="mt-8 flex flex-col justify-center items-center md:flex-row"><div class="w-[320px] h-[420px] border border-blue-d rounded-3xl px-6 py-6 flex flex-col m-4"><div><h1 class="text-blue-d font-semibold text-xl pt-2">Basic</h1> <h3 class="text-blue-d font-semibold text-8xl pt-2">$199</h3> <button class="btn w-[100%] rounded-[50px] border-none bg-blue-d text-white mt-2">Order now</button></div> <div class="mt-12"><div class="flex flex-rot items-center pt-2"><svg class="w-4 h-4 fill-blue-d"><use xlink:href="#checkmark"></use></svg> <h3 class="text-blue-d font-semibold pl-4">Two years of service</h3></div> <div class="flex flex-rot items-center pt-2"><svg class="w-4 h-4 fill-blue-d"><use xlink:href="#checkmark"></use></svg> <h3 class="text-blue-d font-semibold pl-4">Two years of service</h3></div> <div class="flex flex-rot items-center pt-2"><svg class="w-4 h-4 fill-blue-d"><use xlink:href="#checkmark"></use></svg> <h3 class="text-blue-d font-semibold pl-4">Two years of service</h3></div></div></div> <div class="w-[320px] h-[520px] border bg-blue-d rounded-3xl px-6 py-6 flex flex-col m-4"><div><div class="flex flex-row items-center"><svg class="w-6 h-6 fill-gold"><use xlink:href="#crown"></use></svg> <h1 class="text-white font-black text-xl pt-2 pl-4">Advanced</h1></div> <h3 class="text-white font-semibold text-8xl pt-2">$299</h3> <button class="btn w-[100%] rounded-[50px] border-none bg-white text-blue-d mt-2">Order now</button></div> <div class="mt-12 flex flex-col items-center"><div class="flex flex-rot items-center pt-2"><svg class="w-4 h-4 fill-white"><use xlink:href="#checkmark"></use></svg> <h3 class="text-white font-semibold pl-4">Two years of service</h3></div> <div class="flex flex-rot items-center pt-2"><svg class="w-4 h-4 fill-white"><use xlink:href="#checkmark"></use></svg> <h3 class="text-white font-semibold pl-4">Two years of service</h3></div> <div class="flex flex-rot items-center pt-2"><svg class="w-4 h-4 fill-white"><use xlink:href="#checkmark"></use></svg> <h3 class="text-white font-semibold pl-4">Two years of service</h3></div> <div class="flex flex-rot items-center pt-2"><svg class="w-4 h-4 fill-white"><use xlink:href="#checkmark"></use></svg> <h3 class="text-white font-semibold pl-4">Two years of service</h3></div> <div class="flex flex-rot items-center pt-2"><svg class="w-4 h-4 fill-white"><use xlink:href="#checkmark"></use></svg> <h3 class="text-white font-semibold pl-4">Two years of service</h3></div></div></div> <div class="w-[320px] h-[420px] border border-blue-d rounded-3xl px-6 py-6 flex flex-col m-4"><div><h1 class="text-blue-d font-semibold text-xl pt-2">Standart</h1> <h3 class="text-blue-d font-semibold text-8xl pt-2">$99</h3> <button class="btn w-[100%] rounded-[50px] border-none bg-blue-d text-white mt-2">Order now</button></div> <div class="mt-12"><div class="flex flex-rot items-center pt-2"><svg class="w-4 h-4 fill-blue-d"><use xlink:href="#checkmark"></use></svg> <h3 class="text-blue-d font-semibold pl-4">Two years of service</h3></div> <div class="flex flex-rot items-center pt-2"><svg class="w-4 h-4 fill-blue-d"><use xlink:href="#checkmark"></use></svg> <h3 class="text-blue-d font-semibold pl-4">Two years of service</h3></div> <div class="flex flex-rot items-center pt-2"><svg class="w-4 h-4 fill-blue-d"><use xlink:href="#checkmark"></use></svg> <h3 class="text-blue-d font-semibold pl-4">Two years of service</h3></div></div></div></div></div></div></section>`;
});
const bg2 = "/_app/immutable/assets/bg-2.f0ca9d74.png";
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="about" class="pt-24 pb-24 relative overflow-hidden" data-svelte-h="svelte-x9xqo6"><div><img${add_attribute("src", bg2, 0)} alt="" class="bg-blue-a rotate-180"></div> <div class="bg-blue-a"><div class="container max-w-7xl mx-auto p-6"><div class="flex flex-col items-center text-justify"><h1 class="text-4xl font-display uppercase font-black text-blue-d"><span class="text-blue-b">Our</span> story</h1> <p class="pt-8 text-blue-d text-justify">We are a vibrant, young, dynamic and multicultural company. Our priority goal is to make clean water accessible to everyone.
                    Customers place their trust in YesWater&#39;s ability to solve their water treatment needs, so it is important to return that trust by always exceeding their expectations. The YesWater will never get a second chance to make a good first impression, so the team ensures that they take care of the customer’s needs from the very beginning.
                    Customers renew their commitment every time they pay their bill, and YesWater strives to return that loyalty with superior service, genuine gratitude and a warm smile during every interaction.</p></div> <div class="pt-8 flex flex-col items-center text-justify"><h1 class="text-4xl font-display uppercase font-black text-blue-d">How we <span class="text-blue-b">work</span></h1> <div class="pt-8 flex flex-wrap justify-center"><div class="p-2"><div class="element-10 bg-white w-36 h-36 rounded-full flex justify-center items-center md:w-48 md:h-48"><svg class="w-20 h-20 fill-cyan-600 md:w-30 md:h-30"><use xlink:href="#order"></use></svg></div> <h3 class="text-blue-d font-display uppercase text-sm text-center pt-2 md:text-base">Make your order <br>on our site</h3></div> <div class="p-2"><div class="element-10 bg-white w-36 h-36 rounded-full flex justify-center items-center md:w-48 md:h-48"><svg class="w-20 h-20 fill-pink-400 md:w-30 md:h-30"><use xlink:href="#confirm"></use></svg></div> <h3 class="text-blue-d font-display uppercase text-sm text-center pt-2 md:text-base">We confirm <br>your order</h3></div> <div class="p-2"><div class="element-10 bg-white w-36 h-36 rounded-full flex justify-center items-center md:w-48 md:h-48"><svg class="w-20 h-20 fill-indigo-500 md:w-30 md:h-30"><use xlink:href="#car"></use></svg></div> <h3 class="text-blue-d font-display uppercase text-sm text-center pt-2 md:text-base">Our engineer will come <br> to you super fast</h3></div> <div class="p-2"><div class="element-10 bg-white w-36 h-36 rounded-full flex justify-center items-center md:w-48 md:h-48"><svg class="w-20 h-20 fill-blue-700 md:w-30 md:h-30"><use xlink:href="#filter2"></use></svg></div> <h3 class="text-blue-d font-display uppercase text-sm text-center pt-2 md:text-base">Installation takes <br> from 30-60 minutes</h3></div> <div class="p-2"><div class="element-10 bg-white w-36 h-36 rounded-full flex justify-center items-center md:w-48 md:h-48"><svg class="w-20 h-20 fill-sky-400 md:w-30 md:h-30"><use xlink:href="#water"></use></svg></div> <h3 class="text-blue-d font-display uppercase text-sm text-center pt-2 md:text-base">Done  now you can<br>enjoy clean water <br>every day</h3></div></div></div></div></div> <div><img${add_attribute("src", bg2, 0)} alt="" class="bg-blue-a"></div></section>`;
});
const p1 = "/_app/immutable/assets/01.3e3e4113.jpg";
const p2 = "/_app/immutable/assets/02.087e1bc7.jpg";
const p3 = "/_app/immutable/assets/03.cf46bc87.jpg";
const p4 = "/_app/immutable/assets/04.11a27d27.jpg";
const p5 = "/_app/immutable/assets/05.07889f52.png";
const p6 = "/_app/immutable/assets/06.3f6fd029.jpg";
const bg3 = "/_app/immutable/assets/bg-3.51b358fd.png";
const Feedback = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { FeedbackImage = "" } = $$props;
  let { FeedbackClient = "" } = $$props;
  let { FeedbackClientJob = "" } = $$props;
  let { FeedbackText = "" } = $$props;
  if ($$props.FeedbackImage === void 0 && $$bindings.FeedbackImage && FeedbackImage !== void 0)
    $$bindings.FeedbackImage(FeedbackImage);
  if ($$props.FeedbackClient === void 0 && $$bindings.FeedbackClient && FeedbackClient !== void 0)
    $$bindings.FeedbackClient(FeedbackClient);
  if ($$props.FeedbackClientJob === void 0 && $$bindings.FeedbackClientJob && FeedbackClientJob !== void 0)
    $$bindings.FeedbackClientJob(FeedbackClientJob);
  if ($$props.FeedbackText === void 0 && $$bindings.FeedbackText && FeedbackText !== void 0)
    $$bindings.FeedbackText(FeedbackText);
  return `<div class="px-4 py-4 mb-20 mt-20 bg-white rounded-3xl shadow-lg flex flex-col justify-center items-center md:flex-row md:flex-row-reverse"><div class="flex justify-center md:w-1/3"><img${add_attribute("src", FeedbackImage, 0)} alt="" class="w-[200px] h-[200px] rounded-full object-cover"></div> <div class="md:w-2/3"><div class="pl-2 flex flex-row items-center justify-between"><h1 class="text-blue-d text-3xl font-semibold">${escape(FeedbackClient)}</h1> <svg class="w-16 h-16 fill-slate-400"><use xlink:href="#quotation"></use></svg></div> <h3 class="p-2 text-xl text-blue-b">${escape(FeedbackClientJob)}</h3> <div class="bg-blue-a rounded-3xl"><p class="p-6 text-blue-d text-justify">${escape(FeedbackText)}</p></div></div></div>`;
});
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function forOwn(object, iteratee) {
  if (object) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }
  return object;
}
function isObject(subject) {
  return subject !== null && typeof subject === "object";
}
function isEqualDeep(subject1, subject2) {
  if (Array.isArray(subject1) && Array.isArray(subject2)) {
    return subject1.length === subject2.length && !subject1.some((elm, index) => !isEqualDeep(elm, subject2[index]));
  }
  if (isObject(subject1) && isObject(subject2)) {
    const keys1 = Object.keys(subject1);
    const keys2 = Object.keys(subject2);
    return keys1.length === keys2.length && !keys1.some((key) => {
      return !Object.prototype.hasOwnProperty.call(subject2, key) || !isEqualDeep(subject1[key], subject2[key]);
    });
  }
  return subject1 === subject2;
}
function merge(object, source) {
  const merged = object;
  forOwn(source, (value, key) => {
    if (Array.isArray(value)) {
      merged[key] = value.slice();
    } else if (isObject(value)) {
      merged[key] = merge(isObject(merged[key]) ? merged[key] : {}, value);
    } else {
      merged[key] = value;
    }
  });
  return merged;
}
function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}
function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}
function typeOf(type, subject) {
  return typeof subject === type;
}
apply(typeOf, "function");
apply(typeOf, "string");
apply(typeOf, "undefined");
const Splide_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "options", "splide", "extensions", "transition", "hasTrack", "go", "sync"]);
  let { class: className = void 0 } = $$props;
  let { options = {} } = $$props;
  let { splide = void 0 } = $$props;
  let { extensions = void 0 } = $$props;
  let { transition = void 0 } = $$props;
  let { hasTrack = true } = $$props;
  createEventDispatcher();
  let root;
  let prevOptions = merge({}, options);
  function go(control) {
    splide?.go(control);
  }
  function sync(target) {
    splide?.sync(target);
  }
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.splide === void 0 && $$bindings.splide && splide !== void 0)
    $$bindings.splide(splide);
  if ($$props.extensions === void 0 && $$bindings.extensions && extensions !== void 0)
    $$bindings.extensions(extensions);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.hasTrack === void 0 && $$bindings.hasTrack && hasTrack !== void 0)
    $$bindings.hasTrack(hasTrack);
  if ($$props.go === void 0 && $$bindings.go && go !== void 0)
    $$bindings.go(go);
  if ($$props.sync === void 0 && $$bindings.sync && sync !== void 0)
    $$bindings.sync(sync);
  {
    if (splide && !isEqualDeep(prevOptions, options)) {
      splide.options = options;
      prevOptions = merge({}, prevOptions);
    }
  }
  return ` <div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", root, 0)}>${hasTrack ? `${validate_component(SplideTrack, "SplideTrack").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${slots.default ? slots.default({}) : ``}`}</div>`;
});
const SplideTrack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__track", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}><ul class="splide__list">${slots.default ? slots.default({}) : ``}</ul></div>`;
});
const SplideSlide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<li${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__slide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</li>`;
});
const splide_min = "";
const Testimonials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="testimonials" class="pt-24 pb-24 relative overflow-hidden "><div class="bg-[linear-gradient(180deg,#FFFFFF_0%,#F3FAFF_100%)]"><div class="container max-w-7xl mx-auto p-6"><div class="flex flex-col max-h-max mr-auto ml-auto relative"><div class="flex flex-col items-center" data-svelte-h="svelte-1s25rlg"><h1 class="text-4xl font-display uppercase font-black text-blue-d text-center">What our <span class="text-blue-b">clients say</span></h1> <h3 class="text-xl text-blue-d">Testomonials</h3></div> ${validate_component(Splide_1, "Splide").$$render(
    $$result,
    {
      class: "flex items-center",
      options: {
        type: "loop",
        padding: "10rem",
        gap: "12rem",
        breakpoints: { 768: { arrows: false, padding: "1rem" } }
      }
    },
    {},
    {
      default: () => {
        return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Feedback, "Feedback").$$render(
              $$result,
              {
                FeedbackClient: "Ariana Lavina",
                FeedbackClientJob: "Paramedic",
                FeedbackText: "After a year and a half of using the filter system, we noticed that really in the kettle does not form limescale (previously had to periodically clean, for the last year and a half - not once!). The quality is excellent, we recommend it to everyone we know",
                FeedbackImage: p1
              },
              {},
              {}
            )}`;
          }
        })} ${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Feedback, "Feedback").$$render(
              $$result,
              {
                FeedbackClient: "Kieran Chesley",
                FeedbackClientJob: "Electrical Engineer",
                FeedbackText: "We bought from an online store many years ago. Not a single complaint since then.\n                            I am thrilled with YesWater. Just one call for a filter change and they greet you by name, know your address, and even give you recommendations for filter life. Quick, easy, convenient.\n                            The service is top notch! Thank you, YesWater. It's a cozy experience with you.",
                FeedbackImage: p2
              },
              {},
              {}
            )}`;
          }
        })} ${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Feedback, "Feedback").$$render(
              $$result,
              {
                FeedbackClient: "Celina Annelies",
                FeedbackClientJob: "Art Director",
                FeedbackText: "Ease of placing an order on the website.\n                            Since I buy a set of spare parts for water filters for a year, the free shipping after a certain amount was a nice addition. Good store, all spare parts for filtration systems are available.",
                FeedbackImage: p3
              },
              {},
              {}
            )}`;
          }
        })} ${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Feedback, "Feedback").$$render(
              $$result,
              {
                FeedbackClient: "Reilly Raven",
                FeedbackClientJob: "Mechanical Engineer ",
                FeedbackText: "Politeness and initiative of the operator in the online store, who quickly checked the availability of goods, advised the most optimal set of filters for four-stage purification. We agreed with the manager in an hour came to install. Thank you YesWater",
                FeedbackImage: p4
              },
              {},
              {}
            )}`;
          }
        })} ${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Feedback, "Feedback").$$render(
              $$result,
              {
                FeedbackClient: "Ismael Virgilio",
                FeedbackClientJob: "Digital Mrketer ",
                FeedbackText: "Everything is good, we have changed filters for the 3rd time, no complaints, ordered, called back - set the day of delivery, always on time. Helped to choose filters, came to install for free. Thank you to your team.",
                FeedbackImage: p5
              },
              {},
              {}
            )}`;
          }
        })} ${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Feedback, "Feedback").$$render(
              $$result,
              {
                FeedbackClient: "Kathlyn Evonne",
                FeedbackClientJob: "Childcare worker",
                FeedbackText: "The store has a great CRM. You don't have to explain who you are and what you need every time. They remember better than me when I installed the filter, what model, even though it's been 5+ years. And when you call to check on your order for a new filter, you don't have to identify yourself or frantically search for the order number. Installation of the filter without any imposition of extras. The installer is competent and experienced.",
                FeedbackImage: p6
              },
              {},
              {}
            )}`;
          }
        })}`;
      }
    }
  )}</div></div></div> <div data-svelte-h="svelte-tbh040"><img${add_attribute("src", bg3, 0)} alt="" class="bg-[#F3FAFF]"></div></section>                             `;
});
const Counter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="counter" class="pt-24 pb-24 relative overflow-hidden" data-svelte-h="svelte-1ugisc3"><div class="container max-w-7xl mx-auto"><div id="#counter-container" class="flex flex-col justify-between items-center md:flex-row"><div class="p-8 flex flex-col items-center"><div class="flex flex-row text-blue-600 text-10xl font-black font-display"><span class="counter-value" data-target="1385">0000</span></div> <h3 class="text-3xl font-black text-blue-600">Installed filters</h3></div> <div class="p-8 flex flex-col items-center"><div class="flex flex-row text-pink-400 text-10xl font-black font-display"><span class="counter-value text-10xl" data-target="3">000</span></div> <h3 class="text-3xl font-black text-pink-400">Years of successful work</h3></div> <div class="p-8 flex flex-col items-center"><div class="flex flex-row text-indigo-500 text-10xl font-black font-display"><span class="counter-value text-10xl" data-target="99">00</span> <span class="counter-sign ">%</span></div> <h3 class="text-3xl font-black text-indigo-500">Happy custumers</h3></div></div></div></section>`;
});
const Contacts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="contacts" class="pt-24 pb-24 relative overflow-hidden" data-svelte-h="svelte-mm5p92"><div class="container max-w-7xl mx-auto p-6"><div class="flex flex-col md:flex-row items-center"><div class="md:w-2/4"><h1 class="text-blue-d font-display text-4xl font-black uppercase text-center">Contact us if you <br>still have <span class="text-blue-b">questions</span>?</h1></div> <div class="md:w-2/4 mt-8"><div class="flex float-right pt-4 pb-4"><a href="" class="px-6 py-4 bg-blue-b shadow-2xl text-white text-4xl rounded-message md:text-6xl md:px-12">info@yeswater.la</a></div> <div class="flex float-left pt-4 pb-4"><a href="tel:+14244386801" class="px-6 py-4 bg-blue-d shadow-2xl text-white text-4xl rounded-message_2 md:text-6xl md:px-12">424.438.6801</a></div></div></div></div></section>`;
});
const logo = "/_app/immutable/assets/logo_l.e2569739.png";
const qr = "/_app/immutable/assets/qr.5ea3aba2.png";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer id="footer" data-svelte-h="svelte-10ntgre"><svg class="fill-blue-d mb-[-4px]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 184"><path class="f-bg-wave" d="M1285.4,81.2c-34,12.5-98.3,33.1-186.9,39.8c-230.8,17.6-274.8-85-472.8-71.3
		c-182,12.6-219.4,104.5-345.3,65.2C237.9,101.6,177,70.7,91.6,81.2c-31.7,4-62.6,13-91.6,26.6V184h1440V0
		C1392.2,33.7,1340.3,61,1285.4,81.2z"></path></svg> <div class="bg-blue-d"><div class="container max-w-7xl mx-auto p-6"><div class="flex flex-col justify-between md:flex-row"><div class="p-4"><h3 class="text-2xl font-semibold text-white"><strong><span class="text-blue-b text-3xl">|</span></strong> Menu</h3> <ul class="text-white"><li class="pt-2"><a href="${escape(base, true) + "/"}" class="menu-link hover:text-blue-b transition-colors">Home</a></li> <li class="pt-2"><a href="${escape(base, true) + "#products"}" class="menu-link hover:text-blue-b transition-colors">Producs</a></li> <li class="pt-2"><a href="${escape(base, true) + "#service"}" class="menu-link hover:text-blue-b transition-colors">Service</a></li> <li class="pt-2"><a href="${escape(base, true) + "#about"}" class="menu-link hover:text-blue-b transition-colors">About us</a></li> <li class="pt-2"><a href="${escape(base, true) + "#contacts"}" class="menu-link hover:text-blue-b transition-colors">Contact us</a></li></ul></div> <div class="p-4"><div><h3 class="text-2xl font-semibold text-white"><strong><span class="text-blue-b text-3xl">|</span></strong> Contact us</h3> <div class="text-white"><p class="pt-2">Wilshire Blvd #1600 Los Angeles, CA 90024</p> <p class="pt-2">Call us: 
                                <a href="tel:+14244386801" class="hover:text-blue-b font-semibold">424.438.6801</a></p></div></div> <div class="pt-8"><h3 class="text-2xl font-semibold text-white"><strong><span class="text-blue-b text-3xl">|</span></strong> Social links</h3> <ul class="flex space-x-2 pt-2"><li class="p-2 w-8 h-8 rounded-full bg-blue-b flex justify-center items-center hover:bg-blue-c hover:scale-110"><a href="https://www.facebook.com/YESWaterSoCal" target="_blank" class="scale-110"><svg class="w-4 h-4 fill-white"><use xlink:href="#fb"></use></svg></a></li> <li class="p-2 w-8 h-8 rounded-full bg-blue-b flex justify-center items-center hover:bg-blue-c hover:scale-110"><a href="https://www.instagram.com/YESWATERLA/" target="_blank" class="fill-white fill-white"><svg class="w-4 h-4"><use xlink:href="#inst"></use></svg></a></li> <li class="w-8 h-8 rounded-full bg-blue-b flex justify-center items-center hover:bg-blue-c hover:scale-110"><a href="https://twitter.com/" target="_blank" class="scale-110"><svg class="w-4 h-4 fill-white"><use xlink:href="#x"></use></svg></a></li></ul></div></div> <div class="p-4"><div><img${add_attribute("src", logo, 0)} alt="" class="w-[200px] h-[52px] object-cover"></div> <div><img${add_attribute("src", qr, 0)} alt="" class="w-[200px] h-[200px] object-cover"></div></div></div> <div class="border-t border-slate-400/10 p-2"><p class="text-sm text-white">Copyright ©2023 YesWater. All rights reserved.</p></div></div></div></footer>`;
});
const LandingPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main>${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(Features, "Features").$$render($$result, {}, {}, {})} ${validate_component(Products, "Products").$$render($$result, {}, {}, {})} ${validate_component(Service, "Service").$$render($$result, {}, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(Counter, "Counter").$$render($$result, {}, {}, {})} ${validate_component(Testimonials, "Testimonials").$$render($$result, {}, {}, {})} ${validate_component(Contacts, "Contacts").$$render($$result, {}, {}, {})}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LandingPage, "LandingPage").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
