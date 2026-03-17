import { docsVersion } from "$lib/stores/docs";


export const getCurrentVersionFromPath = () => {
  const path = window.location.pathname; // e.g., "/docs/v1.0.0"
  const segments = path.split("/").filter(Boolean); // ["docs", "v1.0.0"]
  const version = segments[1] || "";

  // Check if the version is valid
  const isValid = /^v\d+\.\d+\.\d+$/.test(version);

  // Return the version or undefined
  return isValid ? version : undefined;
};
