export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6124ad4c08efed9416ba32e5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ks5wyfez',
                  apiId: '407d230f-2c6a-48d3-88b4-a9dcbce50585'
                },
                {
                  buildHookId: '6124ad4d44aed09a4b404000',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-j27tfrsg',
                  apiId: '6e6d5440-7697-4e27-ae2c-0b8c67c13369'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alicianordstromm/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-j27tfrsg.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
