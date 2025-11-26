export interface IUserResponse {
  message: string;
  token: string;
  user: {
    email: string;
    name: string;
    role: string;
  }
}
