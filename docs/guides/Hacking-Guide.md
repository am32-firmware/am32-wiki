# How to flash AM32 firmware on BLHeli_32 hardware

Disclaimer: This process is irreversible and will cause your ESC to permanently lose the ability to FLASH BLHeli_32 FIRMWARE BACK. Please do this at your own risks!

## Step 1: Prepare all necessary tools/hardware

You need:

* ST-Link V2 or newer
* Some wires
* Capable ESCs (Check here for more infomation)

## Step 2: Connect your MCU to ST-Link with SWD interface

The SWD interface is used to remove readout protection and flash a new bootloader into the MCU later.

It is recommended to only connect SWCLK, SWDIO and GND to your ST-Link, and use an external power supply for the ESCs to prevent insufficient voltage to cause flashing faliure.

## Step 3: Remove readout protection

Since the BLHeli_32 firmware has enabled the readout protection of the SWD port, we can't directly connect to the MCU.

So we need to remove the readout protection of the MCU first with the following procedure:

1. Connect the ST-Link to you computer;
2. Open "STM32 ST-Link Utility" software;
3. Click "Target" and select the "Option Bytes..."
4. Set as shown in the figure below.

![Option Bytes](https://i.imgur.com/8zAAC85.jpg)

5. Click "Apply"
6. After erasing is complete, click "Connect", then you should be able to read the information of the MCU. Do verify that the program in the MCU has been erased completely.

## Step 4: Flash AM32 bootloader

In order to update to future versions of firmware easily, you need to flash the AM32 bootloader (IAP) into your MCU firstly. Don't disconnect your ST-Link now, we still need it.

1. Download the bootloader for your ESC's pinmap
2. Load it in "STM32 ST-Link Utility"
3. Flash it!

## Step 5: Flash AM32 firmware

Now you have AM32 loaded on your chip. You can hook your ESCs up with you flight controller now. Open the "ESC config tools"(download here).

Select the correct COM port for your flight controller. Connect.

You should have this "GOOD ACK" message at the top of the landing page.

Now turn to the "Flash" tab, "Load firmware" and then select the right firmware for you ESC.

After the process bar full, click "send default EEPROM settings" this button at the bottom.

And then turn to the "Settings" tab, you should have the settings and parameters for you ESCs.

Now you get the AM32 running on your ESC!
