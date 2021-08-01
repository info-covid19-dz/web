<template>
  <div class="mt-3 px-5">
    <h3 class="mb-5">
      Pharmacies qui vendent Lovenox
    </h3>
    <v-btn class="mt-3 mb-5" color="primary">
      <a
        class="dark-link"
        target="_blank"
        href="https://docs.google.com/spreadsheets/d/1qB3V0aB7u8KICw0G3x78-r3J1MVxSQgConeONS9j8Iw/edit?usp=sharing"
      >
        Ajouter une pharmacie</a
      ></v-btn
    >
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
        Annuaire
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
        { text: "Wilaya", value: "Wilaya", sortable: true },
        { text: "Addresse", value: "Addresse" },
        { text: "Numero", value: "Numero" },
        { text: "Remarques", value: "Remarques", sortable: true },

      ],
      annuaires: null,
    };
  },
  head() {
    return {
      title: "Annuaire Lovenox",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Annuaire des pharmacies qui vendent Lovenox en Algerie",
        },
      ],
    };
  },
  mounted(){

    this.$axios.get("/api/lovenox").then(resp=>{
      if(resp.status == 200){
        this.annuaires = resp.data.reverse()
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
