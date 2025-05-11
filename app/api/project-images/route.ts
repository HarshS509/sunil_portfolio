import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const folder = searchParams.get("folder");

  if (!folder) {
    return NextResponse.json(
      { error: "Folder parameter is required" },
      { status: 400 }
    );
  }

  try {
    // Remove leading slash and ensure we're only accessing the public directory
    const safeFolder = folder.replace(/^\/+/, "");
    const fullPath = path.join(process.cwd(), "public", safeFolder);

    // Verify the path is within the public directory
    if (!fullPath.startsWith(path.join(process.cwd(), "public"))) {
      return NextResponse.json(
        { error: "Invalid folder path" },
        { status: 400 }
      );
    }

    const files = fs.readdirSync(fullPath);
    const images = files
      .filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return [".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(ext);
      })
      .map((file) => `/${safeFolder}/${file}`);

    return NextResponse.json({ images });
  } catch (error) {
    console.error("Error reading folder:", error);
    return NextResponse.json(
      { error: "Failed to read folder" },
      { status: 500 }
    );
  }
}
