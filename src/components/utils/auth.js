//import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { auth } from './firebase';

class AuthService {
  constructor() {
    this.auth = auth;
  }

  getProfile() {
    return this.auth.currentUser;
  }

  loggedIn() {
    return !!this.auth.currentUser;
  }

  async login(email, password) {
    try {
      const { user } = await this.auth.signInWithEmailAndPassword(email, password);
      return user;
    } catch (error) {
      console.error(error);
    }
  }

  async logout() {
    try {
      await this.auth.signOut();
    } catch (error) {
      console.error(error);
    }
  }
}

const authService = new AuthService();

export default authService;