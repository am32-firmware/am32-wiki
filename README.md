# Am32 Wiki

Some resources for using and developing with the am32 firmware.

## Introduction to AM32
AM32 is a modern 32 bit electronic speed controllers firmware targetting a wide range of MCUs.

Features are available for both multi-rotor and car or crawler usage.

* Stall protection for cars and crawlers
* Stuck rotor protection for multi-rotors
* Firmware upgradable via betaflight passthrough, or single wire serial or Arduino
* web configurator at [am32.ca](https://am32.ca)
* Servo PWM and Dshot300/600
* EDT for full Dshot telemetry via signal wires
* Sinusoidal startup mode for smoother starting on cars and crawlers



## Quick Links

### [Configuration Settings Explainer](docs\guides\ESC-Settings-Explained.md)
An explanation of all the options that can be configured with a programming card.

Further clarification is available [here](https://www.youtube.com/watch?v=wwYyp74oLa0&list=PLrxUiYCo7HwrIz1uE0aIfNT4GUgVMwc1t).

### [Custom ESC Programming Card](docs/guides/Arduino-PC-Link.md)
Turn an arduino into a programming card, which can connect to an esc and change the configuration.

### [Supported Hardware](docs\general\List-of-Supported-Hardware.md)
Some esc's and microcontrollers that are known to work

### [Flashing Guide](docs/guides/AM32--single-ESC-Flashing-Tutorial.md)
[Alternatively](docs\guides\Hacking-Guide.md) <br>
A general guide to flashing non-am32 esc's with the am32 firmware. Some more specific guides and resources are also available.
 - [SkyStars KM55A 4in1](docs\guides\Flashing-SkyStars-KM55A.md)
 - [Artery AT32F421 based esc's such as the Tekko32-45A](docs\guides\Flashing-Tekko32-45A-Single-ESC.md)


 ### [Standard Schematic](docs\development\standard_esc_1_1.pdf)
A reference schematic for am32 esc design.

Some discussion one hardware design can be found [here](docs\development\Hardware-Design.md).