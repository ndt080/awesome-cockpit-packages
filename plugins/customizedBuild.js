import fs from 'fs';
import { fileURLToPath, URL } from 'url';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const DEV_RESOURCE = [
  '<script type="module" src="cockpit/cockpit.js"></script>',
  '<script type="module" src="po.en.js"></script>',
];

const PROD_RESOURCE = [
  '<script src="../base1/cockpit.js"></script>',
  '<script type="text/javascript" src="po.js"></script>',
];

function getPath(path) {
  return fileURLToPath(new URL(path, import.meta.url));
}

export default () => {
  return [
    viteStaticCopy({ targets: [{ src: '../../cockpit/cockpit.js', dest: 'cockpit' }] }),
    {
      name: 'cockpit:config',
      config: () => ({
        resolve: {
          alias: [{ find: 'cockpit-lib', replacement: getPath('../cockpit') }],
        },
      }),
    },
    {
      name: 'cockpit:customized-build',
      transformIndexHtml(html) {
        let finalHtml = html
          .replaceAll('src="./', 'src="')
          .replaceAll('href="./', 'href="')
          .replaceAll("src='./", "src='")
          .replaceAll("href='./", "href='");

        // eslint-disable-next-line no-undef
        const resources = process.env.NODE_ENV === 'production' ? PROD_RESOURCE : DEV_RESOURCE;
        return finalHtml.replace('<!--%CUSTOM_RESOURCES%-->', resources.join('\n'));
      },
      closeBundle() {
        fs.rmSync('./dist/cockpit', { recursive: true, force: true });
      },
    },
  ];
};
