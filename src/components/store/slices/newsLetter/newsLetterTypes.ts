export type NewsLetterState = {
  subscribed: boolean
  loading: boolean
  error: string | null
}

export type SubscribeEmailThunkPayload = void
export type SubscribeEmailThunkArg = string
export type SubscribeEmailThunkReject = string
