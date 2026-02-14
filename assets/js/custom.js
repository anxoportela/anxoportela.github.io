// Custom JavaScript for Anxo Portela Portfolio

document.addEventListener('DOMContentLoaded', function() {
  
  // ============================================
  // Smooth Scrolling for Anchor Links
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // ============================================
  // Lazy Loading for Images
  // ============================================
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
          }
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }

  // ============================================
  // Back to Top Button
  // ============================================
  const backToTopButton = document.createElement('a');
  backToTopButton.href = '#';
  backToTopButton.className = 'back-to-top';
  backToTopButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
  backToTopButton.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(backToTopButton);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });

  // ============================================
  // External Links Analytics Tracking
  // ============================================
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function() {
      const url = this.href;
      // Track external link clicks (works with Umami)
      if (typeof umami !== 'undefined') {
        umami.track('External Link', { url: url });
      }
    });
  });

  // ============================================
  // Search Functionality (Page-based)
  // ============================================
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  if (searchInput && searchResults) {
    searchInput.addEventListener('input', debounce(function(e) {
      const query = e.target.value.toLowerCase();
      if (query.length < 2) {
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';
        return;
      }
      
      // Simple client-side search through page content
      const searchableElements = document.querySelectorAll('.post-title, .project-title, .gig-title, .content h2, .content h3');
      const results = [];
      
      searchableElements.forEach(el => {
        const text = el.textContent.toLowerCase();
        if (text.includes(query)) {
          const parent = el.closest('article, li');
          if (parent) {
            const link = parent.querySelector('a');
            if (link) {
              results.push({
                title: el.textContent.trim(),
                url: link.href
              });
            }
          }
        }
      });
      
      if (results.length > 0) {
        searchResults.innerHTML = results.map(r => 
          `<li><a href="${r.url}">${r.title}</a></li>`
        ).join('');
        searchResults.style.display = 'block';
      } else {
        searchResults.innerHTML = '<li>No results found</li>';
        searchResults.style.display = 'block';
      }
    }, 300));
  }

  // ============================================
  // Close search results on outside click
  // ============================================
  document.addEventListener('click', function(e) {
    if (searchResults && !searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.style.display = 'none';
    }
  });

  // ============================================
  // Contact Form Validation & Analytics
  // ============================================
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      // Track form submissions
      if (typeof umami !== 'undefined') {
        umami.track('Contact Form Submit');
      }
    });
  }

  // ============================================
  // Scroll Progress Indicator (Optional)
  // ============================================
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: var(--theme-color, #1565c0);
    width: 0%;
    z-index: 9999;
    transition: width 0.1s ease;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  });
});

// ============================================
// Utility Functions
// ============================================

// Debounce function for search
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add loaded class for fade-in effect
window.addEventListener('load', function() {
  document.body.classList.add('page-loaded');
});

// ============================================
// Search Page Functionality (Tags + Text Filter)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const searchItems = document.querySelectorAll('#search-results-page .search-item');
  const tags = document.querySelectorAll('.tag');
  
  // Only run if we're on the search page
  if (!searchInput || searchItems.length === 0) return;
  
  let currentTag = 'all';
  
  // Tag click handler - show filtered results on page
  tags.forEach(tag => {
    tag.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      // Update active state
      tags.forEach(t => t.classList.remove('tag-active'));
      this.classList.add('tag-active');
      
      // Set current tag
      currentTag = this.dataset.tag;
      
      // Filter and display results on page
      filterResults();
    });
  });
  
  // Filter results function - filters page results based on search text AND tag
  function filterResults() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    
    searchItems.forEach(item => {
      // Look for h1 or h2 as title
      const titleEl = item.querySelector('h1') || item.querySelector('h2');
      const title = titleEl ? titleEl.textContent.toLowerCase() : '';
      const content = item.querySelector('p') ? item.querySelector('p').textContent.toLowerCase() : '';
      const itemTags = item.dataset.tags ? item.dataset.tags.split(',') : [];
      
      // Check text search
      const matchesText = query.length < 2 || title.includes(query) || content.includes(query);
      
      // Check tag filter
      const matchesTag = currentTag === 'all' || itemTags.includes(currentTag);
      
      // Show/hide based on both filters
      if (matchesText && matchesTag) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  
  // Search input handler - filter page results in real-time
  searchInput.addEventListener('input', debounce(function(e) {
    filterResults();
  }, 200));
});
