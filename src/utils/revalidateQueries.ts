import { useReadContract, useBlockNumber } from 'wagmi'
import { useEffect } from 'react'
import { useQueryClient } from '@tanstack/react-query'

// Revalidate queries on every block
export const revalidateQueriesOnEveryBlock = () => {
	const { data: blockNumber } = useBlockNumber({ watch: true })
	const { queryKey } = useReadContract()
	const queryClient = useQueryClient()

	const refreshQueries = async () => {
		await queryClient.invalidateQueries({ queryKey })
	}

	useEffect(() => {
		refreshQueries()
	}, [blockNumber])
}
