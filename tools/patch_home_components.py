from pathlib import Path
import re

path = Path(__file__).resolve().parent.parent / "src/app/pages/home/home.component.html"
text = path.read_text(encoding="utf-8")


def sub(pattern: str, repl: str, s: str) -> str:
    n, out = re.subn(pattern, repl, s, count=1, flags=re.DOTALL)
    if n != 1:
        raise SystemExit(f"Expected 1 match, got {n} for pattern starting: {pattern[:100]!r}")
    return out


# 1 World (Mod103)
text = sub(
    r'(<div class="t3-module module no-margin " id="Mod103"><div class="module-inner"><h3 class="module-title "><span>World</span></h3><div class="module-ct ">).*?(</div></div></div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t\t\t\t<div class="t3-sidebar t3-sidebar-right col col-xs-12 col-sm-4  hidden-xs")',
    r'\1<app-news-section\n\t\t\t\tlayoutType="two-big-grid"\n\t\t\t\taccentClass="link-cat-blue"\n\t\t\t\t[menuItems]="worldMenuItems"\n\t\t\t\t[bigArticles]="worldBigArticles"\n\t\t\t\t[normalArticles]="worldNormalArticles"\n\t\t\t/>\2',
    text,
)

# 2 Social Mod111
text = sub(
    r'(<div class="t3-module module " id="Mod111"><div class="module-inner"><h3 class="module-title "><span>Follow Us on Social</span></h3><div class="module-ct ">).*?(</div></div></div><div class="t3-module module " id="Mod112">)',
    r'\1<app-social-links [items]="socialLinks" />\2',
    text,
)

# 3 Editor Mod112
text = sub(
    r'(<div class="t3-module module " id="Mod112"><div class="module-inner"><h3 class="module-title "><span>Editor of the week</span></h3><div class="module-ct ">).*?(</div></div></div><div class="t3-module module " id="Mod113">)',
    r'\1<app-sidebar-news-widget\n\t\t\t\taccentClass="link-cat-purple"\n\t\t\t\t[leadArticle]="editorLeadArticle"\n\t\t\t\t[entries]="editorSidebarEntries"\n\t\t\t/>\2',
    text,
)

# 4 Tech Mod99
text = sub(
    r'(<div class="t3-module module " id="Mod99"><div class="module-inner"><h3 class="module-title "><span>Tech</span></h3><div class="module-ct ">\s*).*?(</div></div></div>\n\t\t\t\t\t<div class="separator"></div>)',
    r'\1<app-news-slider\n\t\t\t\t[menuItems]="techMenuItems"\n\t\t\t\t[mega]="techMega"\n\t\t\t\t[items]="techSliderArticles"\n\t\t\t/>\2',
    text,
)

# 5 Sport Mod104
text = sub(
    r'(<div class="t3-module module " id="Mod104"><div class="module-inner"><h3 class="module-title "><span>Sport</span></h3><div class="module-ct ">).*?(</div></div></div><div class="t3-module module " id="Mod102">)',
    r'\1<app-news-section\n\t\t\t\tlayoutType="lead-sidebar-grid"\n\t\t\t\taccentClass="link-cat-green"\n\t\t\t\t[menuItems]="sportMenuItems"\n\t\t\t\t[leadArticle]="sportLeadArticle"\n\t\t\t\t[sidebarArticles]="sportSidebarArticles"\n\t\t\t/>\2',
    text,
)

# 6 Entertainment Mod102
text = sub(
    r'(<div class="t3-module module " id="Mod102"><div class="module-inner"><h3 class="module-title "><span>Entertaiment</span></h3><div class="module-ct ">).*?(</div></div></div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t\t\t\t<div class="t3-sidebar t3-sidebar-right col col-xs-12 col-sm-4 ")',
    r'\1<app-news-section\n\t\t\t\tlayoutType="wide-lead-three-medium"\n\t\t\t\taccentClass="link-cat-yellow"\n\t\t\t\t[menuItems]="entertainmentMenuItems"\n\t\t\t\t[leadArticle]="entertainmentLeadArticle"\n\t\t\t\t[sidebarArticles]="entertainmentMediumArticles"\n\t\t\t/>\2',
    text,
)

# 7 Mod101 ad
text = sub(
    r'(<div class="t3-module module mod-nopadding mod-noborder " id="Mod101"><div class="module-inner"><div class="module-ct no-title">).*?(</div></div></div><div class="t3-module module " id="Mod117">)',
    r'\1<app-ad-banner [config]="sidebarAd" />\2',
    text,
)

# 8 Most Read Mod117
text = sub(
    r'(<div class="t3-module module " id="Mod117"><div class="module-inner"><h3 class="module-title "><span>Most Read</span></h3><div class="module-ct ">).*?(</div></div></div><div class="t3-module module mod-nopadding mod-noborder " id="Mod116">)',
    r'\1<app-most-read-tabs [tabs]="mostReadTabs" />\2',
    text,
)

# 9 Slider Mod116
text = sub(
    r'(<div class="t3-module module mod-nopadding mod-noborder " id="Mod116"><div class="module-inner"><h3 class="module-title "><span>Slider Widget</span></h3><div class="module-ct ">\s*).*?(</div></div></div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t\t\t\t<div class="t3-main-content t3-main-content-mastbot col-xs-12">)',
    r'\1<app-news-slider [items]="sidebarSliderArticles" [compact]="true" />\2',
    text,
)

# 10 Videos Mod114
text = sub(
    r'(<div class="t3-module module " id="Mod114"><div class="module-inner"><h3 class="module-title "><span>Most Watched Videos</span></h3><div class="module-ct ">).*?(</div></div></div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\n\t\t\n\t<div class="container">)',
    r'\1<app-video-list [featuredVideo]="featuredPlayerVideo" [videos]="videoSidebarList" />\2',
    text,
)

# 11 Category Mod105
text = sub(
    r'(<div class="t3-module module mod-noborder " id="Mod105"><div class="module-inner"><div class="module-ct no-title">).*?(</div></div></div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t\t\t\t<div class="t3-sidebar t3-sidebar-right col col-xs-12 col-sm-4 ")',
    r'\1<app-category-columns [columns]="categoryColumns" />\2',
    text,
)

# 12 Mod106 ad
text = sub(
    r'(<div class="t3-module module mod-nopadding mod-noborder " id="Mod106"><div class="module-inner"><div class="module-ct no-title">).*?(</div></div></div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t\t\t\t<div class="t3-main-content t3-main-content-mastbot col-xs-12">)',
    r'\1<app-ad-banner [config]="sidebarAd" />\2',
    text,
)

path.write_text(text, encoding="utf-8")
print("patched", path)
