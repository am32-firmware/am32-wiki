This is to give a quick overview of flash memory structure for uploading AM32 with a ST-LINK, no flight controller is needed.

You will need to have a working ST-LINK and a writeable ESC. If your speed controller has been write locked or read out protected you will need to use the ST-LINK to change option bytes of the MCU and erase the memory.

If the file ends with _FULL ( i.e. WRAITH32_CRAWLER_FULL.bin ) this is to be flashed to the base address of the MCU (0x0800000). This file will contain all the parts needed to fill the  memory. Only flash this single file.  

To fill the memory manually or in the case of custom builds.

There are three distinct sections of FLASH memory that are used by the firmware. These each need a binary uploaded to the correct memory address. The three files needed are the BOOTLOADER, TARGET_FIRMARE file and the DEFAULT_EEPROM file.

The BOOTLOADER area-- This occupies the first 4kb of memory, this communicates with the configuration tools and boots the main program if there is a valid input and EEPROM area. The bootloader version is dependent on the signal input pin used on the target ESC (PA2, PB4). See "list of supported hardware" in the wiki for details. [The bootloaders can be downloaded from here](https://github.com/AlkaMotors/AM32_Bootloader_F051/releases). Using ST-LINK upload the correct file to the mcus base memory address (0x08000000). 

The AM32_TARGET_FIRMWARE -- There are 27 kb set aside for the main app in the case of a 32kb mcu. This is the file that was downloaded from Github Releases for your specific speed controller. With the ST-LINK, this file is to be uploaded to memory address 0x08001000 ( 4 KB higher than base address). This is the only part of memory that gets updated when a new firmware version is released.

The EEPROM ( emulated in flash memory ) -- last 1kb,  A section of flash memory separate from the main app that contains the users settings. For a 32 Kb memory mcu like the f051 or f031 the default settings need to be uploaded to memory address 0x08007C00 ( 1kb from the end of flash ). For a 128 kb mcu like the G071 the default settings would be uploaded to 0x0801F800 and the eeprom is 2kb. Note, the main firmware will not start running without an eeprom.[The eeprom binary is located here](https://github.com/AlkaMotors/AM32-MultiRotor-ESC-firmware/blob/master/eeprom_version_1_7c00.bin)

Example command lines for the three-step flashing process (F051, PB4 bootloader):  
`st-flash --format='binary' write PB4_BOOTLOADER_V6.bin 0x08000000`  
`st-flash --format='ihex' write FD6288_1.69.hex`  
`st-flash --format='binary' write eeprom_version_1_7c00.bin 0x08007c00`  

If you want to create a firmware dump of your current ESC - including bootloader and eeprom (with your settings) on top of the actual application - you can do that, too. Here's an example for a device with 32 KB Flash:  
`st-flash --format='ihex' read dump.hex 0x08000000 0x8000`  

you can then flash that to a new ESC with  
`st-flash --format='ihex' write dump.hex`  
just like you could do it with a hex file ending with _FULL as described at the beginning of this page.