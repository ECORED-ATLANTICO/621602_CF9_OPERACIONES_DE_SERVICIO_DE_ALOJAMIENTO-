<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: '<em>English at the Front Desk: hotel communication challenge</em>',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la apropiación de vocabulario, estructuras gramaticales básicas y expresiones en inglés relacionadas con el servicio de recepción hotelera, el alojamiento, las instalaciones y la comunicación en contextos laborales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la estructura correcta de una oración afirmativa en presente simple?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Subject + auxiliary + verb + complement.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Subject + verb + complement.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Verb + subject + complement.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Complement + auxiliary + subject',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las oraciones afirmativas en presente simple se estructuran con sujeto, verbo y complemento.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes oraciones está correctamente escrita en tercera persona?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'He help the customer.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'She carry the luggage.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'It have a reservation.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'He helps the customer.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! En tercera persona singular se agrega “s” o “es” al verbo en presente simple.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Qué significa “lodging” en el contexto hotelero?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Servicio de restaurante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Recepción de visitantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Alojamiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Servicio de transporte.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! “Lodging” hace referencia al servicio de alojamiento ofrecido a los huéspedes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes establecimientos ofrece habitaciones compartidas y bajo costo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Resort.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Hostel.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Luxury hotel.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Boutique hotel.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Un hostel se caracteriza por ofrecer espacios compartidos y alojamiento económico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es una característica de los hoteles de 5 estrellas según la norma NTSH006?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cumplir mínimo el 95 % de los requisitos definidos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Tener únicamente habitaciones sencillas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ofrecer alojamiento gratuito.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No requerir clasificación oficial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los hoteles de 5 estrellas deben cumplir mínimo con el 95 % de los requisitos establecidos en la norma NTSH006.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Cuál de los siguientes adjetivos significa “caro”?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cheap.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Peaceful.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Expensive',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Historic..',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! “Expensive” se utiliza para describir un hotel o servicio de alto costo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Cuál es el propósito del presente simple en inglés?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hablar únicamente del pasado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Expresar hábitos, rutinas y eventos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Describir acciones futuras únicamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dar órdenes militares.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El presente simple se usa para expresar hábitos, rutinas y eventos cotidianos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué tipo de hotel pertenece a la categoría “ Economy Hotels”?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hoteles de nivel económico',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Hoteles de lujo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Hoteles históricos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Hoteles exclusivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los “Economy Hotels” corresponden a hoteles de nivel económico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de las siguientes expresiones da instrucciones en inglés?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'The concert starts at 7:00 pm.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'You walk straight for three blocks, then you turn right.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'She works at the hotel.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'They have a reservation.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Esta expresión se utiliza para brindar indicaciones o instrucciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Cuál de las siguientes palabras significa “encantador”?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Modern.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Bustling.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Charming.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cheap.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! “Charming ” se utiliza para describir lugares agradables o con encanto.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué ocurre con los verbos terminados en consonante + “y” en tercera persona?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se elimina el verbo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se agrega únicamente “s”.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La “y” cambia por “ies”.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se agrega “ing”.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! En verbos terminados en consonante + “y”, la “y” cambia por “ies” en tercera persona singular.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es una función importante del inglés en la recepción hotelera?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Facilitar la interacción con usuarios y visitantes extranjeros.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar los sistemas de reservas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar el uso del español.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Clasificar hoteles por estrellas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El inglés permite mejorar la atención y comunicación con usuarios no hispanohablantes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál de los siguientes verbos tiene una forma irregular en tercera persona singular?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Wash.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Carry.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Have.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Pay.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El verbo “have” cambia de manera irregular a “has” en tercera persona singular.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué expresión se utiliza para hablar de eventos programados?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'The doors open at midday.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'I am eating now.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'They were working yesterday..',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'She will travel next year..',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! “Luxury Hotels” corresponde a hoteles de nivel lujo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál de las siguientes opciones corresponde a un hotel de nivel lujo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Economy Hotels..',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Luxury Hotels',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Midscale Hotels.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Hostels.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! “Luxury Hotels” corresponde a hoteles de nivel lujo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Cuál de las siguientes palabras significa “moderno”?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Historic.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cheap.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Modern.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Relaxing.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! “Modern” se utiliza para describir instalaciones o espacios contemporáneos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué se recomienda hacer antes de realizar una presentación en inglés?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar los errores gramaticales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Seleccionar y organizar las ideas principales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Traducir palabra por palabra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar practicar la lectura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Organizar las ideas y preparar la información facilita una presentación clara y efectiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es la traducción correcta de “Peaceful / quiet / relaxing ”?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Bullicioso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Apacible / silencioso / relajante',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Costoso y elegante.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Histórico y moderno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Estas palabras describen lugares tranquilos y relajantes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál de las siguientes oraciones está en presente simple negativo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'She helps the customer.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'They are helping the guest.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'He does not help the customer.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'We helped the visitor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las oraciones negativas en presente simple utilizan el auxiliar “do/does” + “not”.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el objetivo principal del componente formativo “Inglés básico para servicio de recepción”?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aprender programación hotelera.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fortalecer competencias de comunicación en inglés en contextos de servicio y recepción.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseñar estructuras arquitectónicas hoteleras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Administrar sistemas financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El componente busca fortalecer habilidades comunicativas en inglés aplicadas al servicio y atención al cliente',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Felicitaciones! Ha demostrado una apropiación adecuada de los contenidos relacionados con estructuras básicas en inglés y vocabulario aplicado al servicio de recepción hotelera.',
      mensaje_final_reprobado:
        'Le recomendamos revisar nuevamente el componente formativo y reforzar los temas relacionados con presente simple, vocabulario hotelero y expresiones utilizadas en contextos de recepción y servicio al cliente.',
    },
  }),
}
</script>
