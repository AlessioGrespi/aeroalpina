<script>
  import Footer from "$lib/components/footer.svelte";
import Hero1 from "$lib/components/homepage/hero1.svelte";
	import Infohero from "$lib/components/homepage/infohero.svelte";
	import Panelhero from "$lib/components/homepage/panelhero.svelte";
  import Navbar from "$lib/components/navbar.svelte";
</script>


<Navbar/>
<Hero1/>




<div class="hero">
    <div class="hero-content">
      <img src="/mountain1.jpg" alt="Hero 2">
      <div class="text">
        <h3>Mission</h3>
        <h1>Bringing multi-day drone endurance to the civilian market</h1>
        <p>Multi-day endurance is locked behind the walled-garden of military secrecy and government scale budgets. Not to mention the infrastructure and fuel required. For this reason we are developing platforms that can facilitate research, surveillance and conservation.</p>
      </div>
    </div>
</div>

<Panelhero/>
<Infohero/>

<section>
  <h1>We're not here to do drone logisitcs, we're here to loiter above the target</h1>
</section>

<Footer/>
<style>

section {
  justify-content: center;
}

.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px; /* Set the desired height of the hero section */
  overflow: hidden;
}

.hero-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Adjust the alpha value for the desired overlay opacity */
  color: #fff; /* Set the text color */
  padding: 0px;
}

.hero img {
  width: auto; /* Adjust the size of the image as needed */
  height: 100%; /* Preserve the image's aspect ratio */
}

.text {
  flex: 1;
  padding: 20px;
}

.text h1 {
  font-size: 36px;
}

.text p {
  font-size: 20px;
}

</style>