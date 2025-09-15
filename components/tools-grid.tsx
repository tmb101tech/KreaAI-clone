"use client"

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Image, 
  Video, 
  Zap,
  Wand2,
  Palette,
  FileText,
  ArrowRight,
  ChevronDown
} from 'lucide-react';

const tools = [
  {
    name: "Image",
    description: "AI tools to bring ideas to visual content from text descriptions",
    icon: Image,
    badge: "Open",
    badgeColor: "bg-muted text-muted-foreground border-border",
    iconBg: "bg-gradient-to-br from-yellow-400 to-orange-500"
  },
  {
    name: "Video",
    description: "Generate videos with text, Flux, and many",
    icon: Video,
    badge: "Open",
    badgeColor: "bg-muted text-muted-foreground border-border",
    iconBg: "bg-gradient-to-br from-blue-500 to-purple-600"
  },
  {
    name: "Realtime",
    description: "Real-time AI matching as a serverless",
    icon: Zap,
    badge: "Open",
    badgeColor: "bg-muted text-muted-foreground border-border",
    iconBg: "bg-gradient-to-br from-green-400 to-blue-500"
  },
  {
    name: "Enhancer",
    description: "Upscale and enhance images and video files",
    icon: Wand2,
    badge: "Open",
    badgeColor: "bg-muted text-muted-foreground border-border",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500"
  },
  {
    name: "Edit",
    description: "Edit your image with AI guided photo and generation",
    icon: Palette,
    badge: "Open",
    badgeColor: "bg-muted text-muted-foreground border-border",
    iconBg: "bg-gradient-to-br from-red-400 to-pink-500"
  },
  {
    name: "Video Upscaler",
    description: "AI tools to bring video to ultra quality",
    icon: Video,
    badge: "Open",
    badgeColor: "bg-muted text-muted-foreground border-border",
    iconBg: "bg-gradient-to-br from-indigo-500 to-purple-600"
  },
  {
    name: "Motion Transfer",
    description: "Copy motion from videos to render animations",
    icon: Video,
    badge: "Open",
    badgeColor: "bg-muted text-muted-foreground border-border",
    iconBg: "bg-gradient-to-br from-teal-400 to-blue-500"
  },
  {
    name: "Train",
    description: "Train personalize your own style, products or characters",
    icon: FileText,
    badge: "Open",
    badgeColor: "bg-muted text-muted-foreground border-border",
    iconBg: "bg-gradient-to-br from-gray-600 to-gray-800"
  }
];

export default function ToolsGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium">Generate</h2>
        <Button variant="link" className="text-blue-400 hover:text-blue-300 text-sm p-0 flex items-center">
          Show all
          <ChevronDown className="w-3 h-3 ml-1" />
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {tools.map((tool, index) => (
          <Card key={index} className="group cursor-pointer border-border/50 hover:border-border transition-all duration-200 bg-card/50 h-20 sm:h-24">
            <CardContent className="p-3 sm:p-4 h-full flex flex-col justify-between">
              <div className="flex items-start justify-between mb-1 sm:mb-2">
                <div className="flex items-center space-x-2">
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg ${tool.iconBg} flex items-center justify-center shadow-sm`}>
                    <tool.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="font-medium text-xs sm:text-sm">{tool.name}</span>
                </div>
                <Badge className={`text-xs px-1.5 py-0.5 ${tool.badgeColor}`}>
                  {tool.badge}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground leading-tight line-clamp-2 hidden sm:block">
                {tool.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}