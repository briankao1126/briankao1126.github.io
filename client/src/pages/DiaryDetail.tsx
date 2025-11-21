import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Heart, ArrowLeft, Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function DiaryDetail() {
  const [, params] = useRoute("/diary/:id");
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const diary = {
    id: params?.id,
    title: "秋天的第一杯奶茶",
    date: "2025-11-07",
    content: `今天天氣好冷，終於喝到了期待已久的秋天第一杯奶茶！

溫暖的奶茶握在手裡，感覺整個人都暖和起來了。我選了經典的珍珠奶茶，甜度適中，珍珠Q彈有嚼勁，真的太好喝了。

坐在窗邊，看著外面的落葉慢慢飄落，金黃色的葉子在陽光下閃閃發光。這個季節真的太美好了，涼涼的天氣配上溫暖的飲品，還有美麗的秋景，讓人感到無比幸福。

和朋友聊天的時候，我們討論了很多關於秋天的回憶。每個人都有自己喜歡秋天的理由，而我最喜歡的就是這種舒適的溫度和浪漫的氛圍。

希望能好好珍惜這個秋天的每一天，記錄下更多美好的瞬間。`,
    mood: "happy",
  };

  const handleDelete = () => {
    console.log("Delete diary:", diary.id);
    setShowDeleteDialog(false);
  };

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

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-foreground leading-relaxed whitespace-pre-wrap" data-testid="text-diary-content">
              {diary.content}
            </p>
          </div>

          <div className="flex items-center gap-3 pt-6 border-t">
            <Link href={`/edit/${diary.id}`}>
              <Button variant="outline" className="gap-2 rounded-full" data-testid="button-edit">
                <Edit className="w-4 h-4" />
                編輯
              </Button>
            </Link>
            <Button
              variant="outline"
              className="gap-2 rounded-full text-destructive hover:text-destructive"
              onClick={() => setShowDeleteDialog(true)}
              data-testid="button-delete"
            >
              <Trash2 className="w-4 h-4" />
              刪除
            </Button>
          </div>
        </Card>
      </section>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>確定要刪除這篇日記嗎？</AlertDialogTitle>
            <AlertDialogDescription>
              此操作無法復原，這篇日記將會永久刪除。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel data-testid="button-cancel-delete">取消</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              data-testid="button-confirm-delete"
            >
              刪除
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
