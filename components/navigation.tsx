"use client"

import { Search, Home, Image, Video, Zap, Wand2, Palette, FileText, ChevronDown, GalleryVertical, HelpCircle, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export default function Navigation() {
  return (
    <nav className="border-b border-border/40 backdrop-blur-lg bg-background/95 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Left - Logo and Email */}
          <div className="flex items-center space-x-4">
            <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full"></div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground hidden sm:flex">
              <span>mosesbakare48@gmail.com</span>
              <ChevronDown className="w-4 h-4 text-muted-foreground ml-1" />
            </div>
          </div>

          {/* Center - Tools Container */}
          <div className="flex items-center bg-gray-200 dark:bg-muted/50 rounded-lg p-1 hidden md:flex">
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0 rounded-md bg-white text-black">
              <Home className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0 rounded-md text-gray-700 dark:text-muted-foreground hover:bg-white/50">
              <Image className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0 rounded-md text-gray-700 dark:text-muted-foreground hover:bg-white/50">
              <Video className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0 rounded-md text-gray-700 dark:text-muted-foreground hover:bg-white/50">
              <Zap className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0 rounded-md text-gray-700 dark:text-muted-foreground hover:bg-white/50">
              <Wand2 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0 rounded-md text-gray-700 dark:text-muted-foreground hover:bg-white/50">
              <Palette className="w-4 h-4" />
            </Button>
          </div>

          {/* Right - User Actions Container */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-gray-200 dark:bg-muted/50 rounded-lg p-1 hidden sm:flex">
              <Button variant="ghost" size="sm" className="h-7 px-2 text-xs text-muted-foreground">
                <Image className="w-3 h-3 mr-1" />
                Gallery
              </Button>
            </div>
            <div className="flex items-center bg-gray-200 dark:bg-muted/50 rounded-lg p-1 hidden sm:flex">
              <Button variant="ghost" size="sm" className="h-7 px-2 text-xs text-muted-foreground">
                <HelpCircle className="w-3 h-3 mr-1" />
                Support
              </Button>
            </div>
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0 hidden sm:flex">
              <Bell className="w-4 h-4" />
            </Button>
            <ThemeToggle />
            <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}