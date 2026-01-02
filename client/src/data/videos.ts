// 在這裡管理要顯示的影片清單。
// 支援：
// - YouTube / Vimeo 連結（會自動嵌入 iframe）
// - 直接的影片檔案 URL（例如 /src/assets/... 或公開 URL），會使用 <video> 播放

export const videos: string[] = [
  // 範例：YouTube 影片
  // "https://www.youtube.com/watch?v=dQw4w9WgXcQ",

  // 範例：直接影片檔案（若你把檔案放到 attached_assets/generated_videos，請用類似 "/generated_videos/myvideo.mp4" 的公開路徑）
  // "/generated_videos/myvideo.mp4",

];
