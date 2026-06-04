<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/intro/1.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 El presente componente formativo está orientado al fortalecimiento de las competencias básicas de comunicación oral y escrita en lengua inglesa, aplicadas a contextos de atención y servicio al cliente. A través del desarrollo de actividades de aprendizaje, el aprendiz podrá reconocer y emplear expresiones cotidianas, vocabulario técnico y estructuras básicas del idioma, favoreciendo la interacción con usuarios y visitantes no hispanohablantes en entornos laborales.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/intro/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        .p-4.bg-acento-contenido-a5.rounded-4.mb-3
          p.mb-0 Durante el desarrollo de la formación, se promoverá la comprensión general de textos escritos y mensajes orales en inglés mediante estrategias de identificación de información relevante, interpretación del contexto y deducción de significados. Asimismo, se fortalecerán habilidades relacionadas con la pronunciación, la entonación y el uso adecuado de estructuras gramaticales básicas, facilitando una comunicación funcional en situaciones propias del servicio de recepción.
        p.mb-0 Finalmente, este proceso permitirá consolidar conocimientos lingüísticos previamente adquiridos y ampliar el vocabulario técnico asociado al área de servicio, contribuyendo al fortalecimiento de competencias comunicativas que favorezcan el desempeño del aprendiz en contextos reales de atención, orientación e interacción con usuarios en lengua inglesa.


    p #[strong #[em Introduction]]

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        p #[em This training process is aimed at strengthening basic oral and written communication skills in English, applied to customer service and reception contexts. Through the development of learning activities, apprentices will recognize and use everyday expressions, technical vocabulary, and basic language structures that support interaction with non-Spanish-speaking users and visitors in workplace environments.]
        .bg-acento-contenido-a5.rounded-4.p-4.mb-3
          p.mb-0 #[em Throughout the training process, learners will develop the ability to understand general ideas in written texts and oral messages in English by applying strategies such as identifying relevant information, interpreting context, and deducing meanings. Likewise, pronunciation, intonation, and the appropriate use of basic grammatical structures will be reinforced to facilitate functional communication in reception service situations.]
        p.mb-4.mb-lg-0 #[em Finally, this process will contribute to the consolidation of previously acquired linguistic knowledge and the expansion of technical vocabulary related to customer service, strengthening communicative competencies that support learners’ performance in real-life situations involving guidance, assistance, and interaction in English.]
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/intro/3.png", alt="")
    














</template>

<script>
export default {
  name: 'Introduccion',
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
