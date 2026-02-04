import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
    Mail,
    Linkedin,
    Award,
    Star,
    TrendingUp,
    Users,
    Globe,
    Briefcase,
    GraduationCap,
    Target,
} from 'lucide-react';

interface AuthorBoxProps {
    name: string;
    title: string;
    bio: string;
    avatar?: string;
    credentials: string[];
    articleCount?: number;
    linkedinUrl?: string;
    email?: string;
    showFull?: boolean;
}

/**
 * AuthorBox Component - E-E-A-T Optimization
 * Displays author credentials, expertise, and contact info
 * Use at bottom of blog posts and articles for trust signals
 */
export const AuthorBox: React.FC<AuthorBoxProps> = ({
    name,
    title,
    bio,
    avatar = '/team/default-avatar.jpg',
    credentials,
    articleCount,
    linkedinUrl,
    email,
    showFull = false,
}) => {
    return (
        <Card className="border-l-4 border-l-[#00B4D8] my-8">
            <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Author Photo */}
                    <div className="flex-shrink-0">
                        <img
                            src={avatar}
                            alt={name}
                            className="w-24 h-24 rounded-full object-cover border-4 border-[#00B4D8]/20"
                        />
                    </div>

                    {/* Author Info */}
                    <div className="flex-1">
                        <div className="mb-3">
                            <h3 className="text-2xl font-bold text-[#1E3A5F] mb-1">{name}</h3>
                            <p className="text-[#00B4D8] font-semibold">{title}</p>
                        </div>

                        <p className="text-gray-700 mb-4 leading-relaxed">{bio}</p>

                        {/* Credentials Badges */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {credentials.map((credential, index) => (
                                <Badge
                                    key={index}
                                    variant="outline"
                                    className="bg-[#00B4D8]/10 border-[#00B4D8] text-[#1E3A5F] text-xs"
                                >
                                    <Award className="w-3 h-3 mr-1" />
                                    {credential}
                                </Badge>
                            ))}
                        </div>

                        {/* Stats & Links */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                            {articleCount && (
                                <div className="flex items-center gap-1">
                                    <Briefcase className="w-4 h-4" />
                                    <span>{articleCount} articles published</span>
                                </div>
                            )}

                            {linkedinUrl && (
                                <a
                                    href={linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 hover:text-[#00B4D8] transition-colors"
                                >
                                    <Linkedin className="w-4 h-4" />
                                    <span>Connect on LinkedIn</span>
                                </a>
                            )}

                            {email && (
                                <a
                                    href={`mailto:${email}`}
                                    className="flex items-center gap-1 hover:text-[#00B4D8] transition-colors"
                                >
                                    <Mail className="w-4 h-4" />
                                    <span>Email</span>
                                </a>
                            )}

                            {showFull && (
                                <Link
                                    to="/team/corey-spicer"
                                    className="flex items-center gap-1 text-[#00B4D8] hover:underline font-semibold"
                                >
                                    View Full Bio →
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default AuthorBox;
