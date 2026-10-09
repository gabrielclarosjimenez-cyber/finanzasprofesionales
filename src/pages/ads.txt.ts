import { ADSENSE } from '../config';

// Genera /ads.txt a partir del ID de AdSense de src/config.ts.
export function GET() {
  const pub = ADSENSE.client.replace(/^ca-/, '');
  const body = pub ? `google.com, ${pub}, DIRECT, f08c47fec0942fa0\n` : '# Pendiente: añade tu ID de AdSense en src/config.ts\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
