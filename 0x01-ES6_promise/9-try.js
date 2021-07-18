/* eslint-disable */
export default function guardrail(mathFunction) {
  let queue = [];

  try {
    /* mathfunction calue appended to queue array */
    queue.push(mathFunction());
  } catch (e) {
    /* Error message appended to queue with specific Number object */
    queue.push(e.toString());
  } finally {
    /* message added to queue in every case */
    queue.push('Guardrail was processed');
  }
  return queue;
}
