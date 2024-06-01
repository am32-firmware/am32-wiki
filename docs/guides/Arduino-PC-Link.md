# Creating a PC Link to AM32 using an Arduino.

I use the cheapest Arduino Nano's that I can find. They use the a ATmega328P chip but other chips also may work with Method 1. For example [these amazon recommended ones will work fine.](https://www.amazon.com/REXQualis-Board-ATmega328P-Compatible-Arduino/dp/B07WK4VG58/ref=sr_1_3?dchild=1&keywords=arduino+nano&qid=1622050608&s=electronics&sr=1-3). You can also find Nano's with different USB plug types that suit your preference, they all work the same. 

You want to connect the Signal/PWM from the ESC the pin D3 on the Arduino Nano and Ground to Ground (I know they call it one wire but there are 2 😄 

![](https://i.ibb.co/7NFNgqv/20210526-111526.jpg)

**Note:** Some of these cheap Arduino Nano's come with a different (Older) bootloader, but its no big deal, both of these methods will work with either bootloader. 

Here are 2 ways to create an Arduino pc link. 

Method 1 is probably the easiest way

## Method 1 using BLHeli32 software

First go to https://www.mediafire.com/folder/dx6kfaasyo24l/BLHeliSuite to download the **BLHeliSuite** software for your OS and then install it.

1) After installation is complete open the BLHeliSuite software and navigate to the Tab labeled "Make interfaces"

2) Plug in your Arduino, check to make sure that it shows up in your computer ports and select it. 

3) Select your board from the dropdown list, The Arduino Nano may be "Nano w/ ATmega328 (new Bootloader)" or "Nano w/ ATmega328 (old Bootloader)"

4) Select Arduino BLHheli Bootloader to create a one wire interface.

5) Double check that your settings are all correct and click the button labeled "Arduino BLHeli Bootloader" and click confirm to program your Arduino.

![](https://i.ibb.co/dfYYVbS/Arduino-Interface.jpg)

## Method 2 using Arduino IDE

Learning to use an Arduino is fun and challenging. I highly recommend using Arduino IDE to get your feet wet in the programming world.
Here is a link to the BLHheli 1wire code that you can upload to your Arduino [AM32pin3Link.ino](https://drive.google.com/file/d/1mNtyFT8vCCuluOSboFM-9JDNLDlwlLS8/view?usp=sharing).

This is slightly more involved then I can thoroughly explain right now. Basically after installing the Arduino IDE you will probably need to go into tools>Boards manager and install the drivers for your Arduino board, then again in the tools menu select your board, bootloader and port. Double clicking on the .ino file should import it directly then you verify and upload it.

## Using the Arduino PC Link with AM32 config Tool

You must use version 1.67 of The [Multi ESC Config tool ](https://drive.google.com/file/d/1XACXV4w1ldtp71KJtZOjKVYttHv50o5C/view) or higher. 

![Arduino Connections](https://github.com/Voodoobrew101/Media/blob/main/Flash%20Firmware800.png?raw=true)

Connect your programed Arduino PC Link to your PC's USB port. 

Connect your ESC to your Arduino PC Link using PWM on the ESC to pin D3 on the Arduino and ground to ground.

Connect your battery or power supply to the main ESC power terminals.

Open the ESC Config Tool. 

1) Check Direct Connect when using an Arduino PC Link (not when using a flight controller interface).

2) Select your Arduino Port.

3) Click the Connect Button.

4) Read the ESC settings using the M1 button.

Now you can adjust your settings, change tabs and upload new firmware, or load default eeprom settings.

5) When your done save your settings.

To double check that your settings were applied, close the connection then re-connect and hit M1 again.

![](https://i.ibb.co/52Z3gqT/ESC-Config-Tool.jpg)

For a Crawler you want to:
* Reverse rotation is optional
* Have Complementary PWM on
* Variable PWM is optional
* Bi-direction should be selected to have forward and reverse
* Stuck Rotor Protection should be off
* Brake on stop is optional
* Stall protection is optional, recommended is on
* Sinusoidal Startup is optional, recommended is on for slower startup