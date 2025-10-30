function createNavbar() {
    // 获取当前页面的完整URL
    const currentUrl = window.location.href;
    const path = window.location.pathname;
    
    // 定义所有页面的绝对路径（相对于网站根目录）
    const pagePaths = {
        '首页': '/index.html',
        '设定集': '/works/settings/settings.html',
        '故事集': '/works/stories/stories.html',
        '画集': '/works/artworks/artworks.html',
        '关于本站': '/works/about/about.html'
    };

    // 判断当前页面是否是某个导航页
    const getCurrentPageName = () => {
        for (const [name, url] of Object.entries(pagePaths)) {
            if (path.endsWith(url) || (path === '/' && url === '/index.html')) {
                return name;
            }
        }
        return null;
    };
    
    const currentPageName = getCurrentPageName();

    // 计算从当前页面到目标页面的相对路径
    const getRelativePath = (targetPath) => {
        // 如果是本地文件协议，使用绝对路径处理（避免file://协议下的路径问题）
        if (window.location.protocol === 'file:') {
            // 获取当前HTML文件所在的目录路径
            const currentDir = currentUrl.substring(0, currentUrl.lastIndexOf('/') + 1);
            // 解析网站根目录（假设所有HTML都在根目录或其下的works目录）
            const rootDir = currentDir.includes('/works/') 
                ? currentDir.substring(0, currentDir.indexOf('/works/') + 1)
                : currentDir;
            
            // 拼接根目录和目标路径
            return rootDir + targetPath.substring(1); // 去掉targetPath开头的/
        }
        
        // 服务器环境下直接使用绝对路径
        return targetPath;
    };

    // 创建导航栏HTML
    const navbarHTML = `
        <nav class="navbar">
            <div class="navbar-container">
                <a href="${getRelativePath('/index.html')}" class="navbar-logo">布灵的创作空间</a>
                
                <div class="navbar-toggle" id="navbarToggle">
                    <i class="fa fa-bars"></i>
                </div>
                
                <ul class="navbar-menu" id="navbarMenu">
                    ${Object.entries(pagePaths).map(([name, url]) => `
                        <li class="navbar-item">
                            <a href="${getRelativePath(url)}" class="navbar-link ${currentPageName === name ? 'active' : ''}">
                                ${name}
                            </a>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </nav>
    `;

    // 将导航栏添加到页面
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    // 添加响应式导航栏功能
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });

    // 添加返回顶部按钮
    const backToTopButton = document.createElement('div');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '<i class="fa fa-arrow-up"></i>';
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        backToTopButton.classList.toggle('active', window.pageYOffset > 300);
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 添加页脚
    const footerHTML = `
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-content">
                    
                    <div class="footer-section">
                        <h3 class="footer-section-title">快速链接</h3>
                        <ul class="footer-links">
                            ${Object.entries(pagePaths).map(([name, url]) => `
                                <li class="footer-link">
                                    <a href="${getRelativePath(url)}">${name}</a>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; ${new Date().getFullYear()} 个人作品展示. 保留所有权利.</p>
                </div>
            </div>
        </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// 当页面加载完成时创建导航栏
document.addEventListener('DOMContentLoaded', createNavbar);
