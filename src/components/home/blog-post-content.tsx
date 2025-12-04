'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Markdown } from '@/components/ui/markdown';

interface BlogPostContentProps {
  post: {
    id: number;
    title: string;
    description: string;
    date: string;
    readTime: string;
    category: string;
    slug: string;
    content: string;
    author?: string;
    image?: string;
  };
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <>
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <Button variant="ghost" asChild>
          <Link href="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Terug naar Blog
          </Link>
        </Button>
      </motion.div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="mb-4">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {post.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          {post.description}
        </p>
        {post.image && (
          <div className="mb-6 rounded-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
          {post.author && (
            <div>
              <span>Door {post.author}</span>
            </div>
          )}
        </div>
      </motion.header>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card>
          <CardContent className="pt-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <Markdown>{post.content}</Markdown>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Share Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8"
      >
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-2">Vond je dit artikel nuttig?</h3>
                <p className="text-sm text-muted-foreground">
                  Deel het met anderen die het ook interessant zouden vinden
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    if (typeof window !== 'undefined' && navigator.share) {
                      navigator.share({
                        title: post.title,
                        text: post.description,
                        url: window.location.href,
                      });
                    }
                  }}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Delen
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}

