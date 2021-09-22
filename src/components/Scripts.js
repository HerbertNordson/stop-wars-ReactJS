   
import moment from "moment";

export const calculoDeParadas = (distancia, mglt, tempoDeConsumo) => {
  const [tempo, unidade] = tempoDeConsumo.split(" ");
  const tempoDeConsumoPorHr = moment.duration(tempo, unidade).asHours();
  const horas = distancia / mglt;
  const consumoHora = tempoDeConsumoPorHr;
  const paradas = horas / consumoHora;
  return Math.floor(paradas);
};