import { Calendar, Heart, Smile, Cloud, Sun } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface DiaryCardProps {
  id: number;
  title: string;
  date: string;
  preview: string;
  mood?: "happy" | "calm" | "excited" | "thoughtful";
}

const moodIcons = {
  happy: Smile,
  calm: Cloud,
  excited: Sun,
  thoughtful: Heart,
};

const moodColors = {
  happy: "text-yellow-500",
  calm: "text-blue-400",
  excited: "text-orange-500",
  thoughtful: "text-pink-500",
};

export default function DiaryCard({ id, title, date, preview, mood = "happy" }: DiaryCardProps) {
  const MoodIcon = moodIcons[mood];

  return (
    <Card className="p-6 hover-elevate active-elevate-2 transition-all" data-testid={`card-diary-${id}`}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span data-testid={`text-diary-date-${id}`}>{date}</span>
        </div>
        <MoodIcon className={`w-5 h-5 ${moodColors[mood]}`} data-testid={`icon-mood-${id}`} />
      </div>

      <h3 className="text-xl font-bold mb-3 text-foreground" data-testid={`text-diary-title-${id}`}>
        {title}
      </h3>

      <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3" data-testid={`text-diary-preview-${id}`}>
        {preview}
      </p>

      <Link href={`/diary/${id}`}>
        <Button variant="outline" size="sm" className="rounded-full" data-testid={`button-read-more-${id}`}>
          閱讀更多
        </Button>
      </Link>
    </Card>
  );
}
