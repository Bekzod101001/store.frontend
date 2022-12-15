import {Core} from "@/api/base/Core";

class Auth extends Core {
  constructor(url) {
    super(url);
  }
  signIn (payload) {
    return this._axios.post("local", payload);
  }
  signUp (payload) {
    return this._axios.post("local/register", payload);
  }
}

export default Auth;