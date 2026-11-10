import { NextRequest } from "next/server";
import { renderBrandIcon } from "@/lib/brand-icon";

const ALLOWED_SIZES = new Set([192, 512]);

export async function GET(_request: NextRequest, { params }: { params: Promise<{ size: string }> }) {
  const { size: sizeParam } = await params;
  const size = parseInt(sizeParam, 10);
  if (!ALLOWED_SIZES.has(size)) {
    return new Response("Not found", { status: 404 });
  }
  return renderBrandIcon(size, "square");
}
