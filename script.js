
async function connectWallet() {
    if (window.ethereum) {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            alert('Кошелек подключен: ' + accounts[0]);
        } catch (error) {
            console.error(error);
        }
    } else {
        alert('Пожалуйста, установите MetaMask!');
    }
}
