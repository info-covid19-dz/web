<template>
  <div class="mt-3 px-5">
    <h3 class="mb-5">
      Numéros relatifs à la vente, réparation et location des concentrateurs
      d'oxygène.
    </h3>
    <!--
    <v-btn class="mt-3 mb-5" color="primary">
      <a
        class="dark-link"
        target="_blank"
        href="https://docs.google.com/spreadsheets/d/1a4N_yGTUOmGVFRLODbfv6NNJO7hcgdXpayRFSufj1sk/edit?usp=sharing"
      >
        Ajouter un contacte</a
      ></v-btn
    >-->
    <br/>
    <div class = "d-flex justify-center">
      <v-progress-circular
        indeterminate
        color="primary"
        v-if = "isLoaded == false"
      ></v-progress-circular>
      <p v-if = "error.show">{{error.msg}}</p>
    </div>
    <v-card v-if = "isLoaded">
      <v-card-title>
        Annuaire Oxygène
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Rechercher"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        color="#470237"
        :headers="headers"
        :items="annuaires"
        :items-per-page="15"
        class="elevation-1"
        :item-class="itemRowBackground"
        :search="search"
      >
        <template v-slot:item.Vérifié="{ item }">
          <span>
            {{ item.Vérifié ? item.Vérifié : "non" }}
          </span>
        </template>
      </v-data-table></v-card
    >
  </div>
</template>

<script>
import annuaire from "../static/annuaire/annuaire.json";

export default {
  data() {
    return {
      isLoaded:false,
      search: "",
      error: {
        show: false,
        msg:"Une erreur s'est produite, veuillez nous contacter",
      },
      headers: [
        {
          text: "Nom",
          align: "start",
          sortable: false,
          value: "Nom",
        },
        { text: "Type", value: "Type" },
        { text: "Adresse", value: "Adresse" },
        { text: "Numéro", value: "Numéro" },
        { text: "Service", value: "Service", sortable: true },
        { text: "Détails", value: "Détails", sortable: true },
      ],
      annuaires: null,
    };
  },
  head() {
    return {
      title: "Annuaire",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Annuaire des concentrateurs d'oxygéne disponibles en vente ou en location en Algérie",
        },
      ],
    };
  },
  methods:{
    sortRecords(data){
      let assoc = data.filter((el)=>{return el.Type == "Association"});
      let entrep = data.filter((el)=>{return el.Type == "Entreprise"});
      let para = data.filter((el)=>{return el.Type=="Parapharmacie"});
      let others = data.filter((el)=>{return el.Type == "Autres"})
      let sorted = assoc.concat(para,entrep,others)
      console.log(sorted)
      return sorted
    },
    itemRowBackground(item) {
      switch (item.Type) {
        case "Association":
          return "blue lighten-4";
          break;
        case "Parapharmacie":
          return "indigo lighten-4";
          break;
        case "Entreprise":
          return "green lighten-4";
          break;
      }
    }
  },
  mounted(){

    this.$axios.get("/api/oxygen").then(resp=>{
      if(resp.status == 200){
        this.annuaires = this.sortRecords(resp.data)
        this.isLoaded = true
        this.error.show = false
      }
      else{
        this.error.show = true
      }

    })


  }
};
</script>

<style scoped>
</style>
