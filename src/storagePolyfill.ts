/**
 * window.storage polyfill
 * Replaces the Claude artifact storage API with a localStorage-backed equivalent.
 * This keeps the ArtemisPrime component working identically outside the Claude sandbox.
 */

const PREFIX = '__artemis__';

function makeKey(key: string, shared: boolean) {
  return shared ? `${PREFIX}shared:${key}` : `${PREFIX}${key}`;
}

window.storage = {
  async get(key: string, shared = false) {
    try {
      const lsKey = makeKey(key, shared);
      const value = localStorage.getItem(lsKey);
      if (value === null) throw new Error(`Key not found: ${key}`);
      return { key, value, shared };
    } catch (e) {
      throw e;
    }
  },

  async set(key: string, value: string, shared = false) {
    try {
      const lsKey = makeKey(key, shared);
      localStorage.setItem(lsKey, value);
      return { key, value, shared };
    } catch (e) {
      console.error('storage.set error:', e);
      return null;
    }
  },

  async delete(key: string, shared = false) {
    try {
      const lsKey = makeKey(key, shared);
      localStorage.removeItem(lsKey);
      return { key, deleted: true, shared };
    } catch (e) {
      console.error('storage.delete error:', e);
      return null;
    }
  },

  async list(prefix = '', shared = false) {
    try {
      const nsPrefix = makeKey(prefix, shared);
      const keys: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const lsKey = localStorage.key(i)!;
        if (lsKey.startsWith(nsPrefix)) {
          // Strip internal prefix to return original key
          const original = shared
            ? lsKey.slice(`${PREFIX}shared:`.length)
            : lsKey.slice(PREFIX.length);
          keys.push(original);
        }
      }
      return { keys, prefix, shared };
    } catch (e) {
      console.error('storage.list error:', e);
      return null;
    }
  },
};

// Extend the Window interface so TypeScript is happy
declare global {
  interface Window {
    storage: {
      get(key: string, shared?: boolean): Promise<{ key: string; value: string; shared: boolean } | null>;
      set(key: string, value: string, shared?: boolean): Promise<{ key: string; value: string; shared: boolean } | null>;
      delete(key: string, shared?: boolean): Promise<{ key: string; deleted: boolean; shared: boolean } | null>;
      list(prefix?: string, shared?: boolean): Promise<{ keys: string[]; prefix?: string; shared: boolean } | null>;
    };
  }
}
