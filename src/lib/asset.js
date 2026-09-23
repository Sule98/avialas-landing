/** Antepone el basePath (solo en la build de GitHub Pages) a rutas de /public. */
export const asset = (path) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
