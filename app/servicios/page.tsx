import Link from 'next/link';

type ExtraBlock = {
  title: string;
  quote?: string;
  paragraphs?: string[];
  bullets?: string[];
};

type ServiceSection = {
  id: string;
  menuLabel: string;
  sourceTitle: string;
  paragraphs: string[];
  bullets?: string[];
  extras?: ExtraBlock[];
};

const dropdownLinks = [
  { href: '#podologia', label: 'PODOLOGÍA' },
  { href: '#podologia-preventiva', label: 'Podología preventiva' },
  { href: '#cirugia-podologica', label: 'Cirugía podológica' },
  { href: '#podologia-deportiva', label: 'Podología deportiva' },
  { href: '#biomecanica-estudio-pisada', label: 'Biomecánica y estudio de la pisada' },
  { href: '#pie-diabetico', label: 'Pie diabético' },
  { href: '#podologia-infantil', label: 'Podología Infantil' },
  { href: '#fisioterapia', label: 'FISIOTERAPIA' },
  { href: '#fisioterapia-preventiva', label: 'Fisioterapia preventiva' },
  { href: '#fisioterapia-asistencial', label: 'Fisioterapia asistencial' },
  { href: '#nutricion-dietetica', label: 'NUTRICIÓN Y DIETÉTICA' },
  { href: '#educacion-nutricional', label: 'Educación nutricional' },
  { href: '#dietas-personalizadas', label: 'Dietas personalizadas' },
  { href: '#alimentacion-equilibrada', label: 'Alimentación equilibrada' },
  { href: '#dietas-perdida-peso', label: 'Dietas para pérdida de peso' },
  { href: '#nutricion-deportiva', label: 'Nutrición deportiva' },
  { href: '#situaciones-fisiologicas', label: 'Situaciones fisiológicas' },
  { href: '#nutricion-embarazo', label: 'Nutrición en el embarazo' },
  { href: '#intolerancias-alergias', label: 'Intolerancias y alergias' },
  { href: '#patologias', label: 'Patologías' },
  { href: '#asesoramiento-psiconutricional-detalle', label: 'Asesoramiento psiconutricional' },
  { href: '#enfermeria', label: 'ENFERMERÍA' },
];

