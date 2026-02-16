import Project from '#models/project'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const projects = [
      {
        slug: 'resilio-tech',
        images: '/works/resilio-tech.png,/works/resilio-db.png',
        url: 'https://app.resilio.tech',
        isPublished: true,
        order: 1,
        category: 'work' as const,
        translations: {
          en: {
            title: 'Resilio Tech and Resilio DB',
            description: `<p>I am currently the <strong>CTO of Resilio SA</strong>, a company specialized in environmental impact assessment. We develop environmental impact assessment tools for businesses and individuals. We built a web application that helps companies calculate and reduce their footprint.</p>
<p>We also developed a <strong>research application</strong> to analyze the environmental impact of equipment or to generate impact reports based on specific configurations.</p>`,
          },
          fr: {
            title: 'Resilio Tech et Resilio DB',
            description: `<p>Je suis actuellement le <strong>CTO de Resilio SA</strong>, une société d'évaluation d'impact environnemental. Nous développons des outils d'évaluation d'impact environnemental pour les entreprises et les particuliers. Nous avons développé une application web qui permet aux entreprises de calculer leur empreinte et de la réduire.</p>
<p>Nous avons également développé une <strong>application de recherche</strong> d'impact sur les équipements ou de génération de rapports d'impact environnemental sur des configuration d'équipement.</p>`,
          },
        },
      },
      {
        slug: 'sadness-of-valor',
        images: '/works/sadnessofvalor.png',
        url: 'https://store.steampowered.com/app/2211400/Sadness_of_Valor/',
        isPublished: true,
        order: 2,
        category: 'work' as const,
        translations: {
          en: {
            title: 'Sadness of Valor',
            description: `<p><strong>Sadness of Valor</strong> is a Real-Time Strategy (RTS) video game developed by myself. It has been available on <strong>Steam</strong> since December 30, 2022.</p>
<p>It represents two years of work and passion, and it is the <em>first video game I have ever developed</em>. I am quite proud of the journey so far.</p>`,
          },
          fr: {
            title: 'Sadness of Valor',
            description: `<p><strong>Sadness of Valor</strong> est un jeu vidéo de type RTS (Real Time Strategy) développé par mes soins. Il est disponible sur <strong>Steam</strong> depuis le 30 décembre 2022.</p>
<p>Il est pour moi l'aboutissement de deux années de travail, de passion et est le <em>premier jeu vidéo que je développe</em>. Je suis plutôt fier du chemin parcouru.</p>`,
          },
        },
      },
      {
        slug: 'one-man-studio-for-games',
        images: '/works/OneManStudio.png',
        url: 'https://onemanstudioforgames.com',
        isPublished: true,
        order: 3,
        category: 'work' as const,
        translations: {
          en: {
            title: 'One Man Studio For Games',
            description: `<p>Since childhood, I have been passionate about video games and always wanted to create my own. That is why I founded my own <strong>independent video game studio</strong> to bring my ideas to life.</p>
<p><strong>One Man Studio For Games</strong> is the result of that ambition.</p>`,
          },
          fr: {
            title: 'One Man Studio For Games',
            description: `<p>Depuis mon enfance, je suis passionné par les jeux vidéo. J'ai toujours voulu créer les miens. C'est pourquoi je me suis lancé dans la création de mon propre <strong>studio de jeu vidéo indépendant</strong> pour y développer mes propres envies.</p>
<p><strong>One Man Studio For Games</strong> en est le résultat.</p>`,
          },
        },
      },
      {
        slug: 'squal',
        images: '/works/squal.ch.png',
        url: 'https://squal.ch',
        isPublished: true,
        order: 4,
        category: 'work' as const,
        translations: {
          en: {
            title: 'Squal',
            description: `<p>To showcase the work of <strong>Squal</strong>, I designed a clean and minimalist portfolio website. The site is fully <strong>responsive</strong> and adapts to any screen size. It is also optimized for search engine visibility.</p>
<p>It highlights the artist's illustrations and makes it easy to get in touch.</p>`,
          },
          fr: {
            title: 'Squal',
            description: `<p>Afin de mettre en avant les illustrations de <strong>Squal</strong>, j'ai réalisé un site vitrine simple et épuré. Le site est <strong>responsive</strong> et s'adapte à tous les écrans. Il est également optimisé pour le référencement naturel.</p>
<p>Il met en avant les illustrations de l'artiste et permet de la contacter facilement.</p>`,
          },
        },
      },
      {
        slug: 'vaalnor',
        images: '/works/Vaalnor.png',
        url: 'https://vaalnor.com',
        isPublished: true,
        order: 5,
        category: 'work' as const,
        translations: {
          en: {
            title: 'Vaalnor',
            description: `<p>In 2009, a metal band was born: <strong>Vaalnor</strong>.</p>
<p>I am the <strong>drummer and composer</strong> of the group. We released an album in 2014 and performed multiple live shows.</p>
<p>If you are a metal enthusiast, feel free to give us a listen!</p>`,
          },
          fr: {
            title: 'Vaalnor',
            description: `<p>En 2009, un groupe de musique a vu le jour : <strong>Vaalnor</strong>.</p>
<p>J'en suis le <strong>batteur et compositeur</strong>. Nous avons sorti un album en 2014, avec plusieurs concerts à notre actif.</p>
<p>Si vous êtes amateur de metal, n'hésitez pas à nous écouter !</p>`,
          },
        },
      },
      {
        slug: 'souls-gathering',
        images: '/works/SoulsGathering.png',
        url: 'https://soulsgathering.com',
        isPublished: true,
        order: 6,
        category: 'work' as const,
        translations: {
          en: {
            title: 'Souls Gathering',
            description: `<p>Music has been a passion passed down through generations in my family. I had the opportunity to learn <strong>piano, guitar, and drums</strong>.</p>
<p>It was only natural that I started composing music. I mainly compose music for:</p>
<ul>
<li>Video games</li>
<li>Films</li>
<li>Metal compositions</li>
</ul>
<p>I created my own solo music project, <strong>Souls Gathering</strong>, to share my creations and inspirations within the metal scene.</p>`,
          },
          fr: {
            title: 'Souls Gathering',
            description: `<p>Passionné de musique de génération en génération, j'ai eu la chance de pouvoir apprendre le <strong>piano, la guitare et la batterie</strong>.</p>
<p>Il est donc tout naturel que je me sois lancé dans la composition de musique. Je compose principalement :</p>
<ul>
<li>Des musiques de jeux vidéos</li>
<li>Des musiques de films</li>
<li>Des musiques Metal</li>
</ul>
<p>J'ai donc créé mon propre projet de musique solo, <strong>Souls Gathering</strong>, pour y partager mes créations et mes inspirations côté Metal.</p>`,
          },
        },
      },
      {
        slug: 'aurioa-tech',
        images: '/works/aurioa-tech.png',
        url: 'https://aurioa-tech.com',
        isPublished: true,
        order: 7,
        category: 'work' as const,
        translations: {
          en: {
            title: 'Aurioa-Tech',
            description: `<p><strong>Aurioa-Tech</strong> is a company focused on designing useful and sustainable technological solutions. We develop digital tools that simplify everyday life:</p>
<ul>
<li>Web applications</li>
<li>Business platforms</li>
<li>Integrated systems</li>
<li>Custom prototypes</li>
</ul>
<p>With a strong focus on <strong>cybersecurity</strong> and pragmatic innovation, every project is built with security, reliability, and tangible value at its core.</p>`,
          },
          fr: {
            title: 'Aurioa-Tech',
            description: `<p><strong>Aurioa-Tech</strong> est une entreprise dédiée à la conception de solutions technologiques utiles et durables. Nous développons des outils numériques qui simplifient le quotidien :</p>
<ul>
<li>Applications web</li>
<li>Plateformes métier</li>
<li>Systèmes intégrés</li>
<li>Prototypes sur mesure</li>
</ul>
<p>Avec un accent fort sur la <strong>cybersécurité</strong> et l'innovation pragmatique, chaque projet est conçu avec la sécurité, la fiabilité et la valeur tangible au cœur de nos préoccupations.</p>`,
          },
        },
      },
      {
        slug: 'nebula-silva',
        images: '/works/nebulasilva.png',
        url: 'https://nebulasilva.com',
        isPublished: true,
        order: 8,
        category: 'work' as const,
        translations: {
          en: {
            title: 'Nebula Silva',
            description: `<p><strong>Nebula Silva</strong> is a Swiss Atmospheric Black Metal project born in 2018 in Valais.</p>
<p>Drawing from the cold intensity of <em>Mgła</em>, the atmospheric depth of <em>Der Weg Einer Freiheit</em>, and the ritual grandeur of <em>Batushka</em>, the duo explores themes of civilizational decay and existential dead ends.</p>
<p>The project features <strong>Slordef</strong> on guitar and <strong>Nøname</strong> on vocals and bass.</p>`,
          },
          fr: {
            title: 'Nebula Silva',
            description: `<p><strong>Nebula Silva</strong> est un projet de Black Metal Atmosphérique suisse né en 2018 en Valais.</p>
<p>S'inspirant de l'intensité froide de <em>Mgła</em>, de la profondeur atmosphérique de <em>Der Weg Einer Freiheit</em> et de la grandeur rituelle de <em>Batushka</em>, le duo explore les thèmes de la décadence civilisationnelle et des impasses existentielles.</p>
<p>Le projet réunit <strong>Slordef</strong> à la guitare et <strong>Nøname</strong> au chant et à la basse.</p>`,
          },
        },
      },
    ]

    for (const projectData of projects) {
      const project = await Project.create({
        slug: projectData.slug,
        images: projectData.images,
        url: projectData.url,
        isPublished: projectData.isPublished,
        order: projectData.order,
        category: projectData.category,
      })

      await project.related('translations').createMany([
        {
          locale: 'en',
          title: projectData.translations.en.title,
          description: projectData.translations.en.description,
        },
        {
          locale: 'fr',
          title: projectData.translations.fr.title,
          description: projectData.translations.fr.description,
        },
      ])
    }
  }
}
