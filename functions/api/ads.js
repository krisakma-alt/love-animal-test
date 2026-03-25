// GET /api/ads — 공개 엔드포인트 (메인 페이지에서 광고 목록 읽기)
// Cloudflare Pages Function + KV 바인딩 (ADS_KV)

export async function onRequestGet(context) {
  const { env } = context;

  const ads = await env.ADS_KV.get('ads', 'json') || [];
  const active = ads
    .filter(a => a.active)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

  return Response.json(active, {
    headers: { 'Cache-Control': 'public, max-age=60' }
  });
}
