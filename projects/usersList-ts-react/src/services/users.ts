import { type User } from "../types"

export const fetchUsers = async ({pageParam = 1}: { pageParam: number}):Promise<{users: User[], nextCursor?: number}> => {
  const data = await fetch(`https://randomuser.me/api/?results=10&seed=matielsesser&page=${pageParam}`)
  if (!data.ok) throw new Error('Error en la peticion')
  const res = await data.json()
  const currentPage = Number(res.info.page)
  const nextCursor = currentPage > 3 ? undefined : currentPage + 1
  return {
    users: res.results,
    nextCursor
  }
}

