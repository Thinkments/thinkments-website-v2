import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Tag } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ShareButton } from '../ShareButton';
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  BASE_URL,
  injectSchema,
} from '../../utils/seo';
import { usePageTracking } from '../../hooks/usePageTracking';
import { Breadcrumbs } from '../Breadcrumbs';
import { BlogContent } from '../BlogContent';
import { TableOfContents } from '../TableOfContents';
import { ReadingProgress } from '../ReadingProgress';
import SEO from '../SEO';
import { AuthorBox } from '../seo/AuthorBox';
import { blogPosts } from '../../data/blogPosts';

// Basic blog post data for immediate loading (minimal content to prevent timeouts)

// Get blog post data by slug
const getBlogPostBySlug = (slug: string) => {
  return blogPosts[slug as keyof typeof blogPosts] || null;
};

// Get related blog posts
const getRelatedPosts = (currentId: number, category: string, limit = 3) => {
  return Object.entries(blogPosts)
    .filter(([, post]) => post.id !== currentId && post.category === category)
    .slice(0, limit)
    .map(([slug, post]) => ({ ...post, slug }));
};

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  if (!slug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Blog Post Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const relatedPosts = getRelatedPosts(post.id, post.category);

  // Track page view
  usePageTracking(post.title);

  // Inject Article schema and Breadcrumb schema
  const articleSchema = generateArticleSchema({
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: post.author,
    url: `${BASE_URL}/blog/${slug}`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/blog` },
    { name: post.title, url: `${BASE_URL}/blog/${slug}` },
  ]);

  return (
    <>
      <SEO
        title={post.metaTitle || `${post.title} | ThinkMents Blog`}
        description={post.metaDescription || post.excerpt}
        url={`/blog/${slug}`}
        type="article"
        structuredData={[articleSchema, breadcrumbSchema]}
      />

      <ReadingProgress />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 pt-24 pb-4">
          <Breadcrumbs
            items={[
              { name: 'Blog', url: '/blog' },
              { name: post.title, url: `/blog/${slug}` },
            ]}
          />
        </div>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Badge className="mb-4 bg-gradient-to-r from-primary to-accent text-white">
                  {post.category.charAt(0).toUpperCase() + post.category.slice(1).replace('-', ' ')}
                </Badge>

                <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6">{post.title}</h1>

                <div className="flex items-center justify-center text-muted-foreground space-x-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{post.excerpt}</p>
              </motion.div>

              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-12">
                {/* Main Content */}
                <motion.article
                  className="flex-1"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <BlogContent content={post.content} />

                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t-2 border-dashed border-muted">
                    <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                      Topics Covered
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {post.tags.map((tag, index) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 border border-primary/20 rounded-full text-sm transition-all cursor-pointer"
                        >
                          <Tag className="w-3.5 h-3.5 text-primary" />
                          <span>{tag}</span>
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* E-E-A-T Author Box - Trust Signal */}
                  <AuthorBox
                    name="Corey Spicer"
                    title="Founder & CEO, ThinkMents"
                    bio="20+ years pioneering digital marketing innovation. Helped generate $500M+ in client value. Google Partner building solutions that don't exist yet."
                    avatar="/team/corey-spicer.jpg"
                    credentials={[
                      'Google Partner - 10+ Years',
                      '20+ Years Experience',
                      '$500M+ Value Generated',
                      'Industry Pioneer'
                    ]}
                    articleCount={45}
                    linkedinUrl="https://www.linkedin.com/in/coreyspicer"
                    email="corey@thinkments.com"
                    showFull={true}
                  />

                  {/* Share Section */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/10">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="flex-1">
                        <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">
                          Found this helpful?
                        </h3>
                        <p className="text-foreground">Share this article with your network</p>
                      </div>
                      <ShareButton
                        url={`/blog/${slug}`}
                        title={post.title}
                        description={post.excerpt}
                        size="default"
                        variant="default"
                      />
                    </div>
                  </div>
                </motion.article>

                {/* Sidebar */}
                <motion.aside
                  className="lg:w-80"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {/* Table of Contents */}
                  <div className="mb-8 hidden lg:block">
                    <TableOfContents content={post.content} />
                  </div>

                  {/* Author Info */}
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 mb-8 border border-primary/10 shadow-sm">
                    <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                      About the Author
                    </h3>
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-xl shadow-lg flex-shrink-0">
                        {post.author
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </div>
                      <div className="flex-1">
                        <p className="text-lg mb-1">{post.author}</p>
                        <p className="text-sm text-muted-foreground mb-3">
                          Digital Marketing Expert
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Helping businesses grow through strategic digital marketing and proven SEO
                          techniques.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Related Posts */}
                  {relatedPosts.length > 0 && (
                    <div className="bg-gradient-to-br from-muted/30 to-muted/50 rounded-xl p-6 border border-border/50 shadow-sm">
                      <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                        Continue Reading
                      </h3>
                      <div className="space-y-4">
                        {relatedPosts.map((relatedPost) => (
                          <Link
                            key={relatedPost.id}
                            to={`/blog/${relatedPost.slug}`}
                            className="block group"
                          >
                            <div className="flex space-x-3">
                              <ImageWithFallback
                                src={relatedPost.image}
                                alt={relatedPost.title}
                                className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                              />
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm group-hover:text-primary transition-colors line-clamp-2">
                                  {relatedPost.title}
                                </h4>
                                <p className="text-xs text-muted-foreground mt-1">
                                  {relatedPost.readTime}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.aside>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">
                Ready to Grow Your{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Business?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how we can help implement these strategies for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/get-a-quote">
                  <Button className="bg-gradient-to-r from-primary to-accent">
                    Get Free Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline">Contact Us</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
