import React from 'react';
import { KatharineUIProps } from './types';

export const KatharineApp: React.FC<KatharineUIProps> = ({
  config,
  settings,
  workflowEngine,
  assistantMode
}) => {
  return (
    <div className="katharine-app">
      {/* Placeholder for Katharine UI implementation */}
      <div>Katharine Assistant Interface</div>
    </div>
  );
};