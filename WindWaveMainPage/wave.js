/* CONNECT_AUTOMATICALLY
  true: automatically connect to Web3 Provider on page load.
  false: enable "click to connect" button
*/
const CONNECT_AUTOMATICALLY = true;

if(CONNECT_AUTOMATICALLY) {
    main();
  } else {
    connectButton.onclick = main;
  }
  
  async function main() {

    // INITIALIZAING STEPS
  
    loadingIconConnect.style.display = "block";
  
    // Check website compatibility
    if(navigator.userAgent.indexOf("Safari") != -1
    && navigator.userAgent.indexOf("Chrome") == -1) {
      alert("Please switch to a browser that supports Web3 (Chrome, Firefox, Brave, Edge, or Opera)");
      loadingIconConnect.style.display = "none";
      return;
    }
    console.log("Browser is Web3 compatible");

    // Check if MetaMask is installed
  if(!window.ethereum) {
    alert("No Web3 Provider detected, please install MetaMask (https://metamask.io)");
    loadingIconConnect.style.display = "none";
    return;
  }
  console.log("MetaMask is installed");

  // (REQUIRED) Connect to a Web3 provider (MetaMask in most cases)
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

  // If the network changes, refresh the page. (e.g. the user switches from mainnet to goerli)
  provider.on("network", (newNetwork, oldNetwork) => {
    if (oldNetwork) {
        window.location.reload();
    }
  });

  try {
    // (REQUIRED) Request to connect current wallet to the dApp
    await provider.send("eth_requestAccounts", []);
  } catch(error) {
    const errorMessage = "Cannot connect to wallet. There might be an issue with another browser extenstion. Try disabling some browser extensions (other than MetaMask), then attempt to reconnect."
    console.error(errorMessage, error);
    alert(errorMessage);
    loadingIconConnect.style.display = "none";
    return;
  }  
  console.log("Wallet connected");

  // Check if user is signed in to correct network
  const chainId = await provider.getNetwork();
  if(chainId.chainId != 80001) {
    alert("Please switch to the Mumbai Polygon Test Network in MetaMask. The page will refresh automatically after switching.");
    loadingIconConnect.style.display = "none";
    return;
  }
  console.log("Connected to Mumbai");

  // AT THIS POINT, THE USER SHOULD BE SUCCESSFULLY CONNECTED TO THE DAPP

  connectionStatus.textContent = "🟢 Connected";

  connectButton.setAttribute("disabled", "true");

  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, provider);

  // (REQUIRED) Connect the signer to the contract
  const contractWithSigner = contract.connect(signer);

  // Display the address of the signed-in wallet
  const signerAddress = await signer.getAddress();
  connectedWallet.textContent = signerAddress;
  console.log(`Connected Wallet: ${signerAddress}`);

  // hide the loading icon
  loadingIconConnect.style.display = "none";

  //---------------------------------------------------//
  //-------------ADD CODE BELOW THIS LINE--------------//
  //---------------------------------------------------//

  // mint function

A01.onclick=clickeA1
A02.onclick=clickeA2
A03.onclick=clickeA3
A04.onclick=clickeA4
A05.onclick=clickeA5
A06.onclick=clickeA6
A07.onclick=clickeA7
A08.onclick=clickeA8
A09.onclick=clickeA9
A10.onclick=clickeA10

  function clickeA1(){
    mint();
    document.getElementById("A01").innerHTML="👎";
    window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
    A01.disabled=true;
    A01.style.backgroundColor = "red"}

  function clickeA2(){
    mint();
    document.getElementById("A02").innerHTML="👎";
    window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
    A02.disabled=true;
    A02.style.backgroundColor = "red"}
   
  function clickeA3(){
    mint();
    document.getElementById("A03").innerHTML="👎";
    window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
    A03.disabled=true;
    A03.style.backgroundColor = "red"}
  
  function clickeA4(){
    mint();
    document.getElementById("A04").innerHTML="👎";
    window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
    A04.disabled=true;
    A04.style.backgroundColor = "red"}
  
  function clickeA5(){
    mint();
    document.getElementById("A05").innerHTML="👎";
    window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
    A05.disabled=true;
    A05.style.backgroundColor = "red"}
    
  function clickeA6(){
    mint();
    document.getElementById("A06").innerHTML="👎";
    window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
    A06.disabled=true;
    A06.style.backgroundColor = "red"}
    
  function clickeA7(){
    mint();
    document.getElementById("A07").innerHTML="👎";
    window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
    A07.disabled=true;
    A07.style.backgroundColor = "red"}
    
  function clickeA8(){
    mint();
    document.getElementById("A08").innerHTML="👎";
    window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
    A08.disabled=true;
    A08.style.backgroundColor = "red"}
    
  function clickeA9(){
    mint();
    document.getElementById("A09").innerHTML="👎";
    window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
    A09.disabled=true;
    A09.style.backgroundColor = "red"}
    
  function clickeA10(){
    mint();
    document.getElementById("A10").innerHTML="👎";
    window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
    A10.disabled=true;
    A10.style.backgroundColor = "red"}

  function mint() {
    contractWithSigner.safeMint(signerAddress);
  }

  // display balance (check every 5 seconds for their balance)
  setInterval(function() {
    showBalance();
    showTotalSupply();
  }, 5000)

  async function showBalance() {
    const balance = await contract.balanceOf(signerAddress);
    balanceDisplay.textContent = "" + balance;
  }

  async function showTotalSupply() {
    const totalSupply = await contract.totalSupply();
    totalSupplyDisplay.textContent = "" + totalSupply;
  }




  // GoToSeeWave.onclick = async function() {
  //   let tokenBalance = await contract.balanceOf(signerAddress);
  //   console.log(+tokenBalance);
  //   tokenBalance = +tokenBalance;
  //   if(tokenBalance < 1) {
  //     sorry.style.display = "block";
  //   } else {
  //     initContainer.style.display = "none";
  //     VIP.textContent = "Ticket: " + signerAddress;
  //     WindWaveDetailPage.style.display = "block";
  //     sound.play();
  //   }
  // }
}