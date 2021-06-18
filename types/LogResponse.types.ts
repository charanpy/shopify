export interface LogResponse {
  email: string;
  username: string;
  password: string;
  csrfToken: string;
  callbackUrl: string;
  json: boolean;
}
