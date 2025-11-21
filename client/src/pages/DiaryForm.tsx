import { useState } from "react";
import { useRoute, useLocation, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Save, Smile, Cloud, Sun, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Mood = "happy" | "calm" | "excited" | "thoughtful";

export default function DiaryForm() {
  const [, params] = useRoute("/edit/:id");
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const isEditing = !!params?.id;

  const [title, setTitle] = useState(isEditing ? "秋天的第一杯奶茶" : "");
  const [date, setDate] = useState(isEditing ? "2025-11-07" : new Date().toISOString().split('T')[0]);
  const [content, setContent] = useState(
    isEditing
      ? "今天天氣好冷，終於喝到了期待已久的秋天第一杯奶茶！溫暖的奶茶配上窗外的落葉，這個季節真的太美好了。"
      : ""
  );
  const [mood, setMood] = useState<Mood>("happy");

  const moods: { value: Mood; icon: typeof Smile; label: string; color: string }[] = [
    { value: "happy", icon: Smile, label: "開心", color: "text-yellow-500" },
    { value: "calm", icon: Cloud, label: "平靜", color: "text-blue-400" },
    { value: "excited", icon: Sun, label: "興奮", color: "text-orange-500" },
    { value: "thoughtful", icon: Heart, label: "感性", color: "text-pink-500" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      toast({
        variant: "destructive",
        title: "請填寫完整",
        description: "標題和內容都是必填的哦！",
      });
      return;
    }

    console.log("Saving diary:", { title, date, content, mood });
    
    toast({
      title: isEditing ? "日記已更新" : "日記已儲存",
      description: "你的日記已經成功保存了！",
    });

    setTimeout(() => {
      setLocation("/diaries");
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <section className="max-w-4xl mx-auto px-4 py-8">
        <Link href={isEditing ? `/diary/${params.id}` : "/diaries"}>
          <Button variant="ghost" className="mb-6 gap-2 rounded-full" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
            返回
          </Button>
        </Link>

        <Card className="p-8">
          <h1 className="text-3xl font-bold mb-8 text-foreground">
            {isEditing ? "編輯日記" : "寫新日記"}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="date">日期</Label>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="rounded-lg"
                data-testid="input-date"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">標題</Label>
              <Input
                id="title"
                type="text"
                placeholder="今天發生了什麼呢..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="rounded-lg"
                data-testid="input-title"
              />
            </div>

            <div className="space-y-2">
              <Label>心情</Label>
              <div className="flex gap-3">
                {moods.map((m) => {
                  const Icon = m.icon;
                  const isSelected = mood === m.value;
                  return (
                    <button
                      key={m.value}
                      type="button"
                      onClick={() => setMood(m.value)}
                      className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all hover-elevate active-elevate-2 ${
                        isSelected
                          ? "border-primary bg-primary/10"
                          : "border-border bg-card"
                      }`}
                      data-testid={`button-mood-${m.value}`}
                    >
                      <Icon className={`w-6 h-6 ${m.color}`} />
                      <span className="text-sm font-medium">{m.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">內容</Label>
              <Textarea
                id="content"
                placeholder="記錄你的心情和想法..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={12}
                className="rounded-lg resize-none"
                data-testid="input-content"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="gap-2 rounded-full" data-testid="button-save">
                <Save className="w-4 h-4" />
                {isEditing ? "更新日記" : "儲存日記"}
              </Button>
              <Link href={isEditing ? `/diary/${params.id}` : "/diaries"}>
                <Button type="button" variant="outline" className="rounded-full" data-testid="button-cancel">
                  取消
                </Button>
              </Link>
            </div>
          </form>
        </Card>
      </section>
    </div>
  );
}
