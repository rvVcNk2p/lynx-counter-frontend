import { Account } from './components/Account'
import { GlobalCounter } from './components/GlobalCounter'
import { PersonalCounter } from './components/PersonalCounter'
import { TopUser } from './components/TopUser'
import { IncreaseCounter } from './components/IncreaseCounter'
import { useAccount } from 'wagmi'
import { isUserConnected } from './utils/isConnected'
import { ACTIVE_CHAIN_NAME } from './const'
import { revalidateQueriesOnEveryBlock } from './utils/revalidateQueries'

export const App = () => {
	const { status: accountStatus, chain } = useAccount()

	const isConnectedUser = isUserConnected(accountStatus)
	const isChainRight = () => chain?.name === ACTIVE_CHAIN_NAME

	revalidateQueriesOnEveryBlock()

	return (
		<>
			<>
				<Account />
				<hr />
			</>

			<div className="flex flex-col gap-1 w-full ml-2">
				<h1 className="text-2xl mt-2">Game</h1>
				<GlobalCounter />
				{isConnectedUser && isChainRight() && <PersonalCounter />}
			</div>
			<TopUser />
			{isConnectedUser && isChainRight() && <IncreaseCounter />}
		</>
	)
}
