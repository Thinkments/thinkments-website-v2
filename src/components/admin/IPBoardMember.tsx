import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Scale, ShieldAlert, FileText, Bookmark, Lightbulb, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function IPBoardMember() {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [innovations, setInnovations] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisResult, setAnalysisResult] = useState<{
        summary: string;
        patent: { recommended: boolean; reasoning: string };
        trademark: { recommended: boolean; reasoning: string };
        copyright: { recommended: boolean; reasoning: string };
    } | null>(null);

    const handleAnalyze = () => {
        if (!productName.trim() || !description.trim()) {
            toast.error('Please enter a product name and description.');
            return;
        }

        setIsAnalyzing(true);

        // Simulate AI IP analysis
        setTimeout(() => {
            const hasTech = innovations.toLowerCase().includes('algorithm') || innovations.toLowerCase().includes('hardware') || innovations.toLowerCase().includes('process');
            
            setAnalysisResult({
                summary: `Based on the provided details for "${productName}", here is the preliminary Intellectual Property protection strategy.`,
                patent: {
                    recommended: hasTech,
                    reasoning: hasTech ? 'The described core innovations include technical processes or hardware modifications that may qualify for a utility patent.' : 'No novel technical processes or hardware inventions were clearly identified in the brief. A utility patent is likely unnecessary at this stage.',
                },
                trademark: {
                    recommended: true,
                    reasoning: `The name "${productName}" and associated branding should be protected via trademark to prevent marketplace confusion and secure brand identity.`,
                },
                copyright: {
                    recommended: true,
                    reasoning: 'Any original source code, marketing copy, visual designs, or written content produced for this project are automatically protected by copyright, but formal registration affords additional statutory damages.',
                }
            });
            setIsAnalyzing(false);
            toast.success('IP analysis complete!');
        }, 2500);
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
                    <Scale className="text-blue-500 w-8 h-8" />
                    IP Board Member
                </h2>
                <p className="text-muted-foreground">
                    An AI legal advisor specializing in patent, trademark, and copyright law.
                    Submit your concepts to determine if intellectual property protections are necessary.
                </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-6">
                {/* Input Section */}
                <div className="lg:col-span-4 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <FileText className="h-5 w-5 text-blue-500" />
                                Disclosure Brief
                            </CardTitle>
                            <CardDescription>Detail your product or idea</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <Label htmlFor="productName">Product / Brand Name *</Label>
                                <Input
                                    id="productName"
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                    placeholder="e.g., Quantum Analytics Engine"
                                    className="mt-1"
                                />
                            </div>

                            <div>
                                <Label htmlFor="description">General Description *</Label>
                                <Textarea
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Describe what the product does and who it's for."
                                    className="mt-1"
                                    rows={4}
                                />
                            </div>

                            <div>
                                <Label htmlFor="innovations">Core Innovations & Tech</Label>
                                <Textarea
                                    id="innovations"
                                    value={innovations}
                                    onChange={(e) => setInnovations(e.target.value)}
                                    placeholder="Detail any unique algorithms, hardware, or specific novel processes."
                                    className="mt-1"
                                    rows={3}
                                />
                            </div>

                            <Button
                                onClick={handleAnalyze}
                                disabled={isAnalyzing}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                                size="lg"
                            >
                                {isAnalyzing ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Reviewing Prior Art...
                                    </>
                                ) : (
                                    <>
                                        <ShieldAlert className="mr-2 h-4 w-4" />
                                        Run IP Analysis
                                    </>
                                )}
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Output Section */}
                <div className="lg:col-span-8 space-y-6">
                    {analysisResult ? (
                        <Card className="h-full border-blue-200 shadow-xl overflow-hidden">
                            <CardHeader className="bg-slate-50 border-b border-gray-100 py-4">
                                <div className="flex items-center gap-2">
                                    <Scale className="h-5 w-5 text-blue-600" />
                                    <CardTitle>Counsel's Recommendation</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6 space-y-6">
                                <p className="text-gray-700 text-lg font-medium border-l-4 border-blue-500 pl-4 py-1">
                                    {analysisResult.summary}
                                </p>

                                <div className="grid gap-4 mt-6">
                                    {/* Patents */}
                                    <div className={`p-4 rounded-lg border ${analysisResult.patent.recommended ? 'bg-amber-50 border-amber-200' : 'bg-gray-50 border-gray-200'}`}>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Lightbulb className={`h-5 w-5 ${analysisResult.patent.recommended ? 'text-amber-600' : 'text-gray-400'}`} />
                                            <h3 className="font-bold text-lg">Patents</h3>
                                            {analysisResult.patent.recommended ? (
                                                <span className="ml-auto text-xs font-bold px-2 py-1 bg-amber-100 text-amber-800 rounded-full">Recommended</span>
                                            ) : (
                                                <span className="ml-auto text-xs font-bold px-2 py-1 bg-gray-200 text-gray-600 rounded-full">Not Advised</span>
                                            )}
                                        </div>
                                        <p className="text-gray-700 text-sm">{analysisResult.patent.reasoning}</p>
                                    </div>

                                    {/* Trademarks */}
                                    <div className="p-4 rounded-lg border bg-blue-50 border-blue-200">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Bookmark className="h-5 w-5 text-blue-600" />
                                            <h3 className="font-bold text-lg">Trademarks</h3>
                                            <span className="ml-auto text-xs font-bold px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Recommended</span>
                                        </div>
                                        <p className="text-gray-700 text-sm">{analysisResult.trademark.reasoning}</p>
                                    </div>

                                    {/* Copyright */}
                                    <div className="p-4 rounded-lg border bg-emerald-50 border-emerald-200">
                                        <div className="flex items-center gap-2 mb-2">
                                            <FileText className="h-5 w-5 text-emerald-600" />
                                            <h3 className="font-bold text-lg">Copyright</h3>
                                            <span className="ml-auto text-xs font-bold px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full">Implicitly Protected</span>
                                        </div>
                                        <p className="text-gray-700 text-sm">{analysisResult.copyright.reasoning}</p>
                                    </div>
                                </div>
                                
                                <div className="mt-8 pt-6 border-t border-gray-100 text-xs text-gray-400">
                                    *Disclaimer: This is AI-generated preliminary advice and does not constitute formal legal counsel. Always consult a certified IP attorney before filing.
                                </div>
                            </CardContent>
                        </Card>
                    ) : (
                        <Card className="h-full border-dashed border-2 flex items-center justify-center min-h-[500px] bg-gray-50/50">
                            <CardContent className="flex flex-col items-center justify-center text-center p-8">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                                    <Scale className="h-10 w-10 text-blue-500" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Awaiting Disclosure</h3>
                                <p className="text-muted-foreground max-w-sm mb-6">
                                    Provide the details of your concept on the left. The IP Board Member will analyze the scope of possible patent, trademark, and copyright protections.
                                </p>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}
