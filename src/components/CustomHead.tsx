
'use client';

import { useEffect } from 'react';
import { siteConfig } from '@/config/site';

export function CustomHead() {
  useEffect(() => {
    const customHtml = siteConfig.analytics.customHeadHtml;
    if (customHtml) {
      const containerId = 'custom-head-html-container';
      if (document.getElementById(containerId)) {
        return;
      }

      const parser = new DOMParser();
      const doc = parser.parseFromString(customHtml, 'text/html');
      
      // Combine nodes from both head and body of the parsed document
      const headNodes = Array.from(doc.head.childNodes);
      const bodyNodes = Array.from(doc.body.childNodes);
      const allNodes = [...headNodes, ...bodyNodes];
      
      if (allNodes.length > 0) {
        const fragment = document.createDocumentFragment();
        
        const container = document.createElement('div');
        container.id = containerId;
        container.style.display = 'none';

        allNodes.forEach(node => {
          // Node.cloneNode(true) is sufficient for meta, link, style tags.
          // For scripts, we need to re-create them for them to execute.
          if (node.nodeName.toLowerCase() === 'script') {
            const script = document.createElement('script');
            const oldScript = node as HTMLScriptElement;
            for (let i = 0; i < oldScript.attributes.length; i++) {
              const attr = oldScript.attributes[i];
              script.setAttribute(attr.name, attr.value);
            }
            script.textContent = oldScript.textContent;
            fragment.appendChild(script);
          } else {
            // This will correctly handle <meta>, <link>, <style>, etc.
            fragment.appendChild(node.cloneNode(true));
          }
        });
        
        document.head.appendChild(container); 
        document.head.appendChild(fragment);
      }
    }
  }, []);

  return null;
}
