# Compatible ESCs

***
Those are known ESCs that can work with existing targets

## F051

| Target Name | Compatible ESCs             | Bootloader |
| :---------- | --------------------------- | ---------- |
| IFLIGHT     | iFlight 20x20 35A           | PB4        |
|             | iFlight Succexx 55A         |            |
|             | iFlight Succexx 60A         |            |
|             | iFlight Succexx 80A         |            |
|             | iFlight Succexx 55A Slim    |            |
|             | JHEMCU 55A                  |            |
|             | Aikon AK32Pin 35A mini V1   |            |
|             | DarwinFpv 50A               |            |
|             | Flywoo Goku GN745           |            |
|             | HifionRC H60a Pro 4-in-1    |            |
|             | Aikon AK32 35ASingle        |            |
|             | Skystars BL32 4-in-1        |            |
| TMOTOR55    | T-Motor 55A 4-in-1          | PB4        |
| TMOTOR45    | T-Motor 45A 4-in-1          | PA2        |
| MP6531      | Wraith32                    | PA2        |
|             | Aikon AK32 35a 20x20        |            |
|             | AM MP6531 open esc variants |            |
| FD6288      | AM FD6288 open esc variants | PA2        |
|             | Tekko32_4in1                | PA2        |
|             | Airbot Ori32 4-in-1         |            |
|             | Aikon AK32PIN 35A mini V2   |            |
|             | Emax Formula32 45A          |            |
| SISKIN      | Siskin 50A                  | PA2        |
|             | RacerStar Tatoo 8A          |            |
| HGLRC       | HGLRC 60A (T-Rex)           | PA2        |
|             | Foxeer Reaper 45A           |            |
| MAMBA F40   | DIATONE MAMBA F40PRO        | PB4        |
| MAMBA F50   | DIATONE MAMBA F50PRO        | PB4        |
| MAMBA F60   | DIATONE MAMBA F60PRO        | PB4        |
| DIATONE     | HAKRC 35A 2-5S              | PB4        |
| FLYCOLORHV  | FLYCOLOR HIGH VOLTAGE       | PB4        |
|             | Flywoo Goku s506            |            |
| SKYSTARS    | KM-55                       | PB4        |

## G071

| Target Name     | Compatible ESCs   | Bootloader |
| :-------------- | ----------------- | ---------- |
| IFLIGHT_BLITZ_G | IFLIGHT BLITZ 55  | G071_64K   |
| G071_64K        | AM32 Variants     | G071_64K   |
|                 | Succexx 70A G071  | G071_64K   |
|                 | IFLIGHT SLIM G071 | G071_64K   |
| DT120_G071_64K  | AM32 Slot Car ESC | G071_64K   |

## Hardware Groups

The experimental branch puts all ESCs into a number of "hardware groups" with functionally equivalent pinouts. These are defined for each MCU.

## F051

| Group | in  | in DMA | Tim_Ch | A Com | A Pwm | B Com | B Pwm | C Com | C Pwm | A Fb | B Fb | C Fb | Ref Fb | PWM side | Com drv | Com pol | Pwm drv | Pwm pol |
| ----- | --- | ------ | ------ | ----- | ----- | ----- | ----- | ----- | ----- | ---- | ---- | ---- | ------ | -------- | ------- | ------- | ------- | ------- |
| A     | A2  | 5      | 15_1   | B1    | A10   | B0    | A9    | A7    | A8    | A5   | A4   | A0   | A1     | high     | PP      | pos     | PP      | pos     |
| B     | B4  | 4      | 3_1    | B1    | A10   | B0    | A9    | A7    | A8    | A0   | A4   | A5   | A1     | high     | PP      | pos     | PP      | pos     |
| C     | A2  | 5      | 15_1   | B0    | A9    | A7    | A8    | B1    | A10   | A4   | A5   | A0   | A1     | high     | PP      | pos     | PP      | pos     |
| D*    | A2  | 5      | 15_1   | B1    | A10   | B0    | A9    | A7    | A8    | A0   | A4   | A5   | A1     | high     | PP      | pos     | PP      | pos     |
| E     | A2  | 5      | 15_1   | A7    | A8    | B0    | A9    | B1    | A10   | A0   | A4   | A5   | A1     | high     | PP      | pos     | PP      | pos     |
| F     | B4  | 4      | 3_1    | B1    | A10   | B0    | A9    | A7    | A8    | A5   | A0   | A4   | A1     | high     | PP      | pos     | PP      | pos     |

*) D was removed from the code because it is equivalent to C, with a different phase order. It's included for completeness, to fill the gap between C and E.

## F350

to be completed.

| Group | in  | in DMA | Tim_Ch | A Com | A Pwm | B Com | B Pwm | C Com | C Pwm | A Fb | B Fb | C Fb | PWM side | Com drv | Com pol | Pwm drv | Pwm pol |
| ----- | --- | ------ | ------ | ----- | ----- | ----- | ----- | ----- | ----- | ---- | ---- | ---- | -------- | ------- | ------- | ------- | ------- |

## G071

to be completed.

| Group | in  | in DMA | Tim_Ch | A Com | A Pwm | B Com | B Pwm | C Com | C Pwm | A Fb | B Fb | C Fb | PWM side | Com drv | Com pol | Pwm drv | Pwm pol |
| ----- | --- | ------ | ------ | ----- | ----- | ----- | ----- | ----- | ----- | ---- | ---- | ---- | -------- | ------- | ------- | ------- | ------- |

## ESC Pin Layouts

### Aikon AK32 35a

![aikon-ak32-35a-6s-esc-1](https://user-images.githubusercontent.com/29710771/144151056-4ff6e243-13ba-42cc-9785-60e76fd90b95.jpg)
