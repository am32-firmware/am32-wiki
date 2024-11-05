# Reccomendations for Freestyle Drones

## TL;DR

- Turn on Variable PWM frequency
- Set Motor KV and Motor poles to match the motor

## Variable PWM Frequency

**PWM Frequency** (PWM driving frequency), in AM32, refers to the number of MOSFETs switching operations per second. It has no relation with the motor/ESC protocol nor the PID frequency of the FC.

One of the most obvious characteristics of the BLDC motor is **it has commutation events**. Due to six-step control, for a common 23xx motor, there will be 42 commutations when the rotor rotates one cycle.

Variable PWM Frequency means that **the PWM driving frequency is increased synchronously with the increase of the commutation frequency**, which can ensure that the total number of PWM pulses in each commutation period is consistent, which is theoretically 'absolutely linear'.

In BLHeli-configurator (in the future it will be renamed to OpenESC-configurator), once the Variable PWM Frequency is turned on, the PWM frequency slot below will be automatically hidden.

### The downside of Variable PWM Frequency

For the STM32 chips we use (STSPIN/F051/G071), when its CPU frequency is a fixed number, **as the PWM frequency increases, the PWM resolution is bound to decrease**.

## Motor KV and Motor Poles

AM32 simplifies the parameter tuning process with motor KV and poles.

In AM32, KV and the poles together determine the trigger threshold of "low speed" and "high speed". When it falls below/exceeds this threshold, AM32 will automatically trigger low-speed power protection and high-speed stall protection.

Although it is difficult for you to obtain an accurate KV number, in most cases, just setting it to the KV number provided by the manufacturer is sufficient to meet the demand.

## What about the rest of the settings?

If you have no other special requirement and just wanna fly a typical freestyle drone, then you should keep the rest of the parameters as default.
