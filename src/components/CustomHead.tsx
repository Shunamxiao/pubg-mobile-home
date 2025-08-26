
'use client';

import { useEffect } from 'react';
import { siteConfig } from '@/config/site';

export function CustomHead() {
  useEffect(() => {
    const customHtml = siteConfig.analytics.customHeadHtml;
    if (customHtml) {
      // Create a unique ID for our container to avoid duplicates
      const containerId = 'custom-head-html-container';
      if (document.getElementById(containerId)) {
        return;
      }

      // Use DOMParser to safely parse the HTML string
      const parser = new DOMParser();
      const doc = parser.parseFromString(customHtml, 'text/html');
      
      // The parsed content will be in the body of the new document
      const nodes = Array.from(doc.body.childNodes);
      
      if (nodes.length > 0) {
        // Create a fragment to hold all the new nodes
        const fragment = document.createDocumentFragment();
        
        // We use a container div with an ID to mark that we've injected the HTML
        const container = document.createElement('div');
        container.id = containerId;
        container.style.display = 'none'; // The container itself shouldn't be visible

        nodes.forEach(node => {
          // IMPORTANT: Re-create nodes in the main document context
          // This is crucial for scripts to execute correctly
          if (node.nodeName.toLowerCase() === 'script') {
            const script = document.createElement('script');
            const oldScript = node as HTMLScriptElement;
            // Copy attributes
            for (let i = 0; i < oldScript.attributes.length; i++) {
              const attr = oldScript.attributes[i];
              script.setAttribute(attr.name, attr.value);
            }
            script.textContent = oldScript.textContent;
            fragment.appendChild(script);
          } else {
            fragment.appendChild(node.cloneNode(true));
          }
        });
        
        document.head.appendChild(container); // Add marker
        document.head.appendChild(fragment); // Add actual content
      }
    }
  }, []);

  return null;
}

    