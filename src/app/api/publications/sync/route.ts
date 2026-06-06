import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { PUBLICATIONS_CACHE_TAG } from "@/lib/publications/config";
import { getPublicationSyncStats } from "@/lib/publications/get-publications";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  revalidateTag(PUBLICATIONS_CACHE_TAG);
  const stats = await getPublicationSyncStats();

  return NextResponse.json({
    revalidated: true,
    ...stats,
  });
}
