import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProfileSection from "@/components/ProfileSection";
import DiaryCard from "@/components/DiaryCard";

export default function Home() {
  const recentDiaries = [
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
  ];

  return (
    <div className="min-h-screen">
      <ProfileSection
        name="小美的生活日記"
        bio="嗨！我是一名熱愛生活的大學生，喜歡記錄每一天的美好瞬間。在這裡分享我的日常、想法和小確幸～"
        interests={["閱讀", "旅行", "美食", "攝影", "音樂"]}
      />

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">最近的日記</h2>
          <Link href="/diaries">
            <Button variant="outline" className="rounded-full gap-2" data-testid="button-view-all">
              查看全部
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentDiaries.map((diary) => (
            <DiaryCard key={diary.id} {...diary} />
          ))}
        </div>
      </section>
    </div>
  );
}
