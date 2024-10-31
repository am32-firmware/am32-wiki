# Hardware Design


## Mosfet Selection

The current capacity of the mosfet should be significantly more than the designed current draw of the esc. The rapidly pulsing currents present will result in worse performance of the mosfet.

Lower gate charges can reduce switching times. Lower on resistance will reduce wasted power and excessive heating.


## Bootstrap Circuitry

The gate driver helps switch the mosfets on, but it still needs help from the bootstrap circuitry. These components help bias the mosfet so that there is less of a voltage difference between the terminals, making it easier to switch on. Texas Instruments has a helpful guide on selecting some of these components which is available [here](https://www.ti.com/lit/an/slua887a/slua887a.pdf?ts=1729675183828&ref_url=https%253A%252F%252Fduckduckgo.com%252F).


## Main Capacitor

It is normally reccomended to use a large capacitor onboard or nearby due to the rapidly switched currents. The required size of this capacitor will vary depending on the expected use of the esc (and hardware?). You should ensure you're using capacitors with low ESR (Equivalent series resistance) and high ripple currents.

The best size of this capacitor may require testing to determine, looking at existing similar esc's (including not am32) can give some insight into what works.


## Back EMF

The esc works out where the motor is by measuring the back emf induced in the coils by the rotation of the motor. This is achieved by measuring the input voltages to the motor coils. These voltages can be up to (or in some cases exceed) the voltage supplied by the battery, so they cannot be read directly by the microcontroller. You need to use a voltage divider to reduce the voltage to a level the microcontroller can safely accept. 

A lower reduction and high precision resistors will give more accurate results.

### Back EMF Common
??
Some sort of average of the three motor coils, I think the resitors are inteded for current limiting.

## Telemetry

An am32 esc can output telemetry signals, which can be picked up and read by flight controllers or other devices. Telemetry, as well as related components such as voltage and current sensingcan be left out without impacting performance.

