<template>
  <div>
    <header>
      <v-container>
        <v-row justify="center" align="center">
          <v-col justify="center" align="center">
            <h1>Infos Covid-19 Algérie</h1>
          </v-col>
        </v-row>
      </v-container>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
header {
  background-image: linear-gradient(
      to right,
      #8080808e,
      rgba(255, 255, 255, 0.5)
    ),
    url("./static/CORONAVIRUS-HEADER.jpg");
  height: 250px;
  width: 100%;
  background-size: cover;
  background-repeat: none;
  padding: 1em;
}

h1 {
  margin-top: 2em;
}
</style>