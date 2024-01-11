import { useGetGlobalCounter } from '../hooks/useGetGlobalCounter'

export const GlobalCounter = () => {
	const { globalCounter, error, isPending } = useGetGlobalCounter()

	if (isPending) return <div>Loading ...</div>
	if (error) return <div>Error: {error.shortMessage || error.message}</div>

	return (
		<div>
			<span className="underline">Global Counter:</span> {globalCounter}
		</div>
	)
}
