// import { serverConfig } from '@/api/fetch/config';

// const TOKEN_KEY = (window as MyWindow).config.tokenKey;
const TOKEN_KEY: string = 'authorization';

interface CacheValue {
    value: any;
}

const formValueObj = (value: any): CacheValue => ({ value });

const getRealVal = (obj: CacheValue) => obj && obj.value;

const cache = {
    sessionGet(key: string) {
        try {
            return getRealVal(
                JSON.parse(window.sessionStorage.getItem(key) as string)
            );
        } catch (error) {
            throw new Error(error);
        }
    },
    sessionGetOnce(key: string) {
        const data = getRealVal(
            JSON.parse(window.sessionStorage.getItem(key) as string)
        );
        window.sessionStorage.removeItem(key);
        return data;
    },
    sessionSet(key: string, value: any) {
        window.sessionStorage.setItem(key, JSON.stringify(formValueObj(value)));
    },
    sessionRemove(key: string) {
        window.sessionStorage.removeItem(key);
    },
    sessionClear() {
        window.sessionStorage.clear();
    },
    localGet(key: string) {
        try {
            return getRealVal(
                JSON.parse(window.localStorage.getItem(key) as string)
            );
        } catch (error) {
            throw new Error(error);
        }
    },
    localSet(key: string, value: any) {
        window.localStorage.setItem(key, JSON.stringify(formValueObj(value)));
    },
    localRemove(key: string) {
        window.localStorage.removeItem(key);
    },
    localClear() {
        window.localStorage.clear();
    },
    getToken() {
        return this.sessionGet(TOKEN_KEY);
    },
    setToken(value: string) {
        this.sessionSet(TOKEN_KEY, value);
    },
    removeToken() {
        this.sessionRemove(TOKEN_KEY);
    },
};

export default cache;
