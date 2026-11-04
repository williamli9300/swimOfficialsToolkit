# Splash Meet Manager 11: Creating a New Meet From Scratch

**By Will Li | Version 0.0.0 [DRAFT] | 2026-11-03 | Access at** [**https://github.com/williamli9300/swimOfficialsToolkit/tree/v0.1.0/SplashNewMeet.md**](https://github.com/williamli9300/swimOfficialsToolkit/tree/v0.1.0/SplashNewMeet.md)

----

# 1. Creating a New Meet Database

## 1.1 Creating a New Meet File

Before dealing with any details, we need to create a new meet database file (i.e., an `*.mdb` file).
- Navigate to `File` > `📄 New Meet...`
- When the **Create New Meet Wizard** pops up, fill in the required information, then click `Finish`.

<br>
<span align="center">
<img title="" src="https://meetresults.ca/williamli9300/swimOfficialsToolkit/splash/img/newmeetwizard.png" alt="" style="zoom:50%;">
</span>
<br>
<br>

## 1.2 Configuring General Meet Information
When the new meet is created, Splash will open to the <img title="" src="https://meetresults.ca/williamli9300/swimOfficialsToolkit/splash/img/ev.png" alt="[ev]" style="height:1.25em;transform:translate(0em, 0.25em);border-radius:0.25em"> **Events** module. Before moving forward, let's fill out some of the **General meet info** on the right side of the screen. Read each field name and adjust according to the Meet Package and general preferences. A few important ones are mentioned below.

- **General**
  - **Number:** Take note of this field. This is where the Sanction Number will go once the meet is sanctioned by Swimming Canada / your PSO.
  - **Point Scoring:** This is where you select the point system that will convert *times to points*, e.g. AQUA (formerly FINA) points. **This is not the same as point scoring based on ranking.** See [Point Scoring (Rank)](#points-rank) for point scoring based on ranking.
- **Facility**
  - This is where you will fill out your pool's address.
- **International (swimrankings.net)**
  - This is how the meet will appear on [swimrankings.net](https://swimrankings.net/).
- **Age calculation and display**
  - **Age Calculation:** At most meets, we will use `Age calculated to exact date of meet`.
  - **Base date for calculation:** refer to meet package, typically first day of meet.
  - **Age display:** Generally, use `as calculated age`.
- **Fees and fines**
  - Information in this section is used to calculate entry fees **per team, per swimmer, and/or per relay**. Per-event entry fees are set elsewhere. Set the **Currency**, then set:
  - **Global entry fee per club:** Use if each club has to play a flat club fee.
  - **Global entry fee per athlete:** Use for once-per-athlete "Splash fees".
  - **Globoal entry fee per athlete (based on sessions):** Each athlete pays this amount for each session they are entered in.
  - **Global entry fee per relay team:** Use for relay entry fees.
  - **Late entry fees:** You can use these to calculate deck entry fees by marking entries as "Late", but this feature is typically not used.
- **Qualification and Seeding**
  - **Qualification results from/until:** Use if a qualification period is specified.
  - **Course Order (Hy-Tek):** Allow entry times from different courses (if standards exist for different courses), enforce entry times of a certain course, or convert entry times for **qualification/entry time validation**.
  - **Conversion entry times:** whether to convert entry times for **display** purposes.
- **Swimming Pool and Timing**
  - Verify the pool set-up, lane numbers, and how many sets of touchpads.
- **Others**
  - **Maximum entries per athlete:** cap the number of entries per athlete based on the meet package.
  - **Entry Deadline:** Set according to the meet package
- **Organizer**
  - Add organizer information as necessary.

<br>
<span align="center">
<img title="" src="https://meetresults.ca/williamli9300/swimOfficialsToolkit/splash/img/generalmeetinfo.png" alt="" style="zoom:50%;">
</span>
<br>
<br>

----

# 2. Creating a Meet Scaffold (Sessions, Events, & Age Groups)
## 2.1 Create Sessions

On the left side of the screen, the top-level row is the **Meet**, which will house **Sessions** under it, and then **Events** under the **Sessions**. Clicking the **Meet** will pull up the `General meet info` menu on the right side of the screen.

- Right-click the **Meet** name to `Add Session`.
- Click the session you've just added to pull up the `Session` information menu on the right side of the screen, and edit the information as necessary. Fields to fill out include:

  - **Number** (session #)
  - **Date** of session 
  - **Name** of session 
  - **Start time first event**
  - **Begin/End warmup**.

- Repeat for all sessions.

<br>
<span align="center">
<img title="" src="https://meetresults.ca/williamli9300/swimOfficialsToolkit/splash/img/sessions.png" alt="" style="zoom:50%;">
</span>
<br>
<br>

## 2.2 Create Prelims or Timed Final Events

Now, time to create your events!

- First, right-click the first session to `Add Timed Final / Prelim Event`. (Tip: Only add one event at a time. You'll see why soon.) On the right side of the screen, set the following information for your first event:

  - **Number** (event #)
  - **Swim style**
  - **Gender**
  - **Fee per entry**

- Now, right-click the session and click `Add Timed Final / Prelim Event` to add another event. The Event **Number** will auto-increment by one, and the other three fields you adjusted will stay the same. Change these to the correct values as necessary.

- Repeat for all prelims events in your session.

<br>
<span align="center">
<img title="" src="https://meetresults.ca/williamli9300/swimOfficialsToolkit/splash/img/events.png" alt="" style="zoom:50%;">
</span>
<br>
<br>

## 2.3 Create Age Groups

### 2.3.1 Creating Age Groups for One Event

Now, time to create age groups for each event.

- First, right click the first event to `Add Agegroup`. 
- In the menu on the right-hand side, fill out the following information:
  - **Age from:** minimum age - use `0` if the age group should be "X & Under".
  - **Age to:** maximum age - use `-1` if the age group should be "X & Over".
  - **Gender** should already be set based on the event's gender.

**For Multi Age Group Events (e.g. 12&U, 13-14, 15&O) and Single Age Group Events (e.g. Relays)**, create one Age Group using the Right Click > `Add Agegroup` method for each age group in the meet package.

**For Open Events**, create an age group with **Age from** and **Age to** both set to `-1`.

<br>
<span align="center">
<img title="" src="https://meetresults.ca/williamli9300/swimOfficialsToolkit/splash/img/agegroups.png" alt="" style="zoom:50%;">
</span>
<br>
<br>

### 2.3.2 Copying Age Groups to Other Events

Once you've created the age groups for one event, you can copy them by clicking the source event and selecting `Copy Agegroups`, then right-clicking the target/destination event and selecting `Paste agegroups`.

<br>
<span align="center">
<img title="" src="https://meetresults.ca/williamli9300/swimOfficialsToolkit/splash/img/copypaste_agegroups.png" alt="" style="zoom:50%;">
</span>
<br>
<br>

## 2.4 Creating Finals Events

- To create a Finals event, right-click the Prelim event, then select `Add Final Event`.
- The Final event will appear in the same session as the Prelim event. Drag-and-drop it into the correct session.

Tip: Create all Finals events for one session first, then drag them from the Prelims session to the Finals session. 
- Starting from the bottom when you Right Cliick > `Add Final Event` will make it so that the next event you want to click won't "run away".
- When dragging-and-dropping into a Finals session, start with the *last* event of the session (e.g. Event 9 before Event 8): when you drag-and-drop one event onto another, it will place it *above* that event (e.g., dropping Event 8 onto Event 9 will place Event 8 *before* Event 9.)

<br>
<span align="center">
<img title="" src="https://meetresults.ca/williamli9300/swimOfficialsToolkit/splash/img/heatsfinals.png" alt="" style="zoom:50%;">
</span>
<br>
<br>

## 2.5 Creating a Fastest Heats Timed Final Event

Read the following options carefully to make sure you follow the correct steps.

### 2.5.1 Fastest Heat for Each Age Group

Follow these instructions to create a Fastest Heat for one or more age groups in a timed final event that is otherwise seeded by fast-to-slow or slow-to-fast (i.e., fastest 15&O swim together at the end, etc.)

- Right-click the Prelim/Timed Final event, then click `Add Fastest Heat Event`. 
- In the menu on the right-hand side, define the number of fastest heats to "pull out" for each age group. 

### 2.5.2 Fastest Overall Heat in Multi Age Event

Follow these instructions if you want the fastest heat of swimmers, irrespective of age, to swim together (e.g. in a timed-final only meet, if you want the fastest swimmers to swim in Finals).

- Right-click the Prelim/Timed Final event, then click `Add Separate Heat Event`. 
- After seeding entries, you will be able to select which heat will swim as the "separate heat".

## 2.6 Special Events: Multi-Round Eliminator & Copying Entries to Different Event (Distance Official Split)

For both of the following cases, you should NOT create the events until after all entries have been received (or at least until the Entry File has been published), in order to avoid teams mistakenly entering their swimmers into "placeholder" events.

Read the following options carefully to make sure you follow the correct steps.

### 2.6.1 Multi-Round Eliminators

Follow these instructions if you want to create an Eliminator event, where, for example, (a) all swimmers swim in prelims; (b) top 8 swimmers in each age group swim in A finals; (c) top 4 swimmers race against each other in a "round of 4"; and (d) top 2 swimmers from the "round of 4" compete for a "crown" or "prize" or other.

- Create the Prelims and Final events for the Eliminator event as normal.
- After all entries have been submitted, right click the Final event, then select `Add Time Trial Event`. Configure the Time Trial event as necessary (e.g., new Event **Number**), then drag the Time Trial event into the correct session.
  -  Tip: You can use the **Event Sponsor** field to add remarks/comments to be included on reports (e.g. Eliminator - Top 4).
-  Repeat the above step for the Round of 2.
- Configure the Time Trial event with a new Event Number, and create the correct age groups.
- After the Finals event for the Eliminator has been completed, the Administration Desk can manually add entries.
  - Navigate to the <img title="" src="https://meetresults.ca/williamli9300/swimOfficialsToolkit/splash/img/en.png" alt="[en]" style="height:1.25em;transform:translate(0em, 0.25em);border-radius:0.25em"> **Events** Entries module.
  - At the top of the screen, select `Entries by Event`. Use the `Group Entries by Heat` checkbox on the top right of the screen to make seeding by heat easier.
  - Find the Time Trial event, then right click the middle of the screen to `Add Entry`.
  - Find the Top 4 athletes from the Finals event and seed them into the Round of 4.
  - After the Round of 4 has been completed, repeat for the Round of 2.

### 2.6.2 Distance Official Split

Follow these instructions if you want to, for example, give every athlete in the 1500 FR an 800 split.

- Create the 1500m Timed Finals events as normal.
- After all entries have been submitted, right click the 1500m Timed Final event, then select `Add Time Trial Event`. Configure the Time Trial event as necessary (e.g. new Event **Number**, correct Swim Style).
- After the 1500m has been seeded, navigate to `Transfer` > `Export Entries`. **Ensure that** `Include heat / lane numbers for seeded events` **is checked**, then export the entries to an `*.lxf` file. 
- Navigate to `Transfer` > `Import Entries`. Once the `Import entries` dialogue appears:
  - Click `Load File` to load the `*.lxf` file.
  - In the `Clubs` tab, click the <img title="" src="https://meetresults.ca/williamli9300/swimOfficialsToolkit/splash/img/select.png" alt="[select]" style="height:1.25em;transform:translate(0em, 0.25em);border-radius:0.25em"> **Select All** button to select all clubs. (This means that you will not ignore any club's entries when you click Import.)
  - Navigate to the `Events` tab, then click the <img title="" src="https://meetresults.ca/williamli9300/swimOfficialsToolkit/splash/img/deselect.png" alt="[deselect]" style="height:1.25em;transform:translate(0em, 0.25em);border-radius:0.25em"> **Deselect All** button to deselect all events.
  - Manually select your 1500m events.
  - In the `Import to event` column, select the respective 800m events. 
  - Ensure all three `Delete all XXX of selected club first` options are **UNchecked**.
  - Set the two drop-downs to `Add/replace entries of selected clubs/events` and `Ignore judges`.
  - Ensure that `Import / apply seeding if exists (heat and lane numbers)` is **CHECKED**.
- Click `Import`.

<br>

---

# 3. Creating Time Standards 

From the <img title="" src="https://meetresults.ca/williamli9300/swimOfficialsToolkit/splash/img/ev.png" alt="[ev]" style="height:1.25em;transform:translate(0em, 0.25em);border-radius:0.25em"> **Events** module, navigate to `Edit` > `Edit Timestandards...`

<br>
<span align="center">
<img title="" src="https://meetresults.ca/williamli9300/swimOfficialsToolkit/splash/img/edit_timestandards.png" alt="" style="zoom:50%;">
</span>
<br>
<br>

When the `Edit time standards` dialogue appears, click `Add` to add a new set of time standards.
- Create a **Name** and **Code** (typically 1-4 letters) for the standard.
- Set the **Age** for the time standard (`-1` to `-1` for Open)
- Select the **Type** of standard:
  - *Maximum time standard*: marks swimmers if they are **slower** than the standard (e.g., qualification standard). Can be used to reject entries or calculate fines.
  - *Minimum time standard*: marks swimmers if they are **faster** than the standard (de-qualifying standard). Can be used to reject entries.
  - *Default time standard*: marks swimmers if they have achieve the time (e.g. achieved a Provincial cut). Not used for entry rejection or fines.
  - *Level time standard*: Used to group athletes whose entries are at a "similar level."
  - Tip: think "Maximum" = longest time; "Minimum" = shortest time.
- Enter the Time Standard time for each gender & course. 
- Repeat for each age group and time standard.

<br>
<span align="center">
<img title="" src="https://meetresults.ca/williamli9300/swimOfficialsToolkit/splash/img/edit_stds.png" alt="" style="zoom:50%;">
</span>
<br>
<br>

<br>

---

# 4. Importing Entries

<br>

---

# 5. Seeding the Meet

<br>

---