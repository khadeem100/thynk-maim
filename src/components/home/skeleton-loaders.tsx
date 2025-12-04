'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export function BlogPostSkeleton() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <Skeleton className="h-4 w-20 mb-2" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-4 w-3/4" />
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-2/3" />
        </div>
        <div className="flex items-center gap-4 mt-4">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-3 w-20" />
        </div>
        <Skeleton className="h-10 w-full mt-4" />
      </CardContent>
    </Card>
  );
}

export function ServiceCardSkeleton() {
  return (
    <Card className="h-full">
      <CardHeader>
        <Skeleton className="h-12 w-12 rounded-lg mb-4" />
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-2/3" />
        </div>
      </CardContent>
    </Card>
  );
}

export function PricingCardSkeleton() {
  return (
    <Card className="h-full">
      <CardHeader>
        <Skeleton className="h-6 w-1/2 mb-2" />
        <Skeleton className="h-8 w-1/3 mb-4" />
        <Skeleton className="h-4 w-full" />
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <Skeleton className="h-4 w-4 rounded" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ))}
        </div>
        <Skeleton className="h-10 w-full mt-6" />
      </CardContent>
    </Card>
  );
}

