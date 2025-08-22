import { ContentItem } from "../types";

export const contentItems: ContentItem[] = [
  {
    id: "1",
    title: "Novo Site 2Smart HR",
    subtitle: "Re-Design",
    description: "Uma nova imagem, uma navegação mais simples",
    category: "Website",
    tags: ["UI/UX", "Visual Design", "Moderno"],
    image: "https://i.imgur.com/9DzmdjM.jpeg",
    content:
      "Apresentamos o novo site do 2Smart HR, com um design mais moderno, navegação intuitiva e acesso facilitado à informação. Este novo site foi pensado para melhorar a experiência dos nossos clientes e parceiros, reunindo num só local todas as funcionalidades, novidades e apoio ao utilizador.",
    features: [
      "Interface limpa e moderna",
      "Padrões de acessibilidade aprimorados",
      "Design responsivo para todos os dispositivos",
      "Hierarquia visual aprimorada",
      "Fluxos de trabalho simplificados",
    ],
    cta: {
      label: "Visitar site",
      href: "https://www.2smart.pt",
      variant: "primary",
    },
  },
  {
    id: "2",
    title: "Geolocalização & Geofencing",
    subtitle: "Localização",
    description: "Saiba onde estão as suas equipas, em tempo real",
    category: "Geolocalização",
    tags: ["Dados", "Relatórios", "Insights"],
    image: "https://i.imgur.com/1ngYvZB.jpeg",
    content:
      "Já está disponível a nova funcionalidade de Geolocalização & Geofencing! Agora é possível acompanhar, em tempo real, a localização das equipas no terreno, definir zonas geográficas específicas e receber alertas automáticos sempre que há entradas ou saídas dessas zonas. Uma ferramenta poderosa para melhorar o controlo operacional e a gestão de recursos em mobilidade.",
    features: [
      "Visualização de dados em tempo real",
      "Criação de dashboard personalizado",
      "Filtragem e segmentação avançadas",
      "Geração automatizada de relatórios",
      "Capacidades de exportação",
    ],
  },
  {
    id: "3",
    title: "Lançamento 2Smart App",
    subtitle: "Mobile",
    description: "A gestão de recursos na palma da mão",
    category: "Usabilidade",
    tags: ["Mobile", "Responsivo", "Performance"],
    image: "https://i.imgur.com/NN1FW1X.jpeg",
    content:
      "A 2Smart HR chegou ao telemóvel! A nova 2Smart App, disponível para Android e iOS, permite aos colaboradores efectuar registos de presença, consultar horários, submeter pedidos e aceder a documentos — tudo de forma simples, prática e integrada com o sistema principal. Uma aplicação pensada para facilitar o dia a dia de quem está no terreno.",
    features: [
      "Performance móvel nativa",
      "Funcionalidade offline",
      "Interfaces otimizadas para toque",
      "Compatibilidade multiplataforma",
      "Recursos de aplicativo web progressivo",
    ],
  },
  {
    id: "4",
    title: "Novo Módulo de Exportação para ERP",
    subtitle: "Exportação",
    description: "Ligue a 2Smart HR ao seu sistema de gestão",
    category: "Gestão",
    tags: ["Cloud", "Escalável", "Confiável"],
    image: "https://i.imgur.com/ifsHItW.jpeg",
    content:
      "Sabia que a 2Smart HR já dispõe de um módulo de exportação para ERP? Esta funcionalidade permite exportar dados de forma estruturada para o seu sistema de contabilidade ou gestão financeira. Fale connosco para saber como pode tirar partido desta integração!",
    features: [
      "Garantia de 99.9% de uptime",
      "Dimensionamento automático",
      "Entrega de conteúdo global",
      "Segurança empresarial",
      "Recuperação de desastres",
    ],
  },
  {
    id: "5",
    title: "Relatório Desenvolvido à sua Medida",
    subtitle: "Customização",
    description: "Soluções personalizadas para as suas necessidades",
    category: "Suporte",
    tags: ["IA", "Machine Learning", "Automação"],
    image: "https://i.imgur.com/torJmpd.jpeg",
    content:
      "Tem necessidades específicas? Pode comunicar facilmente com a nossa equipa técnica e solicitar desenvolvimentos personalizados, adaptados às necessidades específicas da sua empresa.",
    features: [
      "Recomendações inteligentes",
      "Fluxos de trabalho automatizados",
      "Análises preditivas",
      "Processamento de linguagem natural",
      "Otimização de machine learning",
    ],
  },
  {
    id: "6",
    title: "Melhorias e Novas Funcionalidades",
    subtitle: "Updates",
    description:
      "Acompanhe todas as atualizações, melhorias e registos de alterações do sistema",
    category: "Logs",
    tags: ["Atualizações", "Melhorias", "Logs"],
    image:
      // "https://i.imgur.com/ORfyaeS.png",
      "https://i.imgur.com/9eusHry.png",
    content:
      "Este módulo permite-lhe manter-se informado sobre todas as novidades e alterações do sistema. Consulte os registos de atualizações, visualize melhorias implementadas e conheça as novas funcionalidades adicionadas.",
    features: [
      {
        title: "Horários",
        items: [
          "Definição de tolerância na pausa para almoço em horários não flexíveis - 18/02/2025",
          "Pesquisa de horários - 18/02/2025",
          "Definição de períodos de pausas intermédias - 18/02/2025",
          "Configuração de horário de pausa/descanso semanal - 18/02/2025",
        ],
      },
      {
        title: "Planos de trabalho",
        items: [
          "Correção do bug na apresentação do relatório da atribuição (execução correta mas relatório, por vezes, indicava erro) - 12/05/2025",
          "Apresentação de relatório com resumo da atribuição e indicação de sucesso/insucesso - 06/04/2025",
          "Definição de tolerância para pausas intermédias quando previstas nos horários - 18/02/2025",
          "Criação de planos de trabalho com objetivo semanal - 18/02/2025",
          "Pesquisa e ordenação de planos de trabalho - 18/02/2025",
        ],
      },
      {
        title: "Produtividade",
        items: [
          "Vista com contabilização de horas semanais quando existe plano semanal aplicado - 18/02/2025",
        ],
      },
      {
        title: "Relatórios",
        items: [
          "Alteração do Mapa de Banco de Horas para mostrar horas carregadas inicialmente - 20/06/2025",
          "Relatório Registo Tempos de Trabalho Maps (apresenta o local das picagens) - 24/04/2025",
          "Mapa de Banco de Horas - 18/02/2025",
          "Mapa de Horas Extras - 18/02/2025",
          "Mapa de Horários Semanal - 18/02/2025",
          "Acréscimo de relatórios - 18/02/2025",
        ],
      },
      {
        title: "Classificações",
        items: [
          "CCT/Horas Extra — possibilidade de marcar se pertence ao Banco de Horas, se é contabilizada e se é exportada para ERP - 18/02/2025",
          "Faltas — possibilidade de definir exportação para ERP (tempo ou dias) e indicar inclusão de subsídio de turno/alimentação - 18/02/2025",
        ],
      },
      {
        title: "Dispositivos",
        items: [
          "Melhoria no processamento biométrico com gestão automática de diferentes FingerprintAlgorithm - 06/04/2025",
          "Agendamento de recolhas automáticas de movimentos por dispositivo (ou por gateway) - 18/02/2025",
          "Ajuste de hora do dispositivo via consulta de informação - 18/02/2025",
        ],
      },
      {
        title: "Configurações Empresa",
        items: [
          "Definição de tolerância para pausas intermédias quando previstas nos horários - 18/02/2025",
          "Data de fecho mensal por empresa: limita submissões a até 1 mês antes do mês atual (perfis com Chefia/App); configuração reservada a RH/Administrador - 18/02/2025",
        ],
      },
      {
        title: "Outros",
        items: [
          "Pesquisa rápida nas áreas relevantes e filtro por estrutura e subestruturas - 20/06/2025",
          "Alterações ao layout e disponibilização de tema claro - 20/06/2025",
          "Log de acessos à aplicação (quem fez login e quando) - 02/06/2025",
          "Novos filtros nas vistas: por estrutura e subestruturas - 12/05/2025",
          "Geofencing — definição de locais autorizados para picagens na app - 12/05/2025",
          "Disponibilização da Webapp aos colaboradores - 24/04/2025",
          "Geolocalização — consulta do local onde a picagem foi realizada - 18/02/2025",
          "Customização de variações dos perfis (Administrador, RH, Chefia, Colaborador) - 18/02/2025",
          "Autenticação de duplo fator - 15/02/2025",
        ],
      },
    ],
  },
];
