import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkSlug from 'remark-slug';
//import remarkPrism from 'remark-prism';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import chokidar from 'chokidar';
import { copyFileSync, mkdirSync, rmSync } from 'fs';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths relative to this script file
const SRC = path.join(__dirname, 'src');
const DIST = path.join(__dirname, 'dist');
const STATIC = path.join(__dirname, '..', 'static', 'docs');

const manifest = {};

// Clean previous build
rmSync(DIST, { recursive: true, force: true });
rmSync(STATIC, { recursive: true, force: true });

async function buildFile(srcPath) {
  try {
    const rel = path.relative(SRC, srcPath);
    const outDist = path.join(DIST, rel.replace(/\.md$/, '.html'));
    const outStatic = path.join(STATIC, rel.replace(/\.md$/, '.html'));

    mkdirSync(path.dirname(outDist), { recursive: true });
    mkdirSync(path.dirname(outStatic), { recursive: true });

    const md = fs.readFileSync(srcPath, 'utf-8');

    const file = await remark()
      .use(remarkFrontmatter)
      .use(remarkSlug)  // Add heading IDs
      .use(remarkGfm)   // For tables
      .use(remarkHeadingClasses) // For adding .hx to <hx>
      .use(remarkHtml, { sanitize: false })
      .process(md);

    const html = String(file);

    fs.writeFileSync(outDist, html);
    fs.writeFileSync(outStatic, html);

    // Update manifest for navigation
    const [version, ...rest] = rel.split(path.sep);
    const slug = rest.join('/').replace(/\.md$/, '');
    manifest[version] ??= [];
    manifest[version].push(slug);
    fs.writeFileSync(path.join(DIST, 'manifest.json'), JSON.stringify(manifest, null, 2));

    console.log('Built:', outStatic);
  } catch (err) {
    console.error('Error building', srcPath, err);
  }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir)) {
    console.log (entry)
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (full.endsWith('.md')) buildFile(full);
  }
}

// Initial build
walk(SRC);

// Watch mode
if (process.argv.includes('--watch')) {
  chokidar.watch(SRC, { ignoreInitial: true }).on('all', (event, pathChanged) => {
    if (pathChanged.endsWith('.md')) {
      console.log(`[${event}]`, pathChanged);
      buildFile(pathChanged);
    }
  });
  console.log('Watching Markdown files...');
}


function remarkHeadingClasses() {
  return (tree) => {
    const visit = (node) => {
      if (node.type === 'heading') {
        const level = node.depth; // 1..6
        node.data ??= {};
        node.data.hProperties ??= {};
        node.data.hProperties.className = [`h${level}`];
      }

      if (node.children) {
        node.children.forEach(visit);
      }
    };

    visit(tree);
  };
}