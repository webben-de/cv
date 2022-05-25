import { JobStep } from '@webben-cv/api-interfaces';
// 07-2011
// bis
// heute
// Selbstständig als Webentwickler / IT-Berater
// Konzept & Umsetzung von diversen kleineren Webprojekten auf Wordpressbasis für lokale Mittelständler
// Devops Tätigkeiten jeglicher Art auf Fiverr
// z.B. Gitlab Ci Deployment eines Nx Monorepos auf AWS

export const jobs: JobStep[] = [
  {
    from: new Date('2011-07-01'),
    to: new Date(),
    description: `Konzept & Umsetzung von diversen kleineren Webprojekten auf Wordpressbasis für lokale Mittelständler
Devops Tätigkeiten jeglicher Art auf Fiverr`,
    job: {
      employer: { name: 'Webben (Selbstständig)' },
      location: 'Magdeburg',
      title: 'Webentwickler',
    },
    tags: [
      'wordpress',
      'Angular',
      'woocommerce',
      'AngularJS',
      'mocha',
      'ionic',
      'nestjs',
      'express',
      'nodejs',
      'figma',
    ],
    attachments: [],
  },
  {
    from: new Date('2021-07-01'),
    to: new Date(),
    description: `Entwicklung von Dashboard- und Analysepages zum Condition-Monitoring multipler Sensoriken von Windparks
    `,
    job: {
      title: 'Frontendentwickler / Devops Expert Engineer',
      location: 'Nürnberg / Herzogenaurach',
      employer: {
        name: 'Schaeffler Technologies GmbH (Schaeffler AG)',
      },
    },
    tags: [
      'Angular',
      'jest',
      'cypress',
      'nx',
      'figma',
      'tailwind',
      'storybook',
      'jenkins',
      'docker',
      'ngrx',
      'ngxs',
      'echarts',
      'jira',
      'confluence',
      'terraform',
    ],
    attachments: [],
  },
  {
    from: new Date('2018-05-01'),
    to: new Date('2021-06-31'),
    description: `Konfiguration von Continuous-Delivery über Jenkins
Deploy und Orchestierung von Docker-Container
Build von Java Spring / Angular Applikation
    `,
    job: {
      title: 'Webentwickler',
      location: 'Herzogenrath',
      employer: {
        name: 'FAG Industrial Services GmbH (Schaeffler AG)',
      },
    },
    tags: [
      'Angular',
      'jenkins',
      'docker',
      'kubernetes',
      'gitlab ci',
      'maven',
      'grafana',
      'kibana',
      'karma',
      'junit',
      'jira',
      'confluence',
      'terraform',
      'azure',
    ],
    attachments: [
      'https://drive.google.com/file/d/1jvmJ0OcgBklJoQK75e-fKUbvdKl8Vtzq/view?usp=sharing',
    ],
  },
  {
    from: new Date('2017-05-01'),
    to: new Date('2018-04-31'),
    description: `Frontend-Entwicklung mit Angular Stack
    Migration eines Projektes von Angular 1 auf Angular 2/4
    `,
    job: {
      title: 'Webentwickler ',
      location: 'Magdeburg',
      employer: {
        name: 'IBM Client Innovation Center GmbH',
      },
    },
    tags: [
      'Angular',
      'AngularJS',
      'robot',
      'e2e',
      'docker',
      'schaeffler',
      'jira',
      'confluence',
    ],
    attachments: [],
  },
  {
    from: new Date('2015-03-01'),
    to: new Date('2015-11-31'),
    description: `Entwicklung von Chrome-Extensions ( JavaScript )
    Front- und Backend-Entwicklung
    `,
    job: {
      title: 'Webentwickler (Praktikant)',
      location: 'Magdeburg',
      employer: {
        name: 'webvariants GmbH',
      },
    },
    tags: ['AngularJS', 'Chrome', 'javascript', 'mocha', 'netbeans', 'trello'],
    attachments: [],
  },
  {
    from: new Date('2012-08-01'),
    to: new Date('2013-12-31'),
    description: `Teil-Automatisierung der Datenerfassung ( VBA )
    Anpassungen von Logik und Aussehen der Bedienoberflächen für die Mitarbeiter ( C# )
    `,
    job: {
      title: 'Datenbankverwalter',
      location: 'Schönebeck',
      employer: {
        name: 'Amtsgericht Schönebeck',
      },
    },
    tags: ['Excel', 'VBA', 'C#'],
    attachments: [],
  },
  {
    from: new Date('2011-09-01'),
    to: new Date('2012-07-31'),
    description: `Ein- und Verkauf von Waren
    Erstellung von Umsatzprognosen
    `,
    job: {
      title: 'Shopmanager',
      location: 'Schönebeck',
      employer: {
        name: 'Mobilblitz - Geißler & Ulrich GbR',
      },
    },
    tags: ['Einzelhandel', 'Base', 'Vodafone'],
    attachments: [],
  },
  {
    from: new Date('2008-09-01'),
    to: new Date('2009-12-31'),
    description: `Inbound-Beratung im Bereich DSL und Mobilfunk
    First-Level-Support
    `,
    job: {
      title: 'Keyaccountmanager',
      location: 'Magdeburg',
      employer: {
        name: 'Walter Services Commerce GmbH',
      },
    },
    tags: ['Telekom'],
    attachments: [],
  },
  {
    from: new Date('2010-02-01'),
    to: new Date('2010-11-31'),
    description: `Pflege der öffentlichen Grünflächen
    Auslieferung von Hauspost
    `,
    job: {
      title: 'Zivildienstleistender',
      location: 'Magdeburg',
      employer: {
        name: 'Eigenbetrieb Stadtgarten Magdeburg',
      },
    },
    tags: ['Zivildienst'],
    attachments: [
      'https://drive.google.com/file/d/0BzE0tXoqlaeNUjF2QVRDZG55clE/view?usp=sharing&resourcekey=0-1_muT_qHK34SbaG-lMcCtA',
    ],
  },
];
