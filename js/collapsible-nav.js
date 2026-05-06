// Collapsible Navigation JavaScript
class CollapsibleNav {
    constructor() {
        this.init();
    }

    init() {
        this.createMobileNav();
        this.bindEvents();
        this.handleResponsiveMenu();
    }

    createMobileNav() {
        // Create mobile navigation overlay
        const mobileNav = document.createElement('div');
        mobileNav.className = 'mobile-collapsible-nav';
        mobileNav.id = 'mobile-collapsible-nav';
        
        mobileNav.innerHTML = `
            <button class="mobile-nav-close" id="mobile-nav-close">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            <div class="mobile-collapsible-content">
                ${this.createCollapsibleSections()}
            </div>
        `;
        
        document.body.appendChild(mobileNav);
    }

    createCollapsibleSections() {
        return `
            <!-- Home Section -->
            <div class="collapsible-nav-card">
                <button class="collapsible-trigger" href="index.html">
                    <span>🏠 Home</span>
                </button>
            </div>

            <!-- About Us Section -->
            <div class="collapsible-nav-card">
                <button class="collapsible-trigger" href="about.html">
                    <span>📋 About Us</span>
                </button>
            </div>

            <!-- Services Section -->
            <div class="collapsible-nav-card">
                <button class="collapsible-trigger" data-target="services-content">
                    <span>🛠️ Services</span>
                    <svg class="collapsible-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
                <div class="collapsible-content" id="services-content">
                    <div class="collapsible-inner">
                        <ul class="collapsible-nav-list">
                            <li class="service-item">
                                <a href="estate.html">
                                    <span>🏘️</span> Real Estate
                                </a>
                            </li>
                            <li class="service-item">
                                <a href="gold.html">
                                    <span>🥇</span> Gold Commodities
                                </a>
                            </li>
                            <li class="service-item">
                                <a href="crypto.html">
                                    <span>₿</span> Crypto Currency
                                </a>
                            </li>
                            <li class="service-item">
                                <a href="cannabis.html">
                                    <span>🌿</span> Cannabis
                                </a>
                            </li>
                            <li class="service-item">
                                <a href="stock.html">
                                    <span>📈</span> Stock and ETFs
                                </a>
                            </li>
                            <li class="service-item">
                                <a href="agriculture.html">
                                    <span>🌾</span> Agriculture
                                </a>
                            </li>
                            <li class="service-item">
                                <a href="loan.html">
                                    <span>💰</span> Loan Offers
                                </a>
                            </li>
                            <li class="service-item">
                                <a href="landlord.html">
                                    <span>🏠</span> Landlord Properties
                                </a>
                            </li>
                            <li class="service-item">
                                <a href="insurance.html">
                                    <span>🚗</span> Car Insurance & Benz Investment
                                </a>
                            </li>
                            <li class="service-item">
                                <a href="recovery.html">
                                    <span>🔄</span> Fund Recovery
                                </a>
                            </li>
                            <li class="service-item">
                                <a href="cards.html">
                                    <span>🎁</span> Gift Card & Amazon Card Investment
                                </a>
                            </li>
                            <li class="service-item">
                                <a href="bbank.html">
                                    <span>🏦</span> Big Bank Energy Investment
                                </a>
                            </li>
                        </ul>
                        <button class="collapsible-learn-more" onclick="window.location.href='about.html#services'">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            <!-- Contact Us Section -->
            <div class="collapsible-nav-card">
                <button class="collapsible-trigger" href="contact.html">
                    <span>📞 Contact Us</span>
                </button>
            </div>

            <!-- FAQs Section -->
            <div class="collapsible-nav-card">
                <button class="collapsible-trigger" href="faqs.html">
                    <span>❓ FAQs</span>
                </button>
            </div>

            <!-- Login Section -->
            <div class="collapsible-nav-card">
                <button class="collapsible-trigger" data-target="login-content">
                    <span>🔐 Account</span>
                    <svg class="collapsible-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
                <div class="collapsible-content" id="login-content">
                    <div class="collapsible-inner">
                        <ul class="collapsible-nav-list">
                            <li>
                                <a href="https://app.wealthallianceinvestments.com/login">
                                    <span>👤</span> Login
                                </a>
                            </li>
                            <li>
                                <a href="https://app.wealthallianceinvestments.com/register">
                                    <span>✏️</span> Sign Up
                                </a>
                            </li>
                        </ul>
                        <button class="collapsible-learn-more" onclick="window.location.href='https://app.wealthallianceinvestments.com/register'">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    bindEvents() {
        // Replace hamburger button with new trigger
        this.replaceHamburgerButton();
        
        // Bind collapsible triggers
        this.bindCollapsibleTriggers();
        
        // Bind close button
        this.bindCloseButton();
        
        // Bind direct link triggers
        this.bindDirectLinks();
    }

    replaceHamburgerButton() {
        const originalToggler = document.querySelector('.navbar-toggler');
        if (originalToggler) {
            const newTrigger = document.createElement('button');
            newTrigger.className = 'hamburger-trigger';
            newTrigger.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            `;
            
            newTrigger.addEventListener('click', () => this.toggleMobileNav());
            originalToggler.parentNode.replaceChild(newTrigger, originalToggler);
        }
    }

    bindCollapsibleTriggers() {
        const triggers = document.querySelectorAll('.collapsible-trigger[data-target]');
        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = trigger.getAttribute('data-target');
                this.toggleCollapsible(targetId, trigger);
            });
        });
    }

    bindCloseButton() {
        const closeButton = document.getElementById('mobile-nav-close');
        if (closeButton) {
            closeButton.addEventListener('click', () => this.closeMobileNav());
        }
    }

    bindDirectLinks() {
        const directLinks = document.querySelectorAll('.collapsible-trigger[href]:not([data-target])');
        directLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                this.closeMobileNav();
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            });
        });
    }

    toggleCollapsible(targetId, trigger) {
        const content = document.getElementById(targetId);
        const icon = trigger.querySelector('.collapsible-icon');
        
        if (content) {
            const isExpanded = content.classList.contains('expanded');
            
            // Close all other collapsibles
            document.querySelectorAll('.collapsible-content.expanded').forEach(otherContent => {
                if (otherContent.id !== targetId) {
                    otherContent.classList.remove('expanded');
                    const otherTrigger = document.querySelector(`[data-target="${otherContent.id}"]`);
                    const otherIcon = otherTrigger?.querySelector('.collapsible-icon');
                    if (otherIcon) {
                        otherIcon.classList.remove('rotated');
                    }
                }
            });
            
            // Toggle current collapsible
            if (isExpanded) {
                content.classList.remove('expanded');
                icon?.classList.remove('rotated');
            } else {
                content.classList.add('expanded');
                icon?.classList.add('rotated');
            }
        }
    }

    toggleMobileNav() {
        const mobileNav = document.getElementById('mobile-collapsible-nav');
        
        if (mobileNav) {
            if (mobileNav.classList.contains('active')) {
                // Close navigation and collapse all items
                this.closeMobileNav();
            } else {
                // Open navigation and expand all items
                mobileNav.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                // Expand all collapsible sections
                setTimeout(() => {
                    document.querySelectorAll('.collapsible-content').forEach(content => {
                        content.classList.add('expanded');
                    });
                    document.querySelectorAll('.collapsible-icon').forEach(icon => {
                        icon.classList.add('rotated');
                    });
                }, 100);
            }
        }
    }

    openMobileNav() {
        const mobileNav = document.getElementById('mobile-collapsible-nav');
        if (mobileNav) {
            mobileNav.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    closeMobileNav() {
        const mobileNav = document.getElementById('mobile-collapsible-nav');
        
        if (mobileNav) {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
            
            // Reset all collapsibles
            document.querySelectorAll('.collapsible-content.expanded').forEach(content => {
                content.classList.remove('expanded');
            });
            document.querySelectorAll('.collapsible-icon.rotated').forEach(icon => {
                icon.classList.remove('rotated');
            });
        }
    }

    handleResponsiveMenu() {
        // Check screen size on load and resize
        this.updateMenuVisibility();
        window.addEventListener('resize', () => this.updateMenuVisibility());
    }

    updateMenuVisibility() {
        const hamburgerBtn = document.querySelector('.hamburger-trigger');
        const desktopNav = document.querySelector('.navbar-collapse');
        const screenWidth = window.innerWidth;
        
        if (hamburgerBtn && desktopNav) {
            if (screenWidth <= 767) {
                // Mobile: Show hamburger button, hide desktop nav
                hamburgerBtn.style.display = 'flex';
                desktopNav.style.display = 'none';
            } else {
                // Desktop: Hide hamburger button, show desktop nav
                hamburgerBtn.style.display = 'none';
                desktopNav.style.display = 'block';
                
                // Close mobile nav if open
                const mobileNav = document.getElementById('mobile-collapsible-nav');
                if (mobileNav && mobileNav.classList.contains('active')) {
                    this.closeMobileNav();
                }
            }
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new CollapsibleNav();
});

// Close mobile nav when clicking outside
document.addEventListener('click', (e) => {
    const mobileNav = document.getElementById('mobile-collapsible-nav');
    const hamburgerBtn = document.querySelector('.hamburger-trigger');
    if (mobileNav && mobileNav.classList.contains('active') && hamburgerBtn) {
        if (!mobileNav.querySelector('.mobile-collapsible-content').contains(e.target) && !hamburgerBtn.contains(e.target)) {
            const instance = new CollapsibleNav();
            instance.closeMobileNav();
        }
    }
});

// Handle escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const mobileNav = document.getElementById('mobile-collapsible-nav');
        if (mobileNav && mobileNav.classList.contains('active')) {
            const instance = new CollapsibleNav();
            instance.closeMobileNav();
        }
    }
});
