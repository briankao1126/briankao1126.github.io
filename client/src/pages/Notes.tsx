import { useEffect, useState } from "react";

type Note = {
  id: string;
  subject: string;
  title: string;
  content: string;
  updatedAt: string;
};

const STORAGE_KEY = "brian_notes_v1";

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [subject, setSubject] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setNotes(JSON.parse(raw));
    } catch (e) {
      console.error("load notes", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    } catch {}
  }, [notes]);

  function resetForm() {
    setSubject("");
    setTitle("");
    setContent("");
    setEditingId(null);
  }

  function saveNote() {
    if (!title.trim() && !content.trim()) return;
    const now = new Date().toISOString();
    if (editingId) {
      setNotes((s) =>
        s.map((n) => (n.id === editingId ? { ...n, subject, title, content, updatedAt: now } : n))
      );
    } else {
      const id = String(Date.now());
      setNotes((s) => [{ id, subject: subject || "其他", title, content, updatedAt: now }, ...s]);
    }
    resetForm();
  }

  function editNote(id: string) {
    const n = notes.find((x) => x.id === id);
    if (!n) return;
    setSubject(n.subject);
    setTitle(n.title);
    setContent(n.content);
    setEditingId(n.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function deleteNote(id: string) {
    if (!confirm("確定要刪除這則筆記？")) return;
    setNotes((s) => s.filter((n) => n.id !== id));
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">筆記</h2>

      <div className="mb-6 p-4 border rounded-lg bg-background/50">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
          <select value={subject} onChange={(e) => setSubject(e.target.value)} className="col-span-1 p-2 border rounded">
            <option value="">選擇科目或輸入新科目</option>
            <option>數學</option>
            <option>物理</option>
            <option>化學</option>
            <option>英文</option>
            <option>國文</option>
            <option>其他</option>
          </select>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="標題（例如：導數筆記）"
            className="col-span-2 p-2 border rounded"
          />
        </div>

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={8}
          placeholder="在此撰寫筆記..."
          className="w-full p-2 border rounded mb-3"
        />

        <div className="flex gap-2">
          <button onClick={saveNote} className="px-4 py-2 bg-primary text-primary-foreground rounded">
            {editingId ? "更新筆記" : "儲存筆記"}
          </button>
          <button onClick={resetForm} className="px-4 py-2 border rounded">
            清除
          </button>
        </div>
      </div>

      <div>
        {notes.length === 0 ? (
          <p className="text-muted-foreground">目前沒有筆記，請在上方新增。</p>
        ) : (
          <div className="space-y-3">
            {notes.map((n) => (
              <div key={n.id} className="p-3 border rounded">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm text-muted-foreground">{n.subject}</div>
                    <h3 className="font-medium">{n.title || "（無標題）"}</h3>
                    <div className="text-xs text-muted-foreground">更新：{new Date(n.updatedAt).toLocaleString()}</div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => editNote(n.id)} className="px-2 py-1 border rounded text-sm">
                      編輯
                    </button>
                    <button onClick={() => deleteNote(n.id)} className="px-2 py-1 border rounded text-sm text-destructive">
                      刪除
                    </button>
                  </div>
                </div>

                {n.content && <div className="mt-3 whitespace-pre-wrap text-sm text-foreground">{n.content}</div>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
