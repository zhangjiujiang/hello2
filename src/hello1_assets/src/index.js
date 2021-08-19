import { Actor, HttpAgent } from "@dfinity/agent";
import idlFactory from './nns-ui.did.js';
export { idlFactory } from './nns-ui.did.js';

export const createActor = (canisterId, options) => {
  const agent = new HttpAgent({ ...options?.agentOptions });

  // Fetch root key for certificate validation during development

  // Creates an actor with using the candid interface and the HttpAgent
  return Actor.createActor(idlFactory, {
    agent,
    canisterId,
    ...options?.actorOptions,
  });
};

/**
 * A ready-to-use agent for the identity canister
 * @type {import("@dfinity/agent").ActorSubclass<import("./identity.did.js")._SERVICE>}
 */
 export const nnsUi = createActor("qoctq-giaaa-aaaaa-aaaea-cai");

 document.getElementById("clickMeBtn").addEventListener("click", async () => {
    const rate = await nnsUi.get_icp_to_cycles_conversion_rate();
    document.getElementById("greeting").innerText = rate;
 });