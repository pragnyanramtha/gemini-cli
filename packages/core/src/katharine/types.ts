export interface AssistantResponse {
  message: string;
  actions?: WorkflowAction[];
  requiresConfirmation?: boolean;
}

export interface WorkflowAction {
  type: string;
  parameters: Record<string, unknown>;
  description: string;
}

export interface BrowserContext {
  url: string;
  title: string;
  elements: InteractiveElement[];
  forms: FormElement[];
  navigation: NavigationElement[];
}

export interface InteractiveElement {
  id: string;
  type: 'button' | 'link' | 'input' | 'select' | 'textarea';
  selector: string;
  text: string;
  attributes: Record<string, string>;
  position: { x: number; y: number };
  visible: boolean;
}

export interface FormElement {
  selector: string;
  type: string;
  name: string;
  value: string;
  required: boolean;
  placeholder?: string;
}

export interface NavigationElement {
  type: 'link' | 'button';
  text: string;
  href?: string;
  selector: string;
}

export interface Conversation {
  id: string;
  userId: string;
  messages: AssistantMessage[];
  context: ConversationContext;
  createdAt: Date;
  updatedAt: Date;
}

export interface AssistantMessage {
  id: string;
  type: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  workflowId?: string;
}

export interface ConversationContext {
  currentWorkflow?: string;
  browserContext?: BrowserContext;
  userPreferences: UserPreferences;
  sessionMemory: Record<string, unknown>;
}

export interface UserPreferences {
  assistantPersonality: 'professional' | 'casual' | 'friendly';
  confirmationLevel: 'always' | 'sensitive' | 'never';
  privacyMode: boolean;
  autoExecuteWorkflows: boolean;
}