import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const p = path.join(__dirname, '../src/app/pages/home/home.component.html');
let s = fs.readFileSync(p, 'utf8');

function patch(startToken, endToken, replacement, searchFrom = 0) {
  const a = s.indexOf(startToken, searchFrom);
  if (a === -1) throw new Error('start not found: ' + startToken);
  const b = s.indexOf(endToken, a + startToken.length);
  if (b === -1) throw new Error('end not found after start: ' + endToken);
  s = s.slice(0, a) + replacement + s.slice(b);
}

patch(
  '<div class="t3-module module no-margin " id="Mod103">',
  '<div class="t3-sidebar t3-sidebar-right col col-xs-12 col-sm-4  hidden-xs" style="min-height: 2464px;">',
  `<div class="t3-module module no-margin " id="Mod103"><div class="module-inner"><h3 class="module-title "><span>World</span></h3><div class="module-ct "><app-news-section layoutType="two-big-grid" [menuItems]="worldMenuItems" [bigArticles]="worldBigArticles" [normalArticles]="worldNormalArticles" accentClass="link-cat-blue" /></div></div></div>
				</div>
				
								`,
);

patch(
  '<div class="t3-module module " id="Mod111"><div class="module-inner"><h3 class="module-title "><span>Follow Us on Social</span></h3><div class="module-ct ">',
  '<div class="t3-module module " id="Mod112">',
  `<div class="t3-module module " id="Mod111"><div class="module-inner"><h3 class="module-title "><span>Follow Us on Social</span></h3><div class="module-ct "><app-social-links [items]="socialLinks" /></div></div></div><div class="t3-module module " id="Mod112">`,
);

patch(
  '<div class="t3-module module " id="Mod112"><div class="module-inner"><h3 class="module-title "><span>Editor of the week</span></h3><div class="module-ct ">',
  '<div class="t3-module module " id="Mod113">',
  `<div class="t3-module module " id="Mod112"><div class="module-inner"><h3 class="module-title "><span>Editor of the week</span></h3><div class="module-ct "><app-sidebar-news-widget
          title="Editor of the week"
          accentClass="link-cat-purple"
          [leadArticle]="editorLeadArticle"
          [articles]="editorArticles"
        /></div></div></div><div class="t3-module module " id="Mod113">`,
);

patch(
  '<div class="t3-module module " id="Mod99">',
  '</noscript></div></div></div>',
  `<div class="t3-module module " id="Mod99"><div class="module-inner"><h3 class="module-title "><span>Tech</span></h3><div class="module-ct ">
<app-news-slider
          [articles]="techSliderArticles"
          [menuItems]="techMenuItems"
          [mega]="techMegaMenu"
        /></div></div></div>`,
);

patch(
  '<div class="t3-module module " id="Mod104">',
  '<div class="t3-module module " id="Mod102">',
  `<div class="t3-module module " id="Mod104"><div class="module-inner"><h3 class="module-title "><span>Sport</span></h3><div class="module-ct "><app-news-section
          layoutType="lead-sidebar-grid"
          [menuItems]="sportMenuItems"
          [leadArticle]="sportLeadArticle"
          [sidebarArticles]="sportSidebarArticles"
          accentClass="link-cat-green"
        /></div></div></div><div class="t3-module module " id="Mod102">`,
);

patch(
  '<div class="t3-module module " id="Mod102">',
  '<div class="t3-sidebar t3-sidebar-right col col-xs-12 col-sm-4 " style="min-height: 1456px;">',
  `<div class="t3-module module " id="Mod102"><div class="module-inner"><h3 class="module-title "><span>Entertaiment</span></h3><div class="module-ct "><app-news-section
          layoutType="wide-lead-three-medium"
          [menuItems]="entertainmentMenuItems"
          [leadArticle]="entertainmentLeadArticle"
          [sidebarArticles]="entertainmentSidebarArticles"
          accentClass="link-cat-yellow"
        /></div></div></div>
				</div>
				
								`,
);

patch(
  '<div class="t3-module module mod-nopadding mod-noborder " id="Mod101">',
  '<div class="t3-module module " id="Mod117">',
  `<div class="t3-module module mod-nopadding mod-noborder " id="Mod101"><div class="module-inner"><div class="module-ct no-title"><app-ad-banner [config]="sidebarRectangleBanner" /></div></div></div><div class="t3-module module " id="Mod117">`,
);

patch(
  '<div class="t3-module module " id="Mod117">',
  '<div class="t3-module module mod-nopadding mod-noborder " id="Mod116">',
  `<div class="t3-module module " id="Mod117"><div class="module-inner"><h3 class="module-title "><span>Most Read</span></h3><div class="module-ct "><app-most-read-tabs [tabs]="mostReadTabs" /></div></div></div><div class="t3-module module mod-nopadding mod-noborder " id="Mod116">`,
);

patch(
  '<div class="t3-module module mod-nopadding mod-noborder " id="Mod116">',
  '</noscript>\r\n</div></div></div>',
  `<div class="t3-module module mod-nopadding mod-noborder " id="Mod116"><div class="module-inner"><h3 class="module-title "><span>Slider Widget</span></h3><div class="module-ct ">
<app-news-slider [articles]="sidebarSliderArticles" [compact]="true" /></div></div></div>`,
  s.indexOf('<div class="t3-module module mod-nopadding mod-noborder " id="Mod116">'),
);

patch(
  '<div class="t3-module module mod-noborder " id="Mod105">',
  '<div class="t3-sidebar t3-sidebar-right col col-xs-12 col-sm-4 " style="min-height: 1321px;">',
  `<div class="t3-module module mod-noborder " id="Mod105"><div class="module-inner"><div class="module-ct no-title"><app-category-columns [columns]="categoryColumns" /></div></div></div>
				</div>
				
								`,
);

const i106 = s.indexOf('id="Mod106"');
patch(
  '<div class="t3-module module mod-nopadding mod-noborder " id="Mod106"><div class="module-inner"><div class="module-ct no-title"><div class="bannergroup mod-nopadding mod-noborder">',
  '</div>\r\n</div></div></div>\r\n				</div>\r\n				\r\n								<div class="t3-main-content t3-main-content-mastbot col-xs-12">',
  `<div class="t3-module module mod-nopadding mod-noborder " id="Mod106"><div class="module-inner"><div class="module-ct no-title"><app-ad-banner [config]="sidebarRectangleBanner" /></div></div></div>
				</div>
				
								`,
  i106 - 80,
);

fs.writeFileSync(p, s);
console.log('patched', p);
