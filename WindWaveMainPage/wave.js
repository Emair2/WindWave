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

    //B
    B01.onclick=clickeB1
    B02.onclick=clickeB2
    B03.onclick=clickeB3
    B04.onclick=clickeB4
    B05.onclick=clickeB5
    B06.onclick=clickeB6
    B07.onclick=clickeB7
    B08.onclick=clickeB8
    B09.onclick=clickeB9
    B10.onclick=clickeB10
    B11.onclick=clickeB11
    B12.onclick=clickeB12
    B13.onclick=clickeB13

      function clickeB1(){
        mint();
        document.getElementById("B01").innerHTML="👎";
        window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
        B01.disabled=true;
        B01.style.backgroundColor = "red"}
    
      function clickeB2(){
        mint();
        document.getElementById("B02").innerHTML="👎";
        window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
        B02.disabled=true;
        B02.style.backgroundColor = "red"}
       
      function clickeB3(){
        mint();
        document.getElementById("B03").innerHTML="👎";
        window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
        B03.disabled=true;
        B03.style.backgroundColor = "red"}
      
      function clickeB4(){
        mint();
        document.getElementById("B04").innerHTML="👎";
        window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
        B04.disabled=true;
        B04.style.backgroundColor = "red"}
      
      function clickeB5(){
        mint();
        document.getElementById("B05").innerHTML="👎";
        window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
        B05.disabled=true;
        B05.style.backgroundColor = "red"}
        
      function clickeB6(){
        mint();
        document.getElementById("B06").innerHTML="👎";
        window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
        B06.disabled=true;
        B06.style.backgroundColor = "red"}
        
      function clickeB7(){
        mint();
        document.getElementById("B07").innerHTML="👎";
        window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
        B07.disabled=true;
        B07.style.backgroundColor = "red"}
        
      function clickeB8(){
        mint();
        document.getElementById("B08").innerHTML="👎";
        window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
        B08.disabled=true;
        B08.style.backgroundColor = "red"}
        
      function clickeB9(){
        mint();
        document.getElementById("B09").innerHTML="👎";
        window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
        B09.disabled=true;
        B09.style.backgroundColor = "red"}
        
      function clickeB10(){
        mint();
        document.getElementById("B10").innerHTML="👎";
        window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
        B10.disabled=true;
        B10.style.backgroundColor = "red"}

      function clickeB11(){
        mint();
        document.getElementById("B11").innerHTML="👎";
        window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
        B11.style.backgroundColor = "red"}
        B11.disabled=true;
      function clickeB12(){
        mint();
        document.getElementById("B12").innerHTML="👎";
        window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
        B12.disabled=true;
        B12.style.backgroundColor = "red"}
      function clickeB13(){
        mint();
        document.getElementById("B13").innerHTML="👎";
        window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
        B13.disabled=true;
        B13.style.backgroundColor = "red"}

        //C
    C01.onclick=clickeC1
    C02.onclick=clickeC2
    C03.onclick=clickeC3
    C04.onclick=clickeC4
    C05.onclick=clickeC5
    C06.onclick=clickeC6
    C07.onclick=clickeC7
    C08.onclick=clickeC8
    C09.onclick=clickeC9
    C10.onclick=clickeC10
    C11.onclick=clickeC11
    C12.onclick=clickeC12
   
      function clickeC1(){
        mint();
        document.getElementById("C01").innerHTML="👎";
        window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
        C01.disabled=true;
        C01.style.backgroundColor = "red"}
    
      function clickeC2(){
        mint();
        document.getElementById("C02").innerHTML="👎";
        window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
        C02.disabled=true;
        C02.style.backgroundColor = "red"}
       
      function clickeC3(){
        mint();
        document.getElementById("C03").innerHTML="👎";
        window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
        C03.disabled=true;
        C03.style.backgroundColor = "red"}
      
      function clickeC4(){
        mint();
        document.getElementById("C04").innerHTML="👎";
        window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
        C04.disabled=true;
        C04.style.backgroundColor = "red"}
      
      function clickeC5(){
        mint();
        document.getElementById("C05").innerHTML="👎";
        window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
        C05.disabled=true;
        C05.style.backgroundColor = "red"}
        
      function clickeC6(){
        mint();
        document.getElementById("C06").innerHTML="👎";
        window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
        C06.disabled=true;
        C06.style.backgroundColor = "red"}
        
      function clickeC7(){
        mint();
        document.getElementById("C07").innerHTML="👎";
        window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
        C07.disabled=true;
        C07.style.backgroundColor = "red"}
        
      function clickeC8(){
        mint();
        document.getElementById("C08").innerHTML="👎";
        window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
        C08.disabled=true;
        C08.style.backgroundColor = "red"}
        
      function clickeC9(){
        mint();
        document.getElementById("C09").innerHTML="👎";
        window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
        C09.disabled=true;
        C09.style.backgroundColor = "red"}
        
      function clickeC10(){
        mint();
        document.getElementById("C10").innerHTML="👎";
        window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
        C10.disabled=true;
        C10.style.backgroundColor = "red"}

      function clickeC11(){
        mint();
        document.getElementById("C11").innerHTML="👎";
        window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
        C11.style.backgroundColor = "red"}
        C11.disabled=true;

      function clickeC12(){
        mint();
        document.getElementById("C12").innerHTML="👎";
        window.open("http://127.0.0.1:5501/WindWaveMainPage/wave.html","","width=1000,height=500");
        C12.disabled=true;
        C12.style.backgroundColor = "red"}
      

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