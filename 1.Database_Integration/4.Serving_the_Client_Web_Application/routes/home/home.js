import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default (req, res) =>
  res.sendFile(join(__dirname, "../../", "public", "client", "index.html"));
