import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

const getDashboardData = () => {
  return {
    stats: [
      {
        title: 'Total Blogs Published',
        value: 247,
        change: '+12%',
        trend: 'up',
        iconName: 'FileText',
        color: 'bg-[#1E3A5F]',
      },
      {
        title: 'Pages Created This Month',
        value: 34,
        change: '+8%',
        trend: 'up',
        iconName: 'Layers',
        color: 'bg-[#00B4D8]',
      },
      {
        title: 'Pending Reviews',
        value: 8,
        change: '-3',
        trend: 'down',
        iconName: 'Clock',
        color: 'bg-[#FF6B35]',
      },
      {
        title: 'SEO Score Average',
        value: '87/100',
        change: '+5%',
        trend: 'up',
        iconName: 'TrendingUp',
        color: 'bg-[#00B4D8]',
      },
    ],
    recentActivity: [
      {
        type: 'blog',
        title: 'How to Improve Local SEO in 2025',
        author: 'Corey Rumble',
        action: 'Published',
        time: '2 hours ago',
        status: 'success',
      },
      {
        type: 'page',
        title: 'Digital Marketing Denton - Service Page',
        author: 'System Admin',
        action: 'Created',
        time: '4 hours ago',
        status: 'success',
      },
      {
        type: 'blog',
        title: 'Social Media Marketing Guide',
        author: 'Content Team',
        action: 'Pending Review',
        time: '6 hours ago',
        status: 'pending',
      },
      {
        type: 'page',
        title: 'About Us - Company Overview',
        author: 'Corey Rumble',
        action: 'Updated',
        time: '1 day ago',
        status: 'success',
      },
      {
        type: 'blog',
        title: 'Email Marketing Best Practices',
        author: 'System Admin',
        action: 'Draft Saved',
        time: '2 days ago',
        status: 'draft',
      },
    ],
    upcomingPosts: [
      {
        title: 'Video Marketing Trends 2025',
        date: 'Dec 8, 2025',
        time: '10:00 AM',
        author: 'Content Team',
      },
      {
        title: 'Google Ads Optimization Tips',
        date: 'Dec 10, 2025',
        time: '2:00 PM',
        author: 'System Admin',
      },
      {
        title: 'Content Marketing Strategy',
        date: 'Dec 12, 2025',
        time: '9:00 AM',
        author: 'Corey Rumble',
      },
    ],
    performanceData: [
      { date: 'Nov 5', views: 4200, engagement: 3400 },
      { date: 'Nov 10', views: 4800, engagement: 3900 },
      { date: 'Nov 15', views: 5200, engagement: 4200 },
      { date: 'Nov 20', views: 4600, engagement: 3800 },
      { date: 'Nov 25', views: 5500, engagement: 4500 },
      { date: 'Nov 30', views: 6200, engagement: 5100 },
      { date: 'Dec 5', views: 6800, engagement: 5600 },
    ],
  };
};

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle OPTIONS request for CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // In production, fetch this data from Supabase or Postgres
    const dashboardData = getDashboardData();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        data: dashboardData,
      }),
    };
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Failed to fetch dashboard data',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
    };
  }
};

export { handler };
