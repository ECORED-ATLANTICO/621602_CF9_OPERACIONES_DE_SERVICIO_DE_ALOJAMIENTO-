<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/sintesis.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p.mb-3 El componente formativo desarrolla contenidos relacionados con el uso del presente simple, enfocado en la construcción de oraciones afirmativas y negativas, así como en la expresión de rutinas, hábitos e instrucciones utilizadas en el entorno laboral hotelero. Además, fortalece el manejo de vocabulario técnico en inglés relacionado con el servicio al cliente y la recepción.
        p.mb-3 Asimismo, se abordan temas relacionados con el alojamiento y la hotelería, incluyendo la clasificación de establecimientos, categorías hoteleras, tipos de alojamiento y servicios complementarios ofrecidos a los huéspedes. También se presentan características de hoteles, hostales, #[em resorts], #[em glamping] y otros modelos de alojamiento turístico.
        p.mb-3 Finalmente, el componente resalta la importancia de las ubicaciones geográficas y la orientación turística, permitiendo al aprendiz brindar información clara sobre lugares, servicios, gastronomía y actividades turísticas, fortaleciendo así la comunicación efectiva con huéspedes nacionales e internacionales.

    .row.justify-content-center
      .col-12
        figure
          img.mb-5(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual titulado “Inglés básico para servicio de recepción”. Del tema principal se desprenden cinco categorías: “Presente simple”, “Hospedaje”, “Áreas e instalaciones del hotel”, “Estructura organizacional” y “Demostrativos”. La categoría “Presente simple” incluye: “Instrucciones”, otra sección de “Instrucciones”, “Oraciones básicas” y “Rutinas y hábitos”. La categoría “Hospedaje” incluye: “Categoría”, “Clase”, “Tipos”, “Características” y “Ubicaciones geográficas”. El diseño utiliza recuadros azules conectados por líneas jerárquicas sobre fondo negro.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
