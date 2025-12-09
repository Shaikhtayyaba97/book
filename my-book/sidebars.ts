import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro', // docs/intro.md

    {
      type: 'category',
      label: 'Tutorial â€” Basics',
      collapsed: false,
      items: [
        'tutorial-basics/create-a-document',
        'tutorial-basics/create-a-page',
        'tutorial-basics/create-a-blog-post',
        'tutorial-basics/deploy-your-site',
        'tutorial-basics/congratulations',
      ],
    },

    {
      type: 'category',
      label: 'Tutorial â€” Extras',
      collapsed: true,
      items: [
        'tutorial-extras/manage-docs-versions',
        'tutorial-extras/translate-your-site',
      ],
    },
  ],
};

export default sidebars;
