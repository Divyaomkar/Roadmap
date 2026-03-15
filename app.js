const roadmapData = {
    frontend: [
        {
            id: 'internet',
            icon: '🌐',
            title: 'The Internet',
            desc: 'Understand how the internet works at a high level. Learn about HTTP/HTTPS, Domain Names, DNS, and Web Hosting. This is the foundation upon which all web development is built.',
            tags: ['DNS', 'HTTP', 'Hosting', 'Browsers'],
            info: 'Week 1: Foundations',
            learning: 'Grasp the core infrastructure of the web.',
            details: ['HTTP/HTTPS protocols', 'DNS & Domain Names', 'Browsers & How they work'],
            link: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics'
        },
        {
            id: 'html',
            icon: '🧱',
            title: 'HTML5',
            desc: 'HTML is the standard markup language for documents designed to be displayed in a web browser. Learn semantic layout, forms, validations, accessibility, and SEO basics.',
            tags: ['Semantics', 'Accessibility', 'Forms', 'SEO'],
            info: 'Week 2: Structure',
            learning: 'Build accessible and search-friendly pages.',
            details: ['Semantic HTML elements', 'Forms and Validations', 'Accessibility (ARIA)', 'SEO best practices'],
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
        },
        {
            id: 'css',
            icon: '🎨',
            title: 'CSS3',
            desc: 'CSS describes how HTML elements are displayed on screen. Master modern layouts using Flexbox and Grid, animations, variables, and responsive design paradigms.',
            tags: ['Flexbox', 'Grid', 'Animations', 'Media Queries'],
            info: 'Week 3-4: Styling',
            learning: 'Master layout systems and responsive design.',
            details: ['Flexbox and CSS Grid', 'Responsive Design', 'CSS Variables & Animation', 'SASS/PostCSS'],
            link: 'https://web.dev/learn/css/'
        },
        {
            id: 'js',
            icon: '⚡',
            title: 'JavaScript',
            desc: 'JavaScript makes your pages interactive. Deep dive into ES6+ features, DOM manipulation, Fetch API/Promises, closures, Event Loop, and Asynchronous programming.',
            tags: ['ES6+', 'DOM', 'Promises', 'Async/Await'],
            info: 'Month 2: Interactivity',
            learning: 'Programming fundamentals & logic flow.',
            details: ['ES6+ Syntax (Arrow, Destructuring)', 'DOM Manipulation', 'Closures & Hoisting', 'Async/Await & Promises'],
            link: 'https://javascript.info/'
        },
        {
            id: 'framework',
            icon: '⚛️',
            title: 'Component Frameworks',
            desc: 'Learn a modern component-based framework to scale UI development. React is the industry standard, but Vue and Svelte are incredibly powerful alternatives.',
            tags: ['React', 'Vue', 'Svelte', 'State Management'],
            info: 'Month 3: UI Architecture',
            learning: 'Build scalable, component-based interfaces.',
            details: ['Component Lifecycle', 'State & Props Management', 'Hooks & Composition', 'Routing & Data Fetching'],
            link: 'https://react.dev/learn'
        },
        {
            id: 'buildtools',
            icon: '🛠️',
            title: 'Modern Build Tools',
            desc: 'Code compilation, bundling, and local development scaling. Transition from Webpack to modern, lightning-fast tools like Vite, along with npm/yarn/pnpm.',
            tags: ['Vite', 'NPM/PNPM', 'Transformers', 'Linters'],
            info: 'Month 4: Professional Tooling',
            learning: 'Modern development workflow & automation.',
            details: ['NPM/PNPM Package Managers', 'Vite & Webpack Bundlers', 'ESLint & Prettier', 'Git & Version Control'],
            link: 'https://vitejs.dev/'
        }
    ],
    backend: [
        {
            id: 'internet-backend',
            icon: '🌍',
            title: 'Internet Fundamentals',
            desc: 'Deepen your knowledge of Networks. OSI Model, TCP/UDP, Ports, IP Addresses, and the HTTP protocol deeply.',
            tags: ['TCP/IP', 'HTTP/2', 'CORS', 'WebSockets'],
            info: 'Week 1: Networks',
            learning: 'Understand server communication in depth.',
            details: ['Network Layers (OSI)', 'HTTP/HTTPS/HTTP2', 'CORS & Security Headers', 'WebSockets & Real-time'],
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview'
        },
        {
            id: 'language',
            icon: '💻',
            title: 'Programming Language',
            desc: 'Pick your weapon of choice. Node.js (JavaScript/TypeScript), Python, Go, or Rust. Master server-side logic, File Systems, and Concurrency.',
            tags: ['Node.js', 'Python', 'Go', 'Design Patterns'],
            info: 'Week 2-4: Core Logic',
            learning: 'Server-side programming & async logic.',
            details: ['Language Syntax & Data Types', 'Asynchronous Programming', 'File Systems & Streams', 'Concurrency & Multi-threading'],
            link: 'https://nodejs.org/en/about/'
        },
        {
            id: 'databases',
            icon: '🗄️',
            title: 'Databases',
            desc: 'Where data lives forever. Understand Relational (PostgreSQL, MySQL) vs NoSQL (MongoDB, Redis). Learn indexing, transactions, and normalization.',
            tags: ['PostgreSQL', 'MongoDB', 'Redis', 'ORM/Query Builders'],
            info: 'Month 2: Data Persistence',
            learning: 'Manage and optimize complex data storage.',
            details: ['SQL vs NoSQL', 'Database Normalization', 'Indexing & Optimization', 'ACID Properties'],
            link: 'https://useTheIndexLuke.com/'
        },
        {
            id: 'apis',
            icon: '🔌',
            title: 'APIs & Architectures',
            desc: 'Design robust contracts between client and server. Build RESTful services, explore GraphQL, or gRPC for microservices. Master authentication (JWT, OAuth).',
            tags: ['REST', 'GraphQL', 'JWT', 'OAuth2.0'],
            info: 'Month 3: Communication',
            learning: 'Design secure and efficient API contracts.',
            details: ['RESTful API Design', 'GraphQL Schema & Resolvers', 'Authentication (JWT/OAuth)', 'Rate Limiting & Caching'],
            link: 'https://restfulapi.net/'
        },
        {
            id: 'deployment',
            icon: '🚢',
            title: 'Deployment & CI/CD',
            desc: 'Get your code to the world. Learn Docker for containerization, GitHub Actions for automation, and host on platforms like AWS, Vercel, or Render.',
            tags: ['Docker', 'CI/CD', 'AWS', 'Linux'],
            info: 'Month 4: Infrastructure',
            learning: 'Cloud deployment and DevOps principles.',
            details: ['Containerization (Docker)', 'CI/CD Pipelines', 'Cloud Providers (AWS/GCP)', 'Linux Server Management'],
            link: 'https://docs.docker.com/get-started/'
        }
    ],
    fullstack: [
        {
            id: 'fs-intro',
            icon: '🌍',
            title: 'Internet & Web Basics',
            desc: 'Understand how the internet works at a high level. Learn about HTTP/HTTPS, Domain Names, DNS, Web Hosting, HTML semantic layout, CSS basics, and JavaScript syntax.',
            tags: ['DNS', 'HTTP', 'HTML5', 'CSS3', 'JS'],
            info: 'Month 1: Tapping the Surface',
            learning: 'Build a holistic view of web development.',
            details: ['Web Architecture Basics', 'Fundamental HTML/CSS', 'Basic JavaScript Control Flow', 'Version Control with Git'],
            link: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics'
        },
        {
            id: 'fs-frontend',
            icon: '⚛️',
            title: 'Frontend Mastery',
            desc: 'Deep dive into DOM manipulation, responsive design, and mastering a component framework (React, Vue, or Svelte). Manage global state and handle complex client-side routing.',
            tags: ['React', 'State Management', 'Tailwind', 'Vite'],
            info: 'Month 2: Client Side',
            learning: 'Advanced UI patterns and state management.',
            details: ['React Hooks (useState, useEffect)', 'Tailwind CSS Utility Classes', 'State Libraries (Zustand/Redux)', 'Client-side Routing'],
            link: 'https://react.dev/learn'
        },
        {
            id: 'fs-backend-lang',
            icon: '💻',
            title: 'Backend Ecosystem',
            desc: 'Pick a backend language (Node.js, Python, Go) and master its ecosystem. Learn how to handle requests, middleware, file systems, and background jobs.',
            tags: ['Node.js', 'Express', 'Python', 'Go'],
            info: 'Month 3: Server Side',
            learning: 'Bridge the gap between client and server.',
            details: ['REST API Implementation', 'Middleware & Authentication', 'Error Handling & Logging', 'Asynchronous Operations'],
            link: 'https://nodejs.org/en/about/'
        },
        {
            id: 'fs-databases',
            icon: '🗄️',
            title: 'Databases & ORMs',
            desc: 'Learn both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Redis). Understand schemas, indexing, relations, ORMs (like Prisma or Drizzle), and caching strategies.',
            tags: ['PostgreSQL', 'Redis', 'Prisma', 'MongoDB'],
            info: 'Month 4: Data Layer',
            learning: 'Enterprise-grade data archiecture design.',
            details: ['Relational Schema Design', 'Query Optimization', 'Object Relational Mapping', 'In-memory Caching'],
            link: 'https://useTheIndexLuke.com/'
        },
        {
            id: 'fs-api',
            icon: '🔌',
            title: 'APIs & Security',
            desc: 'Design RESTful and GraphQL APIs. Implement secure authentication/authorization (JWT, OAuth, Sessions), handle CORS, rate limiting, and input validation.',
            tags: ['REST', 'GraphQL', 'OAuth2', 'JWT'],
            info: 'Month 5: Contracts',
            learning: 'Universal communication & web security.',
            details: ['Advanced JWT/OAuth patterns', 'GraphQL vs REST', 'Security Best Practices', 'Documentation (Swagger/Postman)'],
            link: 'https://restfulapi.net/'
        },
        {
            id: 'fs-sys-design',
            icon: '🏗️',
            title: 'System Design & DevOps',
            desc: 'Understand monolithic vs microservices architectures. Learn Docker containerization, CI/CD pipelines (GitHub Actions), and serverless deployments (Vercel, AWS).',
            tags: ['Docker', 'CI/CD', 'AWS', 'Microservices'],
            info: 'Month 6: The Architect',
            learning: 'Deploy and scale robust cloud systems.',
            details: ['Microservices Architecture', 'Docker Compose & Kubernetes', 'CI/CD Pipeline Design', 'Cloud Deployment & Monitoring'],
            link: 'https://github.com/donnemartin/system-design-primer'
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const roadmapContainer = document.getElementById('roadmap-content');
    const navBtns = document.querySelectorAll('.nav-btn');
    const modalOverlay = document.getElementById('skill-modal');
    const closeBtn = document.getElementById('close-modal');

    // Modal Elements
    const modalIcon = document.getElementById('modal-icon');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalLink = document.getElementById('modal-link');

    // Build timeline UI
    function renderRoadmap(type) {
        roadmapContainer.innerHTML = '';
        const data = roadmapData[type];

        data.forEach((item, index) => {
            const side = index % 2 === 0 ? 'left' : 'right';

            const tagsHTML = item.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('');
            const detailsHTML = item.details ? `<ul class="card-details">${item.details.map(p => `<li>${p}</li>`).join('')}</ul>` : '';

            const el = document.createElement('div');
            el.className = `timeline-item ${side}`;
            el.innerHTML = `
                <div class="node-point"></div>
                <div class="timeline-info">
                    <span class="info-text">${item.info}</span>
                    <p class="learning-outcome">${item.learning || ''}</p>
                </div>
                <div class="timeline-content" data-id="${item.id}">
                    <div class="card-inner">
                        <span class="card-icon">${item.icon}</span>
                        <h3>${item.title}</h3>
                        <p>${item.desc}</p>
                        ${detailsHTML}
                        <div class="tech-stack">
                            ${tagsHTML}
                        </div>
                    </div>
                </div>
            `;
            roadmapContainer.appendChild(el);

            // Add hover effects for mouse follow
            const card = el.querySelector('.timeline-content');

            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });

            // Click to open modal
            card.addEventListener('click', () => openModal(item));
        });

        // Trigger intersection observer for new elements
        observeElements();
    }

    // Modal Logic
    function openModal(item) {
        modalIcon.textContent = item.icon;
        modalTitle.textContent = item.title;
        modalDesc.textContent = item.desc;

        // Add details to modal if they exist
        const modalDetails = item.details ? `<div class="modal-details"><h3>Core Topics</h3><ul>${item.details.map(p => `<li>${p}</li>`).join('')}</ul></div>` : '';

        // Remove existing modal details if any
        const existingDetails = document.querySelector('.modal-details');
        if (existingDetails) existingDetails.remove();

        // Insert details before links
        const linksContainer = document.querySelector('.links-container');
        linksContainer.insertAdjacentHTML('beforebegin', modalDetails);

        modalLink.href = item.link;
        modalOverlay.classList.add('active');
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
    }

    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // Navigation Switcher
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active
            navBtns.forEach(b => b.classList.remove('active'));
            // Add active
            btn.classList.add('active');

            // Render new content
            renderRoadmap(btn.dataset.path);
        });
    });

    // Scroll Animation Observer
    function observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Determine if we're scrolling down by comparing bounding rect
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    // Only remove if it's below the viewport (scrolling up)
                    // If it's above the viewport, keep it visible
                    if (entry.boundingClientRect.top > 0) {
                        entry.target.classList.remove('visible');
                    }
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        });

        document.querySelectorAll('.timeline-item').forEach(item => {
            observer.observe(item);
        });
    }

    // Timeline Scroll Progress
    const timelineLine = document.querySelector('.timeline-line');
    const timelineWrapper = document.querySelector('.timeline-wrapper');

    function updateScrollProgress() {
        if (!timelineWrapper || !timelineLine) return;

        const rect = timelineWrapper.getBoundingClientRect();

        // Use the window's scroll position and the element's position on the page
        // instead of just getBoundingClientRect which gets weird near the bottom of pages
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const timelineTop = timelineWrapper.offsetTop;
        const timelineHeight = timelineWrapper.offsetHeight;

        // We start drawing the line when the user has scrolled down to the top of the timeline
        // And finish drawing it when the user has scrolled past the timeline minus some offset
        const windowHeight = window.innerHeight;

        // How much of the timeline we have scrolled past
        let progress = 0;

        // The midpoint of the screen
        const scrollOffset = scrollTop + (windowHeight / 2);

        if (scrollOffset >= timelineTop) {
            progress = ((scrollOffset - timelineTop) / timelineHeight) * 100;
        }

        // Clamp between 0 and 100
        progress = Math.min(100, Math.max(0, progress));

        timelineLine.style.setProperty('--scroll-progress', `${progress}%`);
    }

    // Custom Cursor - Trailing Dots Logic
    const DOT_COUNT = 12;
    const dots = [];
    const mouse = { x: 0, y: 0 };
    let hasMoved = false;
    let currentSpeed = 0.005; // Extremely slow initial accumulation speed

    // Initialize dots from the 4 corners
    for (let i = 0; i < DOT_COUNT; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-dot';

        // Scale down size and opacity for the tail
        const scale = 1 - (i / DOT_COUNT);
        dot.style.opacity = '0'; // Start completely invisible
        dot.style.transform = `translate(-50%, -50%) scale(${scale})`;

        document.body.appendChild(dot);

        // Calculate corner spawn points
        let startX = 0, startY = 0;
        const corner = i % 4;
        if (corner === 0) { startX = 0; startY = 0; }                                         // Top Left
        else if (corner === 1) { startX = window.innerWidth; startY = 0; }                    // Top Right
        else if (corner === 2) { startX = window.innerWidth; startY = window.innerHeight; }   // Bottom Right
        else if (corner === 3) { startX = 0; startY = window.innerHeight; }                   // Bottom Left

        // Pre-position them safely at the corners
        dot.style.left = `${startX}px`;
        dot.style.top = `${startY}px`;

        dots.push({
            el: dot,
            x: startX,
            y: startY,
            scale: scale
        });
    }

    document.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;

        // Once the user moves their mouse, un-hide the dots so they fly in
        if (!hasMoved) {
            hasMoved = true;
            dots.forEach(d => {
                d.el.style.opacity = d.scale;
            });
        }
    });

    function animateDots() {
        if (hasMoved) {
            // Gradually recover speed from smooth initial float up to standard tail wait length (0.25)
            // Ramp up speed very slowly for a majestic, long convergence animation
            if (currentSpeed < 0.25) {
                currentSpeed += 0.001;
            }

            // First dot immediately follows mouse
            let currX = mouse.x;
            let currY = mouse.y;

            dots.forEach((dot) => {
                // Smoothly move dot towards previous dot's position/mouse
                dot.x += (currX - dot.x) * currentSpeed;
                dot.y += (currY - dot.y) * currentSpeed;

                dot.el.style.left = `${dot.x}px`;
                dot.el.style.top = `${dot.y}px`;

                // Set current coords as target for the NEXT dot in the tail
                currX = dot.x;
                currY = dot.y;
            });
        }

        requestAnimationFrame(animateDots);
    }

    animateDots();

    // Make the dots glow differently when hovering interactive elements
    document.body.addEventListener('mouseover', (e) => {
        if (e.target.closest('button, a, .timeline-content')) {
            dots.forEach(d => d.el.classList.add('interactive'));
        } else {
            dots.forEach(d => d.el.classList.remove('interactive'));
        }
    });

    // Recalculate progress occasionally when tabbing between paths
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            setTimeout(updateScrollProgress, 100);
        });
    });

    // Initial render
    renderRoadmap('frontend');

    window.addEventListener('scroll', updateScrollProgress);
    window.addEventListener('resize', updateScrollProgress);
    setTimeout(updateScrollProgress, 100);

    // Background Audio Logic
    const baseAudio = document.getElementById('bg-audio');

    if (baseAudio) {
        baseAudio.addEventListener('error', (e) => {
            console.error('Audio Error: The file could not be loaded. Please ensure the source is valid.', e);
        });
    }

    const startAudio = () => {
        if (baseAudio) {
            // Create a clone for polyphony (allows overlapping sounds)
            const soundClone = baseAudio.cloneNode(true);
            soundClone.volume = 1.0;

            soundClone.play()
                .then(() => {
                    // Wait before starting the fade-out
                    setTimeout(() => {
                        const fadeDuration = 800; // ms for the fade to complete
                        const fadeStep = 50; // interval in ms
                        const volumeDecrement = 1 / (fadeDuration / fadeStep);

                        const fadeInterval = setInterval(() => {
                            if (soundClone.volume > volumeDecrement) {
                                soundClone.volume -= volumeDecrement;
                            } else {
                                soundClone.volume = 0;
                                clearInterval(fadeInterval);
                                soundClone.pause();
                                soundClone.remove(); // Cleanup the cloned element
                            }
                        }, fadeStep);
                    }, 300); // User fixed delay
                })
                .catch(error => {
                    // Silently fail if blocked by browser, or log warning
                    console.warn('Audio playback failed or was blocked:', error);
                    soundClone.remove();
                });
        }
    };

    // Listen for every click to trigger the sound
    document.addEventListener('click', startAudio);
});
