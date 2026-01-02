import { readdir, readFile, writeFile, stat } from "fs/promises";
import { resolve } from "path";
import yaml from "js-yaml";

interface ContentData {
  diaries: any[];
}

async function generateContent() {
  const contentPath = resolve(process.cwd(), "content");
  const outputPath = resolve(process.cwd(), "client", "src", "data", "content.json");
  const data: ContentData = {
    diaries: [],
  };

  // Load diaries
  try {
    const diariesDir = resolve(contentPath, "diaries");
    const diaryFiles = await readdir(diariesDir);
    for (const file of diaryFiles) {
      if (file.endsWith(".yaml") || file.endsWith(".yml")) {
        const filePath = resolve(diariesDir, file);
        const fileStat = await stat(filePath);
        if (fileStat.isFile()) {
          const content = await readFile(filePath, "utf-8");
          const diary = yaml.load(content) as any;
          // 從檔案名稱生成 slug（移除副檔名）
          const slug = file.replace(/\.(yaml|yml)$/, "");
          diary.slug = slug;
          data.diaries.push(diary);
        }
      }
    }
    // Sort by date descending
    data.diaries.sort((a, b) => {
      try {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      } catch {
        return 0;
      }
    });
  } catch (error) {
    console.warn("Failed to load diaries:", error);
  }

  // Write to JSON file
  await writeFile(outputPath, JSON.stringify(data, null, 2), "utf-8");
  console.log(`Content generated successfully: ${outputPath}`);
  console.log(`  - Diaries: ${data.diaries.length}`);
}

generateContent().catch(console.error);

