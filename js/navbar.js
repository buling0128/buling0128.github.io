function createNavbar() {
    // 获取当前页面的URL路径
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    
    // 关键修复：导航数据改为【基于网站根目录的绝对路径】，而非带../../的相对路径
    const navItems = [
        { name: '首页', url: '/index.html' }, // 根目录下的首页
        { name: '设定集', url: '/works/settings/index.html' }, // 根目录→works→settings
        { name: '故事集', url: '/works/stories/index.html' }, // 根目录→works→stories
        { name: '画集', url: '/works/artworks/index.html' }, // 根目录→works→artworks
        { name: '关于本站', url: '/works/about/index.html' } // 根目录→works→about
    ];

    // 计算从当前页面到目标页面的相对路径（函数逻辑不变，因输入格式已修复）
    const getRelativePath = (targetUrl) => {
        const currentParts = path.split('/').filter(part => part);
        const targetParts = targetUrl.split('/').filter(part => part);
        
        // 找到路径的共同前缀
        let commonLength = 0;
        while (commonLength < currentParts.length && 
               commonLength < targetParts.length && 
               currentParts[commonLength] === targetParts[commonLength]) {
            commonLength++;
        }
        
        // 计算需要回退的层级 + 目标路径的剩余部分
        const backtrack = currentParts.length - commonLength;
        const backtrackParts = backtrack > 0 ? Array(backtrack).fill('..') : [];
        const targetRemaining = targetParts.slice(commonLength);
        
        return [...backtrackParts, ...targetRemaining].join('/');
    };

    // 创建导航栏HTML（逻辑不变，因导航数据格式已正确）
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
                        // 修复active状态判断：基于当前路径是否包含目标路径的绝对路径
                        const isActive = path === item.url || 
                                       (path.endsWith('/') && item.url === path + 'index.html');
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

    // 响应式导航栏功能（不变）
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');
    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });

    // 返回顶部按钮（不变）
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

    // 添加页脚（导航链接路径同步修复）
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

// 页面加载完成后创建导航栏
document.addEventListener('DOMContentLoaded', createNavbar);
