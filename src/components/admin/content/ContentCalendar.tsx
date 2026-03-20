import React, { useEffect, useState } from 'react';
import { ArrowLeft, Calendar as CalendarIcon, Loader2, Plus, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/button';

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  type: string;
  status: 'published' | 'scheduled' | 'draft';
}

export default function ContentCalendar() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCalendar = async () => {
      try {
        const res = await fetch('/api/get-calendar');
        const data = await res.json();
        if (data.success) {
          setEvents(data.events || []);
        }
      } catch (err) {
        console.error('Failed to load calendar events', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCalendar();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link to="/admin">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <CalendarIcon className="w-8 h-8 text-[#00B4D8]" /> 
            Content Calendar
          </h1>
        </div>
        <Link to="/admin/blog/new">
          <Button className="bg-[#00B4D8] hover:bg-[#0096B4]">
            <Plus className="w-4 h-4 mr-2" /> New Entry
          </Button>
        </Link>
      </div>

      <div className="bg-[#1A1F2E] rounded-xl border border-white/10 overflow-hidden">
        {loading ? (
          <div className="p-12 flex justify-center items-center">
            <Loader2 className="w-8 h-8 text-[#00B4D8] animate-spin" />
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black/40 border-b border-white/10">
                <th className="p-4 text-white/70 font-medium">Date</th>
                <th className="p-4 text-white/70 font-medium">Title</th>
                <th className="p-4 text-white/70 font-medium">Type</th>
                <th className="p-4 text-white/70 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {events.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-white/50">
                    No scheduled content.
                  </td>
                </tr>
              ) : (
                events.map((evt) => (
                  <tr key={evt.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-4 text-white whitespace-nowrap">{evt.date}</td>
                    <td className="p-4 font-medium text-white">{evt.title}</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-white/10 text-white/70 rounded text-xs uppercase tracking-wider">
                        {evt.type}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                        evt.status === 'published' 
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {evt.status === 'published' ? <CheckCircle className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
                        {evt.status}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
