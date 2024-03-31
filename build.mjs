import dts from "bun-plugin-dts";

await Bun.build({
  entrypoints: ["./packages/cli/src/index.ts"],
  outdir: "./dist",
  minify: true,
  plugins: [dts()],
  clean: true,
  dts: true,
  format: "esm",
  sourcemap: "inline",
  target: "node",
});
