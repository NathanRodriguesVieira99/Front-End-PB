import { useCallback } from 'react';

import type { IGames } from '@/@types/IGames';
import { api } from '@/lib/axios';

// LÓGICA DE FETCH dos games
/*
Custom hook para fazer fetch com o axios
*/
export const useFetchGames = () => {
  const fetchGames = useCallback(async (): Promise<IGames[]> => {
    try {
      const response = await api.get<IGames[]>('game');
      return response.data;
    } catch (error) {
      throw new Error('Erro ao buscar os jogos');
    }
  }, []);
  return fetchGames;
};
