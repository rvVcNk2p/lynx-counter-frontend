import { abi } from './CounterABI'
export const COUNTER_CONTRACT = '0x9c5ee22d08965c3a163c40aee4895e632c94bd6e'
export const ACTIVE_CHAIN_NAME = 'Goerli'
export const GOERLI_SCAN_LINK = `https://${ACTIVE_CHAIN_NAME.toLowerCase()}.etherscan.io/tx`
export const wagmiContractConfig = {
	abi,
	address: COUNTER_CONTRACT,
} as const

export enum AccountConnectionStatus {
	CONNECTED = 'connected',
}

export enum ConnectorType {
	METAMASK = 'MetaMask',
}

export enum CounterContractFunction {
	GLOBAL_COUNTER = 'globalCounter',
	PERSONAL_COUNTER = 'personalCounter',
	TOP_USER = 'topUser',
	// callable functions
	INCREASE_COUNTER = 'increaseCounter',
}
