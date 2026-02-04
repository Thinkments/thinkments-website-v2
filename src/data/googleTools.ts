export interface GoogleTool {
    name: string;
    url: string;
    description: string;
    isLab?: boolean;
}

export interface ToolCategory {
    category: string;
    tools: GoogleTool[];
}

export const googleToolsData: ToolCategory[] = [
    {
        category: "Small Business",
        tools: [
            {
                name: "Google Business Profile",
                url: "https://www.google.com/business/",
                description: "Manage how your business appears on Search and Maps."
            },
            {
                name: "Google for Retail",
                url: "https://www.google.com/retail/",
                description: "Free listings for your local and online inventory."
            },
            {
                name: "Google Trends",
                url: "https://trends.google.com/",
                description: "Real-time search data to track industry shifts."
            },
            {
                name: "Market Finder",
                url: "https://marketfinder.thinkwithgoogle.com/",
                description: "Identify new global markets for your products."
            },
            {
                name: "Google Wallet API",
                url: "https://developers.google.com/wallet",
                description: "Create digital loyalty cards and customer tickets."
            }
        ]
    },
    {
        category: "Teachers & Educators",
        tools: [
            {
                name: "Google Classroom",
                url: "https://classroom.google.com/",
                description: "Central hub for assignments and student communication."
            },
            {
                name: "NotebookLM",
                url: "https://notebooklm.google.com/",
                description: "AI-powered study guides from your curriculum docs."
            },
            {
                name: "Google Vids",
                url: "https://workspace.google.com/products/vids/",
                description: "AI video creation for lesson plans."
            },
            {
                name: "Teachable Machine",
                url: "https://teachablemachine.withgoogle.com/",
                description: "No-code AI model training for science projects."
            },
            {
                name: "Applied Digital Skills",
                url: "https://applieddigitalskills.withgoogle.com/",
                description: "Video-based lessons for practical tech skills."
            }
        ]
    },
    {
        category: "Non-Profits",
        tools: [
            {
                name: "Google Ads Grants",
                url: "https://www.google.com/grants/",
                description: "$10k/mo in free search ads for eligible nonprofits."
            },
            {
                name: "Data Commons",
                url: "https://datacommons.org/",
                description: "A massive graph of public data for research and impact reports."
            },
            {
                name: "YouTube Giving",
                url: "https://www.youtube.com/nonprofits/",
                description: "Tools for storytelling and fundraising on YouTube."
            },
            {
                name: "Project Sunroof",
                url: "https://sunroof.withgoogle.com/",
                description: "Solar potential mapping for environmental advocacy."
            },
            {
                name: "Earth Outreach",
                url: "https://www.google.com/earth/outreach/",
                description: "Mapping tools for social and environmental causes."
            }
        ]
    },
    {
        category: "Veterans & Job Seekers",
        tools: [
            {
                name: "Grow with Google: Vets",
                url: "https://grow.google/vets/",
                description: "Job search using Military Occupation Codes."
            },
            {
                name: "Interview Warmup",
                url: "https://grow.google/certificates/interview-warmup/",
                description: "Practice interviews with an AI coach."
            },
            {
                name: "Career Certificates",
                url: "https://grow.google/certificates/",
                description: "Professional training in high-growth fields."
            },
            {
                name: "Google SkillsGraph",
                url: "https://cloud.google.com/blog/products/ai-machine-learning/google-cloud-skills-graph",
                description: "Mapping military skills to civilian career paths."
            },
            {
                name: "Google Meet",
                url: "https://meet.google.com/",
                description: "Free high-quality video for networking and interviews."
            }
        ]
    },
    {
        category: "The Lab",
        tools: [
            {
                name: "Google AI Studio",
                url: "https://aistudio.google.com/",
                description: "Prototype your own AI agents and tools.",
                isLab: true
            },
            {
                name: "My Maps",
                url: "https://www.google.com/maps/about/mymaps/",
                description: "Custom, multi-layered map builder (Experimental).",
                isLab: true
            },
            {
                name: "Project Astra",
                url: "https://deepmind.google/technologies/gemini/astra/",
                description: "Universal visual AI assistant agent.",
                isLab: true
            },
            {
                name: "Magika",
                url: "https://opensource.google/projects/magika",
                description: "AI-powered file identification system.",
                isLab: true
            },
            {
                name: "Google Open Source",
                url: "https://opensource.google/",
                description: "Directory of Google's public and abandoned projects.",
                isLab: true
            }
        ]
    }
];
