import type { Translations } from "./en";

export const fr: Translations = {
  common: {
    siteTitle: 'Slordef - CTO & CISO Freelance',
    readMore: 'En savoir plus',
    viewProject: 'Voir le projet',
    allRightsReserved: 'Tous droits réservés',
    builtWithPassion: "Construit avec passion pour l'excellence",
  },
  nav: {
    home: 'Accueil',
    about: 'À propos',
    expertise: 'Expertise',
    services: 'Services',
    experience: 'Expérience',
    works: 'Réalisations',
    sideProjects: 'Projets Personnels',
    contact: 'Contact',
  },
  home: {
    title: 'Slordef',
    subtitle: 'CTO & CISO Freelance',
    tagline: 'Architecture • Sécurité • Leadership Technique',
    experience: '15+ ans de conception de systèmes scalables et sécurisés',
  },
  about: {
    title: 'À Propos',
    intro: "CTO et CISO avec plus de 15 ans d'expérience en développement fullstack, sécurité et leadership technique.",
    description:
      "J'aide les startups et les PME technologiques à structurer leur architecture, sécuriser leurs systèmes et gérer la complexité technique de manière efficace et durable.",
    approach:
      "Mon approche est pragmatique, mesurable et alignée stratégiquement avec les objectifs business. Je suis passionné par l'apprentissage, la construction de systèmes robustes et le mentorat d'équipes techniques.",
  },
  expertise: {
    title: 'Expertise Principale',
    architecture: {
      title: 'Architecture & Développement',
      items: [
        'Architecture multi-tenant, scalabilité, performance',
        'TypeScript, Node.js, React, Vue, Python, C++',
        'Pipelines CI/CD, containerisation, infrastructure cloud',
        'Monitoring et observabilité',
      ],
    },
    security: {
      title: 'Sécurité & Conformité',
      items: [
        'ISO 27001 : implémentation complète et certification',
        'Audits de sécurité, gestion des risques, DevSecOps',
        'Conception de politiques, plans de réponse aux incidents',
        'Gestion des vulnérabilités',
      ],
    },
    leadership: {
      title: 'Leadership & Gouvernance',
      items: [
        'Définition et exécution de la roadmap technique',
        "Mentorat de développeurs et direction d'équipes",
        'Gestion de crise (production, vulnérabilités)',
        'Collaboration interfonctionnelle',
      ],
    },
    impact: {
      title: 'Impact & Durabilité',
      items: [
        'Éco-conception et pratiques IT vertes',
        'Accessibilité (WCAG, RGAA)',
        "Évaluation de l'impact environnemental IT",
        "Décisions d'architecture durable",
      ],
    },
  },
  services: {
    title: "Modèles d'Engagement",
    subtitle: 'Options de collaboration flexibles adaptées à vos besoins',
    fractional: {
      title: 'CTO/CISO Fractionné',
      description: 'Support stratégique régulier pour startups et entreprises en croissance',
      items: [
        'Engagement de 1 à 2 jours par semaine',
        'Roadmap technique et stratégie',
        "Leadership et mentorat d'équipe",
        "Supervision de l'architecture et de la sécurité",
      ],
    },
    audits: {
      title: 'Audits & Évaluations',
      description: 'Analyse approfondie de vos systèmes, sécurité et processus',
      items: [
        "Audits de sécurité et d'architecture",
        'Analyse de performance et scalabilité',
        'Évaluation des écarts ISO 27001',
        "Recommandations détaillées et plans d'action",
      ],
    },
    missions: {
      title: 'Missions Courtes',
      description: 'Interventions ciblées pour des défis techniques spécifiques',
      items: [
        'Engagements focalisés de 2 à 5 jours',
        'Configuration de pipelines CI/CD',
        "Renforcement de l'infrastructure",
        'Réponse aux incidents et gestion de crise',
      ],
    },
  },
  experience: {
    title: 'Expérience Professionnelle',
    resilio: {
      period: '2022 – Présent',
      position: 'CTO & CISO',
      company: 'Resilio SA • Lausanne (Remote & Hybride)',
      items: [
        "Direction de la stratégie technique et développement de deux produits SaaS pour l'analyse de l'impact environnemental IT",
        'Obtention de la certification ISO 27001 avec implémentation complète du SMSI',
        "Direction de l'équipe de développement : conception de processus, mentorat, décisions d'architecture",
        "Garantie d'un temps d'arrêt critique nul grâce à un monitoring robuste et à la redondance",
        "Intégration de l'éco-conception et de l'accessibilité dans les cycles de vie des produits",
      ],
      techStack: ['TypeScript', 'Node.js', 'React', 'Python', 'PostgreSQL', 'Docker', 'CI/CD'],
    },
    freelance: {
      period: '2009 – Présent',
      position: 'Freelance – CTO/CISO as a Service | Développeur Fullstack',
      company: 'Suisse (Remote)',
      items: [
        "Audits de sécurité et d'architecture, renforcement de l'infrastructure",
        "Conception et livraison d'applications web et d'API scalables et performantes",
        "Implémentation de pipelines CI/CD et d'environnements containerisés",
        'Conseil aux fondateurs de startups et leaders techniques sur la stratégie technique à long terme',
        "Multiples projets réussis couvrant le web, le développement de jeux et l'architecture système",
      ],
    },
  },
  works: {
    title: 'Projets Sélectionnés',
    subtitle:
      "Une vitrine de projets techniques couvrant le développement web, le développement de jeux et l'architecture système. Chaque projet démontre l'application pratique de technologies modernes et de meilleures pratiques.",
    projects: {
      resilioTech: {
        title: 'Resilio Tech et Resilio DB',
        subtitle: '',
        description:
          'Je suis actuellement le CTO de {{ link(Resilio SA) }}, une société d&#39;évaluation d&#39;impact environnemental. Nous développons des outils d&#39;évaluation d&#39;impact environnemental pour les entreprises et les particuliers. Nous avons développé une application web qui permet aux entreprises de calculer leur empreinte et de la réduire.{{ break() }}Nous avons également développé une application de recherche d&#39;impact sur les équipements ou de génération de rapports d&#39;impact environnemental sur des configuration d&#39;équipement.',
      },
      sadnessOfValor: {
        title: 'Sadness of Valor',
        subtitle: 'Jeu vidéo disponible sur Steam',
        description:
          'Sadness of Valor est un jeu vidéo de type RTS (Real Time Strategy) développé par mes soins. Il est disponible sur Steam depuis le 30 décembre 2022.{{ break() }}Il est pour moi l&#39;aboutissement de deux années de travail, de passion et est le premier jeu vidéo que je développe. Je suis plutôt fier du chemin parcouru.{{ break() }}{{ break() }}Je vous invite à en savoir plus sur {{ link(Sadness of Valor) }} via son site officiel ou sur Steam directement.',
      },
      oneManStudioForGames: {
        title: 'One Man Studio For Games',
        subtitle: 'Studio de jeu vidéo indépendant',
        description:
          'Depuis mon enfance, je suis passionné par les jeux vidéo. J&#39;ai toujours voulu créer les miens. C&#39;est pourquoi je me suis lancé dans la création de mon propre studio de jeu vidéo indépendant pour y développer mes propres envies.{{ break() }}{{ break() }}{{ link(One Man Studio For Games) }} en est le résultat.',
      },
      squal: {
        title: 'Squal',
        subtitle: 'Site vitrine pour une illustratrice',
        description:
          'Afin de mettre en avant les illustrations de {{ link(Squal) }}, j&#39;ai réalisé un site vitrine simple et épuré. Le site est responsive et s&#39;adapte à tous les écrans. Il est également optimisé pour le référencement naturel.{{ break() }}{{ break() }}Il met en avant les illustrations de l&#39;artiste et permet de la contacter facilement.',
      },
      vaalnor: {
        title: 'Vaalnor',
        subtitle: 'Groupe de musique',
        description:
          'En 2009, un groupe de musique a vu le jour : {{ link(Vaalnor) }}.{{ break() }}J&#39;en suis le batteur et compositeur.{{ break() }}{{ break() }}Nous avons sorti un album en 2014, avec plusieurs concerts à notre actif.{{ break() }}{{ break() }}Si vous êtes amateur de metal, n&#39;hésitez pas à nous écouter !',
      },
      soulsGathering: {
        title: 'Souls Gathering',
        subtitle: 'Projet solo de musique',
        description:
          'Passionné de musique de génération en génération, j&#39;ai eu la chance de pouvoir apprendre le piano, la guitare et la batterie.{{ break() }}Il est donc tout naturel que je me sois lancé dans la composition de musique. Je compose principalement des musiques de jeux vidéos pour mes jeux, des musiques de films, et des musiques Metal.{{ break() }}{{ break() }}J&#39;ai donc créé mon propre projet de musique solo, {{ link(Souls Gathering) }}, pour y partager mes créations et mes inspirations coté Metal.',
      },
      stream: {
        title: 'Slo-Stream',
        subtitle: 'Expérimentation de plateforme de streaming',
        description:
          "Slo-Stream est un projet personnel qui a pour but de tester les technologies de streaming de jeux vidéo. Il est entièrement développé en TypeScript avec le framework et présente une interface utilisateur en Vue.js.{{ break() }}{{ break() }}Il n&#39;est pas à but lucratif et est uniquement utilisé pour des tests personnels et de l&#39;expérimentation. Malgré tout si le projet vous intéresse vous pouvez le retrouver sur{' '}{{ link(slo-stream.com) }}.",
      },
    },
  },
  sideProjects: {
    title: 'Projets Personnels & Passions',
    subtitle:
      "Au-delà du travail professionnel, je poursuis des projets créatifs et techniques qui alimentent ma passion pour l'apprentissage",
    gamedev: {
      title: 'Développement de Jeux',
      description:
        "Développement de jeux indépendants avec Unreal Engine, combinant programmation C++ avec modélisation 3D et animation. Construction d'expériences immersives de la conception à l'exécution.",
      technologies: ['Unreal Engine', 'C++', 'Modélisation 3D', 'Animation'],
    },
    music: {
      title: 'Création Musicale',
      description:
        'Compositeur, parolier et interprète dans plusieurs projets musicaux. Explorer la créativité à travers le son et donner vie aux visions artistiques.',
      technologies: ['Composition', 'Paroles', 'Interprétation', 'Production'],
    },
  },
  lastWords: {
    title: 'Construisons Quelque Chose de Grand Ensemble',
    description:
      "Que vous ayez besoin de leadership technique stratégique, d'expertise en sécurité ou d'aide pour faire évoluer votre architecture, je suis là pour aider votre équipe à réussir.",
    getInTouch: 'Prendre Contact',
    connectLinkedIn: 'Se connecter sur LinkedIn',
  },
  contact: {
    title: 'Prendre Contact',
    intro:
      "Prêt à discuter de votre projet ou besoin d'expertise technique ? Je suis disponible pour des consultations et de nouvelles opportunités.",
    email: 'Email',
    location: 'Localisation',
    locationValue: 'Suisse (Remote & Hybride)',
    availability: 'Disponibilité',
    availabilityValue: "Modèles d'engagement flexibles",
    connectWithMe: 'Me Suivre',
  },
};
