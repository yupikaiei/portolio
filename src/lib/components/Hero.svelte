<script>
    import AnimatedContainer from "./AnimatedContainer.svelte";

</script>
<AnimatedContainer>
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <div class="avatar">
        <div class="w-64 rounded-full mb-10">
          <img src="me.svg" />
        </div>
      </div>
      <h1 class="text-5xl font-bold">Hello I'm Magno</h1>
      <p class="py-6">
        A multidisciplinary <span class="text-secondary">software engineer</span> with a passion for creating
        engaging, entertaining user experiences. ✨ Currently working at
        <span class="text-secondary">Accenture Song</span> as a Creative Technologist. 👩🏻‍💻
      </p>
      <p class="scroll-down-text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
          class="animated-arrow"
          ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <style>
            svg {
              fill: #ffffff;
            }
          </style><path
            d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
          /></svg
        >
      </p>
      <!-- <button class="btn btn-primary">Get Started</button> -->
    </div>
  </div>
</div>
</AnimatedContainer>

<style>
  .scroll-down-text {
    position: relative;
    text-align: center;
    padding-top: 20vh;
    font-family: "Nanum Pen Script", "cursive";
    font-size: 23px;
    color: #e96269;
    z-index: -11;
    width: 100%;
    place-content: center;
    display: grid;
  }

  .animated-arrow {
    -webkit-animation-duration: 0.8s;
    animation-duration: 0.8s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-transform-origin: bottom;
    transform-origin: bottom;
    -webkit-animation-name: bounce;
    animation-name: bounce;
    -webkit-animation-timing-function: ease;
    animation-timing-function: ease;
  }

  @-webkit-keyframes bounce {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    50% {
      -webkit-transform: translateY(10px);
      transform: translateY(10px);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  @keyframes bounce {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    50% {
      -webkit-transform: translateY(10px);
      transform: translateY(10px);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

</style>
