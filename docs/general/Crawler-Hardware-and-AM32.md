# Using AM32 with crawlers

The idea is to chose an esc / motor gearing combination that allows the esc to track the position of the rotor to a very low rpm.
Basic ESC's use back emf, voltage produced by the motor spinning, to determine the correct times to properly drive the motor
Every motor will have a low RPM point where the voltage it produces is too small to read.

## The ESC

In order to read the back emf of the motor the ESC must use a voltage divider that reduces the voltage level seen by the micro-controller. This is to prevent damage from over-voltage to the input pin. A voltage divider is typically in the 1:5 to 1:20 ratio depending on the maximum voltage that the esc is rated for.
The voltage divider further reduces sensitivity of esc to detecting small voltages. The higher the divider ratio the less sensitive the esc will be to very low voltages produced by a low rpm motor.
6s or 8s rated esc's are not going to be able to read very small voltages as accurately as an esc designed for 2-3s.

The esc must also be designed with electrical noise and heat dissipation in mind.

## The Motor

The KV of the motor is also a rating of the motors back emf. For example a 1000kv motor will produce twice the back emf than that of a 2000kv motor at the same rpm. As the esc accelerates and transitions from sine mode to normal driving operation it exits sine mode at a fixed rpm. For a 1000kv motor this will probably be high enough for the motor to continue operation depending on the divider ratio (see above) where the 2000kv might not and might continually restart in this region.

When the ESC is in sine mode motor volume is a very important factor. A large stator motor will produce more holding torque and handle heat better than a small stator. The motor is driven in this mode like a stepper motor.

## Sum up

The ideal motor should be large low kv and the ideal esc should be made for a low voltage to give the best low rpm performance. The motor /esc combination should be able to run at 200 rpm in regular mode to operate properly with AM32 sine mode.

If you only have an esc that is meant for 6s or 8s then best results will be with a low KV motor. You can also try to increase startup power and lower PWM frequency to give a little more chance at starting successfully after sine mode. Ensure the "stall protection" button is on.  
