<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 #[em Demonstratives] // Demostrativos

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/1.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .p-4.bg-acento-contenido-a5.rounded-4
          .row.align-items-center
            .col-lg-8
              p.mb-3.mb-lg-0 #[em In English, we use demonstratives to identify people, objects, or places and to indicate whether they are near or far from the speaker. The demonstratives are this, that, these, and those. They can be used with singular or plural nouns depending on the context.]
            .col-lg-4
              .p-3.py-4.rounded-4.bg-color-primario
                p.mb-0 #[em This → singular and near]
                p.mb-0 #[em That → singular and far]
                p.mb-0 #[em These → plural and near]
                p.mb-0 #[em Those → plural and far]

    .p-4.rounded-4.bg-secundario-s5.mb-4
      p.mb-0.text-center #[em Demonstratives are very common in daily communication because they help describe and locate things clearly. Examples:]

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-8
        .p-4.bg-secundario-s10.rounded-4.mb-4.mb-lg-0
          .row.align-items-center
            .col-lg-6
              .p-3.py-4.rounded-4.bg-secundario-s5.mb-3.mb-lg-0
                p.mb-0 #[em #[strong This is] my room. (singular - near)]
                p.mb-0 #[em #[strong That is] our house. (singular - far)]
                p.mb-0 #[em #[strong These are] the hotel keys. (plural - near)]
                p.mb-0 #[em #[strong Those are] my shoes. (plural - far)]
            .col-lg-6
              p.mb-0 #[em #[strong Note:] the verb changes according to the demonstrative pronoun used. Use is with singular forms (this / that) and are with plural forms (these / those).]
      .col-sm-8.col-lg-4
        figure
          img(src="@/assets/curso/tema5/2.png", alt="" data-aos="zoom-in-down")

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/3.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .p-4.bg-acento-contenido-a5.rounded-4
          .row.align-items-center
            .col-lg-8
              p.mb-3.mb-lg-0 En inglés, usamos los #[strong demostrativos] para identificar personas, objetos o lugares e indicar si están cerca o lejos del hablante. Los demostrativos son #[em #[strong this, that, these]] y #[em #[strong those]]. Pueden utilizarse con sustantivos en singular o plural según el contexto.
            .col-lg-4
              .p-3.py-4.rounded-4.bg-color-primario
                p.mb-0 #[em #[strong This] → singular y cerca]
                p.mb-0 #[em #[strong That] → singular y lejos]
                p.mb-0 #[em #[strong These] → plural y cerca]
                p.mb-0 #[em #[strong Those] → plural y lejos]

    .p-4.rounded-4.bg-secundario-s10.mb-4
      p.mb-0.text-center Los demostrativos son muy comunes en la comunicación diaria porque ayudan a describir y ubicar elementos de manera clara. Ejemplos:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-8
        .p-4.bg-terciario-t5.rounded-4.mb-4.mb-lg-0
          .row.align-items-center
            .col-lg-6
              .p-3.py-4.rounded-4.bg-acento-botones-a5.mb-3.mb-lg-0
                p.mb-0 #[strong This] → singular y cerca 
                p.mb-0 #[strong That] → singular y lejos 
                p.mb-0 #[strong These] → plural y cerca 
                p.mb-0 #[strong Those] → plural y lejos 
            .col-lg-6
              p.mb-0 #[strong Nota:] el verbo cambia según el pronombre demostrativo utilizado. Se usa #[em is] con las formas singulares (this / that) y #[em are] con las formas plurales (these / those).
      .col-sm-8.col-lg-4
        figure
          img(src="@/assets/curso/tema5/4.png", alt="" data-aos="zoom-in-down")

    figure
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/pdKHTv2-ku0" title="Demonstratives" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: <em>Demonstratives</em>
      
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
