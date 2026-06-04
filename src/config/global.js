export default {
  global: {
    Name: 'Inglés básico para servicio de recepción',
    Description:
      'Este componente formativo, profundizará sobre el estilo indirecto, el vocabulario y las frases del trabajo, las rutinas laborales y sociales que se solían tener. Habrá la oportunidad de aclarar dudas en cuanto a estructuras presentes, pasadas y futuras.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '<em>Simple Present</em>',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: '<em>Lodging</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: '<em>Category</em>',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: '<em>Class</em>',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: '<em>Types</em>',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: '<em>Characteristics</em>',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: '<em>Geographical locations</em>',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: '<em>Hotel areas and facilities</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: '<em>Organizational structure</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: '<em>Demonstratives</em>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'ADR',
      significado:
        'adr es el acrónimo de <em>Average Daily Rate</em>, y hace referencia a la tarifa diaria promedio del hotel. Es decir, ingresos por habitación / número de habitaciones vendidas.',
    },
    {
      termino: 'Cadena hotelera',
      significado:
        'una cadena hotelera es una empresa que administra un número de hoteles en diferentes ubicaciones. Esta administración se realiza bajo una marca, que transfiere estándares de operación y administrativos y se hace cargo del <em>marketing</em> y la promoción.',
    },
    {
      termino: 'Categoría',
      significado:
        'es el resultado de la clasificación de personas o cosas según un criterio o jerarquía.',
    },
    {
      termino: '<em>Front desk</em>',
      significado:
        'en los primeros hoteles y posadas, el registro se realizaba en un escritorio, que en inglés se dice <em>“desk”</em>. Por esta razón, se acuñó el término <em>front desk</em> para denominar el mostrador de la recepción de los hoteles.',
    },
    {
      termino: 'NTSH006',
      significado:
        'es la Norma Técnica Sectorial Hotelera que describe los requisitos para clasificar los hoteles por estrellas en Colombia.',
    },
  ],
  referencias: [
    {
      referencia:
        'Davis, T. (2021). <em>5 Main Regions of Colombia: A Guide To Planning Your Trip</em>. Kimkim.https://www.kimkim.com/c/highlights-of-colombia-the-best-of-each-region',
      link:
        'https://www.kimkim.com/c/highlights-of-colombia-the-best-of-each-region',
    },
    {
      referencia:
        'Reppen, R. (2012). <em>Grammar and Beyond</em>. Cambridge University Press.',
      link:
        'https://www.cambridge.org/core/books/grammar-and-beyond/64C7320219E156377140833166576464',
    },
    {
      referencia:
        'Strutt, P. (2003). <em>English for International Tourism</em>. Pearson Education ESL.',
      link:
        'https://www.pearson.com/us/higher-education/program/Strutt-English-for-International-Tourism_9780201750801',
    },
    {
      referencia:
        'Thering, R. (2019). <em>Vocabulario hotelero en inglés: 100 palabras que debes conocer</em>. FluentU Inglés.https://www.fluentu.com/blog/english-esp/vocabulario-hotelero-en-ingles-2/',
      link:
        'https://www.fluentu.com/blog/english-esp/vocabulario-hotelero-en-ingles-2/',
    },
    {
      referencia:
        'Woodward Education. (2021). <em>This That These Those - Demonstrative Pronouns Demonstrative Adjectives</em>. Woodward English.https://www.grammar.cl/Notes/This_That_These_Those.htm',
      link: 'https://www.grammar.cl/Notes/This_That_These_Those.htm',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturistico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de la línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sandra Isabel Suárez Delgado',
          cargo: 'Experto temático',
          centro: 'Centro de Gestión y Servicios',
        },
        {
          nombre: 'Harbey Castelblanco',
          cargo: 'Experto temático',
          centro: 'Centro Nacional Colombo Alemán',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
