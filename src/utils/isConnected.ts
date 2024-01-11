import { AccountConnectionStatus } from '../const/index'

export const isUserConnected = (accountStatus: string) =>
	accountStatus === AccountConnectionStatus.CONNECTED
