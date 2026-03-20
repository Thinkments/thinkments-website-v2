import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckSquare,
  Plus,
  Search,
  MoreVertical,
  Calendar,
  Clock,
  MessageSquare,
  Paperclip,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  priority: 'high' | 'medium' | 'low';
  assignee: string;
  dueDate: string;
  sourceAgent?: string;
}

const initialTasks: Task[] = [
  {
    id: 't-1',
    title: 'Update broken links on SEO service page',
    description: 'Found 3 broken external links pointing to dead domains.',
    status: 'todo',
    priority: 'medium',
    assignee: 'Content Team',
    dueDate: '2024-12-15',
    sourceAgent: 'Broken Link Finder'
  },
  {
    id: 't-2',
    title: 'Generate monthly performance report for Client X',
    description: 'Ensure all specific KPIs are highlighted as requested in the last meeting.',
    status: 'in-progress',
    priority: 'high',
    assignee: 'Reporting Liaison',
    dueDate: '2024-12-10'
  }
];

export default function TaskBoard() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [searchQuery, setSearchQuery] = useState('');

  // Listen for tasks injected by our Page Auditor or other agents
  useEffect(() => {
    const handleTaskLogged = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        const { id, title, description, priority, sourceAgent } = customEvent.detail;
        
        // Backwards compatibility with Page Auditor legacy payload
        const taskTitle = title || (id ? `Fix flagged content on ${id.includes('portfolio') ? 'Portfolio Page' : 'flagged page'}` : 'New Task');
        const taskDesc = description || (id ? 'This issue was automatically logged by the Page Auditor Agent.' : '');
        const taskAgent = sourceAgent || (id ? 'Page Auditor Agent' : 'System');
        
        const newTask: Task = {
          id: `t-${Date.now()}`,
          title: taskTitle,
          description: taskDesc,
          status: 'todo',
          priority: priority || 'high',
          assignee: 'Web Team',
          dueDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0], // +2 days
          sourceAgent: taskAgent
        };
        setTasks(prev => [newTask, ...prev]);
      }
    };
    
    window.addEventListener('task-logged', handleTaskLogged);
    return () => window.removeEventListener('task-logged', handleTaskLogged);
  }, []);

  const columns: { id: Task['status'], title: string }[] = [
    { id: 'todo', title: 'To Do' },
    { id: 'in-progress', title: 'In Progress' },
    { id: 'review', title: 'In Review' },
    { id: 'done', title: 'Done' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center">
              <CheckSquare className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-whitexl font-bold text-white">Task Board</h1>
          </div>
          <p className="text-slate-400">
            Manage projects and agent-reported tasks in a centralized team board.
          </p>
        </div>
        <div className="flex space-x-3">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input 
              placeholder="Search tasks..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
            <Plus className="w-4 h-4 mr-2" />
            New Task
          </Button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex gap-6 overflow-x-auto pb-6 h-[calc(100vh-200px)]">
        {columns.map(column => {
          const columnTasks = tasks.filter(t => t.status === column.id && t.title.toLowerCase().includes(searchQuery.toLowerCase()));
          return (
            <div key={column.id} className="w-80 flex-shrink-0 flex flex-col bg-white/5/50 rounded-xl p-4 border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-300 flex items-center">
                  {column.title}
                  <span className="ml-2 bg-[#0f172a]/40 backdrop-blur-xl text-slate-500 text-xs px-2 py-0.5 rounded-full shadow-lg border border-white/5 border border-white/10">
                    {columnTasks.length}
                  </span>
                </h3>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-400 hover:text-slate-400">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-3 scrollbar-hide">
                <AnimatePresence>
                  {columnTasks.map(task => (
                    <motion.div
                      key={task.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-[#0f172a]/40 backdrop-blur-xl rounded-lg p-4 shadow-lg border border-white/5 border border-white/10 cursor-grab hover:shadow-2xl border border-white/5 transition-all"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" className={`
                          ${task.priority === 'high' ? 'bg-rose-900/20 text-rose-300 border-red-200' : ''}
                          ${task.priority === 'medium' ? 'bg-orange-900/20 text-orange-700 border-orange-200' : ''}
                          ${task.priority === 'low' ? 'bg-emerald-900/20 text-green-700 border-green-200' : ''}
                        `}>
                          {task.priority}
                        </Badge>
                        {task.sourceAgent && (
                          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors border-none text-[10px]">
                            {task.sourceAgent}
                          </Badge>
                        )}
                      </div>
                      
                      <h4 className="font-medium text-gray-100 mb-1 leading-snug">{task.title}</h4>
                      <p className="text-xs text-slate-500 line-clamp-2 mb-3">{task.description}</p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-400 mt-auto pt-3 border-t border-white/5">
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center" title="Due Date">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(task.dueDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                          </span>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] text-white flex items-center justify-center font-medium shadow-lg border border-white/5" title={task.assignee}>
                          {task.assignee.charAt(0)}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {columnTasks.length === 0 && (
                  <div className="h-24 border-2 border-dashed border-white/10 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                    No tasks
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
