import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { CounterContractFunction, wagmiContractConfig } from '../const'

export const useIncreaseCounter = () => {
	const { data: hash, writeContract, error, isPending } = useWriteContract()

	const { isError, isLoading, isSuccess } = useWaitForTransactionReceipt({
		hash,
	})

	const increaseCounter = () => {
		writeContract({
			...wagmiContractConfig,
			functionName: CounterContractFunction.INCREASE_COUNTER,
		})
	}

	return {
		increaseCounter,
		hash,
		contractError: error,
		isContractPending: isPending,
		isTransactionError: isError,
		isTransactionProcessing: isLoading,
		isTransactionSuccess: isSuccess,
	}
}
