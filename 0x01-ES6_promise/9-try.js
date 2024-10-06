export default function guardrail(mathFunction) {
  const queue = []; // Step 1: Create the queue

  try {
    const result = mathFunction(); // Step 2: Execute the mathFunction
    queue.push(result); // Step 3: Append the result to the queue
  } catch (error) {
    queue.push(error.message); // Step 3: Append the error message to the queue
  } finally {
    queue.push('Guardrail was processed'); // Step 4: Append the final message
  }

  return queue; // Return the queue
}
