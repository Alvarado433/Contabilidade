type DistribuicaoItem = {
  nome: string;
  valor: number;
};

type SerieValor = {
  valor: number;
};

type RadarItem = {
  nome: string;
  valor: number;
};

export function getMaxValue<T extends SerieValor>(items: T[]): number {
  if (!items.length) return 1;
  return Math.max(...items.map((item) => item.valor), 1);
}

export function getDonutStops(
  items: DistribuicaoItem[],
  colors: string[]
): string {
  const total = items.reduce((acc, item) => acc + item.valor, 0);

  if (!items.length || total <= 0) {
    return "transparent 0% 100%";
  }

  let acumulado = 0;

  return items
    .map((item, index) => {
      const inicio = acumulado;
      const fatia = (item.valor / total) * 100;
      acumulado += fatia;
      return `${colors[index % colors.length]} ${inicio}% ${acumulado}%`;
    })
    .join(", ");
}

export function getLinePoints<T extends SerieValor>(
  items: T[],
  options?: {
    startX?: number;
    baseY?: number;
    stepX?: number;
    height?: number;
  }
): string {
  const startX = options?.startX ?? 20;
  const baseY = options?.baseY ?? 140;
  const stepX = options?.stepX ?? 55;
  const height = options?.height ?? 100;

  const max = getMaxValue(items);

  return items
    .map((item, index) => {
      const x = startX + index * stepX;
      const y = baseY - (item.valor / max) * height;
      return `${x},${y}`;
    })
    .join(" ");
}

export function getLineCircles<T extends SerieValor>(
  items: T[],
  options?: {
    startX?: number;
    baseY?: number;
    stepX?: number;
    height?: number;
  }
) {
  const startX = options?.startX ?? 20;
  const baseY = options?.baseY ?? 140;
  const stepX = options?.stepX ?? 55;
  const height = options?.height ?? 100;

  const max = getMaxValue(items);

  return items.map((item, index) => {
    const x = startX + index * stepX;
    const y = baseY - (item.valor / max) * height;
    return { x, y, index };
  });
}

export function getRadarPolygonPoints(
  items: RadarItem[],
  options?: {
    centerX?: number;
    centerY?: number;
    radius?: number;
  }
): string {
  const centerX = options?.centerX ?? 110;
  const centerY = options?.centerY ?? 110;
  const radius = options?.radius ?? 70;

  if (!items.length) return "";

  return items
    .map((item, index) => {
      const angle = (Math.PI * 2 * index) / items.length - Math.PI / 2;
      const r = (item.valor / 100) * radius;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;
      return `${x},${y}`;
    })
    .join(" ");
}