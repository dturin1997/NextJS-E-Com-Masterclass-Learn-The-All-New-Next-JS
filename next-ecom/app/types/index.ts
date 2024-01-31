export interface MenuItems {
  href: string;
  icon: React.JSX.Element;
  label: string;
}

export interface NewUserRequest {
  name: string;
  email: string;
  password: string;
}

export interface EmailVerifyReques {
  token: string;
  userId: string;
}

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface ForgetPasswordRequest {
  email: string;
}
