import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  name: "sanity-nextjs-site",
  title: "Sanity Next.js Site",
  projectId: "dcx5ehq6",
  dataset: "production",
  basePath: "/studio",
  plugins: [deskTool(), visionTool()],
  theme:myTheme,
  schema: { types: schemaTypes },
});