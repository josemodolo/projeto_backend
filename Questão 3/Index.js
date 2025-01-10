
const faturamentoDiario = [
    1200, 3500, 0, 4500, 0, 5000, 6000, 2000, 0, 1500, 0, 3000, 0, 0, 4000, 2500, 0, 7000, 0, 1000, 0, 0, 3500, 8000, 0, 4500, 3000, 0, 4000, 2000
  ];  
 
  const diasComFaturamento = faturamentoDiario.filter(valor => valor > 0); 
  const menorFaturamento = Math.min(...diasComFaturamento);
  const maiorFaturamento = Math.max(...diasComFaturamento);
  const somaFaturamento = diasComFaturamento.reduce((acumulado, valor) => acumulado + valor, 0);
  const mediaMensal = somaFaturamento / diasComFaturamento.length;
  const diasAcimaDaMedia = faturamentoDiario.filter(valor => valor > mediaMensal).length;

  console.log("Menor faturamento diário:", menorFaturamento);
  console.log("Maior faturamento diário:", maiorFaturamento);
  console.log("Dias com faturamento acima da média mensal:", diasAcimaDaMedia);
  