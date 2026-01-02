import { videos } from "@/data/videos";

function isYouTube(url: string) {
  return /youtube.com|youtu.be/.test(url);
}

export default function Videos() {
  if (!videos || videos.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h3 className="text-lg font-semibold mb-4 text-foreground">影片</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {videos.map((src, idx) => (
          <div key={idx} className="w-full rounded overflow-hidden bg-muted-foreground/5">
            {isYouTube(src) ? (
              <div className="aspect-video">
                <iframe
                  src={src.replace("watch?v=", "embed/")}
                  title={`video-${idx}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            ) : (
              <video controls className="w-full h-64 object-cover">
                <source src={src} />
                你的瀏覽器不支援 HTML5 影片。
              </video>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
