import fs from 'fs';
import CleanCSS from 'clean-css';
import { PurgeCSS } from 'purgecss';

async function buildAllCss() {
  const fullBootstrap = fs.readFileSync('scratch/bootstrap_full.css', 'utf8');
  const fullStyle = fs.readFileSync('scratch/style_backup.css', 'utf8');
  const combinedRaw = fullBootstrap + '\n' + fullStyle;

  // 1. Build site-wide main.min.css (all 18 HTML files)
  const purgedAll = await new PurgeCSS().purge({
    content: ['*.html', 'assets/js/*.js'],
    css: [{ raw: combinedRaw }],
    variables: true,
    safelist: {
      standard: [
        'show', 'collapse', 'collapsing', 'collapsed', 'active',
        'is-active', 'is-scrolled', 'is-visible',
        'dropdown-menu', 'dropdown-item', 'dropdown-toggle',
        'accordion-button', 'accordion-collapse', 'accordion-body'
      ],
      variables: [/^--hl-/]
    }
  });

  const minAll = new CleanCSS({ level: 2 }).minify(purgedAll[0].css);
  fs.writeFileSync('assets/css/main.min.css', minAll.styles);
  console.log('Site-wide main.min.css written:', (minAll.styles.length / 1024).toFixed(1) + ' KB');

  // 2. Build home.min.css specifically for index.html
  const purgedHome = await new PurgeCSS().purge({
    content: ['index.html', 'assets/js/main.js'],
    css: [{ raw: combinedRaw }],
    variables: true,
    safelist: {
      standard: [
        'show', 'collapse', 'collapsing', 'collapsed', 'active',
        'is-active', 'is-scrolled', 'is-visible',
        'dropdown-menu', 'dropdown-item', 'dropdown-toggle',
        'accordion-button', 'accordion-collapse', 'accordion-body'
      ],
      variables: [/^--hl-/]
    }
  });

  const minHome = new CleanCSS({ level: 2 }).minify(purgedHome[0].css);
  fs.writeFileSync('assets/css/home.min.css', minHome.styles);
  console.log('Home-specific home.min.css written:', (minHome.styles.length / 1024).toFixed(1) + ' KB');

  console.log('CSS build complete!');
}

buildAllCss();
