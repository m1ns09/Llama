const APP_STRINGS = {
  en: {
    title: "Llama",
    thinking: "Thinking...",
    writing: "Writing...",
    upload: "Select a GGUF file",
    loading: "Loading, please wait...",
    placeholder: "Write a message",
    system_prompt: "You are a useful AI assistant.",
    system_welcome: "Hello, how can I help you today?",
    error_filesize: "Error. The file size cannot exceed 2 GB.",
    error_invalid: "Error. The model is invalid.",
    error_incognito: "Error. The model cannot run in an incognito window.",
  },
  es: {
    title: "Llama",
    thinking: "Pensando...",
    writing: "Escribiendo...",
    upload: "Seleccione un archivo GGUF",
    loading: "Cargando, por favor espere...",
    placeholder: "Escribe un mensaje",
    system_prompt: "T\u00FA eres un \u00FAtil asistente AI.",
    system_welcome: "Hola, \u00BFc\u00F3mo puedo ayudarte hoy?",
    error_filesize: "Error. El tama\u00F1o del archivo no puede superar los 2 GB.",
    error_invalid: "Error. El modelo es inv\u00E1lido.",
    error_incognito:
      "Error. No se puede ejecutar el modelo en una ventana de inc\u00F3gnito.",
  },
}

const USER_LANG = window.navigator.language.substring(0, 2).toLowerCase()
const GET_APP_STRING = APP_STRINGS[USER_LANG] || APP_STRINGS["en"]
const t = (stringName) => GET_APP_STRING[stringName] || ""
