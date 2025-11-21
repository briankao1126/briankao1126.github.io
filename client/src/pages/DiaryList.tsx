import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";
import DiaryCard from "@/components/DiaryCard";

export default function DiaryList() {
  const [searchQuery, setSearchQuery] = useState("");

  const allDiaries = [
    {
      id: 1,
      title: "秋天的第一杯奶茶",
      date: "2025-11-07",
      preview: "今天天氣好冷，終於喝到了期待已久的秋天第一杯奶茶！溫暖的奶茶配上窗外的落葉，這個季節真的太美好了。",
      mood: "happy" as const,
    },
    {
      id: 2,
      title: "圖書館的安靜時光",
      date: "2025-11-06",
      preview: "在圖書館待了一整天，讀完了一本很棒的小說。安靜的環境讓我可以好好沉浸在故事裡，這種感覺真好。",
      mood: "calm" as const,
    },
    {
      id: 3,
      title: "和朋友的週末聚會",
      date: "2025-11-05",
      preview: "好久不見的朋友們終於聚在一起！我們去了新開的餐廳，聊了很多有趣的事情，笑到肚子痛。友情萬歲！",
      mood: "excited" as const,
    },
    {
      id: 4,
      title: "深夜的思考",
      date: "2025-11-04",
      preview: "夜深人靜的時候，總是會想很多事情。關於未來、關於夢想、關於自己想成為什麼樣的人。這些思考讓我更了解自己。",
      mood: "thoughtful" as const,
    },
    {
      id: 5,
      title: "早晨的陽光",
      date: "2025-11-03",
      preview: "早起看到窗外灑進來的陽光，心情一整天都很好。決定要養成早起的習慣，享受這份寧靜的美好。",
      mood: "happy" as const,
    },
    {
      id: 6,
      title: "雨天的音樂",
      date: "2025-11-02",
      preview: "下雨天最適合聽音樂了。躲在被窩裡，聽著窗外的雨聲和喜歡的歌曲，這種氛圍真的太療癒了。",
      mood: "calm" as const,
    },
  ];

  const filteredDiaries = allDiaries.filter(
    (diary) =>
      diary.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      diary.preview.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <h1 className="text-4xl font-bold text-foreground">我的日記</h1>
          <Link href="/new">
            <Button className="rounded-full gap-2" data-testid="button-new-diary">
              <Plus className="w-4 h-4" />
              寫新日記
            </Button>
          </Link>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="搜尋日記..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 rounded-full"
            data-testid="input-search-diary"
          />
        </div>

        {filteredDiaries.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">找不到符合的日記</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDiaries.map((diary) => (
              <DiaryCard key={diary.id} {...diary} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
