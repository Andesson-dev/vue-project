<script>
export default {   
  name: "OrderSection",
};
</script>

<template>
 
  <div class="container">
    
    <header>
      <div class="principal">
        <div class="logo">
          <a href="#">Kyler<span>A</span></a>
        </div>
      <div>
    <router-view>
      <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/service">Service</router-link></li>

          <li><router-link to="/contact">ContactUs</router-link></li>
          <li><router-link to="/about">AboutUs</router-link></li>
          <li><router-link to="/pokemon">Pokemon</router-link></li>
          
      </ul>
    </router-view>
  </div>
       

      <div class="header-image">
      <img src="/download (1).png" alt="Header Image" />
    </div>
    <div class="hide">
      <ul>
       
          <li><a href="#">parameter</a></li>
          <li><a href="#">Phone</a></li>
          <li><a href="#">Book</a></li>
      </ul>
    </div>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <div class="main-box">
        <div class="order-box">
          <video controls>
            <source src="/Maou Gakuin no Futekigousha S2 07 VF_compress.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="order-box">
          <video controls>
            <source src="/Maou Gakuin no Futekigousha S2 08 VF_compress.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="order-box">
          <video controls>
            <source src="/Maou Gakuin no Futekigousha S2 09 VF_compress.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="order-box">
          <video controls>
            <source src="/Maou Gakuin no Futekigousha S2 10 VF_compress.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="order-box">
          <video controls>
            <source src="/Maou Gakuin no Futekigousha S2 11 VF_compress.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="order-box">
          <video controls>
            <source src="/Maou Gakuin no Futekigousha S2 12 VF_compress.mp4" type="video/mp4" />
          </video>
        </div>
        <div>  
          <video controls>
            <source src="/video_2025-01-31_13-06-35.mp4" type="video/mp4" />
          </video>
        </div>
        <div>  
          <video controls>
            <source src="/video_2025-01-31_13-06-38.mp4" type="video/mp4" />
          </video>
        </div>
        <div>  
          <video controls>
            <source src="/video_2025-01-31_13-06-41.mp4" type="video/mp4" />
          </video>
        </div>
        <div>  
          <video controls>
            <source src="/video_2025-01-31_13-06-59.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </main>

  
    <footer>
    
      <div class="final">
        <div>
          <p class="book">
            Douala
          </p>
          <p>
            open every day<br>
            anderssonnguessong@gmail.com<br>
            logbessou
          </p>
        </div>
        <div>
          <p class="book">
            Yaounde
          </p>
          <p>
            open every day<br>
            nguessongandersson@gmail.com<br>
            bastos
          </p>
        </div>
        <div>
          <p class="book">
            Dschang
          </p>
          <p>
            open every day<br>
            anderssonnguessong@gmail.com<br>
            Foto
          </p>
        </div>
      </div>
      <div class="master">
        <p>&copy; 2024 KylerA. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}


html, body {
  height: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}



header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: blanchedalmond;
  z-index: 1000;
  padding: 10px 0;
}

.principal {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  position: relative;
}

ul {
  list-style: none;
  display: flex;
}

ul li a {
  text-decoration: none;
  color: black;
  padding: 10px 20px;
  text-transform: uppercase;
  border: 1px solid transparent;
  margin: 10px;
  font-weight: 500;
}

ul li a:hover {
  background-color: #f8f9f9;
  color: #93d9d2;
}

/* Logo */
.logo a {
  color: orange;
  padding: 0px 20px;
  border: 1px solid white;
  position: absolute;
  top: 10px;
  left: 10px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 900;
}

.logo span {
  color: red;
  font-weight: bold;
  font-size: 2rem;
}

/* Main Content */
main {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 20px 20px; /* Adjusted for fixed header */
}

/* Grid for videos */
.main-box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsive Grid */
  gap: 20px;
  background-color: #ecf0f1;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  width: 100%;
}

/* Video Box */
.order-box {
  width: 100%;
  max-width: 200px;
  height: 210px;
  background-color: #d8b8b1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Footer */
footer {
  width: 100%;
  background-color: #d98880;
  padding: 20px;
  text-align: center;
}

.master {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.master p {
  color: #453D3D;
  font-size: 1.2rem;
}
.header-image img {
  width: 50px; 
  height: auto;
  margin-right: 20px; 
}
.principal {
position: relative;
}

.header-image:hover ~ .hide,
.hide:hover { 
    display: block;
    position: absolute;
    top: 100%; /* Position below the image */
    left: 90%;
    background: white;
    padding: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.hide {
  display: none; 
  color: black;
  
  
}
.hide ul {
  display: flex;
  flex-direction: column; /* Ensures vertical spacing */
  gap: 10px; /* Adjust the spacing */
}

.final{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.book{
  color: red;
}
/* -------- Responsive Design -------- */

@media (max-width: 768px) {
  /* Réorganise le header */
  .principal {
    flex-direction: column;
    align-items: flex-start;
  }

  ul {
    flex-direction: column;
    width: 100%;
    padding-left: 10px;
  }

  ul li a {
    padding: 10px 0;
  }

  .header-image img {
    width: 40px;
    margin-top: 10px;
  }

  .main-box {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    padding: 20px;
  }

  .order-box {
    max-width: 100%;
    height: auto;
  }

  video {
    height: auto;
  }

  .final {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .logo a {
    position: static;
    margin-bottom: 10px;
  }
}

@media (max-width: 480px) {
  .main-box {
    grid-template-columns: 1fr;
  }

  .order-box {
    height: auto;
  }

  video {
    height: auto;
  }
}

</style>
