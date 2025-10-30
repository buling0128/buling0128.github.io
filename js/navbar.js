// 创建导航栏组件
function createNavbar() {
    // 获取当前页面的URL路径
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';

    // 导航栏数据
    const navItems = [
        { name: '首页', url: 'index.html' },
        { name: '设定集', url: 'works/settings/index.html' },
        { name: '故事集', url: 'works/stories/index.html' },
        { name: '画集', url: 'works/artworks/index.html' },
        { name: '关于本站', url: 'works/about/index.html' }
    ];

    // 创建导航栏HTML
    const navbarHTML = `
        <nav class="navbar">
            <div class="navbar-container">
                <a href="../index.html" class="navbar-logo">个人作品展示</a>
                
                <div class="navbar-toggle" id="navbarToggle">
                    <i class="fa fa-bars"></i>
                </div>
                
                <ul class="navbar-menu" id="navbarMenu">
                    ${navItems.map(item => `
                        <li class="navbar-item">
                            <a href="${item.url}" class="navbar-link ${page === item.url.split('/').pop() ? 'active' : ''}">
                                ${item.name}
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
                                    <a href="${item.url}">${item.name}</a>
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

