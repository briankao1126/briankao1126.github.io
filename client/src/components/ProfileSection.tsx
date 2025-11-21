import { Heart, Star, Sparkles } from "lucide-react";
import profileImg from "@assets/generated_images/Cute_student_avatar_illustration_c4a824f6.png";

interface ProfileSectionProps {
  name: string;
  bio: string;
  interests?: string[];
}

export default function ProfileSection({ name, bio, interests = [] }: ProfileSectionProps) {
  return (
    <section className="relative py-12 px-4 overflow-hidden">
      <div className="absolute top-8 left-8 text-primary/20">
        <Star className="w-8 h-8 fill-current" />
      </div>
      <div className="absolute top-16 right-12 text-primary/20">
        <Heart className="w-6 h-6 fill-current" />
      </div>
      <div className="absolute bottom-12 left-16 text-primary/20">
        <Sparkles className="w-7 h-7" />
      </div>
      <div className="absolute bottom-16 right-8 text-primary/20">
        <Star className="w-5 h-5 fill-current" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="mb-6 inline-block">
          <div className="relative">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg mx-auto">
              <img
                src={profileImg}
                alt={name}
                className="w-full h-full object-cover"
                data-testid="img-profile-avatar"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2">
              <Heart className="w-5 h-5 fill-current" />
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" data-testid="text-profile-name">
          {name}
        </h1>

        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6 max-w-2xl mx-auto" data-testid="text-profile-bio">
          {bio}
        </p>

        {interests.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center">
            {interests.map((interest, idx) => (
              <span
                key={idx}
                className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
                data-testid={`badge-interest-${idx}`}
              >
                {interest}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
