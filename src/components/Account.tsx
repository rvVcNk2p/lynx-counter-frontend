import { useAccount, useConnect, useDisconnect } from 'wagmi'
import type { Connector } from 'wagmi'
import { ConnectorType } from '../const'
import { isUserConnected } from '../utils/isConnected'

export const Account = () => {
	const { address, status: accountStatus, chain } = useAccount()
	const { connectors, connect, error } = useConnect()
	const { disconnect } = useDisconnect()

	const isConnectedUser = isUserConnected(accountStatus)

	const renderMetamaskButton = () => {
		const metamaskConnector = connectors.find(
			(connector: Connector) => connector.name === ConnectorType.METAMASK,
		)

		if (!metamaskConnector) return null

		return (
			<div className="flex justify-between items-center m-2">
				<h2>Connect your wallet</h2>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
					onClick={() => connect({ connector: metamaskConnector })}
					type="button"
				>
					{metamaskConnector.name}
				</button>
			</div>
		)
	}

	return (
		<>
			{isConnectedUser && (
				<div className="flex flex-col m-2">
					<h1 className="text-2xl">Account</h1>

					<div className="flex justify-between items-center">
						<div>
							<span className="underline">Active Chain</span>:{' '}
							{chain?.name ??
								'Not supported chain! If you want to play, please switch to Goerli network.'}
							<br />
							<span className="underline">Connected address:</span> {address}
						</div>

						{isConnectedUser && (
							<div className="w-auto mt-2 h-full">
								<button
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
									type="button"
									onClick={() => disconnect()}
								>
									Disconnect
								</button>
							</div>
						)}
					</div>
				</div>
			)}

			{!isConnectedUser && (
				<div>
					{renderMetamaskButton()}
					<div>{error?.message}</div>
				</div>
			)}
		</>
	)
}
