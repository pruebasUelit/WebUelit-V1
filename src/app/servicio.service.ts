import { Injectable } from '@angular/core';

@Injectable()
export class ServicioService {

  servicios: any[] = [
    {
      titulo: 'Fabrica de Software (Desarrollo y Testing)',
      resumen: 'Basada en la continua actualización y especialización Metodológica, Tecnológica y Humana, sumamos capacidad de operación. ',
      descripcion: 'Basada en la continua actualización y especialización Metodológica, Tecnológica y Humana, sumamos capacidad de operación. El objetivo de nuestro Servicio de “Fábrica de Software Extendido” (FASE) es el de proporcionarle los servicios de Análisis, Diseño, Construcción y Pruebas Unitarias en plataformas Mainframe y/o Distribuido; a la medida de su Cliente final. Los costos pueden alcanzar una disminución significativa comparada con el desarrollo interno en su organización, al reducir los costos de reclutamiento y entrenamiento.',
      image: '../assets/servicios/Fabricadesoftware.png'
    },
    {
      titulo: 'Outsourcing de Personal (Staffing)',
      resumen: ' Encontrar el personal adecuado no siempre es tarea fácil, seleccionar las personas idóneas significa el éxito del proyecto.',
      descripcion: 'Encontrar el personal adecuado no siempre es tarea fácil, seleccionar las personas idóneas significa el éxito del proyecto. Contamos con amplio conocimiento de las tendencias y retos que enfrentan las empresas y ofrecemos servicios de asignación de Personal altamente calificado en IT por ‘Time and Material’. Mediante procedimientos de control y seguimiento de nuestros servicios, le garantizamos los resultados esperados, generando ahorros considerables para su empresa.',
      image: '../assets/servicios/outsoursing.png'
    },
    {
      titulo: 'Desarrollo de Software a Medida',
      resumen: 'Desarrollamos software a medida en ambientes Web, escritorio, móvil. Servicios bajo variadas tecnologías y frameworks.',
      descripcion:'Desarrollamos software a medida en ambientes Web, escritorio, móvil. Servicios bajo variadas tecnologías y frameworks. Aplicamos metodología ágil SCRUM en nuestros desarrollos, involucrando directamente anuestros clientes. Empleamos tecnologías Open Source con soluciones innovadoras a costos asequibles.',
      image: '../assets/servicios/softwareamedida.png'
    },
    {
      titulo: 'Desarrollo de Software por Proyectos a Precio Cerrado',
      resumen: ' Desarrollo de aplicaciones con un estricto control en el seguimiento de las actividades para cumplir con oportunidad y Calidad.',
      descripcion:'Administramos Proyectos de Punta a Punta con herramientas, metodologías y procedimientos de vanguardia para la implementación de nuevas tecnologías. Desarrollo de aplicaciones con un estricto control en el seguimiento de las actividades para cumplir con oportunidad y Calidad. Generamos confianza en nuestros clientes mediante informe de avance, identificación de riesgos y mitigación de los mismos.',
      image: '../assets/servicios/porproyecto.png'
    },
    {
      titulo: 'Consultoria',
      resumen: ' Servicios de Consultoría integral en tecnologías y análisis de negocios. Evaluación de la situación de su Empresa mediante un diagnóstico inicial.',
      descripcion:'Le ofrecemos servicios de Consultoría integral en tecnologías y análisis de negocios. Evaluación de la situación de su Empresa mediante un diagnóstico inicial. Detección de malas prácticas, pliego de Recomendaciones, Planes de mejora. Le brindamos Estrategias IT, Análisis de requerimientos, Especificaciones funcionales y técnicas, auditoria de infraestructura IT, análisis para que logre una reducción de costos en su área IT.',
      image: '../assets/servicios/consultoria.png'
    }
    // {
    //   titulo: 'ERP (Odoo)',
    //   resumen: ' Socio de negocios de ODOO. Una Propuesta de Valor Exclusivo. Todo lo que necesita en una experiencia de usuario de primera categoría.',
    //   descripcion:'Socio de negocios de ODOO. UNA PROPUESTA DE VALOR EXCLUSIVO. Todo lo que necesita en una experiencia de usuario de primera categoría. El modelo de código abierto de Odoo nos ha permitido aprovechar los conocimientos de miles de desarrolladores y expertos en el mundo empresarial para construir cientos de aplicaciones en solo unos años. Con bases tecnológicas potentes, la estructura de Odoo es única. Ofrece usabilidad de la más alta calidad en todas las aplicaciones. Las mejoras en usabilidad realizadas en Odoo se implementarán directamente en todas nuestras aplicaciones totalmente integradas. De esa manera, Odoo evoluciona mucho más rápido que cualquier otra solución.',
    //   image: '../assets/servicios/odoo.png'
    // }
  ]

  constructor() {
    // console.log('Funcionando servicio');
  }

  obtenerServicios() {
    return this.servicios;
  }

  obtenerUnServicio(id) {
    return this.servicios[id];
  }

}
