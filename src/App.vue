<template>
  <div>
    <!-- Header Section -->
    <div class="header">
      <h1></h1>
    </div>

    <!-- Navigation Buttons -->
    <div class="nav">
      <router-link to="/"></router-link>
      |
      <router-link to="/service"></router-link>
      
    </div>

    <!-- Page content will display here -->
    <router-view />

    <!-- Footer Section -->
    <div class="footer">
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.header {
  background-color: lightblue;
  padding: 10px;
  text-align: center;
}

.nav {
  text-align: center;
  margin: 20px 0;
}

.nav a {
  margin: 0 10px;
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.footer {
  background-color: lightgray;
  padding: 10px;
  text-align: center;
  margin-top: 20px;
}
</style>
