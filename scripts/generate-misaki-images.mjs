import fs from "node:fs";
import path from "node:path";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("GEMINI_API_KEY is not set.");
  process.exit(1);
}

const model = "gemini-2.5-flash-image";
const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

const outDir = path.resolve("images", "misaki_scenes");
fs.mkdirSync(outDir, { recursive: true });

const commonStyle = [
  "anime visual novel style",
  "character: Hoshizora Misaki, Japanese high school girl, dark long hair, soft bangs",
  "consistent character design across all outputs",
  "upper body portrait, centered composition",
  "clean lighting, polished 2D illustration",
  "no text, no watermark, no logo",
].join(", ");

const jobs = [
  {
    id: "intro_1",
    prompt:
      "school classroom in early spring morning, shy first greeting expression, gentle smile",
  },
  {
    id: "day1_after",
    prompt:
      "after school classroom, discussing culture festival posters, focused and calm expression",
  },
  {
    id: "day2_morning",
    prompt:
      "school gate in morning light, friendly greeting expression, bright smile",
  },
  {
    id: "day2_after",
    prompt:
      "lunch break in classroom, talking over flyers, trusting and relaxed expression",
  },
  {
    id: "day3",
    prompt:
      "culture festival prep atmosphere, energetic mood, cheerful expression",
  },
  {
    id: "day4",
    prompt:
      "sunset on school rooftop, emotionally open moment, slightly blushing tender expression",
  },
  {
    id: "day5",
    prompt:
      "school festival day ending, serious confession atmosphere near school building, nervous but determined expression",
  },
  {
    id: "ending_best",
    prompt:
      "golden hour after confession, very happy romantic smile, warm hopeful feeling",
  },
  {
    id: "ending_good",
    prompt:
      "soft evening light, gentle smiling expression, budding romance feeling",
  },
  {
    id: "ending_normal",
    prompt:
      "classroom after festival cleanup, polite calm smile, bittersweet atmosphere",
  },
];

function extractInlineImageData(responseJson) {
  const candidates = responseJson?.candidates ?? [];
  for (const cand of candidates) {
    const parts = cand?.content?.parts ?? [];
    for (const part of parts) {
      if (part?.inlineData?.data) {
        return part.inlineData.data;
      }
    }
  }
  return null;
}

async function generateOne(job) {
  const fullPrompt = `${commonStyle}, scene: ${job.prompt}`;
  const body = {
    contents: [
      {
        parts: [{ text: fullPrompt }],
      },
    ],
    generationConfig: {
      responseModalities: ["TEXT", "IMAGE"],
    },
  };

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`${job.id} failed: ${res.status} ${err}`);
  }

  const json = await res.json();
  const imageData = extractInlineImageData(json);
  if (!imageData) {
    throw new Error(`${job.id} failed: no inline image data in response`);
  }

  const outPath = path.join(outDir, `${job.id}.png`);
  fs.writeFileSync(outPath, Buffer.from(imageData, "base64"));
  console.log(`Saved: ${outPath}`);
}

async function main() {
  for (const job of jobs) {
    await generateOne(job);
  }

  const manifest = Object.fromEntries(
    jobs.map((j) => [j.id, `./images/misaki_scenes/${j.id}.png`]),
  );
  const manifestPath = path.join(outDir, "manifest.json");
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), "utf8");
  console.log(`Saved: ${manifestPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
