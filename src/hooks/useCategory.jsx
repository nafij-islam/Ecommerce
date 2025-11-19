import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { getCategory } from '../api/Category';


const useCategory = () => {
    const { isPending, error, data } = useQuery({
    queryKey: ['category'],
    queryFn: getCategory,
  }) 
  return { isPending, error, data }
}

export default useCategory;