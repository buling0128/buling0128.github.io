# 布灵的创作小屋 · 内容上传与维护说明

这是一个「代码与内容分离」的静态网站，直接把整个文件夹上传到 GitHub Pages 即可上线。
日常维护**不需要改任何代码**，只需要往固定目录里放 Word 文档和图片，再在登记表里加一行。

## 目录结构

```
云笺小筑.html          网站入口（上传 GitHub 时改名为 index.html）
assets/data.js         内容登记表（全站唯一需要编辑的文件）
content/               正文 Word 文档
  stories/xingchen/final/c1.docx   ← 故事·章节正文，一章一个文档
  settings/yunhai/v1.docx          ← 设定集·整本一个文档
  about.docx                        ← 关于本站
images/                所有图片（封面、看板娘、画集作品图）
```

## 上传一篇文章（Word）

1. 用 Word 写好一章，段落之间直接回车分段；保存为 `.docx`
2. 放进 `content/stories/对应作品/对应版本/` 目录（文件名建议用章节 id，如 `c6.docx`）
3. 打开 `assets/data.js`，找到该作品该版本的 `chapters` 数组，加一行：

```js
{ "id": "c6", "title": "第六章 · 新章节名", "file": "content/stories/xingchen/final/c6.docx" }
```

4. 提交到 GitHub，线上阅读页就能看到正文

**新增整部作品**：在 `data.js` 的 `stories` 数组里复制一个作品对象改内容（id 用英文小写），并新建对应文件夹放入各章 docx。**设定集/关于本站**同理：整本一个 docx，小节标题请用 Word 的「标题 1」样式，网页会自动渲染成分节标题。

## 换一张图片

1. 把图片放进 `images/` 目录（建议 JPG/PNG/WebP，封面竖图、画集横图效果好）
2. 在 `data.js` 末尾的 `images` 登记表里，把对应键的值改成新文件名，如：

```js
"cover_xingchen": "images/新封面.jpg"
```

画集里每张图的名字和配文在 `galleries` 数组中编辑，`imageKey` 对应 `images` 表里的键。

## 本地预览注意

浏览器安全规则限制：双击 HTML 直接打开时，网页读不了 `content/` 里的 Word 文档（会提示"找不到文件"）。两种解决办法：

- 在项目文件夹里运行一条命令，再访问 http://localhost:8000
  ```
  python -m http.server 8000
  ```
- 或直接推到 GitHub Pages 上线后在线看（推荐流程）

## 部署到 GitHub Pages

1. 新建仓库，把本文件夹里**除 history/ 外**的全部内容上传到仓库根目录
2. 把 `云笺小筑.html` 改名为 `index.html`
3. 仓库 Settings → Pages → Source 选 `Deploy from a branch`，分支 `main` + `/ (root)`，保存
4. 访问 `https://你的用户名.github.io/仓库名/` 即上线

## 草稿箱维护

- 草稿箱与故事集作品一一对应：列表页实时读取故事集数据，增删作品后自动同步，无需单独维护列表。
- 每部作品的草稿正文存于 content/drafts/<作品id>.docx（如 yinsaimena.docx）。新增作品后需为该作品补一个同名 docx（可从其他草稿复制改写），否则点进草稿箱会提示找不到文档。
- 删除作品后，对应草稿文件不再被引用，可自行删除或留档。