const sections: ServiceSection[] = [
  {
    id: 'podologia',
    menuLabel: 'PODOLOGÍA',
    sourceTitle: 'Podología',
    paragraphs: [
      'Centramos la podología en la necesidad de cuidar el soporte esencial que tenemos el ser humano para desplazarnos: los pies, ya que estos soportan unos 12 kms diarios y unos 200.000 kms a lo largo de toda su vida.',
      'La sociedad va teniendo más conciencia de la importancia de mantener sus pies sanos, su tratamiento y cuidado son determinantes para fomentar la salud en todo el cuerpo por lo que en Clínica B&C nos encargamos de la prevención, diagnóstico y tratamiento de afecciones en los pies y sus repercusiones en el resto del cuerpo.',
    ],
  },
  {
    id: 'podologia-preventiva',
    menuLabel: 'Podología preventiva',
    sourceTitle: 'Podología Preventiva',
    paragraphs: [
      'La podología preventiva se basa en dar a la población la educación y consejos necesarios para el correcto autocuidado de los pies, evitando la instauración o empeoramiento de patologías.',
      'La labor del podólogo comienza identificando factores de riesgo podológico de las patologías prevalentes en la población, para así poder diseñar y poner en marcha programas de salud podológica.',
      'La atención temprana es sinónimo de éxito terapéutico. La prevención de los problemas en los pies abarcan desde evitar lesiones en un deportista, pasando por identificar posibles afecciones en la infancia, hasta conocer cuál es el calzado más fisiológico.',
    ],
    bullets: [
      'Correcto corte de uñas',
      'Adecuada higiene, secado e hidratación de la piel',
      'Elección y uso de calzado adecuado',
      'Detección precoz de problemas y lesiones en los pies',
      'Revisiones podológicas periódicas desde la edad infantil',
    ],
  },
  {
    id: 'cirugia-podologica',
    menuLabel: 'Cirugía podológica',
    sourceTitle: 'Cirugía Podológica',
    paragraphs: [
      'Este campo de actuación engloba tanto el tratamiento de lesiones de la piel y uñas, tales como hiperqueratosis (durezas), helomas , infecciones micoticas (hongos) y bacterianas, uña encarnada, verruga plantar (“papiloma”); así como el abordaje quirúrgico de deformidades mediante técnicas propias de cirugía, Onicocriptosis (uña), dedos en garra, HAV (juanetes).',
      'Contamos con profesionales altamente cualificados que actúan con técnicas novedosas, valiéndose de la última tecnología en el sector.',
    ],
    bullets: [
      'Cirugía para Onicocriptosis (uña encarnada)',
      'Cirugía para Papilomas (verrugas)',
      'Cirugía para biopsias de tejidos cutáneos',
      'Cirugía para quistes',
      'Cirugía para helomas (ojo de gallo)',
      'Infiltraciones',
    ],
  },
  {
    id: 'podologia-deportiva',
    menuLabel: 'Podología deportiva',
    sourceTitle: 'Podología Deportiva',
    paragraphs: [
      'Esté área tiene como fin el análisis y mejora del rendimiento deportivo mediante la prevención y tratamiento de lesiones en los pies de deportistas.',
      'La práctica deportiva puede llevar a problemas en espalda, cadera, rodilla, tobillo, pies, en forma de sobrecarga muscular, tendinitis, fractura por estrés, etc. De hecho, un alto porcentaje de deportistas desconocen que tienen limitado su rendimiento deportivo por una pisada patológica. Un exceso de pronación o supinación durante la marcha, o la realización de éstas a destiempo pueden provocar lesiones y mermar el rendimiento deportivo.',
    ],
    bullets: [
      'Tratamiento de lesiones de la piel (hematomas, rozaduras y ampollas)',
      'Tratamiento de infecciones de la piel (papilomas, candidiasis, dermatomicosis)',
      'Tratamiento de lesiones de las uñas (arrancamientos, hematomas, onicocriptosis, onicomicosis)',
      'Tratamiento de lesiones musculares (sobrecargas musculares, contracturas, roturas fibrilares)',
      'Tratamiento de lesiones tendinosas (tendinitis, entesitis, bursitis, síndrome de la cintilla ileotibial))',
      'Tratamiento de lesiones articulares (esguinces, distensiones, luxaciones)',
      'Tratamiento de lesiones óseas (fracturas de estrés, fisuras, exóstosis)',
    ],
  },
  {
    id: 'biomecanica-estudio-pisada',
    menuLabel: 'Biomecánica y estudio de la pisada',
    sourceTitle: 'Biomecánica y estudio de la pisada',
    paragraphs: [
      'Realizamos confecciones de plantillas y ortesis de silicona a medida según necesidad.',
      'Un exceso de pronación o supinación durante la marcha, o la realización de éstas a destiempo pueden provocar lesiones, dolores en las articulaciones, y dolores musculares.',
      'Muchas personas tienen afecciones en diferentes partes del cuerpo como consecuencia de una mala pisada.',
    ],
    bullets: [
      'Fascitis plantar',
      'Espolón calcáneo',
      'Dolores articulares en tobillos, rodilla, cadera y columna vertebral',
      'Sobrecargas músculo-tendinosas',
    ],
  },
  {
    id: 'pie-diabetico',
    menuLabel: 'Pie diabético',
    sourceTitle: 'Pie Diabético',
    paragraphs: [
      'Prevención y tratamiento de las lesiones de los pies en pacientes diabéticos.',
      'La prevalencia estimada de la diabetes en nuestro país se sitúa en torno a un 6,5% para la población  entre los 30 y 65 años, oscilando en diferentes estudios entre un 6% y un 12%.',
      'El riesgo de aparición de úlceras en los pies es 3 veces mayor en los pacientes con diabetes con polineuropatía. La incidencia de ulceración en el pie en España es de 7,6%, en cuanto a la prevalencia de las amputaciones es de 1,8%.',
      'La prevención de las lesiones del pie en las personas con diabetes con factores de riesgo es fundamental para reducir su incidencia po lo que la educación junto con la atención podológica pueden acelerar el diagnóstico precoz y evitar así sus complicaciones.',
      'En Clínica B&C recomendamos revisiones periodicas de los piés a los pacientes que padecen la enfermedad.',
      'BONO PREVENCIÓN PIE DIABÉTICO',
      'Benefíciate de las ventajas de nuestro bono y disfruta de unos pies sanos.',
    ],
    bullets: ['Úlceras', 'Trastornos de la piel y uñas', 'Revisiones rutinarias', 'Consejos para el cuidado del pie en diabéticos'],
  },
  {
    id: 'podologia-infantil',
    menuLabel: 'Podología Infantil',
    sourceTitle: 'Podología Infantil',
    paragraphs: [
      'Según estudios científicos, 9 de cada 10 niños, tendrán algún tipo de alteración en los pies o relacionada con estos, antes de los 15 años y solamente 1 de cada 10 de ellos demandará la atención sanitaria del Podólogo.',
      'Ayude a que los pies de sus hijos se desarrolle en plenitud de salud.',
      'Desde Clínica B&C y con la colaboración del Ayuntamiento de la Rinconada llevamos a cabo un programa de salud podológica escolar, cuya finalidad es la prevención y el diagnostico precoz en los escolares de la Rinconada.',
    ],
    bullets: ['Desviaciones de los dedos', 'Pies planos-valgos', 'Dismetrías', 'Alteración de la marcha', 'Verrugas plantares (papilomas)', 'Enfermedad de Sever'],
  },
  {
    id: 'fisioterapia',
    menuLabel: 'FISIOTERAPIA',
    sourceTitle: 'Fisioterapia',
    paragraphs: [
      'La fisioterapia cada día está mas presente en nuestra vida. Cada vez somos mas conscientes de que acudir a una consulta de fisioterapia no sólo tiene cabida cuando se nos presenta un dolor insoportable.',
      'Esta disciplina actúa en la prevención, el mantenimiento y la recuperación de la funcionalidad utilizando cualquiera de los medios manuales y físicos a su alcance.',
      'Por ello, consideramos fundamental realizar una valoración previa exaustiva. Es necesario conocer las causas del problema, mas allá de localizar únicamente el foco de dolor.',
      'Citando a la Doctora en fisioterapia Diane Lee: «Son las victimas las que gritan, no los criminales. Nuestra función es atender a las victimas, pillar a los criminales e indagar y llegar hasta el pez gordo».',
    ],
  },
  {
    id: 'fisioterapia-preventiva',
    menuLabel: 'Fisioterapia preventiva',
    sourceTitle: 'Fisioterapia preventiva',
    paragraphs: [
      'La labor preventiva de la fisioterapia es una herramienta eficaz para reducir el riesgo de padecer lesiones y, en el caso de que ocurran, que sean de menor gravedad. Por ello, acudir al fisioterapeuta sin estar lesionado puede ser útil para seguir manteniendo la salud y prevenir las temidas lesiones.',
      'Habitualmente, nos encontramos con pacientes que manifiestan no haber ido al fisio ya que no han tenido ninguna lesión ni dolencia. Lanzo una pregunta, si usted entrena asiduamente y se encuentra bien físicamente ¿Por qué sigue entrenando? La respuesta correcta está clara, usted quiere mantener su bienestar o incluso continuar progresando.',
      'Desde nuestro punto de visto, la visita al fisioterapeuta debería programarse y planificarse de la misma manera, y no esperar a que lleguen malos resultados.',
    ],
  },
  {
    id: 'fisioterapia-asistencial',
    menuLabel: 'Fisioterapia asistencial',
    sourceTitle: 'Fisioterapia holística',
    paragraphs: [
      'Entendemos e l cuerpo humano como un conjunto de tejidos vivos los cuales no pueden separarse ni entenderse de forma aislada. Cualquier alteración del mismo tendrá causas multifactoriales. Esto hace que diferentes profesiones que practiquen métodos o tratamiento totalmente opuestos, puedan tener los mismos resultados con sus pacientes. Consideramos fundamental conocer diferentes puntos de vista fisioterapéuticos, para darle el sentido mas objetivo a tus problemas y alteraciones.',
      'A menudo se confunde el fisio como el profesional que trata el sistema muscular. Mucho más lejos, la fisioterapia contempla el cuerpo como un todo y por ello estamos cualificados para desarrollar la fisioterapia en otros aspectos que puedas necesitar: Sistema cardiovascular, respiratorio, ATM (Articulación Temporo Mandibular), suelo pélvico, sistema nervioso periférico, etc.',
    ],
    extras: [
      {
        title: '¿Le gustaría hacernos alguna consulta?',
        paragraphs: [
          'Aquí tiene las preguntas frecuentes de nuestros pacientes. Si tiene alguna consuta no dude en hacérnosla llegar. Nuestra responsable de fisioterapia le responderá encantada.',
        ],
        bullets: [
          '¿Cuándo debo acudir a un fisioterapeuta?',
          'No existe una clasificación que diga cuando una persona debe acudir a una consulta de fisioterapia, pero es imprescindible aprender a escuchar a nuestro propio cuerpo. En los casos de dolor e impotencia funcional, además de acudir a un médico, sería más que conveniente consultar a un fisioterapeuta, aunque como también hemos hablado anteriormente, acudir al fisioterapeuta sin estar lesionado puede ser útil para seguir manteniendo la salud y prevenir las temidas lesiones.',
        ],
      },
    ],
  },
  {
    id: 'nutricion-dietetica',
    menuLabel: 'NUTRICIÓN Y DIETÉTICA',
    sourceTitle: 'Nutrición y Dietética',
    paragraphs: [
      'De la importancia que constituye la alimentación para la supervivencia del ser humano, nace una rama sanitaria tan bonita como es la Nutrición “Ciencia que comprende todos aquellos procesos mediante los cuales el organismo incorpora, transforma y utiliza, las sustancias químicas (nutrientes) contenidas en los alimentos”.',
      'Para poder proporcionarle al organismo los nutrientes que necesita en cada momento, es necesario tener una alimentación adecuada, variada y equilibrada ya que cada alimento proporciona unos nutrientes completamente diferentes y son necesarios todos ellos.',
      'Trabajamos la alimentación desde el punto de vista de la educación nutricional, centrándonos en enseñar a comer, no en contar calorías es decir, recibiendo un asesoramiento nutricional adecuado, el cual te ayude a llegar a ese objetivo.',
      'Personalmente, como encargada del área de la Nutrición y Dietética, me puedo describir como una enamorada de la alimentación, porque comer es un placer y eso es algo que no se le puede negar a nadie.',
    ],
  },
  {
    id: 'educacion-nutricional',
    menuLabel: 'Educación nutricional',
    sourceTitle: 'Nutrición infantil',
    paragraphs: [
      '¿Consideras que tus hábitos alimentarios son mejorables? Nunca es tarde para aprender. Te enseñamos como combinar los alimentos, cómo comprar y cómo cocinar de manera saludable. Cambiar las malas rutinas del hogar es posible con un poco de organización y con muchas ganas.',
      'La introducción de los alimentos en el bebé es importante para evitar problemas de alergias alimentarias y para enseñar a los niños a comer correctamente. Te ayudo a cambiar los hábitos alimentarios de tu hijo si tiene sobrepeso o si le cuesta comer bien. Sin dietas estrictas y con salud.',
    ],
  },
  {
    id: 'dietas-personalizadas',
    menuLabel: 'Dietas personalizadas',
    sourceTitle: 'Dietas Personalizadas',
    paragraphs: [
      'En la primera consulta se lleva a cabo una entrevista inicial para conocer la historia clínica y dietética, entrevista motivacional, planificación de objetivos y una bio-impedancia (Determinación de peso, % de grasa corporal, kg de masa muscular, etc.).',
      'Con esta información inicial se elabora un plan de alimentación de la manera más idónea según la finalidad y el objetivo, de tal manera que se adapte a los hábitos, horario, situación socio-económica, actividad física y preferencias del paciente.',
      'Realizamos dietas para todo tipo de necesidades. Nuestra manera de trabajar es totalmente personalizada y adaptada a cada caso. Nos tomamos nuestro tiempo para cada persona, escuchando las particularidades y necesidades específicas de cada persona.',
    ],
    bullets: [
      'Dieta para sobrepeso u obesidad',
      'Dieta para ganar peso',
      'Dieta para deportistas y preparación de pruebas físicas',
      'Dieta de mantenimiento de peso',
      'Dieta para aprender a comer',
    ],
  },
  {
    id: 'alimentacion-equilibrada',
    menuLabel: 'Alimentación equilibrada',
    sourceTitle: 'Alimentación Equilibrada',
    paragraphs: [
      'La alimentación equilibrada de la mano de la educación nutricional está aconsejada para la población general, lo ideal, es iniciarla en la infancia para la adquisición de hábitos saludables y prolongarlo durante toda la vida.',
      'Está indicada para personas aparentemente sanas, pero que realmente no se alimentan adecuadamente, bien por desconocimiento o por aversiones/rechazo a ciertos alimentos, provocando un desequilibrio a nivel nutricional.',
      'En consulta, trabajaremos la carencia que exista, elaborando los menús de manera adecuada, facilitando recetas si fuera necesario para innovar en cocina y conocer nuevas técnicas culinarias, para salir de dietas monótonas y aburridas y muchas veces con carencias nutricionales. No existen los alimentos prohibidos, sólo el aprendizaje a consumirlos con la frecuencia adecuada.',
    ],
  },
  {
    id: 'dietas-perdida-peso',
    menuLabel: 'Dietas para pérdida de peso',
    sourceTitle: 'Adelgazamiento',
    paragraphs: [
      'La dieta para perder peso no es más que la dieta equilibrada y personalizada, de forma hipocalórica, de tal manera que permita que pierdas peso al mismo tiempo que vas aprendiendo y desarrollando hábitos de alimentación adecuados.',
      'Para perder peso y mantenerlo hay que conseguir cambiar los hábitos. Organizamos tu dieta de adelgazamiento en función de tus necesidades, gasto energético, gustos, horarios, costumbres, actividad física… Pierde peso y gana salud con alimentos naturales para sentirte mejor.',
      'Esta es la única manera de perder peso, ya que es la única que hace que puedas mantener el peso perdido. Suelo decir en consulta, que el objetivo final no es la pérdida de peso sino saber mantenerlo. Este objetivo es el difícil de conseguir sino pierdes peso con una dieta equilibrada y personalizada.',
    ],
  },
  {
    id: 'nutricion-deportiva',
    menuLabel: 'Nutrición deportiva',
    sourceTitle: 'Nutrición Deportiva',
    paragraphs: [
      'La nutrición adecuada en una persona deportista es esencial para conseguir un rendimiento óptimo en el deporte que se practique. Así mismo también es esencial para aquellas personas que deseen aumentar su masa muscular, aportándole al músculo los nutrientes que necesita para ello, sin que suponga una subida del porcentaje de grasa.',
      'El deportista debe cuidar su alimentación para prevenir futuras lesiones y para sacar el máximo partido de los entrenamientos. Puedes mejorar tu rendimiento deportivo y tu composición corporal con una alimentación saludable, además de aprender cuándo y cómo tomar suplemento.',
    ],
  },
  {
    id: 'situaciones-fisiologicas',
    menuLabel: 'Situaciones fisiológicas',
    sourceTitle: 'Situaciones Fisiológicas',
    paragraphs: [
      'Existen etapas fisiológicas en la vida donde la alimentación se puede ver alterada, debido a cambios hormonales, de modo que, la dieta debe ajustarse a los requerimientos nutricionales de la situación fisiológica en la que se encuentra.',
      'Diabetes, colesterol, hipertensión, estreñimiento, reflujo gástrico… Mejora tu salud a través de tu alimentación.',
    ],
  },
  {
    id: 'nutricion-embarazo',
    menuLabel: 'Nutrición en el embarazo',
    sourceTitle: 'Nutrición específica para la mujer',
    paragraphs: [
      'Embarazo, lactancia, postparto y menopausia',
      'Embarazo/lactancia: El embarazo es el momento ideal para aprender cuidarse ya que la motivación es enorme. Te acompaño durante todo el proceso para hacer frente a las molestias gastrointestinales que puedas sufrir y para controlar la subida de peso. Comer bien durante la gestación es bueno para ti y para tu bebé.',
      'Post parto: después del parto no puedes regatear en calorías, tu bebe te necesita con más energía que nunca y eso se consigue con una buena alimentación.',
      'Menopausia: podemos decir que, los cambios hormonales producidos por el descenso en las hormonas sexuales tienen consecuencias enormes tanto a nivel físico como psicológico en la mujer. Ser consciente de las alteraciones que se producen y actuar para contrarrestar sus efectos, puede evitar repercusiones mayores al final de esta etapa, entorno a los 55-60 años.',
    ],
  },
  {
    id: 'intolerancias-alergias',
    menuLabel: 'Intolerancias y alergias',
    sourceTitle: 'Intolerancias y Alergias Alimentarias',
    paragraphs: [
      'Las alergias e intolerancias alimentarias están cada vez más presentes en la sociedad, de hecho, todos conocemos a alguien que padezca de celiaquía o intolerancia a la lactosa.',
      'En Clínica B&C, si hay alimentos que no te sientan bien, si tienes intolerancias o alergias, te preparamos una pauta de alimentación concreta adaptada a tu situación para que aprendas cómo comer a partir de ahora manteniendo una buena salud y sin caer en la monotonía.',
    ],
  },
  {
    id: 'patologias',
    menuLabel: 'Patologías',
    sourceTitle: 'Patologías (Diabetes, HTA, enfermedad renal)',
    paragraphs: [
      'La alimentación es una parte importante a tener en cuenta en el tratamiento de multitud de enfermedades; de hecho, la mayoría mejoran al iniciar las pautas de alimentación adecuadas, por ejemplo, una pre-diabetes es posible que desaparezca con un tratamiento dietético y ejercicio.',
    ],
  },
  {
    id: 'asesoramiento-psiconutricional-detalle',
    menuLabel: 'Asesoramiento psiconutricional',
    sourceTitle: 'Asesoramiento Psiconutricional',
    paragraphs: [
      'Le ayudamos a desarrollar hábitos alimenticios saludables que favorezcan su bienestar físico y psicológico. Si quieres un cambio vital tanto físico como psicológico, la psiconutrición es tu mejor aliada.',
      'La psiconutrición es la disciplina que aúna los conocimientos aportados desde la Nutrición y la Psicología con el objetivo de desarrollar hábitos alimenticios saludables que favorezcan el bienestar físico y psicológico de las personas.',
      'La psiconutrición no está focalizada en exclusiva a la pérdida de peso; esta disciplina científica considera que el sobrepeso no sólo es el resultado de la inactividad física o debido a una sobreingesta. Va más allá: mediante la modificación de variables psicológicas se permite el aprendizaje de hábitos de vida más saludables, que dotarán de recursos personales para mantener un peso sano y estable.',
    ],
    extras: [
      {
        title: '¿Qué es la Psiconutrición?',
        quote:
          'La modificación de los factores emocionales que influyen en el sobrepeso es tan importante como la modificación de la propia conducta alimentaria',
      },
      {
        title: '¿Cómo puede ayudarme la psiconutrición?',
        paragraphs: [
          'Además de obtener educación nutricional sobre la alimentación (tales como qué es una alimentación sana, cuándo hablamos de sobrepeso y sus efectos en la salud o los efectos perniciosos de las conocidas “dietas milagro”), bajo esta disciplina podrás:',
        ],
        bullets: [
          'Distinguir entre el hambre real y el hambre emocional',
          'Identificar y gestionar las emociones que interfieren en nuestro hábito alimentario',
          'Aumentar nuestros recursos para resolver conflictos personales de forma adecuada',
          'Comprensión de círculos viciosos entre pensamientos negativos y conductas que funcionan como mantenedores de los hábitos de vida poco saludables',
          'Entrenamiento en autocontrol mediante estrategias psicológicas que favorezcan nuestro bienestar',
          'Mantener la motivación para el cambio estableciendo metas realistas y alcanzables',
        ],
      },
    ],
  },
  {
    id: 'enfermeria',
    menuLabel: 'ENFERMERÍA',
    sourceTitle: 'Enfermería',
    paragraphs: [
      'Nuestro servicio de enfermería ambulatoria se centra en prestación de cuidados, la prevención y fomento de la salud, así como el seguimiento activo de diferentes patologías tanto agudas como crónicas.',
      'En Clínica B&C ponemos a su disposición los siguientes servicios en esta disciplina.',
    ],
    extras: [
      {
        title: 'Nuestros servicios de enfermería',
        bullets: [
          'Inyectables: Intramuscular y/o subcutánea. Mediante prescripción facultativa, administramos todo tipo de inyectables intramusculares, subcutáneos e intradérmicos.',
          'Calendario de vacunación en niños y adultos: Administramos todas la vacunas existentes en el calendario.',
          'Cura de heridas, suturas y realización de vendajes: Realización de curas periódicas o puntuales, así como sutura de heridas y la posterior retirada de ésta.',
          'Cura de Ulceras: Curas de ulceras de origen venoso y/o isquémico, así como el seguimiento de ésta.',
          'Lavado de oídos. Extracción de Tapones de Cerumen',
          'Plan de Cuidados de la Hipertensión: Control y seguimiento de la hipertensión, así como consejos para llevar a cabo una vida saludable.',
          'Plan de Cuidados de la Diabetes: Si sufres diabetes nuestro servicio de enfermería trazará para ti un plan personalizado de control de la diabetes.',
          'Educación para la salud: Fomento autocuidado. Realizamos planes personalizados en equipo con los demás profesionales del centro para llevar a cabo una vida saludable.',
        ],
      },
    ],
  },
];

