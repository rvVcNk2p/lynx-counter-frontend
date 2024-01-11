import { useReadContract } from 'wagmi'
import { CounterContractFunction, wagmiContractConfig } from '../const'
import { useAccount } from 'wagmi'

type UseGetPersonalCounterProps = {
	externalAddress?: `0x${string}` | undefined
}

export const useGetPersonalCounter = ({
	externalAddress,
}: UseGetPersonalCounterProps = {}) => {
	const { address: loggedInUserAddress } = useAccount()

	const address = externalAddress ? externalAddress : loggedInUserAddress

	const {
		data: personalCounter,
		error,
		isPending,
	} = useReadContract({
		...wagmiContractConfig,
		functionName: CounterContractFunction.PERSONAL_COUNTER,
		args: [address],
	})

	return {
		personalCounter: (personalCounter as unknown as BigInt)?.toString(),
		error,
		isPending,
	}
}
