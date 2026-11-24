import fs from 'fs';
import path from 'path';

// Load base template
const template = fs.readFileSync('blog/bisnis-hampers-lebaran.html', 'utf8');

const headPreSchema = template.substring(0, template.indexOf('<!-- Schema.org JSON-LD'));
const navPart = template.substring(template.indexOf('<body>'), template.indexOf('<main id="main-content">'));
const footerPart = template.substring(template.indexOf('<footer class="hl-footer">'));

// Markdown converter helper
function mdToHtml(mdText) {
  let lines = mdText.split('\n');
  let html = [];
  let inList = false;
  let inTable = false;
  let tableRows = [];

  function flushList() {
    if (inList) {
      html.push('</ul>');
      inList = false;
    }
  }

  function flushTable() {
    if (inTable) {
      if (tableRows.length > 0) {
        let thead = tableRows[0];
        let tbody = tableRows.slice(1);
        let tableHtml = `
<div class="hl-table-hint"><span>↔ Geser tabel ke samping untuk melihat lengkap</span></div>
<div class="hl-table-wrapper" tabindex="0" role="region" aria-label="Tabel informasi hampers">
  <table>
    <thead>
      <tr>${thead.map(th => `<th>${th.trim()}</th>`).join('')}</tr>
    </thead>
    <tbody>
      ${tbody.map(row => `<tr>${row.map(td => `<td>${td.trim()}</td>`).join('')}</tr>`).join('\n      ')}
    </tbody>
  </table>
</div>`;
        html.push(tableHtml);
      }
      inTable = false;
      tableRows = [];
    }
  }

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();

    // Check table row
    if (line.startsWith('|') && line.endsWith('|')) {
      flushList();
      let cols = line.split('|').slice(1, -1);
      // Skip delimiter row like |---|---|
      if (cols.every(c => c.trim().match(/^:?-+:?$/))) {
        continue;
      }
      if (!inTable) {
        inTable = true;
        tableRows = [];
      }
      tableRows.push(cols);
      continue;
    } else {
      flushTable();
    }

    // Check list item
    if (line.startsWith('- ') || line.startsWith('* ')) {
      let itemContent = line.replace(/^[-*]\s+/, '');
      itemContent = formatInline(itemContent);
      if (!inList) {
        inList = true;
        html.push('<ul>');
      }
      html.push(`  <li>${itemContent}</li>`);
      continue;
    } else {
      flushList();
    }

    if (line === '') {
      continue;
    }

    // Headings
    if (line.startsWith('### ')) {
      let text = line.replace(/^###\s+/, '');
      let id = slugify(text);
      html.push(`<h3 id="${id}">${formatInline(text)}</h3>`);
      continue;
    }
    if (line.startsWith('## ')) {
      let text = line.replace(/^##\s+/, '');
      let id = slugify(text);
      html.push(`<h2 id="${id}">${formatInline(text)}</h2>`);
      continue;
    }

    // Numbered list items like "1. Item" inside text
    if (/^\d+\.\s+/.test(line)) {
      html.push(`<p><strong>${line.match(/^\d+\./)[0]}</strong> ${formatInline(line.replace(/^\d+\.\s+/, ''))}</p>`);
      continue;
    }

    // Normal paragraph
    html.push(`<p>${formatInline(line)}</p>`);
  }

  flushList();
  flushTable();

  return html.join('\n');
}

function formatInline(str) {
  return str
    .replace(/\\$/g, '') // remove trailing markdown backslash
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export { template, headPreSchema, navPart, footerPart, mdToHtml, formatInline, slugify };
