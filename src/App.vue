<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/about2">Duplicate About Page</router-link>
    <router-link to="/page3">Goto: Page 3</router-link>
    <router-link to="/page4">Goto: Page 4</router-link>
    <!-- <router-link to="/google" >Google Home</router-link> -->
    <!-- <router-link to="https://google.com">Google Home</router-link> -->
  </nav>

  <router-view />
</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

/* router-link.active-class {
  //your desired design when link is clicked
  font-weight: 700;
} */

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

/* nav a.router-link-exact-active {
  font-weight: bold;
  font-size: 14px;
  border: 5px solid blue;
  color: gold;
  background-color: transparent;
} */

nav a.router-link-active {  
  display: inline-block;
  background-color: transparent;
  color: gold;		
  margin: 5px 3px;  
  border: 8px solid blue; 
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 20px;

  font-size: 18px;
  font-weight: bold;
}

nav a.router-link-exact-active { 
  display: inline-block;
  background-color: transparent;
  color: gold;		
  margin: 5px 3px;  
  border: 8px solid blue; 
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 20px;

  font-size: 18px;
  font-weight: bold;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
  color: gold;
}

nav a:hover {
  background-color: gold;
  color: blue; 
}

nav a {
  display: inline-block;
  background-color: blue;
  color: gold;		
  margin: 5px 3px; 
  
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 20px;
}

/* nav a:first-of-type {
  border: 0;
} */
</style>