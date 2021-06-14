import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as webi_v3_pyodide_idl, canisterId as webi_v3_pyodide_id } from 'dfx-generated/webi_v3_pyodide';

const agent = new HttpAgent();
const webi_v3_pyodide = Actor.createActor(webi_v3_pyodide_idl, { agent, canisterId: webi_v3_pyodide_id });

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  const greeting = await webi_v3_pyodide.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
