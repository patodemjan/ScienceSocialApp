import { Injectable } from "@angular/core";

export interface User {
  username: string;
  roles: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'auth_token';
  private mockUser: User | null = {
    username: 'john',
    roles: ['USER'] // môže byť ['ADMIN'] pre admin práva
  };

  constructor() {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  login(token: string) {
    localStorage.setItem(this.tokenKey, token);
    // pre jednoduchý mock si môžeme nastaviť aj aktuálneho používateľa
    this.mockUser = {
      username: 'john',
      roles: ['USER']
    };
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.mockUser = null;
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Nová metóda pre získanie aktuálneho používateľa
  getUser(): User | null {
    if (this.isLoggedIn()) {
      return this.mockUser;
    }
    return null;
  }
}
