import { TeamElement } from "./types";

export function createData(
  id: number,
  nickname: string,
  score: number,
  isAlive: boolean,
  totalKills: number,
  totalDeads: number
): TeamElement {
  return { id, nickname, score, isAlive, totalKills, totalDeads };
}
