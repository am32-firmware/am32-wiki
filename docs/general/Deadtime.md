# Deadtime

## What's deadtime and why do we need it?

Each motor phase can be connected to battery voltage (VBat) and to ground (Gnd) through a FET. We call the one that connects to VBat the "high side FET" and the one to Gnd the "low side FET". Only one of them may conduct at any given time: if both FETs conduct, they would short VBat to Gnd, and that would cause a short and usually destroy the FETs. We cannot turn one FET on at exactly the same time that we turn the other off, because both turn-on and turn-off are processes that take a little time. Having both FETs conduct at the same time can be avoided by monitoring the switch node voltage or by simply waiting a bit between switching off one of the FETs and switching on the other. This waiting period is called deadtime.

Deadtime affects the overall performance of the ESC, so a short deadtime is desirable. How much deadtime an ESC needs depends on many factors, including the FETs themselves, the gate driver, their auxiliary components and also the PCB layout. This is why deadtime is _not_ a parameter that should be altered by the everyday user, and discussing all these details is out of scope of this wiki page.

## Relation to PWM frequency

The PWM frequency is the number of times the FETs are switched on and off per second. Each off-on transition requires deadtime insertion. Deadtime is time during which the motor is not supplied and thus cannot generate torque, so higher PWM frequency means more time spent without torque. This is why some quads simply don't deliver as well with high PWM frequency at low throttle. Getting all this right requires some experimentation.

## Deadtime in AM32

Deadtime in AM32 is expressed in units of 20.8 ns, just like in BLHeli_S. Therefore, a deadtime setting of 40 units is equivalent to a deadtime of 832 ns. See <https://github.com/AlkaMotors/AM32-MultiRotor-ESC-firmware/blob/master/Inc/targets.h> for target specific values.

Deadtime can not be changed in the configurator, but by defining it for the target ESC and recompiling only.

### Reason for this scaling

Since many AM32 users come from BLHeli_S (and similar firmwares running on the EFM8), deadtime in AM32 is expressed in the same way. BLHeli_S runs on the EFM8BB2 at 48 MHz. On that platform, one clock cycle is 20.8 ns long, and that's the time a timer (without prescaling) needs to count up by 1. Deadtime is generated with such a timer.
