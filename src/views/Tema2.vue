<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 #[em Lodging] // Alojamiento

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema2/1.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 #[em They are establishments whose main activity is to offer accommodation to people for a price, in a regular and professional way, with or without other complementary services, through the generic name of hotel, hostel, pension, or similar.]

    .p-4.rounded-4.bg-acento-botones-a5
      p.mb-0 Son aquellos establecimientos cuya actividad principal es ofrecer alojamiento a las personas por un precio, de forma regular y profesional, con o sin otros servicios complementarios, mediante la denominación genérica de: hotel, hostal, pensión o similar.
            
    
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 #[em Category] // Categoría
    
    .row.justify-content-center.align-items-center.mb-3
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p #[em Lodging establishments are classified according to meeting the evaluation criteria. The best-known classification is that of stars, but this is not standard since it uses different criteria in each country. In Colombia, for example, these parameters are determined by the technical standard NTSH006.]
        .p-4.bg-acento-contenido-a5.rounded-4.mb-3
          p.mb-0 Los establecimientos están clasificados según cumplan los criterios de evaluación. La clasificación más conocida es la de estrellas, pero esta no es estándar, ya que usa criterios diferentes en cada país. En Colombia, por ejemplo, esos parámetros los determina la norma técnica NTSH006.
        p.mb-0 #[em Evaluation criteria to granting the star rating certificate for hotels in modalities 1, 2, 3, 4, and 5. They are established as follows:]

    .p-4.rounded-4.bg-secundario-s5.mb-5
      p.mb-0.text-center Criterios de evaluación para el otorgamiento del certificado de categorización por estrellas para los hoteles en las modalidades 1, 2, 3, 4 y 5. Están establecidas de la siguiente manera: 

    SlyderF(columnas="col-lg-6 col-xl-4").mb-4.mb-lg-5
      .tarjeta.bg-img.bg-img--3.p-4.py-5
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema2/3.svg' alt='')
        p.mb-4.text-center #[strong #[em Star hotels]] // Hoteles de 1 estrella
        p.text-center.mb-4 #[em Must meet 100 % of the requirements defined in Standard NTSH006, 178 points and current legal requirements.]
        p.text-center.mb-0 Deberán cumplir el 100 % de los requisitos definidos en la Norma NTSH006, 178 puntos y los requisitos legales vigentes.
      .tarjeta.bg-img.bg-img--3.p-4.py-5
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema2/4.svg' alt='')
        p.mb-4.text-center #[strong #[em Star hotels]] // Hoteles de 2 estrellas
        p.text-center.mb-4 #[em They must meet 100 % of the requirements defined in Standard NTSH006, 181 points and current legal requirements.]
        p.text-center.mb-0 Deberán cumplir el 100 % de los requisitos definidos en la Norma NTSH006, 181 puntos y los requisitos legales vigentes.
      .tarjeta.bg-img.bg-img--3.p-4.py-5
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema2/5.svg' alt='')
        p.mb-4.text-center #[strong #[em Star hotels]] // Hoteles de 3 estrellas
        p.text-center.mb-4 #[em They must meet 80 % of the requirements defined in Standard NTSH006, range 208 - 260 points and current legal requirements.]
        p.text-center.mb-0 Deberán cumplir el 80 % de los requisitos definidos en la Norma NTSH006, rango 208 - 260 puntos y los requisitos legales vigentes.
      .tarjeta.bg-img.bg-img--3.p-4.py-5
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema2/6.svg' alt='')
        p.mb-4.text-center #[strong #[em Star hotels]] // Hoteles de 4 estrellas
        p.text-center.mb-4 #[em They must meet a minimum of 85 % of the requirements defined in Standard NTSH006, range 283 - 333 points and current legal requirements.]
        p.text-center.mb-0 Deberán cumplir mínimo con el 85 % de los requisitos definidos en la Norma NTSH006, rango 283 - 333 puntos y los requisitos legales vigentes.
      .tarjeta.bg-img.bg-img--3.p-4.py-5
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema2/7.svg' alt='')
        p.mb-4.text-center #[strong #[em Star hotels]] // Hoteles de 5 estrellas
        p.text-center.mb-4 #[em They must meet a minimum of 95 % of the requirements defined in Standard NTSH006, range 349 - 337 points and the current legal requirements.]
        p.text-center.mb-0 Deberán cumplir mínimo con el 95 % de los requisitos definidos en la norma NTSH006, rango 349 - 337 puntos y los requisitos legales vigentes.

    .p-4.rounded-4.bg-acento-botones-a5.mb-5
      p.mb-0 #[em At a global level, the categorization most used by the industry is the one determined by the price scales associated with the quality of the establishments. This scale has 6 levels that are determined by the ADR “Average Daily Rate” and is used by hotel chains to classify their products. There is a seventh category that applies to independent hotels. Defined as follows:]

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        p A nivel mundial, la categorización más utilizada por la industria es la que se determina por las escalas de precio asociadas a la calidad de los establecimientos. Esta escala tiene 6 niveles que se determinan a partir de la tarifa promedio, y es usada por las cadenas hoteleras para clasificar sus productos.
        p Existe una séptima categoría que se aplica a los hoteles independientes. Definidas así: 
      .col-sm-10.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/8.png", alt="")
    
    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5
      .col-lg-6.mb-4.mb-lg-0
        .rounded-4.h-100.overflow-hidden.bg-img.bg-img--7.p-4
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure
                img.w-120.mb-4.mb-lg-0(src="@/assets/curso/tema2/9.svg", alt="", data-aos="fade-down-right")
            .col-lg-8
              h5.mb-4 #[em Scale]
              ul.lista-ul--color.pe-4
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Luxury Chains]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Upper Upscale Chains]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Upscale Chains]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Upper Midscale Chains]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Midscale Chains]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Economy Chains]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Independent Hotels]
      .col-lg-6.mb-4.mb-lg-0
        .rounded-4.h-100.overflow-hidden.bg-img.bg-img--7.p-4
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure
                img.w-120.mb-4.mb-lg-0(src="@/assets/curso/tema2/9.svg", alt="", data-aos="fade-down-right")
            .col-lg-8
              h5.mb-4 Escala
              ul.lista-ul--color.pe-4
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Cadenas de nivel Lujo
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Cadenas nivel Superior exclusivo
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Cadenas nivel Exclusivo
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Cadenas nivel Superior medio
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Cadenas nivel Medio
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Cadenas nivel Económico
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Hoteles Independientes

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/10.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p #[em When a chain is categorized in a specific scale level, that means every hotel in that chain is in that scale level everywhere in the world, in every country and market. For example, the Ritz-Carlton chain is at the Luxury scale level. That means every Ritz-Carlton hotel in the world will be a Luxury scale hotel.]
        p.mb-0 Cuando una cadena se clasifica en un nivel específico de la escala, eso significa que cada hotel en esa cadena está en ese nivel de la escala, en todas partes del mundo, en cada país y mercado. Por ejemplo, la cadena Ritz-Carlton está en el nivel Lujo. Eso significa que cada hotel Ritz-Carlton en el mundo será un hotel de escala de lujo.

    .bg-title.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 #[em Categorization by price scale (Brands)] // Categorización por escala de precio (Marcas)

    .p-3.rounded-4.bg-secundario-s5.mb-2
      p.mb-0.text-center #[strong #[em Luxury Hotels]] // Cadenas de nivel lujo

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/11.png", alt="")
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/12.png", alt="")
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/13.png", alt="")
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/14.png", alt="")

    .p-3.rounded-4.bg-secundario-s5.mb-2
      p.mb-0.text-center #[strong #[em Upper Upscale Hotels]] // Nivel Superior exclusivo

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/15.png", alt="")
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/16.png", alt="")
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/17.png", alt="")
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/18.png", alt="")
          
    .p-3.rounded-4.bg-secundario-s5.mb-2
      p.mb-0.text-center #[strong #[em Upscale Hotels]] // Cadenas de nivel Exclusivo

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/19.png", alt="")
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/20.png", alt="")
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/21.png", alt="")
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/22.png", alt="")
          
    .p-3.rounded-4.bg-secundario-s5.mb-2
      p.mb-0.text-center #[strong #[em Upper Midscale Hotels]] // Cadenas nivel Superior medio

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/47.png", alt="")
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/48.png", alt="")
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/49.png", alt="")
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/50.png", alt="")
          
    .p-3.rounded-4.bg-secundario-s5.mb-2
      p.mb-0.text-center #[strong #[em Midscale Hotels]] // Cadenas nivel Medio

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/23.png", alt="")
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/24.png", alt="")
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/25.png", alt="")
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/26.png", alt="")
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/27.png", alt="")
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/28.png", alt="")
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/29.png", alt="")
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/30.png", alt="")

    .p-3.rounded-4.bg-secundario-s5.mb-2
      p.mb-0.text-center #[strong #[em Ecconomy Hotels]]  // Cadenas nivel Económico

    .row.justify-content-center.align-items-center
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/31.png", alt="")
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/32.png", alt="")
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/33.png", alt="")
      .col-sm-6.col-lg-5.col-xl-3
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/34.png", alt="")

    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 #[em Class] // Clase
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/35.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p #[em The class categorization is like the scale. The names of the categories are the same, but there is no “Independent” class group. So there are only 6 class categories, instead of the 7 scale groups. Independent hotels are slotted into the scale categories (Luxury through Economy) at similar Average Daily Rate levels. Also, there are several adjectives that can be used to talk about the class of hotels and other types of tourist accommodation.]
        .p-4.bg-acento-botones-a5.rounded-4
          p.mb-0 La categorización por clases es similar a la de escala. Los nombres de las categorías son los mismos, pero no hay un grupo de clase “independiente”. Así que sólo hay 6 categorías por clase, en lugar de los 7 grupos de escala.

    .p-4.bg-secundario-s10.rounded-4.mb-5
      p.mb-0.text-center Los hoteles independientes están ubicados en las categorías de escala (desde lujo hasta económica) con niveles de tarifa promedio similares.

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5
      .col-lg-6.mb-4.mb-lg-0
        .rounded-4.h-100.overflow-hidden.bg-img.bg-img--4.p-4
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure
                img.w-120.mb-4.mb-lg-0(src="@/assets/curso/tema2/36.svg", alt="", data-aos="fade-down-right")
            .col-lg-8
              h5.mb-4 #[em Class]
              ul.lista-ul--color.pe-4
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Luxury Hotels]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Upper Upscale Hotels]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Upscale Hotels]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Upper Midscale Hotels]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Midscale Hotels]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Economy Hotels]
      .col-lg-6.mb-4.mb-lg-0
        .rounded-4.h-100.overflow-hidden.bg-img.bg-img--4.p-4
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure
                img.w-120.mb-4.mb-lg-0(src="@/assets/curso/tema2/36.svg", alt="", data-aos="fade-down-right")
            .col-lg-8
              h5.mb-4 Clase
              ul.lista-ul--color.pe-4
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Hoteles de nivel Lujo
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Hoteles de nivel Superior exclusivo
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Hoteles de nivel Exclusivo
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Hoteles de nivel Superior medio
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Hoteles de nivel Medio
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Hoteles de nivel Económico
    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        .bg-acento-contenido-a5.p-4.rounded-4
          p.mb-4.text-center At the same time, there are several adjectives to express the class and category of a lodging property.
          p.mb-0.text-center Al mismo tiempo, existen varios adjetivos para expresar la clase y categoría de una propiedad de alojamiento

    .row.justify-content-center.align-items-stretch
      .col-lg-6.mb-4.mb-lg-0
        .rounded-4.h-100.overflow-hidden.bg-img.bg-img--7.p-4
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure
                img.w-120.mb-4.mb-lg-0(src="@/assets/curso/tema2/37.svg", alt="", data-aos="fade-down-right")
            .col-lg-8
              h5.mb-4 #[em Expensive]
              ul.lista-ul--color.pe-4
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Cheap]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Modern]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Charming]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Bustling]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Contemporary]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Cosmopolitan]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Historic]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Exciting]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Peaceful / quiet / relaxing]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Traditional]
      .col-lg-6.mb-4.mb-lg-0
        .rounded-4.h-100.overflow-hidden.bg-img.bg-img--7.p-4
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure
                img.w-120.mb-4.mb-lg-0(src="@/assets/curso/tema2/37.svg", alt="", data-aos="fade-down-right")
            .col-lg-8
              h5.mb-4 Caro
              ul.lista-ul--color.pe-4
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Barato
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Moderno
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Con Encanto / Encantador
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Bullicioso
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Contemporáneo
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Cosmopolita
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Histórico
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Emocionante
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Apacible / silencioso / relajante
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Tradicional

    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 #[em Types] // Tipología

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema2/38.png", alt="").z-2 
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-1 #[em There are different types of accommodation establishments. Below, you will learn about each one and their main characteristics.]
            p.mb-0 Existen diferentes tipos de establecimientos de alojamiento. A continuación, conocerá cada uno y sus principales características.

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-terciario-t5").mb-5
      .row.justify-content-center.align-items-center(titulo="<em>Hotel</em> // Hotel")
        .col-sm-10.col-lg-8.col-xl-8.mb-4.mb-lg-0
          p #[em This type of accommodation is featured by providing shared spaces at low cost, where guests can rent a bed, usually a bunk bed in a bedroom, with shared use of the bathroom, kitchen, and social areas.]
          p.mb-0 Este tipo de alojamiento se caracteriza por brindar espacios compartidos a bajo costo y donde los huéspedes pueden alquilar una cama, generalmente una litera en un dormitorio, con uso compartido de baño, cocina y áreas sociales.
        .col-sm-8.col-lg-4.col-xl-3
          figure
            img(src="@/assets/curso/tema2/39.png", alt="")
      .row.justify-content-center.align-items-center(titulo="<em>Aparthotel</em> // Aparta Hotel")
        .col-sm-10.col-lg-8.col-xl-8.mb-4.mb-lg-0
          p #[em An aparthotel is a type of housing unit (apartments) with full kitchen and furnishing, but with limited services and staff, which operates with a reservation system in the same way as a hotel. It is focused on long stays.]
          p.mb-0 Un aparta hotel es un tipo de unidad habitacional (apartamentos) con cocina y amoblamiento completo, pero con servicios y personal limitados, que opera con un sistema de reservas similar a un hotel. Está enfocado en largas estadías.
        .col-sm-8.col-lg-4.col-xl-3
          figure
            img(src="@/assets/curso/tema2/40.png", alt="")
      .row.justify-content-center.align-items-center(titulo="<em>Lodge</em> // Cabaña")
        .col-sm-10.col-lg-8.col-xl-8.mb-4.mb-lg-0
          p #[em A lodge is a small house or cottage in the vicinity of a park, in a natural environment. Originally, it is a place of rest, a refuge, for hunters, fishermen, or sportsmen. Now, applied to the hotel industry, it should be a small place, built permanently (with walls), local materials, minimal environmental impact, committed to the local culture, and offering the guest everything they need for their rest while performing one of these practices. Here it is known as Rural Accommodation.]
          p.mb-0 Un lodge es una pequeña casa o cabaña en las cercanías de un parque, en un entorno natural. Originalmente, es un lugar de descanso, un refugio, para cazadores, pescadores, deportistas. Ahora, aplicado a la hotelería, debe ser un lugar pequeño, construido de manera permanente (con muros), materiales locales, mínimo impacto ambiental, comprometido con la cultura local y que ofrece al huésped todo lo que necesita para su descanso mientras realiza una de estas prácticas. Aquí es conocido como Alojamiento Rural.
        .col-sm-8.col-lg-4.col-xl-3
          figure
            img(src="@/assets/curso/tema2/41.png", alt="")
      .row.justify-content-center.align-items-center(titulo="<em>Hotel</em> // Hotel")
        .col-sm-10.col-lg-8.col-xl-8.mb-4.mb-lg-0
          p #[em A hotel is a building planned and equipped to provide lodging services that are generally reserved in advance. Services in addition to lodging include restaurants, swimming pools, stores, spa and day care centers.]
          p.mb-0 Un hotel es un edificio planificado y acondicionado para atender los servicios de alojamiento que generalmente se reservan con antelación. Entre los servicios adicionales al alojamiento, se encuentran restaurantes, piscinas, tiendas, spas y guarderías.
        .col-sm-8.col-lg-4.col-xl-3
          figure
            img(src="@/assets/curso/tema2/42.png", alt="")
      .row.justify-content-center.align-items-center(titulo="<em>Camping</em> // Acampar")
        .col-sm-10.col-lg-8.col-xl-8.mb-4.mb-lg-0
          p #[em Campsites are outdoor places, with a basic conditioning to cater people who make use of them in exchange for a set amount of money. Usually, these spaces have facilities such as bathrooms, bar, restaurant, or social area.]
          p.mb-0 Los campings son lugares al aire libre, con un acondicionamiento básico para atender a las personas que hacen uso de ellos a cambio de una cantidad fija de dinero. Por lo general, estos espacios tienen instalaciones como baños, bar, restaurante o área social.
        .col-sm-8.col-lg-4.col-xl-3
          figure
            img(src="@/assets/curso/tema2/43.png", alt="")
      .row.justify-content-center.align-items-center(titulo="<em>Glamping</em> // Glamping")
        .col-sm-10.col-lg-8.col-xl-8.mb-4.mb-lg-0
          p #[em Glamping is a globally growing trend, that combines the experience of outdoor camping with the luxury and conditions of the best hotels. The term was invented at the end of the prior century as a fusion of the words glamour and camping.]
          p.mb-0 Es una tendencia creciente a nivel mundial, que combina la experiencia de acampar al aire libre con el lujo y las condiciones de los mejores hoteles. El término fue inventado a finales del siglo anterior como una fusión de las palabras glamour y camping.
        .col-sm-8.col-lg-4.col-xl-3
          figure
            img(src="@/assets/curso/tema2/44.png", alt="")

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5
      .col-lg-6.mb-4.mb-lg-0
        .rounded-4.h-100.overflow-hidden.bg-img.bg-img--7.p-4
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure
                img.w-120.mb-4.mb-lg-0(src="@/assets/curso/tema2/51.svg", alt="", data-aos="fade-down-right")
            .col-lg-8
              h5.mb-4 #[em Other classification]
              ul.lista-ul--color.pe-4
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Airport hotels]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Business class or business hotel]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Luxury hotels]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Motels]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Resorts]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Casino hotels]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Club hotels]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Themed hotels]
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | #[em Historic hotels (Heritage)]
      .col-lg-6.mb-4.mb-lg-0
        .rounded-4.h-100.overflow-hidden.bg-img.bg-img--7.p-4
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure
                img.w-120.mb-4.mb-lg-0(src="@/assets/curso/tema2/51.svg", alt="", data-aos="fade-down-right")
            .col-lg-8
              h5.mb-4 Otros tipos de clasificación
              ul.lista-ul--color.pe-4
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Hoteles de aeropuerto
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Hotel de negocios
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Hoteles de lujo
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Moteles
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Resorts
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Hoteles casinos
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Hoteles clubes
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Hoteles temáticos
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Hoteles históricos (Patrimonio)

    .p-3.rounded-top-4.bg-secundario-s20.mb-0
      p.mb-0.text-white #[em Data of interest] // Dato de interés:
    .p-3.bg-acento-contenido-a5.mb-0
      p.mb-0 #[em The word ‘motel’ was invented in the United States to describe the category of cheap and basic hotel that is built near the great national highways of the country. It was aimed at drivers. Motel is the composition of motor + hotel.]
    .p-3.bg-color-primario.mb-0.rounded-bottom-4
      p.mb-0 La palabra ‘motel’ se inventó en los Estados Unidos para describir la categoría de hotel barato y básico que se construye cerca de las grandes autopistas nacionales del país. Estaba dirigido a los conductores. Motel es la composición de motor + hotel.
  
    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 #[em Characteristics] // Características

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema2/52.png", alt="").z-2
      
    .row.justify-content-center.z-2.mb-3
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0.text-center #[em A lodging establishment can offer more than the provision of a room. The client can request complementary services during their stay and the hotel provides them as part of the services.]
          p.mb-0.text-center #[em The following are considered complementary services:]

    .p-4.rounded-4.bg-acento-contenido-a5.mb-4
      p.mb-0 Un establecimiento de alojamiento puede ofrecer más que la disposición de una habitación. El cliente puede solicitar servicios complementarios durante su estancia y el hotel los presta como parte de los servicios. Los siguientes se consideran servicios complementarios:

    SlyderF(columnas="col-md-6 col-xl-4").mb-4.mb-lg-5
      .tarjeta.bg-img.bg-img--3.p-4.py-5
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema2/53.svg' alt='')
        p.mb-0.text-center #[strong #[em Restaurant and room service]]
        p.mb-0.text-center Restaurante y servicio a la habitación
      .tarjeta.bg-img.bg-img--3.p-4.py-5
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema2/54.svg' alt='')
        p.mb-0.text-center #[strong #[em Venue rooms]]
        p.mb-0.text-center Salones de eventos
      .tarjeta.bg-img.bg-img--3.p-4.py-5
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema2/55.svg' alt='')
        p.mb-0.text-center #[strong #[em Commercial spaces]]
        p.mb-0.text-center Locales comerciales
      .tarjeta.bg-img.bg-img--3.p-4.py-5
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema2/56.svg' alt='')
        p.mb-0.text-center #[strong #[em 24-hour front desk]]
        p.mb-0.text-center Recepción y atención permanente
      .tarjeta.bg-img.bg-img--3.p-4.py-5
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema2/57.svg' alt='')
        p.mb-0.text-center #[strong #[em Safe box]]
        p.mb-0.text-center Cajilla de seguridad
      .tarjeta.bg-img.bg-img--3.p-4.py-5
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema2/58.svg' alt='')
        p.mb-0.text-center #[strong #[em Daily cleaning of the rooms:]]
        p.mb-0.text-center Limpieza periódica del alojamiento
      .tarjeta.bg-img.bg-img--3.p-4.py-5
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema2/59.svg' alt='')
        p.mb-0.text-center #[strong #[em Periodic change of bedding]]
        p.mb-0.text-center Cambio periódico de ropa de cama
      .tarjeta.bg-img.bg-img--3.p-4.py-5
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema2/60.svg' alt='')
        p.mb-0.text-center #[strong #[em Periodic change of towels]]
        p.mb-0.text-center Cambio periódico de toallas
      .tarjeta.bg-img.bg-img--3.p-4.py-5
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema2/61.svg' alt='')
        p.mb-0.text-center #[strong #[em Additional services]]
        p.mb-0.text-center Prestación de servicios adicionales
      .tarjeta.bg-img.bg-img--3.p-4.py-5
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema2/62.svg' alt='')
        p.mb-0.text-center #[strong #[em Laundry]]
        p.mb-0.text-center Lavandería
      .tarjeta.bg-img.bg-img--3.p-4.py-5
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema2/63.svg' alt='')
        p.mb-0.text-center #[strong #[em Pressing]]
        p.mb-0.text-center Planchado
      .tarjeta.bg-img.bg-img--3.p-4.py-5
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema2/64.svg' alt='')
        p.mb-0.text-center #[strong #[em Luggage custody]]
        p.mb-0.text-center Custodia de maletas
      .tarjeta.bg-img.bg-img--3.p-4.py-5
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema2/65.svg' alt='')
        p.mb-0.text-center #[strong #[em Newspaper]]
        p.mb-0.text-center Periódico
      .tarjeta.bg-img.bg-img--3.p-4.py-5
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema2/66.svg' alt='')
        p.mb-0.text-center #[strong #[em Package holiday:]]
        p.mb-0.text-center Paquete turístico

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/67.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        LineaTiempoD.color-primario.mb-4
          .row.justify-content-center(numero="1" titulo="<em>Types of holiday</em> / Tipos de vacaciones")
            .col-xl-8
              .p-3.rounded-4.bg-secundario-s10.mb-3
                .row.justify-content-center.align-items-center
                  .col-6
                    p.mb-0 #[em Cruise]
                    p.mb-0 #[em Winter sports]
                    p.mb-0 #[em Mini-break]
                    p.mb-0 #[em Honeymoon]
                    p.mb-0 #[em Adventure]
                  .col-6
                    p.mb-0 Crucero
                    p.mb-0 Deportes de invierno
                    p.mb-0 Mini-vacaciones
                    p.mb-0 Luna de miel
                    p.mb-0 Aventura
          .row(numero="2" titulo="<em>Ancillary services</em> / Servicios complementarios")
            .col-xl-8
              .p-3.rounded-4.bg-secundario-s10.mb-3
                .row.justify-content-center
                  .col-6
                    p.mb-0 #[em Visa]
                    p.mb-0 #[em All-inclusive]
                    p.mb-0 #[em Insurance]
                    p.mb-0 #[em Foreign exchange]
                    p.mb-0 #[em Transfer]
                    p.mb-0 #[em Equipment hire]
                  .col-6
                    p.mb-0 Visa
                    p.mb-0 Todo incluido
                    p.mb-0 Seguro
                    p.mb-0 Cambio de moneda
                    p.mb-0 Transferir
                    p.mb-0 Alquiler de equipos
          .row(numero="3" titulo="<em>Accommodation</em> / Alojamiento")
            .col-xl-8
              .p-3.rounded-4.bg-secundario-s10.mb-3
                .row.justify-content-center
                  .col-6
                    p.mb-0 #[em Visa]
                    p.mb-0 #[em All-inclusive]
                    p.mb-0 #[em Insurance]
                    p.mb-0 #[em Foreign exchange]
                    p.mb-0 #[em Transfer]
                    p.mb-0 #[em Equipment hire]
                  .col-6
                    p.mb-0 Visa
                    p.mb-0 Todo incluido
                    p.mb-0 Seguro
                    p.mb-0 Cambio de moneda
                    p.mb-0 Transferir
                    p.mb-0 Alquiler de equipos
          .row(numero="4" titulo="<em>Transportation</em> / Transporte")
            .col-xl-8
              .p-3.rounded-4.bg-secundario-s10.mb-3
                .row.justify-content-center
                  .col-6
                    p.mb-0 #[em Charter flight]
                    p.mb-0 #[em Luxury car]
                    p.mb-0 #[em Scheduled flight]
                  .col-6
                    p.mb-0 Vuelo charter
                    p.mb-0 Carro de lujo
                    p.mb-0 Vuelo programado

    separador
    
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 #[em Geographical locations] // Ubicaciones geográficas

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/45.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .p-3.bg-secundario-s5.rounded-4.mb-3
          p.mb-0 #[em The geographical location is the identification of a specific place on the planet using various tools such as maps, compasses, coordinates, or geolocation systems.]
          p.mb-0 #[em In the accommodation service, it is important to know the location of the establishment and the specific places that guests may need to access. Therefore, it is important to keep that in mind and guide them in case of being.]
          p #[em Colombia is a land of diversity, from los Andes to the Amazon, it has a place for everyone.]
          p.mb-0 #[em Colombia can be divided into six geographic regions: the Caribbean coast, the Pacific coast, los Andes Mountains, Orinoquia, the Amazon rainforest, and the Islands.]
          p.mb-0 #[em Each region offers it's own activities, it is important to know the highlights of each of them.]
        
        p.mb-0 La ubicación geográfica es la identificación de un lugar específico del planeta, mediante el uso de diversas herramientas como mapas, brújulas, coordenadas o sistemas de geolocalización.
        p En el servicio de alojamiento, es importante tener conocimiento de la ubicación del establecimiento y los lugares específicos que los huéspedes pueden necesitar acceder. Por lo tanto, es importante tenerlo presente y orientarlos en caso de ser requerido.

        p.mb-0 Colombia es una tierra diversa, desde los Andes hasta el Amazonas, existe un lugar para cada persona.
        p.mb-0 Colombia se puede dividir en seis regiones geográficas: la costa Caribe, la costa Pacífica, la Cordillera de los Andes, Orinoquia, la selva amazónica y la zona insular.
        p.mb-0 Cada región ofrece sus propias actividades, es importante conocer los aspectos más destacados de cada una de ellas.


    .bg-title.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 #[em Hotel guests require key information such as the following.]

    .p-4.rounded-4.bg-secundario-s10.mb-4
      p.mb-0.text-center Los huéspedes del hotel requieren información clave como la siguiente.

    .row.justify-content-center.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        SlyderA(tipo="b").bg-acento-botones-a5.p-4.tarjeta.h-100
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4.mb-0 #[em Food and drink]
              p #[em Bars / restaurants / takeaways / local specialities]
              h4.mb-0 Comidas y bebidas
              p.mb-0 Bares / restaurantes / comida para llevar / especialidades locales
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4.mb-0 #[em Sightseeing]
              p #[em Museums / galleries historic monuments parks / gardens]
              h4.mb-0 Turismo
              p.mb-0 Museos / galerías monumentos históricos / parques / jardines
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4.mb-0 #[em Entertainment]
              p #[em Discos / nightclubs / shows / festivals / concerts halls / funfairs]
              h4.mb-0 Entretenimiento
              p.mb-0 Discotecas / clubes nocturnos / espectáculos / festivales / salas de conciertos / ferias
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4.mb-0 #[em Climate]
              p #[em Seasons, temperature, and rainfall]
              h4.mb-0 Clima
              p.mb-0 Estaciones / temperatura / precipitaciones
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4.mb-0 #[em Getting around]
              p #[em Metro / trains bus services]
              h4.mb-0 Desplazamiento
              p.mb-0 Metro / trenes autobús


      .col-sm-11.col-lg-6
        figure
          img(src="@/assets/curso/tema2/46.png", alt="" data-aos="zoom-in-down")





</template>

<script>
export default {
  name: 'Tema2',
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
