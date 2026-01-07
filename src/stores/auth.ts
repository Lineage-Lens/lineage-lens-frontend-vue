import { reactive } from "vue";

const accessTokenLocalStorageKey = 'token';

interface AuthStore {
    token: null | string;
    setToken(token: string): void;
}

export const authStore = reactive<AuthStore>({
    token: null,
    setToken(token: string): void {
        this.token = token;
        localStorage.setItem(accessTokenLocalStorageKey, token);
    }
});

const token = localStorage.getItem(accessTokenLocalStorageKey);
if (token) {
    authStore.setToken(token);
}