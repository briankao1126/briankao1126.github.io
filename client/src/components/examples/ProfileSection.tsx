import ProfileSection from '../ProfileSection';

export default function ProfileSectionExample() {
  return (
    <ProfileSection
      name="小美的生活日記"
      bio="嗨！我是一名熱愛生活的大學生，喜歡記錄每一天的美好瞬間。在這裡分享我的日常、想法和小確幸～"
      interests={["閱讀", "旅行", "美食", "攝影", "音樂"]}
    />
  );
}
