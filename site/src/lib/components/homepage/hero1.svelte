<div class="hero1">
    <img src="/plane.jpeg" alt="Hero">
    <div class="overlay1">
      <h1>Drones for the middle of nowhere</h1>
      <p>Democratising multi-day drones</p>
    </div>
</div>

<style lang="scss">

.hero1 {
  position: relative;
  height: 500px; /* Set the desired height of the hero section */
  overflow: hidden;
}

.hero1 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6); /* Adjust the alpha value for the desired overlay opacity */
  color: #fff; /* Set the text color */
}

.overlay1 h1 {
  font-size: 36px;
}

.overlay1 p {
  font-size: 20px;
}

</style>