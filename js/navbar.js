function createNavbar() {
    // 获取当前页面的URL路径
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    
    // 导航栏数据（存储相对于网站根目录的绝对路径）
    const navItems = [
        { name: '首页', url: '../../index.html' },
        { name: '设定集', url: '../../works/settings/index.html' },
        { name: '故事集', url: '../../works/stories/index.html' },
        { name: '画集', url: '../../works/artworks/index.html' },
        { name: '关于本站', url: '../../works/about/index.html' }
    ];

    // 获取网站根目录路径（假设HTML文件直接放在服务器根目录或项目根目录）
    // 实际应用中可根据部署情况调整
    const getBaseUrl = () => {
        // 获取当前页面的完整URL
        const url = window.location.href;
        // 找到最后一个'/'的位置（在文件名之前）
        const lastSlashIndex = url.lastIndexOf('/');
        // 返回根目录路径
        return url.substring(0, lastSlashIndex + 1);
    };
    
    const baseUrl = getBaseUrl();

    // 计算从当前页面到目标页面的相对路径
    const getRelativePath = (targetUrl) => {
        // 解析当前路径和目标路径
        const currentParts = path.split('/').filter(part => part);
        const targetParts = targetUrl.split('/').filter(part => part);
        
        // 找到共同的路径部分
        let commonLength = 0;
        while (commonLength < currentParts.length && 
               commonLength < targetParts.length && 
               currentParts[commonLength] === targetParts[commonLength]) {
            commonLength++;
        }
        
        // 计算需要回退的层级
        const backtrack = currentParts.length - commonLength;
        const backtrackParts = backtrack > 0 ? Array(backtrack).fill('..') : [];
        
        // 计算目标路径的剩余部分
        const targetRemaining = targetParts.slice(commonLength);
        
        // 组合相对路径
        return [...backtrackParts, ...targetRemaining].join('/');
    };

    // 创建导航栏HTML
    const navbarHTML = `
        <nav class="navbar">
            <div class="navbar-container">
                <a href="${getRelativePath('/index.html')}" class="navbar-logo">个人作品展示</a>
                
                <div class="navbar-toggle" id="navbarToggle">
                    <i class="fa fa-bars"></i>
                </div>
                
                <ul class="navbar-menu" id="navbarMenu">
                    ${navItems.map(item => {
                        const linkUrl = getRelativePath(item.url);
                        // 匹配当前页面的active状态
                        const isActive = path.endsWith(item.url) || 
                                       (path === '/' && item.url === '/index.html');
                        return `
                            <li class="navbar-item">
                                <a href="${linkUrl}" class="navbar-link ${isActive ? 'active' : ''}">
                                    ${item.name}
                                </a>
                            </li>
                        `;
                    }).join('')}
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
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
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
                        <h3 class="footer-section-title">关于我</h3>
                        <p>个人作品展示网站，分享我的创作和故事。</p>
                    </div>
                    
                    <div class="footer-section">
                        <h3 class="footer-section-title">快速链接</h3>
                        <ul class="footer-links">
                            ${navItems.map(item => `
                                <li class="footer-link">
                                    <a href="${getRelativePath(item.url)}">${item.name}</a>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h3 class="footer-section-title">联系方式</h3>
                        <p>GitHub: <a href="https://github.com/" target="_blank" class="text-white">github.com/username</a></p>
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
