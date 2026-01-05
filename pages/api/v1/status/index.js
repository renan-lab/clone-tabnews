import database from "../../../../infra/database.js";

async function status(request, response) {
  const res = await database.query("SELECT 1 + 1 as sum;");
  console.log(res.rows);
  response.status(200).json({ chave: "valor" });
}

export default status;
