export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' });

  const { nombre, telefono, mensaje } = req.body || {};
  if (!nombre || !telefono || !mensaje) return res.status(400).json({ error: 'Faltan campos' });

  return res.status(200).json({
    ok: true,
    lead: { nombre, telefono, mensaje, source: 'salads-wings-web-demo' }
  });
}
