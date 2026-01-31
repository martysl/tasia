import { $ } from "bun"

import { copyBinaryToSidecarFolder, getCurrentSidecar, windowsify } from "./utils"

const RUST_TARGET = Bun.env.TAURI_ENV_TARGET_TRIPLE

const sidecarConfig = getCurrentSidecar(RUST_TARGET)

const binaryPath = windowsify(`../tasia/dist/${sidecarConfig.ocBinary}/bin/tasia`)

await $`cd ../tasia && bun run build --single`

await copyBinaryToSidecarFolder(binaryPath, RUST_TARGET)
