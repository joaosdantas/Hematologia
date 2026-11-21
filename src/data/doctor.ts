// ---------------------------------------------------------------------------
// Dados centralizados do médico e do site.
// Substitua os placeholders [ ... ] pelos dados reais quando estiverem
// disponíveis. A interface inteira é alimentada por este arquivo.
// ---------------------------------------------------------------------------

export const doctor = {
  name: 'Dr. Augusto Gaidukas',
  shortName: 'Augusto Gaidukas',
  specialty: 'Hematologia e Hemoterapia',
  professionalTitle: 'Hematologista',
  monogram: 'AG',

  // Credenciais confirmadas
  crm: '229153',
  rqe: '128025',

  // Biografia institucional
  bio: 'Dr. Augusto Gaidukas é médico formado pela PUC-Campinas, com residência médica em Hematologia e Hemoterapia pela Faculdade de Medicina de São José do Rio Preto. Sua prática é orientada pela escuta atenta, pela investigação cuidadosa dos exames e pela clareza na comunicação com cada paciente.',

  // Contato — placeholders configuráveis
  contact: {
    phone: '[Telefone]',
    whatsapp: '[WhatsApp]',
    email: '[E-mail]',
    address: '[Endereço]',
    instagram: '[Instagram]',
  },

  // Links que apontam para agendamento — configuráveis
  links: {
    booking: 'https://wa.me/[numero]', // TODO: substituir pelo link real de agendamento
    blog: '/blog', // Futuro blog em WordPress (a ser configurado)
  },
}

export const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Atuação', href: '#atuacao' },
  { label: 'Blog', href: '/blog' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#contato' },
]

export const hero = {
  kicker: 'Dr. Augusto Gaidukas',
  title: 'Hematologia e Hemoterapia',
  headline:
    'Investigação cuidadosa para entender o que os seus exames estão dizendo.',
  sub: 'Atendimento humano e técnico em hematologia e hemoterapia, com foco em escuta, clareza e acompanhamento próximo ao longo de todo o processo.',
  primaryCta: 'Agendar consulta',
  secondaryCta: 'Conhecer o Dr. Augusto',
}

export const about = {
  title: 'Conheça o Dr. Augusto',
  bioLabel: 'Formação e atuação',
  fields: [
    { label: 'Formação', value: 'PUC-Campinas' },
    {
      label: 'Residência',
      value:
        'Hematologia e Hemoterapia — Faculdade de Medicina de São José do Rio Preto',
    },
    { label: 'CRM', value: doctor.crm },
    { label: 'RQE', value: doctor.rqe },
  ],
}

export const areas = [
  {
    index: '01',
    title: 'Onco-Hematologia',
    description:
      'Diagnóstico, estadiamento e tratamento atualizado de neoplasias hematológicas, como leucemias agudas e crônicas, linfomas (Hodgkin e não-Hodgkin) e mieloma múltiplo. Abordagem individualizada desde a investigação inicial até o seguimento pós-tratamento.',
  },
  {
    index: '02',
    title: 'Terapias avançadas',
    description:
      'Condução clínica em imunoterapia de precisão com anticorpos biespecíficos, além de avaliação de elegibilidade, indicação e acompanhamento de pacientes candidatos a terapias celulares (como células CAR-T) e ao Transplante de Medula Óssea (autólogo e alogênico), desde o preparo pré-procedimento, indicação ao centro performador e o seguimento pós-terapia.',
  },
  {
    index: '03',
    title: 'Hemostasia e Trombose',
    description:
      'Investigação e manejo clínico de distúrbios da coagulação, tanto hemorrágicos (doença de von Willebrand, hemofilias e plaquetopenias) quanto trombóticos (trombofilias hereditárias e adquiridas, trombose venosa profunda, embolia pulmonar e anticoagulação em cenários complexos).',
  },
  {
    index: '04',
    title: 'Hematologia Clínica e Anemias',
    description:
      'Investigação aprofundada e tratamento de alterações do hemograma no consultório, incluindo anemias carenciais e hemolíticas, falências medulares, mielodisplasias, além de leucopenias (glóbulos brancos baixos), leucocitoses (glóbulos brancos altos), plaquetopenias (plaquetas baixas) e plaquetoses (plaquetas altas) a esclarecer.',
  },
  {
    index: '05',
    title: 'Hemoterapia e Medicina Transfusional',
    description:
      'Suporte hemoterápico especializado, racionalização do uso de hemocomponentes, preparo pré-operatório (Patient Blood Management), manejo de reações transfusionais e condução de procedimentos como aférese terapêutica e sangria terapêutica.',
  },
  {
    index: '06',
    title: 'Procedimentos Hematológicos Diagnósticos e Terapêuticos',
    description:
      'Realização de mielograma, biópsia de medula óssea, avaliação clínica por exame físico completo e indicação de exames laboratoriais de ponta como NGS (testagem genética de última geração) e imunofenotipagem por citometria de fluxo.',
  },
]

export const principles = [
  {
    title: 'Escuta',
    description:
      'Toda análise começa pela escuta atenta da sua história, das suas dúvidas e do que tem sido significativo para você.',
  },
  {
    title: 'Investigação',
    description:
      'Exames são ferramentas de investigação clínica e são interpretados com rigor, no contexto de cada caso.',
  },
  {
    title: 'Clareza',
    description:
      'Nada de linguagem confusa: o objetivo é que você saia da consulta compreendendo o que foi discutido e os próximos passos.',
  },
  {
    title: 'Acompanhamento',
    description:
      'O cuidado contínuo e a disponibilidade para novas dúvidas fazem parte do processo de confiança.',
  },
]

export const blog = {
  title: 'Informação também faz parte do cuidado.',
  description:
    'Conteúdos sobre hematologia e hemoterapia, exames e saúde produzidos para ajudar você a compreender melhor as informações relacionadas à sua saúde.',
  cta: 'Ver conteúdos',
  upcoming: true,
}

export const faq = [
  {
    question: 'O que faz um hematologista?',
    answer:
      'O hematologista é o médico especialista no estudo do sangue, da medula óssea e das doenças relacionadas, incluindo alterações nos exames laboratoriais. Cada caso deve ser avaliado individualmente em consulta.',
  },
  {
    question: 'Quando procurar um hematologista?',
    answer:
      'A busca por um hematologista pode acontecer por encaminhamento de outro médico, por alterações encontradas em exames de rotina ou diante de sintomas que mereçam investigação. A decisão de procurar avaliação deve sempre ser orientada por um profissional de saúde.',
  },
  {
    question: 'Como funciona uma consulta?',
    answer:
      'Na consulta, a história clínica — antecedentes, sintomas e contexto de vida — é o ponto de partida. Em seguida, os exames já realizados são revisados e, se necessário, é definido quais investigações podem ajudar a esclarecer cada situação.',
  },
  {
    question: 'Quais informações devo levar para a consulta?',
    answer:
      'É útil levar exames de sangue e de imagem já realizados, a lista de medicações em uso e documentos pessoais. Isso ajuda o médico a entender o histórico com mais precisão durante a avaliação.',
  },
]

export const finalCta = {
  headline:
    'Tem dúvidas sobre seus exames ou precisa de uma avaliação especializada?',
  cta: 'Agendar consulta',
}

export const footer = {
  disclaimer:
    'As informações apresentadas neste site têm caráter informativo e não substituem uma consulta médica.',
  links: [
    { label: 'Política de Privacidade', href: '[url-politica]' },
    { label: 'Termos de Uso', href: '[url-termos]' },
  ],
}