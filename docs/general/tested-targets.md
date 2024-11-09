# Tested Targets

List of user-tested bootloaders and targets that work on existing BLHeli_32 ESCs. Information gathered from the community, filled out with as much info as was given.

Huge thanks to the community for providing tests for all of these ESCs!

:::tabs
== Combined (X-in-1)
| Name                                    | Bootloader      | Firmware                   | Notes                                                          |
| --------------------------------------- | --------------- | -------------------------- | -------------------------------------------------------------- |
| Foxeer Reaper 45A                       | F421 PA2        | AM32_FOXEER_F421           |                                                                |
| Foxeer Reaper 45A Mini (F051, not F421) | F051 PA2 V11    | AM32_AGFRC_V2_F051         |                                                                |
| iFlight E55 G07N                        | G071 PA6 V8     | AM32_IFLIGHT_BLITZ_N_G071  | PA6 for the N version                                          |
| Skystars KM60A (F421 ver)               | F421 PB4        | AM32_SKYSTARS_AM60_V2_F421 |                                                                |
| iFlight SucceX-D Mini 45 A 4in1         | G071 PB4 64K V7 | AM32_ESC_G071              |                                                                |
| Foxeer Reaper F4 Slim Mini ESC 128k 60A | F421            | AM32_FOXEER_F421           |                                                                |
| Hobbywing XRotor Micro 45A 4in1         | F051 PA2 V11    | AM32_FD6288_F051           | Set current limit to zero or will not work correctly           |
| Diatone Mamba 5 Reactor_66              | F421            | MAMBA_F55_F421             | Hardware group has to be changed to "450" for smooth operation |
| Spedix GS45 45A 4in1                    | F051 PB4 V11    | AM32_IFLIGHT_F051          |                                                                |
| Hobbywing XRotor Micro 40A 20x20        | F051 PA2        | AM32_HGLRC_F051            |                                                                |
| iFlight Blitz Mini E55                  | G071 PB4 64K V7 | IFLIGHT_BLITZ_G071         |                                                                |
| Flycolor Trinx G20 60A                  | G071 PB4 64K V7 | GEN_64K_G071               |                                                                |
| Siskin 11A                              | F051 PB4        | AM32REF_F051               |                                                                |
| FVT 25A For LittleBee - Summer          | F051 PA2        | AM32_FLYCOLOR_F051         |                                                                |
| HAKRC HK3220 60A 2-8S                   | F421 PB4        | AM32_HAKRC_G23_F421        |                                                                |
| Diatone Mamba Mini 128K 6S F40 40A      | PB4             | AM32_HAKRC_K_F421          |                                                                |
| PyroDrone 32BIT 4in1 35A 6S 20X20       | F051 PB4 V11    | AM32_IFLIGHT_F051          |                                                                |
| Hobbywing XRotor G2 65A 4in1            | F421 PA2 V2     | AM32_FOXEER_F421           |                                                                |
| Hobbywing XRotor 60A                    | F051 PA2        | AM32_FD6288Q               |                                                                |
| Diatone Mamba F55 128K                  | F421 PB4 V4     | AM32_HAKRC_K_F421          |                                                                |
| Skystars KO60                           | F051 PB4 V11    | AM32_SKYSTARS_F051         |                                                                |
| Diatone Mamba F65 128K                  | F421 PB4        | AM32_TEKKO32_F421          |                                                                |
| Aocoda-RC beetle 60A                    | F421 PB4        | AM32_AT32F421_540          |                                                                |
| Skystars KM45A 20x20                    | F051 PB4        | AM32_SKYSTARS_F051         |                                                                |
| Tmotor velox v45A V2                    | G071 PB4 64K    | AM32_GEN_64K_G071          |                                                                |
| HAKRC 35A F051_F0_F                     | F051 PB4 V11    | AM32_DIATONE_F051          | AM32_MAMBA_F40PRO_F051 works too                               |
| HAKRC 40A mini (20x20)                  | F051 PB4        | AM32_DIATONE_F051          |                                                                |

== Integrated (AIO FC+ESC)
| Name                | Bootloader      | Firmware            | Notes |
| ------------------- | --------------- | ------------------- | ----- |
| HGLRC Zeus13 AIO    | F051 PA2 V11    | AM32_HGLRC_F051     |       |
| JHEMCU F722 AIO 40A | F051 PB4 V11    | AM32REF_F051        |       |
| iFlight GN745 AIO   | F051 PB4        | AM32_IFLIGHT_F051   |       |
| NeutronRC F7 55A    | G071 PB4 64K V7 | AM32_NEUTRONRC_G071 |       |
|                     |                 |                     |       |

== Individual
| Name                         | Bootloader      | Firmware              | Notes                                                                 |
| ---------------------------- | --------------- | --------------------- | --------------------------------------------------------------------- |
| Spedix GS30 30A              | F051 PB4 V11    | AM32_IFLIGHT_F051     |                                                                       |
| Flycolor Raptor 5 50A        | G071 PB4 64K V7 | AM32_GEN_64K_G071     |                                                                       |
| Flycolor Raptor 5 35A        | G071 PB4 64K V7 | AM32_GEN_64K_G071     |                                                                       |
| Skystars Talon Slim40        | E230 PB4 V3     | AM32_GD32DEV_A_E230   |                                                                       |
| T-Motor F35A 3-6S            | G071 PB4 64K V7 | AM32_NEUTRONRC_G071   |                                                                       |
| HAKRC 2-5S 35a               | F421 PB4        | AM32 HACKRC_K F421    |                                                                       |
| V-Good RC 32-Bit 80A 2-6S    | F051 PB4        | AM32_AIKONSINGLE_F051 | Other V-Good Plane ESCs should work as well                           |
| LHRC/LHSky/SGModel 30A/50A   | F051 PB4 V11    | AM32_AM32REF_F051     | Works OK but the battery cell count is not correct (always beep once) |
| Flycolor HV3 160A            | G071 64K        | AM32_NEUTRONRC_G071   |                                                                       |
| RDQ 3-6S 32bit DShot1200 30A | F421 PB4        | AM32_TEKKO32_F421     |                                                                       |
| DYS Aria 35A/40A (slim)/70A  | F051 PA2        | AM32_FLYCOLOR_F051    |                                                                       |
| Flycolor X Cross HV3 80A     | G071 64K        | AM32_NEUTRONRC_G071   |                                                                       |
