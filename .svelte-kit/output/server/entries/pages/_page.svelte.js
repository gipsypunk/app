import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const p1 = "/_app/immutable/assets/01.79625fb7.jpg";
const bg3 = "/_app/immutable/assets/bg-3.9a4d3865.png";
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
  return `<div class="px-4 py-4 bg-white rounded-3xl shadow-lg flex flex-col justify-center items-center md:flex-row md:flex-row-reverse"><div class="flex justify-center md:w-1/3"><img${add_attribute("src", FeedbackImage, 0)} alt="" class="w-[200px] h-[200px] rounded-full object-cover"></div> <div class="md:w-2/3"><div class="pl-2 flex flex-row items-center justify-between"><h1 class="text-blue-d text-3xl font-semibold">${escape(FeedbackClient)}</h1> <svg class="w-16 h-16 fill-slate-400"><use xlink:href="#quotation"></use></svg></div> <h3 class="p-2 text-xl text-blue-b">${escape(FeedbackClient)}</h3> <div class="bg-blue-a rounded-3xl"><p class="p-6 text-blue-d text-justify">${escape(FeedbackText)}</p></div></div></div>`;
});
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
const splide_min = "";
const Testimonials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="testimonials"><div class="bg-[linear-gradient(180deg,#FFFFFF_0%,#F3FAFF_100%)]"><div class="container max-w-7xl mx-auto p-6"><div class="flex flex-col items-center" data-svelte-h="svelte-1w74lx0"><h1 class="text-4xl font-display uppercase font-black text-blue-d text-center">What our <span class="text-blue-b">clients say</span></h1> <h3 class="text-xl text-blue-d">Testomonials</h3></div> <div class="">${validate_component(Feedback, "Feedback").$$render(
    $$result,
    {
      FeedbackClient: "Ariana Lavina",
      FeedbackClientJob: "Paramedic",
      FeedbackText: "After a year and a half of using the filter system, we noticed that really in the kettle does not form limescale (previously had to periodically clean, for the last year and a half - not once!). The quality is excellent, we recommend it to everyone we know",
      FeedbackImage: p1
    },
    {},
    {}
  )}</div></div></div> <div data-svelte-h="svelte-tbh040"><img${add_attribute("src", bg3, 0)} alt="" class="bg-[#F3FAFF]"></div></section>                             `;
});
const LandingPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main>     ${validate_component(Testimonials, "Testimonials").$$render($$result, {}, {}, {})}   </main> `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LandingPage, "LandingPage").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
