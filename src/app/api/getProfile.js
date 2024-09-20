import fs from "fs";
import path from "path";

export async function fetchData() {
  // Define the path to your data file
  const filePath = path.resolve(process.cwd(), "data", "data.json");

  // Read the file asynchronously
  const jsonData = await fs.promises.readFile(filePath, "utf8");

  // Parse and return the data
  return JSON.parse(jsonData);
}
