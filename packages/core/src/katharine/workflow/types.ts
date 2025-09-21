export interface WorkflowDefinition {
  id: string;
  name: string;
  description: string;
  steps: WorkflowStep[];
  dependencies: string[];
}

export interface WorkflowStep {
  id: string;
  name: string;
  action: string;
  parameters: Record<string, unknown>;
  retryPolicy?: RetryPolicy;
  confirmationRequired?: boolean;
}

export interface RetryPolicy {
  maxAttempts: number;
  backoffStrategy: 'linear' | 'exponential';
  baseDelay: number;
  maxDelay: number;
}

export interface WorkflowResult {
  workflowId: string;
  status: 'completed' | 'failed' | 'cancelled';
  results: StepResult[];
  error?: string;
  executionTime: number;
}

export interface StepResult {
  stepId: string;
  status: 'pending' | 'running' | 'completed' | 'failed' | 'skipped';
  output?: unknown;
  error?: string;
  executedAt?: Date;
}

export interface WorkflowExecution {
  id: string;
  workflowId: string;
  status: 'pending' | 'running' | 'paused' | 'completed' | 'failed';
  currentStep: number;
  results: StepResult[];
  startedAt: Date;
  completedAt?: Date;
  error?: string;
}

export type WorkflowStatus = 'pending' | 'running' | 'paused' | 'completed' | 'failed' | 'cancelled';