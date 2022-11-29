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



  //---------------------------------------------------//
  //-------------ADD CODE BELOW THIS LINE--------------//
  //---------------------------------------------------//


  displayPurchasedSeats();

  setInterval(function(){
    displayPurchasedSeats();
  }, 10000)

  async function displayPurchasedSeats() {

    let purchasedSeats = await contract.getSeats()

    purchasedSeats.forEach(seat => {

      $(`#${seat}`).css("background-color", "red");
      $(`#${seat}`).text("👎");
    })

    console.log("purchased seats: " + purchasedSeats);

  }

  // mint the seat
  $('.seat-button').click(function(){

    const seat = $(this).attr("id");
    $(this).text("👎");

    console.log(seat)
    mint(seat)
    window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  })

  //let mintedSeats = await contract.getSeats
  //for (mintedSeats){
  //  $()
  //}

  function mint(_seat) {
    contractWithSigner.safeMint(signerAddress, _seat);
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


//
  //function clickeA1(){
  //  mint();
  //  document.getElementById("A01").innerHTML="👎";
  //  // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //  A01.disabled=true;
  //  A01.style.backgroundColor = "red"
  //}
//
//
  //function clickeA2(){
  //  mint();
  //  document.getElementById("A02").innerHTML="👎";
  //  // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //  A02.disabled=true;
  //  A02.style.backgroundColor = "red"}
  // 
  //function clickeA3(){
  //  mint();
  //  document.getElementById("A03").innerHTML="👎";
  //  // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //  A03.disabled=true;
  //  A03.style.backgroundColor = "red"}
  //
  //function clickeA4(){
  //  mint();
  //  document.getElementById("A04").innerHTML="👎";
  //  // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //  A04.disabled=true;
  //  A04.style.backgroundColor = "red"}
  //
  //function clickeA5(){
  //  mint();
  //  document.getElementById("A05").innerHTML="👎";
  //  // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //  A05.disabled=true;
  //  A05.style.backgroundColor = "red"}
  //  
  //function clickeA6(){
  //  mint();
  //  document.getElementById("A06").innerHTML="👎";
  //  // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //  A06.disabled=true;
  //  A06.style.backgroundColor = "red"}
  //  
  //function clickeA7(){
  //  mint();
  //  document.getElementById("A07").innerHTML="👎";
  //  // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //  A07.disabled=true;
  //  A07.style.backgroundColor = "red"}
  //  
  //function clickeA8(){
  //  mint();
  //  document.getElementById("A08").innerHTML="👎";
  //  // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //  A08.disabled=true;
  //  A08.style.backgroundColor = "red"}
  //  
  //function clickeA9(){
  //  mint();
  //  document.getElementById("A09").innerHTML="👎";
  //  // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //  A09.disabled=true;
  //  A09.style.backgroundColor = "red"}
  //  
  //function clickeA10(){
  //  mint();
  //  document.getElementById("A10").innerHTML="👎";
  //  // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //  A10.disabled=true;
  //  A10.style.backgroundColor = "red"}

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

     // function clickeB1(){
     //   mint();
     //   document.getElementById("B01").innerHTML="👎";
     //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
     //   B01.disabled=true;
     //   B01.style.backgroundColor = "red"}
    //
     // function clickeB2(){
     //   mint();
     //   document.getElementById("B02").innerHTML="👎";
     //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
     //   B02.disabled=true;
     //   B02.style.backgroundColor = "red"}
     //  
     // function clickeB3(){
     //   mint();
     //   document.getElementById("B03").innerHTML="👎";
     //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
     //   B03.disabled=true;
     //   B03.style.backgroundColor = "red"}
     // 
     // function clickeB4(){
     //   mint();
     //   document.getElementById("B04").innerHTML="👎";
     //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
     //   B04.disabled=true;
     //   B04.style.backgroundColor = "red"}
     // 
     // function clickeB5(){
     //   mint();
     //   document.getElementById("B05").innerHTML="👎";
     //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
     //   B05.disabled=true;
     //   B05.style.backgroundColor = "red"}
     //   
     // function clickeB6(){
     //   mint();
     //   document.getElementById("B06").innerHTML="👎";
     //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
     //   B06.disabled=true;
     //   B06.style.backgroundColor = "red"}
     //   
     // function clickeB7(){
     //   mint();
     //   document.getElementById("B07").innerHTML="👎";
     //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
     //   B07.disabled=true;
     //   B07.style.backgroundColor = "red"}
     //   
     // function clickeB8(){
     //   mint();
     //   document.getElementById("B08").innerHTML="👎";
     //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
     //   B08.disabled=true;
     //   B08.style.backgroundColor = "red"}
     //   
     // function clickeB9(){
     //   mint();
     //   document.getElementById("B09").innerHTML="👎";
     //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
     //   B09.disabled=true;
     //   B09.style.backgroundColor = "red"}
     //   
     // function clickeB10(){
     //   mint();
     //   document.getElementById("B10").innerHTML="👎";
     //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
     //   B10.disabled=true;
     //   B10.style.backgroundColor = "red"}
//
     // function clickeB11(){
     //   mint();
     //   document.getElementById("B11").innerHTML="👎";
     //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
     //   B11.disabled=true;
     //   B11.style.backgroundColor = "red"}
     //   
//
     // function clickeB12(){
     //   mint();
     //   document.getElementById("B12").innerHTML="👎";
     //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
     //   B12.disabled=true;
     //   B12.style.backgroundColor = "red"}
//
     // function clickeB13(){
     //   mint();
     //   document.getElementById("B13").innerHTML="👎";
     //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
     //   B13.disabled=true;
     //   B13.style.backgroundColor = "red"}

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
   
      //function clickeC1(){
      //  mint();
      //  document.getElementById("C01").innerHTML="👎";
      //  // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
      //  //C01.disabled=true;
      //  //C01.style.backgroundColor = "red"}
    //
      //fu//nction clickeC2(){
      //  //// window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
      //  //mint();
      //  //C02.style.backgroundColor = "red"}
      //  //document.getElementById("C02").innerHTML="👎";
      //  //function clickeC3(){
      //  C02.disabled=true;
      //    document.getElementById("C03").innerHTML="👎";
      // 
      //  C03.disabled=true;
      //  mint();
      //  //
      //  //// window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
      //  //mint();
      //  //C03.style.backgroundColor = "red"}
      //  //// window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
      //fu//nction clickeC4(){
      //  //C04.style.backgroundColor = "red"}
      //  //document.getElementById("C04").innerHTML="👎";
      //  //function clickeC5(){
      //  C04.disabled=true;
      //    document.getElementById("C05").innerHTML="👎";
      //
      //  C05.disabled=true;
      //  mint();
      //  //
      //  //// window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
      //  //mint();
      //  //C05.style.backgroundColor = "red"}
      //  //// window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
      //fu//nction clickeC6(){
      //  //C06.style.backgroundColor = "red"}
      //  //document.getElementById("C06").innerHTML="👎";
      //  //function clickeC7(){
      //  C06.disabled=true;
      //    document.getElementById("C07").innerHTML="👎";
      //  
      //  C07.disabled=true;
      //  mint();
      //  //
      //  //// window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
      //  //mint();
      //  //C07.style.backgroundColor = "red"}
      //  //// window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
      //fu//nction clickeC8(){
      //  //C08.style.backgroundColor = "red"}
      //  //document.getElementById("C08").innerHTML="👎";
      //  //function clickeC9(){
      //  C08.disabled=true;
      //    document.getElementById("C09").innerHTML="👎";
      //  
//      //  C09.disabled=true;
//      //  mint();
//      //  
//      //  // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
//      //  mint();
//      //  C09.style.backgroundColor = "red"}
//      //  // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
//      //function clickeC10(){
//
//      //  document.getElementById("C10").innerHTML="👎";
//      //  C10.disabled=true;
//      //  mint();
//      //  C10.style.backgroundColor = "red"}
//      //  // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
//      //function clickeC11(){
//
      //  document.getElementById("C11").innerHTML="👎";
      //  C11.disabled=true;
      //  mint();
      //  C11.style.backgroundColor = "red"}
      //  // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
      //function clickeC12(){
      //  C12.style.backgroundColor = "red"}
      //  document.getElementById("C12").innerHTML="👎";
      //  C12.disabled=true;
      
     //D
    D01.onclick=clickeD1
    D02.onclick=clickeD2
    D03.onclick=clickeD3
    D04.onclick=clickeD4
    D05.onclick=clickeD5
    D06.onclick=clickeD6
    D07.onclick=clickeD7
    D08.onclick=clickeD8
    D09.onclick=clickeD9
    D10.onclick=clickeD10
    D11.onclick=clickeD11
    D12.onclick=clickeD12
    D13.onclick=clickeD13

    //  function clickeD1(){
    //    mint();
    //    document.getElementById("D01").innerHTML="👎";
    //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
    //    D01.disabled=true;
    //    D01.style.backgroundColor = "red"}
    //
    //  function clickeD2(){
    //    mint();
    //    document.getElementById("D02").innerHTML="👎";
    //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
    //    D02.disabled=true;
    //    D02.style.backgroundColor = "red"}
    //   
    //  function clickeD3(){
    //    mint();
    //    document.getElementById("D03").innerHTML="👎";
    //    // window.open("https://emair2.github.io/WindWave/NeverStop/wavee","","width=1000,height=500");
    //    D03.disabled=true;
    //    D03.style.backgroundColor = "red"}
    //  
    //  function clickeD4(){
    //    mint();
    //    document.getElementById("D04").innerHTML="👎";
    //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
    //    D04.disabled=true;
    //    D04.style.backgroundColor = "red"}
    //  
    //  function clickeD5(){
    //    mint();
    //    document.getElementById("D05").innerHTML="👎";
    //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
    //    D05.disabled=true;
    //    D05.style.backgroundColor = "red"}
    //    
    //  function clickeD6(){
    //    mint();
    //    document.getElementById("D06").innerHTML="👎";
    //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
    //    D06.disabled=true;
    //    D06.style.backgroundColor = "red"}
    //    
    //  function clickeD7(){
    //    mint();
    //    document.getElementById("D07").innerHTML="👎";
    //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
    //    D07.disabled=true;
    //    D07.style.backgroundColor = "red"}
    //    
    //  function clickeD8(){
    //    mint();
    //    document.getElementById("D08").innerHTML="👎";
    //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
    //    D08.disabled=true;
    //    D08.style.backgroundColor = "red"}
    //    
    //  function clickeD9(){
    //    mint();
    //    document.getElementById("D09").innerHTML="👎";
    //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
    //    D09.disabled=true;
    //    D09.style.backgroundColor = "red"}
    //    
    //  function clickeD10(){
    //    mint();
    //    document.getElementById("D10").innerHTML="👎";
    //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
    //    D10.disabled=true;
    //    D10.style.backgroundColor = "red"}
//
    //  function clickeD11(){
    //    mint();
    //    document.getElementById("D11").innerHTML="👎";
    //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
    //    D11.disabled=true;
    //    D11.style.backgroundColor = "red"}
//
    //  function clickeD12(){
    //    mint();
    //    document.getElementById("D12").innerHTML="👎";
    //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
    //    D12.disabled=true;
    //    D12.style.backgroundColor = "red"}
//
    //  function clickeD13(){
    //    mint();
    //    document.getElementById("D13").innerHTML="👎";
    //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
    //    D13.disabled=true;
    //    D13.style.backgroundColor = "red"}

 //E
 E01.onclick=clickeE1
 E02.onclick=clickeE2
 E03.onclick=clickeE3
 E04.onclick=clickeE4
 E05.onclick=clickeE5
 E06.onclick=clickeE6
 E07.onclick=clickeE7
 E08.onclick=clickeE8
 E09.onclick=clickeE9
 E10.onclick=clickeE10
 E11.onclick=clickeE11
 E12.onclick=clickeE12

 //  function clickeE1(){
 //    mint();
 //    document.getElementById("E01").innerHTML="👎";
 //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
 //    E01.disabled=true;
 //    E01.style.backgroundColor = "red"}
 //
 //  function clickeE2(){
 //    mint();
 //    document.getElementById("E02").innerHTML="👎";
 //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
 //    E02.disabled=true;
 //    E02.style.backgroundColor = "red"}
 //   
 //  function clickeE3(){
 //    mint();
 //    document.getElementById("E03").innerHTML="👎";
 //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
 //    E03.disabled=true;
 //    E03.style.backgroundColor = "red"}
 //  
 //  function clickeE4(){
 //    mint();
 //    document.getElementById("E04").innerHTML="👎";
 //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
 //    E04.disabled=true;
 //    E04.style.backgroundColor = "red"}
 //  
 //  function clickeE5(){
 //    mint();
 //    document.getElementById("E05").innerHTML="👎";
 //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
 //    E05.disabled=true;
 //    E05.style.backgroundColor = "red"}
 //    
 //  function clickeE6(){
 //    mint();
 //    document.getElementById("E06").innerHTML="👎";
 //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
 //    E06.disabled=true;
 //    E06.style.backgroundColor = "red"}
 //    
 //  function clickeE7(){
 //    mint();
 //    document.getElementById("E07").innerHTML="👎";
 //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
 //    E07.disabled=true;
 //    E07.style.backgroundColor = "red"}
 //    
 //  function clickeE8(){
 //    mint();
 //    document.getElementById("E08").innerHTML="👎";
 //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
 //    E08.disabled=true;
 //    E08.style.backgroundColor = "red"}
 //    
 //  function clickeE9(){
 //    mint();
 //    document.getElementById("E09").innerHTML="👎";
 //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
 //    E09.disabled=true;
 //    E09.style.backgroundColor = "red"}
 //    
 //  function clickeE10(){
 //    mint();
 //    document.getElementById("E10").innerHTML="👎";
 //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
 //    E10.disabled=true;
 //    E10.style.backgroundColor = "red"}
//
 //  function clickeE11(){
 //    mint();E
 //    document.getElementById("E11").innerHTML="👎";
 //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
 //    E11.disabled=true;
 //    E11.style.backgroundColor = "red"}

 //  function clickeE12(){
 //    mint();
 //    document.getElementById("E12").innerHTML="👎";
 //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
 //    E12.disabled=true;
 //    E12.style.backgroundColor = "red"}
   
  //F
 F01.onclick=clickeF1
 F02.onclick=clickeF2
 F03.onclick=clickeF3
 F04.onclick=clickeF4
 F05.onclick=clickeF5
 F06.onclick=clickeF6
 F07.onclick=clickeF7
 F08.onclick=clickeF8
 F09.onclick=clickeF9
 F10.onclick=clickeF10
 F11.onclick=clickeF11
 F12.onclick=clickeF12
 F13.onclick=clickeF13

  // function clickeF1(){
  //   mint();
  //   document.getElementById("F01").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   F01.disabled=true;
  //   F01.style.backgroundColor = "red"}
 //
  // function clickeF2(){
  //   mint();
  //   document.getElementById("F02").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   F02.disabled=true;
  //   F02.style.backgroundColor = "red"}
  //  
  // function clickeF3(){
  //   mint();
  //   document.getElementById("F03").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   F03.disabled=true;
  //   F03.style.backgroundColor = "red"}
  // 
  // function clickeF4(){
  //   mint();
  //   document.getElementById("F04").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   F04.disabled=true;
  //   F04.style.backgroundColor = "red"}
  // 
  // function clickeF5(){F
  //   mint();
  //   document.getElementById("F05").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   F05.disabled=true;
  //   F05.style.backgroundColor = "red"}
  //   
  // function clickeF6(){
  //   mint();
  //   document.getElementById("F06").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   F06.disabled=true;
  //   F06.style.backgroundColor = "red"}
  //   
  // function clickeF7(){
  //   mint();
  //   document.getElementById("F07").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   F07.disabled=true;
  //   F07.style.backgroundColor = "red"}
  //   
  // function clickeF8(){
  //   mint();
  //   document.getElementById("F08").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   F08.disabled=true;
  //   F08.style.backgroundColor = "red"}
  //   
  // function clickeF9(){
  //   mint();
  //   document.getElementById("F09").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   F09.disabled=true;
  //   F09.style.backgroundColor = "red"}
  //   
  // function clickeF10(){
  //   mint();
  //   document.getElementById("F10").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   F10.disabled=true;
  //   F10.style.backgroundColor = "red"}
//
  // function clickeF11(){
  //   mint();
  //   document.getElementById("F11").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   F11.disabled=true;
  //   F11.style.backgroundColor = "red"}
//
  // function clickeF12(){
  //   mint();
  //   document.getElementById("F12").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   F12.disabled=true;
  //   F12.style.backgroundColor = "red"}
//
  // function clickeF13(){
  //   mint();
  //   document.getElementById("F13").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   F13.disabled=true;
  //   F13.style.backgroundColor = "red"}
//
   //G
 G01.onclick=clickeG1
 G02.onclick=clickeG2
 G03.onclick=clickeG3
 G04.onclick=clickeG4
 G05.onclick=clickeG5
 G06.onclick=clickeG6
 G07.onclick=clickeG7
 G08.onclick=clickeG8
 G09.onclick=clickeG9
 G10.onclick=clickeG10
 G11.onclick=clickeG11
 G12.onclick=clickeG12

  // function clickeG1(){
  //   mint();
  //   document.getElementById("G01").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   G01.disabled=true;
  //   G01.style.backgroundColor = "red"}
 //
  // function clickeG2(){
  //   mint();
  //   document.getElementById("G02").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   G02.disabled=true;
  //   G02.style.backgroundColor = "red"}
  //  
  // function clickeG3(){
  //   mint();
  //   document.getElementById("G03").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   G03.disabled=true;
  //   G03.style.backgroundColor = "red"}
  // 
  // function clickeG4(){
  //   mint();
  //   document.getElementById("G04").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   G04.disabled=true;
  //   G04.style.backgroundColor = "red"}
  // 
  // function clickeG5(){
  //   mint();
  //   document.getElementById("G05").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   G05.disabled=true;
  //   G05.style.backgroundColor = "red"}
  //   
  // function clickeG6(){
  //   mint();
  //   document.getElementById("G06").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   G06.disabled=true;
  //   G06.style.backgroundColor = "red"}
  //   
  // function clickeG7(){
  //   mint();
  //   document.getElementById("G07").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   G07.disabled=true;
  //   G07.style.backgroundColor = "red"}
  //   
  // function clickeG8(){
  //   mint();
  //   document.getElementById("G08").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   G08.disabled=true;
  //   G08.style.backgroundColor = "red"}
  //   
  // function clickeG9(){
  //   mint();
  //   document.getElementById("G09").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   G09.disabled=true;
  //   G09.style.backgroundColor = "red"}
  //   
  // function clickeG10(){
  //   mint();
  //   document.getElementById("G10").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   G10.disabled=true;
  //   G10.style.backgroundColor = "red"}
//
  // function clickeG11(){
  //   mint();E
  //   document.getElementById("G11").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   G11.disabled=true;
  //   G11.style.backgroundColor = "red"}
//
  // function clickeG12(){
  //   mint();
  //   document.getElementById("G12").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   G12.disabled=true;
  //   G12.style.backgroundColor = "red"}

   //H
 H01.onclick=clickeH1
 H02.onclick=clickeH2
 H03.onclick=clickeH3
 H04.onclick=clickeH4
 H05.onclick=clickeH5
 H06.onclick=clickeH6
 H07.onclick=clickeH7
 H08.onclick=clickeH8
 H09.onclick=clickeH9
 H10.onclick=clickeH10
 H11.onclick=clickeH11
 H12.onclick=clickeH12

 //  function clickeH1(){
 //    mint();
 //    document.getElementById("H01").innerHTML="👎";
 //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
 //    H01.disabled=true;
 //    H01.style.backgroundColor = "red"}
 //
 //  function clickeH2(){
 //    mint();
 //    document.getElementById("H02").innerHTML="👎";
 //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
 //    H02.disabled=true;
 //    H02.style.backgroundColor = "red"}
 //   
 //  function clickeH3(){
 //    mint();
 //    document.getElementById("H03").innerHTML="👎";
 //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
 //    H03.disabled=true;
 //    H03.style.backgroundColor = "red"}
 //  
 //  function clickeH4(){H
 //    mint();
 //    document.getElementById("H04").innerHTML="👎";
 //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
 //    H04.disabled=true;
 //    H04.style.backgroundColor = "red"}
 //  
 //  function clickeH5(){
 //    mint();
 //    document.getElementById("H05").innerHTML="👎";
 //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
 //    H05.disabled=true;
 //    H05.style.backgroundColor = "red"}
 //    
 //  function clickeH6(){
 //    mint();
 //    document.getElementById("H06").innerHTML="👎";
 //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
 //    H06.disabled=true;
 //    H06.style.backgroundColor = "red"}
 //    
 //  function clickeH7(){
 //    mint();
 //    document.getElementById("H07").innerHTML="👎";
 //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
 //    H07.disabled=true;
 //    H07.style.backgroundColor = "red"}
 //    
 //  function clickeH8(){
 //    mint();
 //    document.getElementById("H08").innerHTML="👎";
 //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
 //    H08.disabled=true;
 //    H08.style.backgroundColor = "red"}
 //    
 //  function clickeH9(){
 //    mint();
 //    document.getElementById("H09").innerHTML="👎";
 //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
 //    H09.disabled=true;
 //    H09.style.backgroundColor = "red"}
 //    
 //  function clickeH10(){
 //    mint();
 //    document.getElementById("H10").innerHTML="👎";
 //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
 //    H10.disabled=true;
 //    H10.style.backgroundColor = "red"}
//
 //  function clickeH11(){
 //    mint();E
 //    document.getElementById("H11").innerHTML="👎";
 //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
 //    H11.disabled=true;
 //    H11.style.backgroundColor = "red"}
//
 //  function clickeH12(){
 //    mint();
 //    document.getElementById("H12").innerHTML="👎";
 //    // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
 //    H12.disabled=true;
 //    H12.style.backgroundColor = "red"}
//
      //I
 I01.onclick=clickeI1
 I02.onclick=clickeI2
 I03.onclick=clickeI3
 I04.onclick=clickeI4
 I05.onclick=clickeI5
 I06.onclick=clickeI6
 

  // function clickeI1(){
  //   mint();
  //   document.getElementById("I01").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   I01.disabled=true;
  //   I01.style.backgroundColor = "red"}
 //
  // function clickeI2(){
  //   mint();
  //   document.getElementById("I02").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   I02.disabled=true;
  //   I02.style.backgroundColor = "red"}
  //  
  // function clickeI3(){
  //   mint();
  //   document.getElementById("I03").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   I03.disabled=true;
  //   I03.style.backgroundColor = "red"}
  // 
  // function clickeI4(){
  //   mint();
  //   document.getElementById("I04").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   I04.disabled=true;
  //   I04.style.backgroundColor = "red"}
  // 
  // function clickeI5(){
  //   mint();
  //   document.getElementById("I05").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   I05.disabled=true;
  //   I05.style.backgroundColor = "red"}
  //   
  // function clickeI6(){
  //   mint("I6");
  //   document.getElementById("I06").innerHTML="👎";
  //   // window.open("https://emair2.github.io/WindWave/NeverStop/wave","","width=1000,height=500");
  //   I06.disabled=true;
  //   I06.style.backgroundColor = "red"}
   
  

  // async function showTotalSupply() {
  //   const totalSupply = await contract.totalSupply();
  //   totalSupplyDisplay.textContent = "" + totalSupply;
  // }

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