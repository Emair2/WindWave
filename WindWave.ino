#include <Wire.h>
const int buttonPin = 2; 
const int ledPin = 13;   

int buttonState = 0;
int incomingByte; // a variable to read incoming serial data into 

void setup() {
  Wire.begin();  
  Serial.begin(9600);
  //delay(3000);
  pinMode(buttonPin, INPUT_PULLUP);
  pinMode(ledPin, OUTPUT);
  poweroff();
}

unsigned char  tx1_data[15] = {0xFA,0x01,0x61,0x94,0x00,0x14,0x61,0x94,0x00,0x14,0x01,0x01,0x1E,0x1E,0xAF};
unsigned char  i = 10;
unsigned char Val1_1 = 2;
unsigned char Val1_2 = 2;


void loop(){
  // see if there's incoming serial data:
 
if (Serial.available() > 0) {
// read the oldest byte in the serial buffer:
incomingByte = Serial.read();
  //buttonState = digitalRead(buttonPin);
   if (incomingByte == 'H' ) {
   //|| buttonState == LOW) {
    digitalWrite(ledPin, HIGH);
    Serial.println("on");
    power(); 
    delay(300);
    digitalWrite(ledPin, LOW);
    Serial.println("off");
    poweroff(); 
  } else if (incomingByte == 'L' ){
  //|| buttonState == HIGH){
    digitalWrite(ledPin, LOW);
    Serial.println("off");
    //poweroff(); 
  } 
}
}

void power() {
     
      tx1_data[10] = 1;
      tx1_data[11] = 1; 
      Val1_1  = 10;
      Val1_2  = 10;
      for(int i = 0;i<10;i++)
      {
        Val1_1 = Val1_1+5;
        Val1_2 = Val1_2+5;
        tx1_data[12] = Val1_1;
        tx1_data[13] = Val1_2;
        Wire.beginTransmission(0x01);     // 向地址为8的从机传送数据
        Wire.write(tx1_data,15); 
        Wire.endTransmission();       // 结束传送
       // Serial.print("Val:");
        //Serial.println(Val1_1);
        delay(300);
      }


}

void poweroff() {
     
      tx1_data[10] = 0;
      tx1_data[11] = 0; 
      Val1_1  = 10;
      Val1_2  = 10;
      for(int i = 0;i<10;i++)
      {
        Val1_1 = Val1_1+5;
        Val1_2 = Val1_2+5;
        tx1_data[12] = Val1_1;
        tx1_data[13] = Val1_2;
        Wire.beginTransmission(0x01);     // 向地址为8的从机传送数据
        Wire.write(tx1_data,15); 
        Wire.endTransmission();       // 结束传送
        //Serial.print("Val:");
        //Serial.println(Val1_1);
        delay(100);
      }


}
