export interface KatharineConfig {
  enabled: boolean;
  theme: {
    useVioletTheme: boolean;
    persistTheme: boolean;
  };
  assistant: {
    personality: 'professional' | 'casual' | 'friendly';
    confirmationLevel: 'always' | 'sensitive' | 'never';
    autoExecuteWorkflows: boolean;
  };
  browser: {
    extensionEnabled: boolean;
    websocketPort: number;
    captureScreenshots: boolean;
  };
  privacy: {
    privacyMode: boolean;
    storeConversations: boolean;
    encryptStorage: boolean;
  };
}

export const DEFAULT_KATHARINE_CONFIG: KatharineConfig = {
  enabled: false,
  theme: {
    useVioletTheme: true,
    persistTheme: true,
  },
  assistant: {
    personality: 'friendly',
    confirmationLevel: 'sensitive',
    autoExecuteWorkflows: false,
  },
  browser: {
    extensionEnabled: false,
    websocketPort: 8765,
    captureScreenshots: false,
  },
  privacy: {
    privacyMode: true,
    storeConversations: true,
    encryptStorage: true,
  },
};

export function isKatharineEnabled(config: Partial<KatharineConfig>): boolean {
  return config.enabled === true;
}

export function getKatharineConfig(settings: any): KatharineConfig {
  const katharineSettings = settings?.katharine || {};
  
  return {
    enabled: katharineSettings.enabled ?? DEFAULT_KATHARINE_CONFIG.enabled,
    theme: {
      useVioletTheme: katharineSettings.theme?.useVioletTheme ?? DEFAULT_KATHARINE_CONFIG.theme.useVioletTheme,
      persistTheme: katharineSettings.theme?.persistTheme ?? DEFAULT_KATHARINE_CONFIG.theme.persistTheme,
    },
    assistant: {
      personality: katharineSettings.assistant?.personality ?? DEFAULT_KATHARINE_CONFIG.assistant.personality,
      confirmationLevel: katharineSettings.assistant?.confirmationLevel ?? DEFAULT_KATHARINE_CONFIG.assistant.confirmationLevel,
      autoExecuteWorkflows: katharineSettings.assistant?.autoExecuteWorkflows ?? DEFAULT_KATHARINE_CONFIG.assistant.autoExecuteWorkflows,
    },
    browser: {
      extensionEnabled: katharineSettings.browser?.extensionEnabled ?? DEFAULT_KATHARINE_CONFIG.browser.extensionEnabled,
      websocketPort: katharineSettings.browser?.websocketPort ?? DEFAULT_KATHARINE_CONFIG.browser.websocketPort,
      captureScreenshots: katharineSettings.browser?.captureScreenshots ?? DEFAULT_KATHARINE_CONFIG.browser.captureScreenshots,
    },
    privacy: {
      privacyMode: katharineSettings.privacy?.privacyMode ?? DEFAULT_KATHARINE_CONFIG.privacy.privacyMode,
      storeConversations: katharineSettings.privacy?.storeConversations ?? DEFAULT_KATHARINE_CONFIG.privacy.storeConversations,
      encryptStorage: katharineSettings.privacy?.encryptStorage ?? DEFAULT_KATHARINE_CONFIG.privacy.encryptStorage,
    },
  };
}