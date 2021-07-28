<template>
  <v-container>
    <v-row>
      <v-col cols="12" justify="center" align="center">
        <h2>Cagnottes COVID19</h2>
        <h2>Liste des cagnottes actives</h2>
        <v-btn class="mt-3 mb-5" color="primary">
          <a
            class="dark-link"
            target="_blank"
            href="https://docs.google.com/spreadsheets/d/1AcwL6weFDq5E3HDi883icvuah-5JFB_Yc0_32-wpX14/edit?usp=sharing"
          >
            Ajouter une cagnotte</a
          ></v-btn
        >
      </v-col>
      <v-col
        cols="12"
        md="4"
        v-for="cagnotte in cagnottes"
        :key="cagnotte.name"
      >
        <a :href="cagnotte.Lien" target="_blank">
          <v-card style="min-height: 160px" elevation="2" outlined shaped tile>
            <v-card-title>{{ cagnotte.Nom }}</v-card-title>
            <ul>
              <li>
                <span class="text-bold">Bénéficiaire: </span
                >{{
                  cagnotte.Bénéficiaire ? cagnotte.Bénéficiaire : "Algériens"
                }}
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
    </v-row></v-container
  >
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