import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Button } from '../../ui/button';
import { ArrowLeft, Clock, Search, Calendar as CalendarIcon, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Calendar } from '../../ui/calendar'; // assuming shadcn-ui calendar component is present

interface UpcomingPost {
  title: string;
  author: string;
  date: string;
  time: string;
}

export default function ContentCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [events, setEvents] = useState<UpcomingPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Here, we can fetch upcoming posts dynamically
  useEffect(() => {
    const fetchUpcoming = async () => {
      try {
        const res = await fetch('/api/admin-dashboard');
        const json = await res.json();
        if (json.success) {
          setEvents(json.data.upcomingPosts || []);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUpcoming();
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/admin"><ArrowLeft className="w-5 h-5" /></Link>
          </Button>
          <h1 className="text-3xl font-bold text-[#1E3A5F]">Content Calendar</h1>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline"><Filter className="w-4 h-4 mr-2" /> Filter</Button>
          <Button className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">Schedule Post</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Select Date</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border mx-auto"
              />
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Upcoming Scheduled Posts</CardTitle>
                <CardDescription>
                  {date ? `Viewing schedule for ${date.toDateString()}` : 'Select a date'}
                </CardDescription>
              </div>
              <CalendarIcon className="w-5 h-5 text-gray-400" />
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="py-8 text-center text-gray-500">Loading schedule...</div>
              ) : events.length > 0 ? (
                <div className="space-y-4">
                  {events.map((evt, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border rounded-lg bg-gray-50/50 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#00B4D8]/10 text-[#00B4D8] rounded-md">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#1E3A5F]">{evt.title}</h4>
                          <p className="text-sm text-gray-500">
                            Scheduled by {evt.author} for {evt.date} at {evt.time}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center text-gray-500 flex flex-col items-center">
                  <Search className="w-12 h-12 text-gray-300 mb-4" />
                  <p>No posts scheduled for this timeframe.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
