function truthy(key: string) {
  const value = process.env[key]?.toLowerCase()
  return value === "true" || value === "1"
}

export namespace Flag {
  export const TASIA_AUTO_SHARE = truthy("TASIA_AUTO_SHARE")
  export const TASIA_GIT_BASH_PATH = process.env["TASIA_GIT_BASH_PATH"]
  export const TASIA_CONFIG = process.env["TASIA_CONFIG"]
  export declare const TASIA_CONFIG_DIR: string | undefined
  export const TASIA_CONFIG_CONTENT = process.env["TASIA_CONFIG_CONTENT"]
  export const TASIA_DISABLE_AUTOUPDATE = truthy("TASIA_DISABLE_AUTOUPDATE")
  export const TASIA_DISABLE_PRUNE = truthy("TASIA_DISABLE_PRUNE")
  export const TASIA_DISABLE_TERMINAL_TITLE = truthy("TASIA_DISABLE_TERMINAL_TITLE")
  export const TASIA_PERMISSION = process.env["TASIA_PERMISSION"]
  export const TASIA_DISABLE_DEFAULT_PLUGINS = truthy("TASIA_DISABLE_DEFAULT_PLUGINS")
  export const TASIA_DISABLE_LSP_DOWNLOAD = truthy("TASIA_DISABLE_LSP_DOWNLOAD")
  export const TASIA_ENABLE_EXPERIMENTAL_MODELS = truthy("TASIA_ENABLE_EXPERIMENTAL_MODELS")
  export const TASIA_DISABLE_AUTOCOMPACT = truthy("TASIA_DISABLE_AUTOCOMPACT")
  export const TASIA_DISABLE_MODELS_FETCH = truthy("TASIA_DISABLE_MODELS_FETCH")
  export const TASIA_DISABLE_CLAUDE_CODE = truthy("TASIA_DISABLE_CLAUDE_CODE")
  export const TASIA_DISABLE_CLAUDE_CODE_PROMPT =
    TASIA_DISABLE_CLAUDE_CODE || truthy("TASIA_DISABLE_CLAUDE_CODE_PROMPT")
  export const TASIA_DISABLE_CLAUDE_CODE_SKILLS =
    TASIA_DISABLE_CLAUDE_CODE || truthy("TASIA_DISABLE_CLAUDE_CODE_SKILLS")
  export declare const TASIA_DISABLE_PROJECT_CONFIG: boolean
  export const TASIA_FAKE_VCS = process.env["TASIA_FAKE_VCS"]
  export declare const TASIA_CLIENT: string
  export const TASIA_SERVER_PASSWORD = process.env["TASIA_SERVER_PASSWORD"]
  export const TASIA_SERVER_USERNAME = process.env["TASIA_SERVER_USERNAME"]

  // Experimental
  export const TASIA_EXPERIMENTAL = truthy("TASIA_EXPERIMENTAL")
  export const TASIA_EXPERIMENTAL_FILEWATCHER = truthy("TASIA_EXPERIMENTAL_FILEWATCHER")
  export const TASIA_EXPERIMENTAL_DISABLE_FILEWATCHER = truthy("TASIA_EXPERIMENTAL_DISABLE_FILEWATCHER")
  export const TASIA_EXPERIMENTAL_ICON_DISCOVERY =
    TASIA_EXPERIMENTAL || truthy("TASIA_EXPERIMENTAL_ICON_DISCOVERY")
  export const TASIA_EXPERIMENTAL_DISABLE_COPY_ON_SELECT = truthy("TASIA_EXPERIMENTAL_DISABLE_COPY_ON_SELECT")
  export const TASIA_ENABLE_EXA =
    truthy("TASIA_ENABLE_EXA") || TASIA_EXPERIMENTAL || truthy("TASIA_EXPERIMENTAL_EXA")
  export const TASIA_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS = number("TASIA_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS")
  export const TASIA_EXPERIMENTAL_OUTPUT_TOKEN_MAX = number("TASIA_EXPERIMENTAL_OUTPUT_TOKEN_MAX")
  export const TASIA_EXPERIMENTAL_OXFMT = TASIA_EXPERIMENTAL || truthy("TASIA_EXPERIMENTAL_OXFMT")
  export const TASIA_EXPERIMENTAL_LSP_TY = truthy("TASIA_EXPERIMENTAL_LSP_TY")
  export const TASIA_EXPERIMENTAL_LSP_TOOL = TASIA_EXPERIMENTAL || truthy("TASIA_EXPERIMENTAL_LSP_TOOL")
  export const TASIA_DISABLE_FILETIME_CHECK = truthy("TASIA_DISABLE_FILETIME_CHECK")
  export const TASIA_EXPERIMENTAL_PLAN_MODE = TASIA_EXPERIMENTAL || truthy("TASIA_EXPERIMENTAL_PLAN_MODE")
  export const TASIA_EXPERIMENTAL_MARKDOWN = truthy("TASIA_EXPERIMENTAL_MARKDOWN")
  export const TASIA_MODELS_URL = process.env["TASIA_MODELS_URL"]

  function number(key: string) {
    const value = process.env[key]
    if (!value) return undefined
    const parsed = Number(value)
    return Number.isInteger(parsed) && parsed > 0 ? parsed : undefined
  }
}

// Dynamic getter for TASIA_DISABLE_PROJECT_CONFIG
// This must be evaluated at access time, not module load time,
// because external tooling may set this env var at runtime
Object.defineProperty(Flag, "TASIA_DISABLE_PROJECT_CONFIG", {
  get() {
    return truthy("TASIA_DISABLE_PROJECT_CONFIG")
  },
  enumerable: true,
  configurable: false,
})

// Dynamic getter for TASIA_CONFIG_DIR
// This must be evaluated at access time, not module load time,
// because external tooling may set this env var at runtime
Object.defineProperty(Flag, "TASIA_CONFIG_DIR", {
  get() {
    return process.env["TASIA_CONFIG_DIR"]
  },
  enumerable: true,
  configurable: false,
})

// Dynamic getter for TASIA_CLIENT
// This must be evaluated at access time, not module load time,
// because some commands override the client at runtime
Object.defineProperty(Flag, "TASIA_CLIENT", {
  get() {
    return process.env["TASIA_CLIENT"] ?? "cli"
  },
  enumerable: true,
  configurable: false,
})
