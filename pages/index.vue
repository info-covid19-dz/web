<template>
  <div>
    <h2 class="my-2 px-2">Liens utiles:</h2>
    <ul>
      <li>
        <nuxt-link to="/annuaire"
          >Tous les liens et numéros relatifs a l'achat et la réparation des
          concentrateurs d'oxygène.</nuxt-link
        >
      </li>
      <li>
        <nuxt-link to="/cagnottes"
          >Toutes les cagnnottes actuellement ouvertes.</nuxt-link
        >
      </li>
    </ul>

    <contributions />
  </div>
</template>


<style scoped>
a {
  color: black;
  text-decoration: none;
}
</style>