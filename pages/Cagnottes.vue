<template>
  <v-row>
    <v-col cols="12" justify="center" align="center">
      <h1>
       Cagnottes COVID19  
      </h1>
      <h2>Liste des cagnottes actives</h2>
    </v-col>
    <v-col cols="12" md="4" v-for="cagnotte in cagnottes" :key="cagnotte.name">
      <a :href="cagnotte.Lien" target="_blank">
        <v-card style="height:200px" elevation="2" outlined shaped tile>
          <v-card-title>{{ cagnotte.Nom }}</v-card-title>
          <ul>
            <li>
              <span class="text-bold">Bénéficiaire: </span
              >{{ cagnotte.Bénéficiaire ? cagnotte.Bénéficiaire : "Algériens" }}
            </li>
            <li>
              <span class="text-bold">Mode de participation:</span
              >{{
                cagnotte.ModeDeParticipation
                  ? cagnotte.ModeDeParticipation
                  : "/"
              }}
            </li>
          </ul>
        </v-card>
      </a>
    </v-col>
  </v-row>
</template>

<script>
import cagnottes from "../static/cagnottes/cagnottes.json";
export default {
  data() {
    return {
      cagnottes,
    };
  },
  mounted() {
    console.log(cagnottes);
  },
};
</script>

<style  scoped>
a {
  text-decoration: none;
}
</style>