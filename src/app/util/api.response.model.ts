export class ApiResponse {
  message?: string
  data?: any
  errors?: { [key: string]: string }
  successful?: boolean
}
