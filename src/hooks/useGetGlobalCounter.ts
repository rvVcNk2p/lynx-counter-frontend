import { useReadContract } from 'wagmi'
import { CounterContractFunction, wagmiContractConfig } from '../const'

export const useGetGlobalCounter = () => {
	const {
		data: globalCounter,
		error,
		isPending,
	} = useReadContract({
		...wagmiContractConfig,
		functionName: CounterContractFunction.GLOBAL_COUNTER,
	})

	return {
		globalCounter: (globalCounter as unknown as BigInt)?.toString(),
		error,
		isPending,
	}
}
