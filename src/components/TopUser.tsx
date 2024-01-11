import { useGetPersonalCounter } from '../hooks/useGetPersonalCounter'
import { useGetTopUser } from '../hooks/useGetTopUser'

export const TopUser = () => {
	const { topUser, error, isPending, connectedUser } = useGetTopUser()
	const { personalCounter: topUserCounter } = useGetPersonalCounter({
		externalAddress: topUser,
	})

	if (isPending) return <div>Loading...</div>
	if (error) return <div>Error: {error.shortMessage || error.message}</div>

	const renderInformationText = () => {
		if (connectedUser === undefined)
			return "Connect your account to verify that you're the top user!"
		else if (connectedUser === topUser) return 'You are the top user!'
		else return 'You are not the top user yet, but you are close! Keep going!'
	}

	return (
		<div className="ml-2 mt-1">
			<div>
				<span className="underline">Top user:</span>{' '}
				{`${topUser} [${topUserCounter}]` ?? 'No participants'}
			</div>
			<span>{renderInformationText()}</span>
		</div>
	)
}
