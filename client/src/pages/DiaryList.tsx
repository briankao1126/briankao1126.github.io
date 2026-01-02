import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import DiaryCard from "@/components/DiaryCard";
import { diaries } from "@/data/diaries";

export default function DiaryList() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDiaries = diaries.filter(
    (diary) =>
      diary.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      diary.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground">我的日記</h1>
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
              <DiaryCard key={diary.id} diary={diary} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
