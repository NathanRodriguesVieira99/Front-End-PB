import type { IGames } from '@/@types/IGames';
import { api } from '@/lib/axios';

// LÓGICA DE FETCH dos games
export const fetchGames = async () => {
  try {
    const response = await api.get<IGames[]>('game');
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar os jogos');
  }
};