export default function ServiciosPage() {
  return (
    <main className="bg-gray-50 min-h-screen pt-36 pb-24">
      <section className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 lg:p-10 shadow-sm mb-10">
          <p className="text-sm font-bold tracking-wider text-[#0066c1] mb-2">SERVICIOS</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">Contenido agrupado</h1>
          <p className="text-gray-700 leading-relaxed">
            Esta página agrupa el contenido de los enlaces del desplegable de servicios de clinicabc.es.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-8 lg:p-10 shadow-sm mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Índice</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
            {dropdownLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3 text-gray-700 hover:text-[#0066c1] hover:bg-[#0066c1]/10 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {sections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className="scroll-mt-32 rounded-3xl border border-gray-200 bg-white p-8 lg:p-10 shadow-sm"
            >
              <p className="text-sm font-bold tracking-wider text-[#0066c1] mb-2">{section.menuLabel}</p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">{section.sourceTitle}</h3>

              <div className="space-y-3 text-gray-700 leading-relaxed">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-6 space-y-2 text-gray-700">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#0066c1]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.extras && section.extras.length > 0 && (
                <div className="mt-8 space-y-5">
                  {section.extras.map((extra) => (
                    <section key={extra.title} className="rounded-2xl bg-gray-50 p-6 border border-gray-200">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{extra.title}</h4>

                      {extra.quote && (
                        <blockquote className="border-l-4 border-[#0066c1] pl-4 italic text-gray-700 mb-3">{extra.quote}</blockquote>
                      )}

                      {extra.paragraphs && extra.paragraphs.length > 0 && (
                        <div className="space-y-3 text-gray-700 mb-3">
                          {extra.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      )}

                      {extra.bullets && extra.bullets.length > 0 && (
                        <ul className="space-y-2 text-gray-700">
                          {extra.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-3">
                              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#0066c1]" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </section>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
