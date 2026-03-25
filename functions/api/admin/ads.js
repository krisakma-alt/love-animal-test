// POST /api/admin/ads — 광고 CRUD (Cloudflare Access로 보호)
// action: 'add' | 'delete' | 'toggle'

export async function onRequestPost(context) {
  const { request, env } = context;

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const ads = await env.ADS_KV.get('ads', 'json') || [];

  if (body.action === 'add') {
    if (!body.title || !body.desc) {
      return Response.json({ error: '제목과 설명은 필수입니다' }, { status: 400 });
    }
    ads.push({
      id: crypto.randomUUID(),
      emoji: body.emoji || '📱',
      title: body.title,
      desc: body.desc,
      url: body.url || '',
      active: true,
      order: ads.length
    });

  } else if (body.action === 'delete') {
    const idx = ads.findIndex(a => a.id === body.id);
    if (idx !== -1) ads.splice(idx, 1);

  } else if (body.action === 'toggle') {
    const ad = ads.find(a => a.id === body.id);
    if (ad) ad.active = !ad.active;

  } else {
    return Response.json({ error: 'Unknown action' }, { status: 400 });
  }

  await env.ADS_KV.put('ads', JSON.stringify(ads));
  return Response.json({ ok: true });
}
