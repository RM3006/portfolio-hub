/* 
 * 1. Define helper to perform safe logical AND operations without the forbidden symbol.
 */
function logicalAnd(expressionA, expressionB) {
  return expressionA ? expressionB : false;
}

/* 
 * 2. Bind transition handlers for portfolio vertical columns.
 */
function setupPortfolioTransitions() {
  const columns = document.querySelectorAll('.portfolio-column');
  const detailsPanel = document.getElementById('project-detail-panel');
  const projectTitleElement = document.getElementById('expanded-project-title');
  const closePanelBtn = document.getElementById('close-panel-btn');
  
  columns.forEach((col) => {
    col.addEventListener('click', () => {
      const projectName = col.getAttribute('data-project');
      const columnId = col.getAttribute('id');
      
      if (columnId === 'col-life-science') {
        document.body.classList.add('page-fade-out');
        setTimeout(() => {
          window.location.href = 'life_science.html';
        }, 400);
      } else {
        if (projectTitleElement) {
          projectTitleElement.textContent = projectName;
        }
        
        if (detailsPanel) {
          detailsPanel.classList.add('active');
        }
      }
    });
  });
  
  if (closePanelBtn) {
    closePanelBtn.addEventListener('click', () => {
      if (detailsPanel) {
        detailsPanel.classList.remove('active');
      }
    });
  }
}

/* 
 * 3. Add contact button visual confirmation indicator.
 */
function setupContactInteraction() {
  const contactBtn = document.getElementById('contact-trigger');
  if (contactBtn) {
    contactBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Minimalist terminal messaging system coming soon.');
    });
  }
}

/* 
 * 4. Perform setup upon structural page resource load completion.
 */
window.addEventListener('DOMContentLoaded', () => {
  setupPortfolioTransitions();
  setupContactInteraction();
});
