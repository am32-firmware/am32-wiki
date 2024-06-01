# ESC Configuration Settings

| Setting | Description | Effect |
|--|--|--|
|Reverse Rotation|Reverse the rotation of the motor direction, normally this would just be done by swapping two of the motor wires|motor rotates in opposite direction|
|Complementary PWM|Apples to pwm to the complementary output during the pwm Off time. This acts as a brake slowing the motor when going from a higher duty cycle to lower duty cycle||
|Variable PWM|ESC FETs will be switched with automatic PWM timing based on the motors rpm. This is to avoid pwm frequency/commutation frequency interference||
|Bi-Directional (fwd/rv)|Used for cars, normally crawlers. Throttle range is divided between forward and reverse where centre stick position is neutral||
|Stuck Rotor Protection|This setting is primarily designed for quads.  When the esc detects the motor is stuck it will 'give up' trying to turn the motor until the throttle returns to the neutral position.  This should be disabled in rock crawlers as the esc will give up when trying to get over a difficult obstacle|Detects a stuck rotor and stops turning the motor until zero throttle|
|Brake on Stop|Apply brake when the motor is not spinning|Motor will actively brake when it is not turning. Good for Crawlers|
|Stall Protection|When the motor on load is going to stop, the esc will push some more  to prevent stopping|Good for crawlers|
|Sinusoidal Startup|Slow mode startup :)|Good for Crawlers|
|30ms Telemetry|Enables a serial telemetry output on a 30ms interval using the Kiss telemetry protocol||
|Use Hall Sensors|Not currently used use to lack of hall sensor capable targets||
|Timing Advance|Commutate the motor by this degree advance of neutral 0 timing ||
|Motor KV|Set the approximate of KV of your motor, throttle is restricted at low rpms based on the kv value selected||
|Motor Poles|Set to the number of poles your motor has. This adjusts the sine mode speed in order to match the minimum speed after changeover to standard trapezoidal pwm||
|Startup power|Defines the The minimum duty cycle level and boost power used for the first few commutations||
|PWM Frequency|The switching frequency of the mosfets when using PWM||
|Beep Volume|How loud the esc will beep|Changes the volume of the beep|
|Stopped Brake Level|The braking force that will be used when the motor is stopped. Useful in crawlers vehicles if you want the car to creep down a hill.||
|Sine Startup Range|The amount of throttle range to dedicate to using Sine mode. With less number motor start spin at a higher RPM |The throttle will stay in sine mode for more/or less time|
|Sine Mode Power|The amount of torque used while in sine mode.  This setting should be adjusted with care. Higher values can result in a lot of heat being generated||
|Running Brake Level|The force used to brake the motor when it is still spinning. Useful to reduce this if using large propellers and you do not want to stress the motor. Useful in rock crawlers to avoid performing endos |More or less brake force will be applied to the motor while still rotating|