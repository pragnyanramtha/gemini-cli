import { Config, LoadedSettings } from '../../config/config';
import { WorkflowEngine } from '../../../core/src/katharine/workflow/WorkflowEngine';

export interface KatharineUIProps {
  config: Config;
  settings: LoadedSettings;
  workflowEngine: WorkflowEngine;
  assistantMode: boolean;
}

export interface AssistantMessage {
  id: string;
  type: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  workflowId?: string;
}

export interface WorkflowStatusProps {
  workflowId: string;
  onStatusUpdate?: (status: string) => void;
}

export interface TaskQueueProps {
  tasks: QueuedTask[];
  onTaskSelect?: (taskId: string) => void;
}

export interface QueuedTask {
  id: string;
  name: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  progress?: number;
  estimatedTime?: number;
}