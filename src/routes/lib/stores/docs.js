import { writable } from "svelte/store";

/********************************************************************************************
 * ⚠️  IMPORTANT — MANUAL SYNC REQUIRED
 *
 * The `latestVersion` constant defined below is NOT self-updating.
 *
 * WHENEVER YOU CHANGE `latestVersion`, YOU MUST ALSO UPDATE THE ROUTE:
 *
 *     /src/routes/docs/latest/
 *
 * This route is a STATIC ALIAS and must always point to the same version
 * as `latestVersion` to avoid inconsistencies, broken navigation, or SEO issues.
 *
 * THERE IS NO RUNTIME OR BUILD-TIME LINK BETWEEN THESE TWO.
 * FAILURE TO UPDATE BOTH LOCATIONS WILL RESULT IN BUGS.
 *
 * Example:
 *   latestVersion = 'v1.1.0'
 *   → update /src/routes/docs/latest/ to point to v1.1.0
 *
 ********************************************************************************************/
export const latestVersion = "v1.0.0";

// initialize current with latest; we’ll update it in the browser
export const docsVersion = writable({
  current: latestVersion,
  latest: latestVersion,
});
