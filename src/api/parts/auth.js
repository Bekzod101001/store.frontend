import {Core} from "@/api/base/Core";

class Auth extends Core {
  constructor(url) {
    super(url);
  }
  get () {
    return this._axios.post("/users/me");
  }
  signIn (payload) {
    return this._axios.post("/auth/local", payload);
  }
  signUp (payload) {
    return this._axios.post("/auth/local/register", payload);
  }
}

export default Auth;