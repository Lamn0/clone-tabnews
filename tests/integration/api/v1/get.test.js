const { setHttpClientAndAgentOptions } = require("next/dist/server/config");

test("Deve retornar o status 200", async ()=>{
   const response = await fetch("http://localhost:3000/api/v1/status");
   expect(response.status).toBe(200);

});