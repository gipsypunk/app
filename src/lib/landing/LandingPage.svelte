<script>


    import Header from '$component/Header/Header.svelte';
	
	import Hero from './Hero.svelte';
	import Features from './Features.svelte';
    import Products from './Products.svelte'
    import Service from './Service.svelte';
    import About from './About.svelte';
    import Testimonials from './Testimonials.svelte';
    import Counter from './Counter.svelte'
	import CallToAction from './CallToAction.svelte';
    import Contacts from './Contacts.svelte'




    import Footer from '$component/Footer/Footer.svelte'
    
    import Modal from '$component/Modal/Modal.svelte';
    import Form from '$component/Form/Form.svelte';


</script>




<Header/>
<main>
    <Hero/>
    <Features/>  
    <Products/>  
    <Service/>  
    <About/>  
    <Counter/>
    <Testimonials/>   
    <Contacts/> 



</main>
<Modal/> 
<Footer/>


