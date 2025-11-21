# Design Guidelines: Cute Cartoon-Style Personal Life Journal

## Design Approach
**Selected Approach:** Reference-Based with Kawaii/Cute Cartoon Aesthetic

Drawing inspiration from popular cute design patterns (Notion's friendly UI, Duolingo's playful elements, Instagram's personal touch) combined with Japanese kawaii design principles. The goal is creating an approachable, whimsical space that reflects personality while maintaining functionality.

## Core Design Elements

### Typography
- **Primary Font:** Nunito or Poppins (rounded, friendly sans-serif via Google Fonts)
- **Headings:** Bold weights (700-800), slightly oversized for playful impact
- **Body Text:** Regular weight (400), comfortable reading size (text-base to text-lg)
- **Accent Text:** Medium weight (500-600) for diary titles and labels
- **Special Touch:** Consider using a handwriting-style font (like Patrick Hand) for personal quotes or diary dates

### Layout System
**Spacing Primitives:** Use Tailwind units of 3, 4, 6, 8, and 12 for consistent rhythm
- Small gaps: gap-3, p-3 (12px)
- Standard spacing: p-4, m-6 (16px, 24px)
- Section padding: py-8, py-12 (32px, 48px)
- Large gaps: mb-12 (48px)

**Border Radius:** Embrace roundedness throughout
- Cards/containers: rounded-2xl to rounded-3xl
- Buttons: rounded-full for pill shapes
- Images: rounded-xl with soft edges
- Decorative elements: rounded-full for circular shapes

### Component Library

**A. Hero/Profile Section**
- Large rounded profile photo (circular, border with playful thickness)
- Name displayed in oversized, bold typography
- Self-introduction in friendly, conversational tone with generous line-height
- Decorative elements: small illustrated icons (stars, hearts, sparkles) scattered around
- Floating badges or tags showing interests/hobbies
- Background: soft gradient or pattern (geometric shapes, dots)

**B. Diary Entry Cards**
- Rounded rectangular cards with subtle shadow (shadow-lg)
- Each card contains:
  - Date badge (pill-shaped, positioned top-left or as ribbon)
  - Diary title in medium-bold font
  - Preview text (2-3 lines)
  - Read more button (rounded-full, compact)
  - Optional mood emoji or weather icon
- Grid layout: Single column mobile, 2 columns tablet, 2-3 columns desktop
- Hover effect: gentle lift (translate-y slight movement)

**C. Navigation**
- Floating navigation bar with rounded corners
- Icon + text combination for menu items
- Sticky positioning with blur backdrop
- Compact, friendly spacing between items

**D. Diary Entry Page**
- Full-width title section with decorative border/divider
- Date and metadata displayed with icons
- Content in comfortable reading width (max-w-3xl, centered)
- Generous line spacing (leading-relaxed)
- Back button styled as rounded pill
- Edit/delete buttons with icon + text, rounded corners

**E. Forms (Add/Edit Diary)**
- Input fields with rounded-lg borders and generous padding
- Floating labels or top-aligned labels with playful icons
- Textarea for diary content with comfortable height
- Submit button: large, rounded-full, prominent
- Cancel button: subtle, outlined style

**F. Decorative Elements**
- Corner decorations (illustrated flowers, stars, clouds)
- Dividers with playful shapes instead of straight lines
- Section transitions with soft curves or scalloped edges
- Small illustrated mascot or character (optional, can be simple emoji-based)

### Animations
**Use Very Sparingly:**
- Card hover: gentle scale (scale-105) + shadow increase
- Button press: slight scale-down (active:scale-95)
- Page transitions: simple fade-in for content
- NO complex scroll animations or floating elements

## Images

**Hero Section Image:**
- Large personal photo (circular or soft rounded square)
- Size: 150-200px diameter on mobile, 250-300px on desktop
- Placement: Center of hero section, above name
- Style: Friendly expression, casual vibe
- Optional: Decorative border with playful thickness or multiple borders

**Diary Entry Thumbnails (Optional):**
- If user adds photos to diary entries, display as rounded thumbnails
- Size: 60x60px preview in card, full-size in detail view
- Placement: Left side of card or top of entry

**Background Patterns:**
- Subtle decorative patterns (dots, shapes) in hero background
- Very low opacity to avoid overwhelming text

## Page Structure

**Homepage:**
1. Hero section with profile (80vh max)
2. Brief "About Me" section with rounded card
3. Recent diary entries grid (3-6 entries)
4. Call-to-action: "View All Entries" button

**All Diary Entries Page:**
1. Page title with decorative element
2. "Write New Entry" button (prominent, top-right)
3. Grid of diary cards (responsive columns)
4. Pagination or "Load More" (rounded buttons)

**Individual Diary Entry:**
1. Title section with date badge
2. Content area (centered, max-width)
3. Action buttons (Edit/Delete) at bottom
4. Navigation to previous/next entry

**Add/Edit Entry Form:**
1. Page title with icon
2. Form fields in vertical stack
3. Large textarea for content
4. Action buttons at bottom (Submit + Cancel)

## Key Design Principles
- **Approachability:** Every element should feel friendly and non-intimidating
- **Playfulness:** Subtle whimsy without sacrificing usability
- **Breathing Room:** Generous spacing prevents cramped feeling
- **Consistency:** Rounded corners, soft shadows, and friendly typography throughout
- **Personal Touch:** Design reflects individual personality while remaining organized