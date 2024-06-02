# Crawler Single ESC Flashing Tutorial

Updated: August/24/2021

These instruction are designed with a single esc for RC crawlers in mind, but the steps are basically the same for quadcopter use. For a 4in1 ESC you will need to connect and program each of the 4 ESC's individually.

## Step 1: Gather your supplies

* You’re going to need a [compatible ESC](https://github.com/AlkaMotors/AM32-MultiRotor-ESC-firmware/wiki/List-of-Supported-Hardware) ( I am using am Airbot Wraith32 )
* ST-link v2 programmer with jumper wires
* soldering Iron with a small tip
* wires
* Battery plug
* non acid flux
* computer ( I use Windows 10, but it can be done on Linux as well, possibly on a Mac to but I am not sure )

Optional supplies:

* a magnifying glass, or a good zoom app for your phone camera, I use open camera (for android) because it doesn’t fall asleep.
* [Dupont Crimpers and Plugs](https://smile.amazon.com/QLOUNI-Crimping-Housing-Connector-Assortment/dp/B07DZB8NDW/ref=sr_1_12?dchild=1&keywords=dupont+crimper+plug&qid=1622790435&sr=8-12) Alternativly you can cut one of these off an old servo or something.

[[https://github.com/Voodoobrew101/Media/blob/main/stlink.png|alt=stlink]]

## Step 2: Soldering

[[https://github.com/Voodoobrew101/Media/blob/main/Wraith32-35A.png|alt=wraith32]]

We need some tiny wire, I use stranded silicone 26awg wire.

Solder wires 26g to:

![#ffff00](https://via.placeholder.com/15/ffff00/000000?text=+)SWD ( SWDIO ),

![#66cc66](https://via.placeholder.com/15/66cc66/000000?text=+)SWC ( SWCLK )

An alternative to soldering to the tiny SWD and SWC pads is to make a harness and use pogo pins like this [POGO Pin demo](https://youtu.be/yZ-45muuTCs)

![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+)PWM,

![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+)+ ( POS, main positive power in for ESC ) and

![#000000](https://via.placeholder.com/15/000000/000000?text=+)- ( GND, main negative power in for ESC ).

Also Solder larger Battery wires (14g to 18g) to:

![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+)+ ( POS, main positive power in for ESC ) and

![#000000](https://via.placeholder.com/15/000000/000000?text=+)- ( GND, main negative power in for ESC ).

and attach a battery plug.

Attach a motor wire to each of the 3 motor terminals on the opposite side and add plugs as well.

Your esc should look something like this ( I have also installed an optional 2 pin JST RCY plug for a direct power servo )

[[https://github.com/Voodoobrew101/Media/blob/main/20210604_001741b.jpg|alt=ST-Link connected]]

Note how the ST-link in this picture has the terminals in a different order, Make sure you use the proper order for your device.

## Step 3: Download and install Software

[STM32CubeProgrammer](https://www.st.com/en/development-tools/stm32cubeprog.html#get-software)
We need this to disable write protection on the Option bytes, and to load the firmware.

You may see images of the older version of this software [STM32 ST-LINK utility](https://www.st.com/content/st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stsw-link004.html) Either software will work about the same, mostly the difference is the user interface.

I think you need to register or something to download the software, but it's free, no credit card, just an annoyance.

## Step 4: Download the Firmware

There are 3 pieces of firmware to upload to the ESC

* **The bootloader:** Use the [List of Supported Hardware](https://github.com/AlkaMotors/AM32-MultiRotor-ESC-firmware/wiki/List-of-Supported-Hardware) To determine Which bootloader is right for your esc. Download the appropriate bootloader for your esc. [Bootloader Downloads](https://github.com/AlkaMotors/AM32_Bootloader_F051/releases) and [Newer Experimental Bootloader Downloads](https://github.com/AlkaMotors/AM32-MultiRotor-ESC-firmware/tree/experimental/Release)
* **The Firmware:** Download the appropriate firmware for your ESC [Firmware Downloads](https://github.com/AlkaMotors/AM32-MultiRotor-ESC-firmware/releases/)
* **The eeprom:** which stores your settings [The eeprom binary is located here](https://github.com/AlkaMotors/AM32-MultiRotor-ESC-firmware/blob/master/eeprom_version_1_7c00.bin)

Alternatively if you are using a wraith32 esc for a RC crawler you can download a full firmware file from [Voodoobrew's google drive](https://drive.google.com/drive/folders/1ggvkWlLNjDMoB1ryCYy4fE_xQ2l5m2cL?usp=sharing), these file end with _FULL ( i.e. WRAITH32_CRAWLER_FULL.bin ) and they include all 3 of the previous files.

## Step 5: Connect ST-programmer

Relatively straight forward, make sure you have your wires in the right locations.

![ST-Link Connections](https://github.com/Voodoobrew101/Media/blob/main/Flash%20Bootloader800.png?raw=true)

3 wires connect the ESC to the ST-Link

![#ffff00](https://via.placeholder.com/15/ffff00/000000?text=+)SWD (SWDIO),

![#66cc66](https://via.placeholder.com/15/66cc66/000000?text=+)SWC (SWCLK) and

![#000000](https://via.placeholder.com/15/000000/000000?text=+)- (GND).

2 wires connect the battery to the ESC

![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+)+ (POS, 5.0v) and

![#000000](https://via.placeholder.com/15/000000/000000?text=+)- (GND).

Plug the USB on the ST-Link into the Computer

## Step 6: STM32CubeProgrammer

With your ESC and ST-Link connected, open STM32CubeProgrammer and click the green connect button in the upper right corner.

### Erasing the BLHeli32 firmware from the ESC

<img src="https://github.com/Voodoobrew101/Media/blob/main/Stop_sign.png" data-canonical-src="https://github.com/Voodoobrew101/Media/blob/main/Stop_sign.png" width="200" height="200" />

```diff
- (This is a point of no return! There will be no way to re-upload BLHeli32 back to the esc once erased)
```

1. Click on OB (Option bytes)

2. Select “Read Out Protection” and Set to AA ( AKA level 0 )

3. Select “Write Protection” and check all the empty boxes, scroll through, get them all and click apply.

4. Now do a full chip memory erase

![](https://i.ibb.co/R3M3tJZ/read-out-prot.jpg)

5. Select Erasing & Programming from the left

6. Browse for the firmware you just downloaded

7. Set the start address to 0x08000000 if it isn’t already

* Bootloaders and _FULL.bins are uploaded to 0x08000000
* Target firmware and _PART.bins are uploaded to 0x08001000
* EEPROM binary for f051 or f031 chips are uploaded to 0x08007C00
* Tip: It is safer and easier to upload the Firmware Target with the configuration tool with an Arduino or Flight controller, then upload default EEPROM settings by clicking "Send Default Settings"
* Note: the esc will not work without uploading EEPROM settings
* Note: The _FULL.bin files contain the Bootloader, EEPROM and Target files.

8. Check the Skip flash erase before programming box if it isn’t already ( You dont want to erase your previous uploads if you are loading the files Individually )

9. Check the verify programming box if it isn’t already ( optional )

10. Click Start Programming to upload the file.

![](https://i.ibb.co/Tk3yTqW/cube2a.jpg)

Repeat the above steps for each file, uploading it the the appropriate destination address in part 7.

Alternatively you can continue on to the Configuration tool and upload the latest Firmware and Change settings.

Directions for Connecting to the configuration tool can be found [Here.](https://github.com/AlkaMotors/AM32-MultiRotor-ESC-firmware/wiki/Arduino-PC-Link)

[
![Arduino Connections and Changing Settings](https://github.com/Voodoobrew101/Media/blob/main/Flash%20Firmware-2.png?raw=true)
](https://github.com/AlkaMotors/AM32-MultiRotor-ESC-firmware/wiki/Arduino-PC-Link)

## Step x: Testing

At this point you should have a functional ESC. [The settings can be adjusted later using this Tutorial for an Arduino PC Link.](https://github.com/AlkaMotors/AM32-MultiRotor-ESC-firmware/wiki/Arduino-PC-Link) You should be able to connect a motor and power it on to hear startup beeps and arming tones if you also connected a receiver.

## Step xx: Unsoldering

We will no longer need the

![#ffff00](https://via.placeholder.com/15/ffff00/000000?text=+)SWD (SWDIO) and  

![#66cc66](https://via.placeholder.com/15/66cc66/000000?text=+)SWC (SWCLK) Wires

So you can now remove them.

This esc was not designed to power a servo, so only run the ground and PWM to your receiver.
You can use a tiny BEC like [This one](https://smile.amazon.com/dp/B0758ZTS61/ref=cm_sw_em_r_mt_dp_T6Z1Y24FRC8XG9NBDECP?_encoding=UTF8&psc=1) to power the receiver ( or a larger one [like this Castle BEC](https://www.castlecreations.com/en/bec-voltage-regulators-1/cc-bec-010-0004-00) if you also want to power a servo ).

Connect all this to your RC car

At this point you can try your hand at building your own firmware
<https://youtu.be/Gtim9Y21_lc>

That’s about it…
