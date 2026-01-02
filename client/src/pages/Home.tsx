import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProfileSection from "@/components/ProfileSection";
import DiaryCard from "@/components/DiaryCard";
import { diaries } from "@/data/diaries";

export default function Home() {
  const recentDiaries = diaries.slice(0, 3);

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
            <DiaryCard key={diary.id} diary={diary} />
          ))}
        </div>
      </section>
    </div>
  );
}
