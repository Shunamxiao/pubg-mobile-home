
'use client';

import { useEffect } from 'react';
import { siteConfig } from '@/config/site';

export function AnalyticsScript() {
  useEffect(() => {
    // 检查配置中是否有脚本内容
    if (siteConfig.analytics.customBodyScript) {
      const scriptId = 'custom-analytics-script';
      
      // 防止在开发模式的热重载或组件重新渲染时重复注入脚本
      if (document.getElementById(scriptId)) {
        return;
      }
      
      try {
        // 创建 script 元素
        const script = document.createElement('script');
        script.id = scriptId;
        
        // 使用 appendChild 和 createTextNode，这是注入脚本内容最可靠、最原生的方式
        // 它可以有效避免因 `innerHTML` 赋值而导致脚本不执行的问题
        script.appendChild(document.createTextNode(siteConfig.analytics.customBodyScript));

        // 将构建好的脚本元素添加到 document head 的末尾
        document.head.appendChild(script);

      } catch (error) {
        console.error('Failed to create or inject custom script:', error);
      }
    }
  }, []); // 空依赖数组确保此 effect 只在组件首次挂载时运行一次

  return null; // 此组件不渲染任何可见的UI
}
