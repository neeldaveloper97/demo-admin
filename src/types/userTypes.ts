export interface UserDetails {
  _id: string;
  userId: string;
  userName: string;
  firstName: string;
  picResource: any;
  lastName: string;
  email: string;
  emailVerified: boolean;
  deactivated: boolean;
  occupation: string;
}

export interface UserSliceState {
  user: UserDetails[];
  slider: boolean;
  isFetching: false;
  isSuccess: false;
  isError: false;
  isUpdate: false;
  error: "";
}
