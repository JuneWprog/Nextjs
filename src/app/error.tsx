"use client"
export default function Error({error,reset}:{error: Error, reset: () => void}) {
  return (
    <div>
      <h1>Error Special file called when throw an error</h1>
      <p>{error.message}</p>
        <button onClick={reset}>Try Again</button>
    </div>
  );
}