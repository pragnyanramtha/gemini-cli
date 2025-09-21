import React from 'react';
import { TaskQueueProps } from './types';

export const TaskQueue: React.FC<TaskQueueProps> = ({
  tasks,
  onTaskSelect
}) => {
  return (
    <div className="task-queue">
      {/* Placeholder for task queue implementation */}
      <div>Task Queue ({tasks.length} tasks)</div>
    </div>
  );
};