import {
  getDonutStops,
  getMaxValue,
  getLinePoints,
  getLineCircles,
  getRadarPolygonPoints,
} from "@/utils/Graficos/folhaGraficos";

type DistribuicaoCusto = {
  nome: string;
  valor: number;
};

type FaturamentoMensal = {
  mes: string;
  valor: number;
};

type EvolucaoFolha = {
  ano: string;
  valor: number;
};

type DesempenhoSetor = {
  nome: string;
  valor: number;
};

type FolhaGraficosData = {
  indicadoresGraficos: {
    distribuicaoCustos: DistribuicaoCusto[];
    faturamentoMensal: FaturamentoMensal[];
    evolucaoFolha: EvolucaoFolha[];
    desempenhoSetor: DesempenhoSetor[];
  };
};

export function getFolhaChartData(folha: FolhaGraficosData) {
  const donutColors = ["#1e63db", "#00b894", "#f4b400", "#ea4335"];

  const donutStops = getDonutStops(
    folha.indicadoresGraficos.distribuicaoCustos,
    donutColors
  );

  const maxFaturamento = getMaxValue(
    folha.indicadoresGraficos.faturamentoMensal
  );

  const linePoints = getLinePoints(
    folha.indicadoresGraficos.evolucaoFolha
  );

  const lineCircles = getLineCircles(
    folha.indicadoresGraficos.evolucaoFolha
  );

  const radarPoints = getRadarPolygonPoints(
    folha.indicadoresGraficos.desempenhoSetor
  );

  return {
    donutColors,
    donutStops,
    maxFaturamento,
    linePoints,
    lineCircles,
    radarPoints,
  };
}