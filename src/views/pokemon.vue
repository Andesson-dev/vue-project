<template>
  <div>
    <router-view></router-view>
  </div>
  <div class="container">
    <!-- Header -->
    <header>
      <div class="principal">
        <div class="logo">
          <a href="#">Kyler<span>A</span></a>
        </div>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/service">Service</router-link></li>
          <li><router-link to="/contact">ContactUs</router-link></li>
          <li><router-link to="/about">AboutUs</router-link></li>
          <li><router-link to="/pokemon">Pokemon</router-link></li>
        </ul>

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
      <div class="box">
        <!-- Selected Pokémon View -->
        <div class="box1" v-if="selectedPokemon">
          <div class="pokemon-box">
            <div class="left">
              <p><strong>{{ selectedPokemon.name }}</strong></p>
            </div>
            <div class="right">
              <p>ID: {{ selectedPokemon.id }}</p>
              <p>XP: {{ selectedPokemon.base_experience }}</p>
              <p>Weight: {{ selectedPokemon.weight }}</p>
            </div>
          </div>
          <button @click="selectedPokemon = null" class="back-btn">Back</button>
        </div>

        <!-- All Pokémon List -->
        <div
          class="box1"
          v-else
          v-for="(pokemon, index) in pokemons"
          :key="index"
          @click="selectPokemon(pokemon)"
          style="cursor: pointer;"
        >
          <div>
            <p><strong>{{ pokemon.name }}</strong></p>
            <p>ID: {{ pokemon.id }}</p>
            <p>XP: {{ pokemon.base_experience }}</p>
            <p>Weight: {{ pokemon.weight }}</p>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer>
      <div class="final">
        <div>
          <p class="book">Douala</p>
          <p>
            open every day<br />
            anderssonnguessong@gmail.com<br />
            logbessou
          </p>
        </div>
        <div>
          <p class="book">Yaounde</p>
          <p>
            open every day<br />
            nguessongandersson@gmail.com<br />
            bastos
          </p>
        </div>
        <div>
          <p class="book">Dschang</p>
          <p>
            open every day<br />
            anderssonnguessong@gmail.com<br />
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

<script>
import axios from 'axios';

export default {
  name: 'OrderSection',
  data() {
    return {
      pokemons: [],
      selectedPokemon: null
    };
  },
  mounted() {
    this.fetchPokemons();
  },
  methods: {
    async fetchPokemons() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=12');
        const basicList = response.data.results;

        const detailedList = await Promise.all(
          basicList.map(async (pokemon) => {
            const details = await axios.get(pokemon.url);
            return {
              name: details.data.name,
              id: details.data.id,
              base_experience: details.data.base_experience,
              weight: details.data.weight
            };
          })
        );

        this.pokemons = detailedList;
      } catch (error) {
        console.error("Erreur lors du chargement des Pokémon :", error);
      }
    },
    selectPokemon(pokemon) {
      this.selectedPokemon = pokemon;
    }
  }
};
</script>

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

.para {
  font-size: 70px;
  color: #B79F9F;
}

.box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  background-color: #ecf0f1;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 1100px;
  width: 100%;
}

.box1 {
  width: 100%;
  max-width: 100%;
  background-color: #d8b8b1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 20px;
  flex-direction: column;
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

main {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 20px 20px;
}

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

.header-image:hover ~ .hide,
.hide:hover {
  display: block;
  position: absolute;
  top: 100%;
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
  flex-direction: column;
  gap: 10px;
}

.final {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.book {
  color: red;
}

/* Pokémon Detail Layout */
.pokemon-box {
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 40;
  padding: 20px;
}

.left {
  flex: 1;
  text-align: left;
  font-size: 20px;
}

.right {
  flex: 2;
  text-align: center;
}

/* Back Button */
.back-btn {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #93d9d2;
  color: black;
  border-radius: 5px;
  cursor: pointer;
}

.back-btn:hover {
  background-color: #78c5bc;
}
</style>
