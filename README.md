# Am32 Wiki

This is not the am32 wiki, this repository is built into a website through the use of [VitePress](https://vitepress.dev/) and hosted on [Netlify](https://www.netlify.com/).


This wiki is intended to be viewed at: https://wiki.am32.ca/


## Setting up a local environment

If you wish to contribute to the wiki it is always appreciated. To do so you will probably want to be able to view changes as they are made. To do this clone the repository locally, ensure you have Node.js (and npm) installed. You should then be able host it locally by running: 
`npm run dev`

The local host should update automatically for in file changes, but some changes such as file changes require a restart of the local host.


## Quick Links

While this isn't the intended way to access the documentation, if you wish some of the more useful pages are available here.

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