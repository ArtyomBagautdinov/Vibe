async function simulateAwait(stallTime = 3000) : Promise<void> {
    await new Promise(resolve => setTimeout(resolve, stallTime));
}

export default simulateAwait;