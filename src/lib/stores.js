import { writable } from "svelte/store";

export const selectedProject = writable(null);
export const showProject = writable(false);