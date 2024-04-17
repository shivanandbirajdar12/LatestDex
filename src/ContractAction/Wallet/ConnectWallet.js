import React, { useState, useEffect } from 'react';
import Web3 from "web3"; // Import Web3 library
import { Link } from 'react-router-dom';

const ConnectButton = () => {
    const [connectedAccount, setConnectedAccount] = useState(localStorage.getItem('connectedAccount') || "");
    const [isConnected, setIsConnected] = useState(!!localStorage.getItem('connectedAccount'));
    let web3;

    useEffect(() => {
        const loadWeb3 = async () => {
            // Check if MetaMask is installed and accessible
            if (window.ethereum) {
                // Use Web3 provider from MetaMask
                web3 = new Web3(window.ethereum);
                // Request account access if needed
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                // Get the connected account
                const accounts = await web3.eth.getAccounts();
                // Update state
                setIsConnected(true);
                setConnectedAccount(accounts[0]);
                // Store connected account in local storage
                localStorage.setItem('connectedAccount', accounts[0]);
            } else {
                console.log("MetaMask not installed");
            }
        };

        loadWeb3();

        return () => {
            // Clean up
            if (window.ethereum) {
                window.ethereum.removeAllListeners();
            }
        };
    }, []);

    const connectWeb3Wallet = async () => {
        try {
            if (window.ethereum) {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const accounts = await web3.eth.getAccounts(); // Use web3 instance
                setIsConnected(true);
                setConnectedAccount(accounts[0]);
                localStorage.setItem('connectedAccount', accounts[0]);
            } else {
                console.log("MetaMask not installed");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const disconnectWeb3Wallet = () => {
        setIsConnected(false);
        setConnectedAccount("");
        localStorage.removeItem('connectedAccount');
    };

    return (
        <div>
            {isConnected ? (
                <div className="app-wrapper">
                    <button className="connect-button1 ms-1" onClick={connectWeb3Wallet}>
                        {connectedAccount
                            ? `${connectedAccount.substring(0, 4)}...${connectedAccount.substring(38)}`
                            : "Connect Wallet"}
                    </button>
                    <button
                        className="connect-button1 ms-1"
                       
                        onClick={disconnectWeb3Wallet}
                    >
                        Log Out
                    </button>
                </div>
            ) : (
                <div className="d-none d-xl-block">
                    <button className="connect-button1 ms-1" onClick={connectWeb3Wallet}>
                        Connect Wallet
                    </button>
                </div>
            )}
        </div>
    );
};

export default ConnectButton;
