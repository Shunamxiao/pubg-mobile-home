
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
      
      const script = document.createElement('script');
      script.id = scriptId;
      // It's safer to set the content this way for scripts
      script.innerHTML = siteConfig.analytics.customBodyScript;
      document.head.appendChild(script);
    }
  }, []);

  return null;
}
