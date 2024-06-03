# Flash AM32 to Holybro Tekko32 45A Single-ESC (Artery AT32F421) with ST-LINK V2

::: danger

This process is irreversible and the BLHeli_32 firmware cannot be restored!

:::

The instructions on this page are for Artery AT32F421 MCUs. These MCUs use the uVision program instead of the STM32 Cube program to update the bootloader. Other ESCs, like the RDQ 3-6S 32bit dShot1200 30A ESC, also use the Artery AT32F421 MCU. However, these other ESCs may require the PB4 bootloader (instead of the default PA2), and they may require a different firmware build.  Notes have been added to guide others through this process.

1. ℹ️ **In case of display problems of the images, please load the website as desktop version**

2. **Tekko 32 45A Single ESC**
    - Check if your ESC corresponds to the described model:
      - Tekko32 45A Single-ESC, with Artery AT32F421(K8U7) MCU
    - ![Fig. 1](https://user-images.githubusercontent.com/125764759/219980709-1d104ef3-0a39-4710-8b43-a9c3dbda0e7b.jpg)

3. Download ST-Link Utility:
    - [https://www.st.com/en/development-tools/stsw-link004.html](https://www.st.com/en/development-tools/stsw-link004.html)
    - ![Fig. 2](https://user-images.githubusercontent.com/125764759/219980870-7fb14673-4af7-485b-8f68-6ae8b2498225.png)

4. Install software & drivers (you will be asked if drivers should be installed during the process)

5. Plug in your ST-Link device
    - ![Fig. 3](https://user-images.githubusercontent.com/125764759/219980906-9138088e-119b-44b1-bbce-08b11e4278f8.JPG)

6. Open ST-Link Utility
    - Click *ST-LINK* → *Firmware Update*
    - ![Fig. 4](https://user-images.githubusercontent.com/125764759/219980999-4cb07f0a-e957-4829-ba8a-1a08d2f6b8c4.png)

7. Click *Device Connect*, then *Yes* to Upgrade Firmware (the upgrade is probably not necessary, but this way you can make sure that the ST Link works correctly). Unplug your ST Link
    - ![Fig. 5](https://user-images.githubusercontent.com/125764759/219981146-637f27bd-56f5-4c8d-88ce-ddb83a3ca6dc.png)

8. Download AT32F421_AM32_Bootloader:
    - [https://github.com/AlkaMotors/AT32F421_AM32_Bootloader](https://github.com/AlkaMotors/AT32F421_AM32_Bootloader)
    - Unzip file
    - ![Fig. 6](https://user-images.githubusercontent.com/125764759/219981187-cbda1abf-f220-4083-9e0a-be60f83ada0e.png)

9. Download Keil MDK-Arm:
    - [https://www.keil.com/download/product/](https://www.keil.com/download/product/)
    - Install software & drivers (you will be asked if drivers should be installed during the process)
    - ![Fig. 7](https://user-images.githubusercontent.com/125764759/219981253-06337ad6-5e59-4851-8adb-b4fccaddeb24.png)

10. Go to the Bootloader folder and Unzip `ArteryTek.AT32F421…`
    - (Just double click and you will be asked to install "Keil Pack Unzip". Confirm Unzip the Pack by clicking *Next*). Close everything
    - ![Fig. 8](https://user-images.githubusercontent.com/125764759/219981342-5e9171a9-29be-4233-b21f-6a09384f7f0a.png)

11. **Tekko 32 45A Single ESC**
    - **Now it‘s time to connect to the ESC**
    - Connect the pads to the corresponding pins of the ST-Link as shown in the photo.
    - You can solder thin wires to the pads or make the contact with pogo pins (which I prefer).
    - The cables should all have the same length and should be twisted together.
    - :bangbang: Be very careful on the `SWCLK` pad with this ESC! Here is extremely little space to the capacitors, to which V_Bat is applied :bangbang:
    - ![Fig. 9](https://user-images.githubusercontent.com/125764759/219981368-0c8087ad-3744-447d-926d-7fb3dd2b3269.png)

12. **RDQ 3-6S 32bit dShot1200 30A ESC**
    - **Skip this if updating the Tekko**
    - Connect the pads to the corresponding pins of the ST-Link as shown in the photo.
    - You can solder thin wires to the pads or make the contact with pogo pins (which I prefer).
    - The cables should all have the same length and should be twisted together.
    - :bangbang: You must connect a Gnd wire! I made the ground connection using the negative battery pad for the ESC. :bangbang:
    - ![RDQ_30A_ESC_labeled](https://user-images.githubusercontent.com/43121317/227747566-2c793599-9fc1-410f-be69-1d3437afca35.jpg)

13. **Tekko 32 45A Single ESC**
    - ℹ️ For me, the Pogo Pins P75-B1 work very well.
    - Connect a battery plug to the `+` and `-` pad on the ESC.
    - ![Fig. 10](https://user-images.githubusercontent.com/125764759/219981437-e448bdcd-7906-42c4-bcb4-e88cbcfcde76.jpg)

14. Plug in your ST Link
    - Power the ESC
    - Go to the Bootloader folder and open the `AM32` Project file (µVision will open)
    - ![Fig. 11](https://user-images.githubusercontent.com/125764759/219981507-76de68d0-21e6-4578-af22-df3e94dc88d3.png)

15. Right click *Target 1*, click *Options for Target 1'…*
    - ![Fig. 12](https://user-images.githubusercontent.com/125764759/219981541-43d4531b-e46c-42a3-b5da-ebad4e26ba97.png)

16. Go to *Debug*-Tab (1)
    - Select *ST Link Debugger* from dropdown (2)
    - Click *Settings* (3)
    - ![Fig. 13](https://user-images.githubusercontent.com/125764759/219981575-22c10afd-858d-48d1-81fd-ad9faee27382.png)

17. If everything is connected correctly, you will see your target under *SW Device*. Confirm both windows with *OK*. If you see no target connected, check your wiring between the ESC and the ST Link / check if the ESC is powered on
    - ![Fig. 14](https://user-images.githubusercontent.com/125764759/219981601-a36ed44e-04f7-42a5-801c-1368bd60798f.png)

18. Right click *Target 1*, click *Options for Target 1'…* → *Debug* → *Settings* → *Flash Download*
    - Select the *Programming Algorithm* (2)
    - Click *Remove* (3)
    - Click *Add* (4)
    - ![Fig. 15](https://user-images.githubusercontent.com/125764759/219981636-1babf1fd-f4b7-4d65-90ed-9627be16f9fa.png)

19. Select the Flash Programming Algorithm `AT32F421 Flash user system data` (1)
    - Click *Add* (2)
    - Confirm both windows with *OK*
    - ![Fig. 16](https://user-images.githubusercontent.com/125764759/219981678-dcbcdfd7-0da9-42ab-9259-31deb879a55e.png)

20. On the main screen select *Flash* → *Download*
    - ![Fig. 17](https://user-images.githubusercontent.com/125764759/219981708-bed30f09-93b7-45c6-b41b-81fb8de557d3.png)

21. Ignore the Error message and confirm with *OK*. Right click *Target 1*, click *Options for Target 1'…* → *Debug* → *Settings* → *Flash Download*
    - ![Fig. 18](https://user-images.githubusercontent.com/125764759/219981739-8c370ee5-200b-4a96-9427-3b2eaed61735.png)

22. Select the *Programming Algorithm* (1)
    - Click *Remove* (2)
    - Click *Add* (3)
    - ![Fig. 19](https://user-images.githubusercontent.com/125764759/219981766-05456950-bdd1-49a3-aa1b-5fdebee789cb.png)

23. Select the Flash Programming Algorithm `AT32F421 Int. Flash` (1)
    - Click *Add* (2)
    - Confirm both windows with *OK*
    - ℹ️ Bootloader is set to `PA2` by default, so you don’t have to change something here
    - ![Fig. 20](https://user-images.githubusercontent.com/125764759/219981804-a4f4ba32-61b4-40dd-b224-9ca19b364487.png)

24. **Skip this if updating the Tekko32.**
    - The RDQ 3-6S 32bit dShot1200 30A ESC requires the PB4 bootloader. To change from the `PA2` to the `PB4` bootloader:
      - Double click on "main.c: (1)
      - Edit the program ~lines 22/23. Uncomment the one you want; comment-out the other. (2)
      - Open the Project Menu (3)
      - Click "Build Target" (4)
    - ![Changing program PB4 or PA2_Build](https://user-images.githubusercontent.com/43121317/227747390-96e7ec6a-fa6d-4461-b095-7828945a6aef.png)

25. On the main screen select *Flash* → *Download*
    - **Bootloader done!** Close µVision window. Unplug ESC. Unplug ST Link and remove connection to the ESC (SWDIO, SWCLK, GND)
    - ![Fig. 21](https://user-images.githubusercontent.com/125764759/219981831-876b9ef2-8856-4777-a071-675e93c3ad9d.png)

26. Download the ESC Config Tool:
    - [https://drive.google.com/file/d/1qw2f7nM6OZftIE5GTgMPWB5zXCELxYG9/view](https://drive.google.com/file/d/1qw2f7nM6OZftIE5GTgMPWB5zXCELxYG9/view)
    - Unzip to a folder

27. **Tekko 32 45A Single ESC**
    - Download and save the firmware (1)
      - `AM32_WRAITH32_F421`:
        - [https://github.com/AlkaMotors/AM32-MultiRotor-ESC-firmware/releases](https://github.com/AlkaMotors/AM32-MultiRotor-ESC-firmware/releases)
    - ![Fig. 22](https://user-images.githubusercontent.com/125764759/219981865-a28393aa-c3a0-47b6-9955-5c6d51f2c49c.png)

28. **RDQ 3-6S 32bit dShot1200 30A ESC**
    - Download and save the firmware (1)
      - `AM32_TEKKO32_F421_1.93.hex`:
        - [https://github.com/AlkaMotors/AM32-MultiRotor-ESC-firmware/releases](https://github.com/AlkaMotors/AM32-MultiRotor-ESC-firmware/releases)
    - **Why these files with names of other ESCs?**
      - It is confusing... each ESC designer/manufacturer has their unique design. These designs vary by parts (like the MCU, FETs), but also by what pins are used on the MCU and for what purpose. The boot loader pin is one example of variation, but there are many other pins on the MCU that are used differently from one designer to the next. The AM32 firmware naming convention is still evolving... they know it is confusing. Currently, some less common ESCs are re-using compatible firmware files for hardware designs that match.
    - ![Firmware for RDQ_v2](https://user-images.githubusercontent.com/43121317/227747938-5de08c5f-16ab-49ae-b97f-64d5dd761c50.png)

29. Connect your ESC to a Betaflight flightcontroller:
    - Connect PWM pad of the ESC to a motor pad on the FC
    - Connect GND pad from the ESC to GND next to the motor pads
    - Connect the FC to your computer via USB

30. Do NOT power your ESC
    - Start the ESC Config Tool: `SerialPortConnector`
    - ![Fig. 23](https://user-images.githubusercontent.com/125764759/219981903-210605cc-2f35-49f8-86c7-8face94be793.png)

31. Select the right COM Port and hit *Connect*
    - Power your ESC
    - ![Fig. 24](https://user-images.githubusercontent.com/125764759/219981927-45539823-30f7-4330-b1ce-f907e119d629.png)

32. Go to *Flash*-Tab (1) and select the motor your ESC is attached to (2). Click *Load Firmware* (3) and select the downloaded firmware file. Click *Flash Firmware* (4)
    - **All done!** 🏁
    - ![Fig. 25](https://user-images.githubusercontent.com/125764759/219981946-aea8761f-d246-498d-ad48-515e30627fe9.png)
