import { atom } from "jotai";

export const orgsAtom = atom({
  orgs: [],
  currentOrg: null,
});
export const isInitializedAtom = atom(false);
export const isConnectedAtom = atom(false);
