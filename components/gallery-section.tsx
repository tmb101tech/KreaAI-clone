"use client"

import { Button } from '@/components/ui/button';
import { User, Settings } from 'lucide-react';

export default function GallerySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-medium">Gallery</h2>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground text-sm">
            <User className="w-4 h-4 sm:mr-1" />
            <span className="hidden sm:inline">User</span>
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground text-sm">
            <Settings className="w-4 h-4 sm:mr-1" />
            <span className="hidden sm:inline">Pricing</span>
          </Button>
        </div>
      </div>
      
      <div className="bg-muted/30 rounded-lg p-12 text-center">
        <p className="text-muted-foreground text-sm">Gallery content will be displayed here</p>
      </div>
    </section>
  );
}