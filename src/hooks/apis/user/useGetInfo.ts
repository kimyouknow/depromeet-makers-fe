import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import type { CustomError } from '@/apis';
import { api } from '@/apis';

interface GetInfoResponse {
  id: string;
  name: string;
  email: string;
  generations: {
    generationId: number;
    role: string;
    position: string;
  }[];
}

const getInfo = async (): Promise<GetInfoResponse> => {
  const res = await api.get<GetInfoResponse>('/v1/me');
  return res.data;
};

export const useGetInfo = (options?: UseQueryOptions<GetInfoResponse, CustomError>) =>
  useQuery({
    queryKey: ['me'],
    queryFn: getInfo,
    ...options,
  });
