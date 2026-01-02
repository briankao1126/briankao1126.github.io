import { Calendar, Heart, Smile, Cloud, Sun } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import type { Diary } from "@/types/diary";

interface DiaryCardProps {
  diary: Diary;
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

export default function DiaryCard({ diary }: DiaryCardProps) {
  const mood = diary.mood || "happy";
  const MoodIcon = moodIcons[mood];

  return (
    <Card className="p-6 hover-elevate active-elevate-2 transition-all" data-testid={`card-diary-${diary.id}`}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span data-testid={`text-diary-date-${diary.id}`}>{diary.date}</span>
        </div>
        <MoodIcon className={`w-5 h-5 ${moodColors[mood]}`} data-testid={`icon-mood-${diary.id}`} />
      </div>

      <h3 className="text-xl font-bold mb-3 text-foreground" data-testid={`text-diary-title-${diary.id}`}>
        {diary.title}
      </h3>

      <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3" data-testid={`text-diary-preview-${diary.id}`}>
        {diary.excerpt}
      </p>

      <Link href={`/diary/${diary.slug}`}>
        <Button variant="outline" size="sm" className="rounded-full" data-testid={`button-read-more-${diary.id}`}>
          閱讀更多
        </Button>
      </Link>
    </Card>
  );
}
