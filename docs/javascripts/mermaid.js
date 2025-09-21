// Initialize Mermaid with custom configuration
document$.subscribe(function() {
  if (typeof mermaid !== 'undefined') {
    mermaid.initialize({
      startOnLoad: false,
      theme: document.querySelector("[data-md-color-scheme]").getAttribute("data-md-color-scheme") === "slate" ? "dark" : "default",
      themeVariables: {
        // Qatar-themed colors
        primaryColor: "#673AB7",
        primaryTextColor: "#FFFFFF",
        primaryBorderColor: "#009688",
        lineColor: "#009688",
        sectionBkColor: "#F5F5F5",
        altSectionBkColor: "#E1F5FE",
        gridColor: "#CCCCCC",
        secondaryColor: "#009688",
        tertiaryColor: "#FFD700"
      },
      flowchart: {
        htmlLabels: true,
        curve: 'basis'
      },
      sequence: {
        diagramMarginX: 50,
        diagramMarginY: 10,
        actorMargin: 50,
        width: 150,
        height: 65,
        boxMargin: 10,
        boxTextMargin: 5,
        noteMargin: 10,
        messageMargin: 35,
        mirrorActors: true,
        bottomMarginAdj: 1,
        useMaxWidth: true,
        rightAngles: false,
        showSequenceNumbers: false
      },
      gantt: {
        titleTopMargin: 25,
        barHeight: 20,
        fontSizeFactor: 1,
        fontSize: 11,
        sectionFontSize: 11,
        numberSectionStyles: 4
      }
    });

    // Re-render all Mermaid diagrams
    const mermaidElements = document.querySelectorAll('.mermaid');
    mermaidElements.forEach(function(element, index) {
      const id = 'mermaid-' + index;
      element.id = id;
      mermaid.render(id + '-svg', element.textContent, function(svgCode) {
        element.innerHTML = svgCode;
      });
    });
  }
});

// Handle theme changes
document.addEventListener('DOMContentLoaded', function() {
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'data-md-color-scheme') {
        if (typeof mermaid !== 'undefined') {
          const isDark = document.querySelector("[data-md-color-scheme]").getAttribute("data-md-color-scheme") === "slate";
          mermaid.initialize({
            theme: isDark ? "dark" : "default"
          });

          // Re-render all diagrams with new theme
          const mermaidElements = document.querySelectorAll('.mermaid');
          mermaidElements.forEach(function(element, index) {
            const id = 'mermaid-' + index;
            element.id = id;
            mermaid.render(id + '-svg', element.textContent, function(svgCode) {
              element.innerHTML = svgCode;
            });
          });
        }
      }
    });
  });

  observer.observe(document.querySelector('html'), {
    attributes: true,
    attributeFilter: ['data-md-color-scheme']
  });
});