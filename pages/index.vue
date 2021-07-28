<template>
  <div>
    <v-container>
      <v-row justify="center" align="center">
        <v-col class="my-15" cols="12" md="8">
          <h2>
            Chaque minute compte, il est temps de rassembler les liens,
            numéros et les addresses les plus utiles aux patients COVID19.
          </h2>
          <p>
            Aide-nous a regrouper les numéros de telephone valides et les
            cagnottes actives.
          </p>

          <p class="emoji">😷</p>
        </v-col>
      </v-row>
    </v-container>
    <contributions />
  </div>
</template>


<style scoped>
a {
  color: black;
  text-decoration: none;
}

.emoji {
  display: block;
  align-items: center;
  text-align: center;
  font-size: 5em;
}
</style>