import { useGetPersonalCounter } from '../hooks/useGetPersonalCounter'

export const PersonalCounter = () => {
	const { personalCounter, error, isPending } = useGetPersonalCounter()

	if (isPending) return <div>Loading ...</div>
	if (error) return <div>Error: {error.shortMessage || error.message}</div>

	return (
		<div>
			<span className="underline">Personal Counter:</span> {personalCounter}
		</div>
	)
}
