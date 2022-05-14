import del from "del"
// конфигурация
import path from "../config/path.js"

// Удаление дериктории
const clear = () => {
    return del(path.root)
}

export default clear