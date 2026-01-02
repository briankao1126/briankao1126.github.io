import img1 from "@assets/generated_images/Cute_student_avatar_illustration_c4a824f6.png";
import img2 from "@assets/generated_images/Decorative_stars_and_sparkles_fead6553.png";

export default function Gallery() {
  const images = [img1, img2];

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h3 className="text-lg font-semibold mb-4 text-foreground">相簿</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {images.map((src, idx) => (
          <div key={idx} className="w-full h-28 rounded overflow-hidden bg-muted-foreground/5">
            <img src={src} alt={`photo-${idx}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
