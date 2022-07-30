import { get, post, del, put } from "../../utils/Http";
type userSubmitForm = {
  email: string;
  password: string;
  repeatPaswword:string
};
export async function registerUserData(data: userSubmitForm) {
  try {
    const response = await post(`http://localhost:5009/api/v1/register`, {
      email: data.email,
      password: data.password,
      repeatPaswword:data.repeatPaswword
    });
    return response.data;
  } catch (e: any) {
    return e.response;
  }
}
