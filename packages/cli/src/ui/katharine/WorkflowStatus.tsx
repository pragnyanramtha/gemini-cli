import React from 'react';
import { WorkflowStatusProps } from './types';

export const WorkflowStatus: React.FC<WorkflowStatusProps> = ({
  workflowId,
  onStatusUpdate
}) => {
  return (
    <div className="workflow-status">
      {/* Placeholder for workflow status implementation */}
      <div>Workflow Status: {workflowId}</div>
    </div>
  );
};