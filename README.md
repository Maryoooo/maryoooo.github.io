# Xuan Feng · 冯玄

A minimal bilingual academic website for GitHub Pages.

这是冯玄的中英双语个人学术主页，包含主页、个人信息、研究方向、9篇期刊论文与配图出处。

## Publish on GitHub Pages

1. Create a **public** repository under `Maryoooo` named **`maryoooo.github.io`**. Enable **Add README** when creating it if uploading through the GitHub connector.
2. Upload the contents of this folder into the repository root. `index.html` must be directly in the root, alongside `about.html`, `research.html`, `publications.html`, `credits.html`, and `assets/`. Do not upload an extra enclosing folder.
3. In the repository, open **Settings → Pages**. Choose **Deploy from a branch**, select **main**, choose **/(root)**, then **Save**.
4. GitHub Pages will publish to **https://maryoooo.github.io/** after its deployment succeeds.

No build tools, paid services, server, API keys, or package installation are required. The `.nojekyll` file keeps this as a plain static site.

GitHub's current instructions: [Create a Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) · [Configure the publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## 发布步骤

1. 在 `Maryoooo` 账号中新建公开仓库，名称为 **`maryoooo.github.io`**。如果通过 GitHub 连接上传，请在创建时勾选 **Add README**。
2. 将本文件夹中的内容上传至仓库根目录。根目录应直接看到 `index.html` 和 `assets`，而不是再套一层文件夹。
3. 进入 **Settings → Pages**，选择 **Deploy from a branch → main → /(root) → Save**。
4. 部署成功后，访问 **https://maryoooo.github.io/**。

无需安装依赖或购买服务器。全部资源均在仓库中，不依赖第三方字体或图床。

## Edit content

| File | Purpose |
|---|---|
| `index.html` | Homepage and selected publications |
| `about.html` | Biography, academic appointment, education, honors, contact |
| `research.html` | Four research themes with paper figures and related publications |
| `publications.html` | All publications, bilingual summaries, year filter, BibTeX |
| `credits.html` | Figure sources, copyright, and reuse policies |
| `assets/css/site.css` | Layout, typography, mobile styles |
| `assets/js/site.js` | Language toggle, filter, copy citation, image zoom |
| `assets/docs/Xuan_Feng_CV.pdf` | Downloadable CV in the original visual style |
| `publications.bib` | Bibliography for all nine papers |

Each translated text has an English `.lang-en` element and a Chinese `.lang-zh` element. Update both when changing content. The language switch remembers the visitor's preference in their browser.

To add a paper, duplicate an `<article class="publication">` in `publications.html`, set its unique `id` and `data-year`, and update the authors, journal, DOI, summary and BibTeX. Add a year option when needed. Update `publications.bib` and any related references on `research.html`.

The site intentionally does not hard-code citation counts or h-index values. Google Scholar remains linked for current metrics.

## Images and source material

The portrait was supplied in the CV. Research images are figures from publications coauthored by Xuan Feng. Credits and rights are listed in `credits.html`; retain those notices when editing or sharing the site. Original article PDFs are not redistributed. The downloadable PDF in `assets/docs` is the personal CV.

The site contains no analytics, cookies, contact-form service, or backend. The language preference is stored locally in the visitor's browser.
