
'use client';

import { useEffect } from 'react';
import { siteConfig } from '@/config/site';

export function AnalyticsScript() {
  useEffect(() => {
    if (siteConfig.analytics.customBodyScript) {
      const scriptId = 'custom-analytics-script';
      
      // Prevent duplicate script injection
      if (document.getElementById(scriptId)) {
        return;
      }
      
      try {
        const scriptContent = siteConfig.analytics.customBodyScript;
        const blob = new Blob([scriptContent], { type: 'application/javascript' });
        const url = URL.createObjectURL(blob);

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = url;
        script.async = true;

        document.head.appendChild(script);

        // Clean up the object URL after the script has loaded to free up memory
        script.onload = () => {
          URL.revokeObjectURL(url);
        };
        script.onerror = () => {
          console.error('Custom analytics script failed to load.');
          URL.revokeObjectURL(url);
        }

      } catch (error) {
        console.error('Failed to create or inject custom script:', error);
      }
    }
  }, []);

  return null;
}
