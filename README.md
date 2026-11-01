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

## 目录篇章分组（23版起）

- 故事章节可归属篇章：在 assets/data.js 该章对象里加 `"part": "第一篇章"` 字段即可，网页目录与侧边目录自动按篇章分组显示；不加 part 则平铺（散装版/旧式版本不受影响）。
- 上传新稿件时告知篇章划分，助手会在登记时自动写好 part 字段。

## 版本排序规范

- 作品页的版本列表按「时间越晚越靠上」排列；新增版本时插到列表顶部。
- 樱之都·奈樱顺序为：24版 → 23版 → 散装版（散装最早，排最后）。
- 因赛美那维持：2606版 → 25版 → neo版 → 24版 → 23版 → 15版（已是时间倒序，不随本轮调整）。

## 设定集分区（通用能力）

- 设定集任意版本可加分区：在 assets/data.js 该版本下加 sections 数组。文字分区：`{"id":"main","title":"设定正文","type":"text","file":"content/settings/xx.docx"}`；图片分区：`{"id":"avatars","title":"人物头像","type":"images","images":[{"imageKey":"键名","title":"图名","note":"说明"}]}`，图片放进 images/ 并在末尾 images 表登记键名。
- 未写 sections 的版本自动按整本单页显示，现有设定集无需改动。
- 图片分区在网页上是缩略图网格，点小图看大图，支持左右翻页与键盘←→/Esc。

## 图片备注文字（仓库维护，网页只读）

- 网页上图片卡片下方的备注文字**不能在网站里编辑**，网站只负责展示。
- 修改方法：在仓库里打开 `assets/data.js`，找到对应图片条目（画集在 `galleries` 各版本 `images` 数组、设定集在各分区 `sections` 的 `images` 数组），给条目加或改 `note` 字段：

```js
{ "imageKey": "ysmn2606_pd_jiling", "title": "寂灵 · 人设 其一", "note": "这里写要展示的备注文字" }
```

- `note` 留空或删除该字段时，网页上不显示备注区。
- 备注会同时显示在：缩略图卡片下方、点开大图的说明行。
- 改完提交推送即可生效；历史版本中曾把备注存在浏览器本地的旧版页面，升级后不再读写本地备注。
