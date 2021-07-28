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
  background-image:linear-gradient(90deg, rgba(2, 0, 36, 0.671) 0%, rgba(9, 9, 121, 0.774) 35%, rgba(0, 213, 255, 0.658) 100%),
    url("./static/CORONAVIRUS-HEADER.jpg");
  height: 250px;
  width: 100%;
  background-size: cover;
  background-repeat: none;
  padding: 1em;
}

h1 {
  margin-top: 2em;
  color:white
}
</style>