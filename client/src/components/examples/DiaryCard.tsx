import DiaryCard from '../DiaryCard';

export default function DiaryCardExample() {
  return (
    <div className="max-w-md p-4">
      <DiaryCard
        diary={{
          id: "1",
          slug: "今天的咖啡廳探險",
          title: "今天的咖啡廳探險",
          date: "2025-11-07",
          excerpt: "今天發現了一家超棒的咖啡廳！店裡的裝潢很溫馨，拿鐵也超好喝。和朋友聊了一下午，感覺心情都變好了～",
          mood: "happy",
          content: "# 今天的咖啡廳探險\n\n今天發現了一家超棒的咖啡廳！"
        }}
      />
    </div>
  );
}
