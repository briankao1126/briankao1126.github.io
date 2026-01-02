import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, ArrowLeft } from "lucide-react";
import { diaries } from "@/data/diaries";
import MarkdownContent from "@/components/MarkdownContent";

export default function DiaryDetail() {
  const [, params] = useRoute("/diary/:slug");
  const diary = diaries.find((d) => d.slug === params?.slug);

  if (!diary) {
    return (
      <div className="min-h-screen">
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">日記未找到</h1>
            <Link href="/diaries">
              <Button>返回日記列表</Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }


  return (
    <div className="min-h-screen">
      <section className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/diaries">
          <Button variant="ghost" className="mb-6 gap-2 rounded-full" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
            返回
          </Button>
        </Link>

        <Card className="p-8">
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <Calendar className="w-4 h-4" />
            <span data-testid="text-diary-date">{diary.date}</span>
          </div>

          <h1 className="text-4xl font-bold mb-6 text-foreground" data-testid="text-diary-title">
            {diary.title}
          </h1>

          <div className="mb-8" data-testid="text-diary-content">
            <MarkdownContent content={diary.content} />
          </div>

        </Card>
      </section>
    </div>
  );
}
