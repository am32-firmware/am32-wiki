# Flashing Skystars KM55A

Connect ST-Link GND to ESC main GND pad (negative battery terminal) and power ESC via battery pads to flash.

Connect ST-Link SWD/SWCLK to the following pads in turn and flash each ESC on the 4in1:

|Motor| SWDIO | SWCLK |
| --- | --- | --- |
| 4 | A | B |
| 2 | C | D |
| 3 | F | E |
| 1 | H | I |

![image](https://user-images.githubusercontent.com/7933842/163869943-f8d1a6a9-8f77-4aec-966b-0401a8f1819a.png)

Overall flashing process is as described in [https://github.com/AlkaMotors/AM32-MultiRotor-ESC-firmware/wiki/Crawler-AM32--single-ESC-Flashing-Tutorial#step-6-stm32cubeprogrammer]
