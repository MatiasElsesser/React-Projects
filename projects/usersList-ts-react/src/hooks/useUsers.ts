import { fetchUsers } from "../services/users"
import { useInfiniteQuery } from "@tanstack/react-query"
import { type User } from "../types"

export const useUsers = () => {
  const{ isLoading, isError, data, refetch, fetchNextPage, hasNextPage } = useInfiniteQuery<{nextCursor?: number, users: User[]}>({
    queryKey: ['users'],
    queryFn: fetchUsers,
    getNextPageParam: (lastPage) => {
      return  lastPage.nextCursor
    },
    refetchOnWindowFocus: false
  })

  return {
    isLoading,
    isError,
    refetch,
    fetchNextPage,
    hasNextPage,
    users: data?.pages.flatMap(page => page.users) ??  []
  }
}