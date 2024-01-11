import { useReadContract, useAccount } from 'wagmi'
import { CounterContractFunction, wagmiContractConfig } from '../const'

export const useGetTopUser = () => {
	const { address } = useAccount()
	const {
		data: topUser,
		error,
		isPending,
		isLoading,
	} = useReadContract({
		...wagmiContractConfig,
		functionName: CounterContractFunction.TOP_USER,
	})

	return {
		connectedUser: address,
		topUser,
		error,
		isPending,
		isLoading,
	}
}
