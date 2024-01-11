import { useIncreaseCounter } from '../hooks/useIncreaseCounter'
import { useAccount } from 'wagmi'
import type { BaseError } from 'wagmi'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useEffect } from 'react'
import { GOERLI_SCAN_LINK } from '../const'

export const IncreaseCounter = () => {
	const { address } = useAccount()
	const {
		increaseCounter,
		hash,
		contractError,
		isTransactionProcessing,
		isTransactionSuccess,
		isContractPending,
	} = useIncreaseCounter()

	const getTransactionLink = () => `${GOERLI_SCAN_LINK}/${hash}`

	const { storedValue, setValue } = useLocalStorage(`${address}-counter`, 0)

	useEffect(() => {
		if (isTransactionSuccess) {
			setValue(storedValue + 1)
		}
	}, [isTransactionSuccess])

	return (
		<div className="ml-2">
			<p className="mb-2">
				<span className="underline">Counter initiated from this browser:</span>{' '}
				{storedValue}
			</p>
			<button
				className={
					'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' +
					(isTransactionProcessing || isContractPending
						? ' opacity-50 cursor-not-allowed'
						: '')
				}
				onClick={() => increaseCounter()}
				disabled={isContractPending || isTransactionProcessing}
			>
				{isTransactionProcessing
					? 'Processing...'
					: isContractPending
						? 'Waiting for user confirmation'
						: 'Increase counter'}
			</button>

			{hash && isTransactionProcessing && (
				<>
					<p className="mt-2">
						You can see the transaction on the Goerli testnet Etherscan by
						clicking the following link:{' '}
						<a
							className="underline"
							target="_blank"
							href={getTransactionLink()}
						>
							{hash}
						</a>
					</p>
				</>
			)}
			{contractError && (
				<div className="mt-2">
					Error:{' '}
					{(contractError as BaseError).shortMessage || contractError.message}
				</div>
			)}
		</div>
	)
}
