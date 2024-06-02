# Open ESC EEPROM Format

## Total 48 Bytes

### Common Section First 18 Bytes

        0x01,              // esc boot byte, must be 1 in order to load main app byte 0
        0x00,              // eeprom version 0-255
        0x01,              // bootloader version 0-255
        0x01,              // firmware version major
        0x04,              // firmware version minor
        0x6e, 0x45, 0x73, 0x63, 0x56, 0x31, 0x2e, 0x32, 0x23, 0x20, 0x20, 0x20,   // ESC name, 12 bytes
        0x00,              // direction reversed byte 17 default 0

### Hardware Specific 30 Bytes

        0x00,      //bidirectional mode 1 for on 0 for off byte 18 default 0
        0x00,      //sinusoidal startup byte 19 default 0
        0x01,      //complementary pwm byte 20 default 1
        0x01,      //variable pwm frequency 21 default 1
        0x01,      //stuck rotor protection 22 default 1
        0x02,      // timing advance x7.5, i.e. 2 = 15 degrees byte 23 default (0x02)
        0x18,      // pwm frequency multiples of 1k..  byte 24 default 24khz (0x18)
        0x64,      // startup power 50-150 percent default 100 percent byte 25 ( 0x64)
        0x37,      // motor KV in increments of 40 default 55 = 2200kv
        0x0e,      // motor poles default 14 byte 27
        0x01,      // brake on stop, default 1 byte 28
        0x00,      // stall protection, default 0, byte 29

#### Version 1 - Items after this point were not available until eeprom version 1, Firmware version 1.65 or later
  
        0x05,      // beep volume     byte 30            range 0 to 11
        0x00,      // 30 Millisecond telemetry output byte 31      0 or 1
        0x80,      //servo low value =  (value*2) + 750us byte 32
        0x80,      //servo high value = (value *2) + 1750us    byte 33
        0x80,      //servo neutral base 1374 + value microseconds. i.e. 128 = 1502 us. default 128 (0x80)
        0x32,      //servo dead band 0-100, applied to either side of neutral default 50.      byte 35
        0x00,      //low voltage cut-off, default 0                                         byte 36
        0x32,      //low voltage cut-off threshold, base 2.5 volts plus value,  default (50) = 3.0v cutoff value   byte 37
        0x00,      // rc car type reversing, brake on first application return to center to reverse default 0  byte 38
        0x00,      // Use Hall sensors if equipped  byte 39
        0x08,      // Sine Mode Range 5-25 percent throttle default 8   byte 40
        0x0a,      // Drag Brake Strength 1-10 , 10 being full strength, default 10   byte 41
