<script>
  /* Open when someone clicks on the span element */
  function openNav() {
    document.getElementById("mobileNav").style.width = "75%";
  }
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("mobileNav").style.width = "0%";
  }

  export let currentView = "Home";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  const updateContent = (view) => {
    currentView = view;
    dispatch("viewChange", view);
    closeNav();
  };
</script>

<div id="mobileNav" class="overlay">
  <!-- Button to close the overlay navigation -->
  <a
    class="closebtn"
    on:click={closeNav}
    role="button"
    aria-label="Close navigation"
    href="#">&times;</a
  >
  <!-- Overlay content -->
  <div class="overlay-content">
    <a
      href="#"
      role="button"
      on:click|preventDefault={() => updateContent("Home")}>Home</a
    >
    <a
      href="#"
      role="button"
      on:click|preventDefault={() => updateContent("Experiences")}
      >Experiences</a
    >
    <a
      href="#"
      role="button"
      on:click|preventDefault={() => updateContent("Contact")}>Contact</a
    >
  </div>
</div>

<!-- Use any element to open/show the overlay navigation menu -->

<button on:click={openNav} class="hidden-broswer mobileBar"> Menu </button>

<header>
  <br class="hidden-mobile" />
  <h1>Scott Topping</h1>
  <h4>Junior Software Engineer</h4>
</header>

<div class="hidden-mobile">
  <ul class="nav">
    <li>
      <a
        href="#"
        role="button"
        on:click|preventDefault={() => updateContent("Home")}>Home</a
      >
    </li>
    <li>
      <a
        href="#"
        role="button"
        on:click|preventDefault={() => updateContent("Experiences")}
        >Experiences</a
      >
    </li>
    <li>
      <a
        href="#"
        role="button"
        on:click|preventDefault={() => updateContent("Contact")}>Contact</a
      >
    </li>
  </ul>
</div>

<style>
  * {
    font-family: monospace;
  }

  header {
    font-size: 25px;
  }
  header > h1 {
    margin: 2px;
  }

  .nav {
    background-color: rgb(126, 126, 126);
    border-radius: 25px;
    list-style: none;
    margin: auto;
    width: 60%;
    max-width: 800px;
    margin-bottom: 75;
    padding: 0;
    text-align: center;
  }
  .nav li {
    display: inline;
    padding: 20px;
  }
  .nav a {
    display: inline-block;
    text-align: center;
    padding: 10px;
    text-decoration: none;
    font-size: 18;
    color: white;
  }

  .nav > li > a:hover:not(.active) {
    background-color: #b8b8b8;
    border-radius: 20px;
  }

  .active {
    font-size: 15px;
    background-color: #4463b8;
    border-radius: 20px;
    float: none;
  }

  .mobileBar {
    padding: 0px;
    margin: 0%;
    background-color: #0044fec7;
    border: 0px;
    width: 100%;
    height: 40px;
    border-radius: 5px;
  }
  .mobileMenuButton {
    font-size: 20px;
    padding: 0%;
    width: 50%;
    background-color: #4463b8;
    cursor: pointer;
    border: 0px;
    text-align: center;
    vertical-align: center;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* The Overlay (background) */
  .overlay {
    /* Height & width depends on how you want to reveal the overlay (see JS below) */
    height: 100%;
    width: 0;
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    background-color: rgb(0, 0, 0); /* Black fallback color */
    background-color: rgba(0, 0, 0, 0.9); /* Black w/opacity */
    overflow-x: hidden; /* Disable horizontal scroll */
    transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
  }

  /* Position the content inside the overlay */
  .overlay-content {
    position: relative;
    top: 25%; /* 25% from the top */
    width: 100%; /* 100% width */
    text-align: center; /* Centered text/links */
    margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
  }

  /* The navigation links inside the overlay */
  .overlay a {
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    color: #818181;
    display: block; /* Display block instead of inline */
    transition: 0.3s; /* Transition effects on hover (color) */
  }

  /* When you mouse over the navigation links, change their color */
  .overlay a:hover,
  .overlay a:focus {
    color: #f1f1f1;
  }

  /* Position the close button (top right corner) */
  .overlay .closebtn {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
  }

  /* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
  @media screen and (max-height: 450px) {
    .overlay a {
      font-size: 20px;
    }
    .overlay .closebtn {
      font-size: 40px;
      top: 15px;
      right: 35px;
    }
  }
  /*hide mobile */
  @media screen and (max-width: 450px) {
    .hidden-mobile {
      display: none;
    }
  }

  @media screen and (min-width: 450px) {
    .hidden-broswer {
      display: none;
    }
  }
</style>
