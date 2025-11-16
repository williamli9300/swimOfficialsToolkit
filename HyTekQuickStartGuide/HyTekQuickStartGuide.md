# Hy-Tek Swim Meet Manager 8: Quick Start Guide

**By Will Li | Version 0.1.0 [DRAFT IN PROGRESS] | 28 July 2025 | Access at** [**https://github.com/williamli9300/swimOfficialsToolkit**](https://github.com/williamli9300/swimOfficialsToolkit)
In Github and some viewers, you can click an image to enlarge it.

## Contents <a name="contents"></a>

- **Getting Started**
  - [Setting Up Timing Interfaces](#timing)
- **Running a Meet**
  - [Pulling Times](#pullingtimes)
  - ["Adjust": Scratches & Changes (incl. Deck Entries & Name Changes)](#adjust)
  - [Colours & "Calc": Adjusting Times](#calc)
  - Processing DQs
  - Relay Names
  - Official Splits
  - Swim Offs
  - Combined Heats
- **Paperwork**
  - Results & DQ Reports
  - Session Reports
  - Score Reports
- **Other Features**
  - Web Live Results
  - Para Points
- **Common Issues**
  - No results found matching this Event and Heat for current QAQF meet selected!
  - Error when installing an update

## Getting Started

### Timing Interfaces <a name="timing"></a>

<sup>*([Jump to Contents](#contents))*</sup>

**Ensure Timing Systems are set up \& named.**

1. From the Home screen, navigate to `Set-up` > `Meet Set-up`, then adjust the number of timing interfaces \& names as needed.

<img title="" src="./img/timinginterfaces.jpg" alt="" data-align="center" style="zoom:25%;">

2. From the Run screen, navigate to `Interfaces` > `Set-up` to set up the Timing Console and Scoreboard as necessary. For meets running on Quantum, select `Omega Quantum-AQ File Sharing` as the Timing System and `Network File Sharing IST or Quantum-AQ` as the Scoreboard.

<img title="" src="./img/timinginterface_scoreboard.jpg" alt="" data-align="center" style="zoom:25%;">

**[Quantum Specific] Select Session \& Download Events to Session**

1. From the Run screen, navigate to `Interfaces` > `Timer (QAQF) [Name]` > `Select Data Set stored from QAQF`. Click `Update Data Location` to select your Quantum data folder, and use the `Previous Meet` button to ensure that "Meet 1" is selected.

<img title="" src="./img/timingconsoleselection.jpg" alt="" data-align="center" style="zoom:25%;">

2. From the Run screen, navigate to `Interfaces` > `Timer (QAQF) [Name]` > `Download events to QAQF`.
3. If using two timing consoles, repeat steps 1 and 2 for the second timing console.
   If you are using a scoreboard with names:
4. From the Run screen, navigate to `Interfaces` > `Scoreboard (GENNET) [Name]` > `Customize`. Ensure the settings are set to the same ones as below:

<img title="" src="./img/scoreboardsettings.jpg" alt="" data-align="center" style="zoom:25%;">

5. from the Run screen, navigate to `Interfaces` > `Scoreboard (GENNET) [Name]` > `Create Start List File`.
6. If using two timing consoles, repeat step 5 for the second scoreboard.

## Running a Meet

**Always ensure that you have navigated to the correct session, by using the `Session : F7` button (or the corresponding hotkey).**

### Pulling Times <a name="pullingtimes"></a>

<sup>*([Jump to Contents](#contents))*</sup>

From the Run screen, select your desired Event from the Event List, then select your desired Heat from the Heats bar.
Click the orange button labelled `[Name] : F3` or the blue button labelled `[Name] : Ctrl-F3` (or use the corresponding hotkeys) to pull times from the corresponding timing system.

<img title="" src="./img/run.jpg" alt="" data-align="center" style="zoom:25%;">

*The `Run` Screen. The Event List is the window in the top left, indicating event numbers, status, and name. The Heats bar is vertically below center, aligned to the right side of the screen.*

### The `Adjust` Menu: Scratches & Changes (including Deck Entries & Name Changes) <a name="adjust"></a>

<sup>*([Jump to Contents](#contents))*</sup>

From the Run screen, click the `Adjust : F8` button to bring up the Adjust menu. 

<img title="" src="./img/run_adjust.jpg" alt="" data-align="center" style="zoom:25%;">

The Adjust menu is organized by heat and lane. You can click "Show Eligible Athletes" or "Eligible Athletes + Swim-ups" to bring up a list of athletes at the bottom of the window. The Adjust menu is one of the few places in HyTek Meet Manager with a `Save` button. If you mess up, just click "Close" and "Don't Save", and try again!

<img title="" src="./img/adjust.jpg" alt="" data-align="center" style="zoom:35%;">

#### Scratches

To scratch a swimmer, double-click their name to bring up the "Scratch [swimmer] from heat *X*, lane *Y*?" popup, then click "Yes".

#### Adding a Swimmer & Moving a Swimmer Around (Deck Entries & Name Changes)

##### Adding a Swimmer to an Empty Lane

Swimmers can only be added to an empty lane. You may need to remove (scratch) a swimmer in order to add a swimmer to that lane.
There are two ways to add a swimmer into an empty lane:

1. Double click an empty lane, then begin typing the swimmer's last name. Hit "Enter" on your keyboard to accept the change (sometimes clicking "OK" with your mouse will make the menu move around unexpectedly).
2. Click "Show Eligible Athletes" (or "Show Eligible Athletes + Swim-ups" if the swimmer is from a younger age group). Find the athlete's name in the bottom window (sorted by last name), then drag-and-drop the name into place.

##### Moving a Swimmer Around

There are two ways to move a swimmer around, similarly to adding a swimmer to an empty lane:

1. Double click an empty lane, then begin typing the swimmer's last name. The swimmer will be moved into the new lane.
2. Drag and drop the swimmer into the new lane. If there's already a swimmer entered into the new lane, the two swimmers will be swapped.

### Lane Colours & The`Calc` Menu: Adjusting Times <a name="calc"></a>

<img title="" src="./img/run_calc.jpg" alt="" data-align="center" style="zoom:35%;">

To open the `Calc` menu, click the `Calc : Ctrl-K` button, or click the right-most column of the lane viewer on the bottom part of the window.

*Some quick definitions: "
- "Prelims Time"/"Finals Time" is the final time assigned to the swimmer, and can be changed by using the `Calc` menu, or by overwriting the number manually.. By default, this is the Primary Time from the timing system (i.e., the touchpad time, or a Calculated Backup time determined by the timing system.)
- "Backup 1", "Backup 2", and "Backup 3" correspond to the the backups recorded by the timing system. 
- "Calculated Backup" is the backup, the arithmetic mean of two backups, or the median of three backups, if there are one, two, or three backup times available.

*Notes on Backups*
- Never take the average of two different kinds of sources (e.g. never average a plunger time with a stopwatch time). Go in descending order based on availability and reliability: automatic (touchpad), semi-automatic (plunger), manual (stopwatch).
- Ensure that two backup times agree with each other before taking the average. Always check your numbers to make sure they make sense with respect to the event (e.g. no 12-second 100 FR's) and the order of finish.

In our example above, we can see three colours:
- Lane 3 appears white, with Button 2 highlighted in RED. This means that Button 2 is ≥0.30s different from the Primary time.
- Lane 4 appears YELLOW. This means the Calculated Backup is ≥0.30s faster than the Primary time. Here, it is likely that there was a touchpad malfunction, and **we decide to fall back onto the backup times.**
- Lane 5 appears GREEN. This means the calculated backup is ≥0.30s different from the Primary time, __but one backup agrees with the touchpad time.__ It is likely that one Timer pushed a plunger early, and **we decide to stay with the touchpad time.**
- Lane 6 appears BLUE. This means we have a Touchpad time but no backups. Unless the touch was judged to be good by a CJE, we would need more information.

When we go into the `Calc`  menu, we see the Primary time, the Button (i.e. Backup) times, Button Calc (i.e. Calculated Backup) time, and Difference. We also see an "Adjusted" column:
- If the row is white (Calculated Average is ≤0.30s different from Primary Time), the Adjusted time will be the same as the Primary Time, regardless of if "Use" is checked.
- If the row is YELLOW, the Adjusted time will be the Calculated Backup if "Use" is **checked** (default), or will fall back to the Primary time if "Use" is unchecked.
- If the row is GREEN, the Adjusted time will be the Primary Time if "Use" is ***un*checked** (default), or will be the Calculated Backup if "Use" is checked.
- If the row is BLUE (no backups), the Adjusted time will be the same as the Primary Time, regardless of if "Use" is checked.

Check and uncheck the "Use" rows as desired. Verify that backup times agree and make sense. When you click "Accept Adjusted", whatever is in the Adjusted column will be assigned to the Prelims Time/Finals Time field.

##### Colour Coding:

| Colour                                                | Touchpad Time                                          | Backup 1                                                   | Backup 2                                                   | Colour Meaning                                                                                               |
| ----------------------------------------------------- | ------------------------------------------------------ | ---------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| $${\color{ffc0c0}Red}$$    | 1:29.67                                                | 1:29.55                                                    | <span style="background-color: #ffc0c0">1:29.98</span>     | Backup Time is more than 0.30s away from Touchpad Time                                                       |
| <span style="background-color: #f7f700">Yellow (y)</span> | <span style="background-color: #f7f700">1:21.56</span> | <span style="background-color: #ffc0c0">1:19.20</span>     | <span style="background-color: #ffc0c0">1:19.17</span>     | Average of two backups is more than 0.30s *faster* than Plunger time                                         |
| <span style="background-color: #c0ffc0">Green (g)</span>  | <span style="background-color: #c0ffc0">1:35.55</span> | <span style="background-color: #c0ffc0">1:35.54</span>     | <span style="background-color: #ffc0c0">1:10.67</span>     | Average of two backups is more than 0.30s away from touchpad time, but one backup agrees with touchpad time. |
| <span style="background-color: #c0ffff">Blue (b)</span>   | <span style="background-color: #c0ffff">1:21.56</span> | <span style="background-color: #c0ffff">-----------</span> | <span style="background-color: #c0ffff">-----------</span> | No backup times.                                                                                             |